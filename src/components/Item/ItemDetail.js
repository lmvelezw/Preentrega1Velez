import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CartContext";
import { useContext } from "react";

function ItemDetail(props) {
  const [addQty, setAddQty] = useState(0);

  const {addToCart} = useContext(CarritoContext)

  const qtyControl = (qty) => {
    setAddQty(qty);
    addToCart({...props}, qty )
  };

  const formattedPrice = parseInt(props.price).toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  return (
    <article>
      <h2 className="text-center text-3xl text-yellow-600 font-raleway my-16 px-4">
        {props.name}
      </h2>
      <div className="grid grid-cols-[2fr,1fr]">
        <div className="flex text-center justify-center items-center gap-2 py-6">
          <p className="text-stone-400">Descripción:</p>
          <p>{props.description}</p>
        </div>
        <div>
          <img className="max-h-fit" src={props.image} alt="" />
        </div>

        <div className="flex bg-gray-900/10 items-center justify-center gap-2">
          <p className="text-stone-400">Precio:</p>
          <p className="font-bold text-3xl">{formattedPrice}</p>
        </div>
        <div>
          {addQty > 0 ? (<div className="flex flex-col bg-gray-900/10 items-center justify-center gap-2">
            <p className="pt-2"> Agregaste {addQty} al carrito</p> 
            <Link to="/cart" className="bg-lime-800 px-4 py-2 my-2 text-white rounded-xl">Ir al carrito</Link></div>) : (props.stock < 1) ? <p className="bg-red-800 px-8 py-2 text-white text-center text-2xl">Sin stock</p> :(
            <ItemCount initial={0} stock={props.stock} onAdd={qtyControl} />
          )}
        </div>
      </div>
    </article>
  );
}

export default ItemDetail;
