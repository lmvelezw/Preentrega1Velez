import React, { useState, useContext } from "react";
import { CarritoContext } from "../../context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc, getDoc, updateDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

function Checkout() {
  const { cart, removeList, total, totalQty } = useContext(CarritoContext);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [emailconfirm, setEmailConfirm] = useState("");
  const [orderId, setOrderId] = useState("");

  const generatePO = () => {toast.success("Su código de orden es: " + orderId, {
    position: toast.POSITION.TOP_CENTER,
    style: { background: '#38571B' }
  })}

  const handlerForm = (e) => {
    e.preventDefault();

    if (!name || !surname || !tel || !email || !emailconfirm) {
      toast.error("Debe completar todos los campos", {
        position: toast.POSITION.TOP_CENTER,
        style: { background: '#8C0720' }
      });
      return;
    }

    if (email !== emailconfirm) {
      toast.error("Los campos de email no coinciden", {
        position: toast.POSITION.TOP_CENTER,
        style: { background: '#8C0720' }
      });
      return;
    }

    const order = {
      products: cart.map((item) => ({
        id: item.product.id,
        name: item.product.name,
        quantity: item.qty,
      })),
      total: totalQty,
      name,
      surname,
      tel,
      email,
      date: new Date(),
    };

    Promise.all(
      order.products.map(async (orderProduct) => {
        const productRef = doc(db, "watches", orderProduct.id);
        const productDoc = await getDoc(productRef);
        const productStock = productDoc.data().stock;
        await updateDoc(productRef, {
          stock: productStock - orderProduct.quantity,
        });
      })
    )
      .then(() => {
        addDoc(collection(db, "orders"), order)
          .then((docRef) => {
            setOrderId(docRef.id);
            removeList();
          })
          .catch((error) => {
            toast.error("No se pudo crear su orden de compra " + error);
          });
      })
      .catch((error) => {
        toast.error("No se puede actualizar el stock de productos " + error);
      });
  };

  return (
    <div className="flex flex-col items-center p-8 gap-12">
      <strong>Productos de su compra:</strong>

      <form onSubmit={handlerForm} action="">
        {cart.map((item) => (
          <div
            className="p-4 my-3 shadow rounded rounded-xl"
            key={item.product.id}
          >
            <strong className="mb-4">{item.product.name}</strong>
            <p>{item.product.qty}</p>
            <p>Valor total: $ {item.product.price.toLocaleString("es-CO")}</p>
          </div>
        ))}

        <p className="my-8">Antes de finalizar, llene los siguientes datos:</p>

        <div className="flex flex-col gap-2 px-16 py-6 rounded-xl shadow shadow-xl">
          <label htmlFor="">Nombre</label>
          <input
            className="p-2 rounded-xl shadow"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="">Apellido</label>
          <input
            className="p-2 rounded-xl shadow"
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <label htmlFor="">Teléfono</label>
          <input
            className="p-2 rounded-xl shadow"
            type="number"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
          <label htmlFor="">Email</label>
          <input
            className="p-2 rounded-xl shadow"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="">Confirmar email</label>
          <input
            className="p-2 rounded-xl shadow"
            type="email"
            value={emailconfirm}
            onChange={(e) => setEmailConfirm(e.target.value)}
          />

          <div className="pt-8">
            <p>Total a pagar: ${parseInt(total).toLocaleString("es-CO")}</p>
            <p>Total de items: {totalQty}</p>
          </div>
          <button
            className="bg-lime-950 text-white m-8 p-2 rounded rounded-full"
            type="submit"
          >
            Finalizar compra
          </button>
        </div>
      </form>

      {orderId && (
        <div className="flex flex-col  items-center">
          <strong>Gracias por su compra.</strong>
          {generatePO()}
        </div>
      )}
    </div>
  );
}

export default Checkout;
