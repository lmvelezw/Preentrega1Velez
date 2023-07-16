import React from "react";
import ItemCount from "./ItemCount";

function ItemDetail(props) {
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
          <ItemCount
            initial={0}
            stock={5}
            onAdd={(quantity) => console.log("Cantidad agregada ", quantity)}
          />
        </div>
      </div>
    </article>
  );
}

export default ItemDetail;
