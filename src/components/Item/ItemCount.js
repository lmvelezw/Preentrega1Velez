import { useState } from "react";
import React from "react";

function ItemCount(props) {
  const [quantity, setQuantity] = useState(props.initial);

  const addOnClick = () => {
    if (quantity < props.stock) {
      setQuantity(quantity+1);
    }
  };

  const restOnClick = () => {
    if (quantity > 1) {
      setQuantity(quantity-1);
    }
  };

  return (
    <div className="flex flex-col bg-gray-900/10 items-center">
      <div className="flex flex-col items-center gap-2 my-2 place-content-between p-2">
        <div className="flex gap-6">
          <button
            onClick={restOnClick}
            className="bg-gray-900 text-white px-4 py rounded  ease-in duration-100 hover:shadow hover:shadow-lg hover:bg-white hover:text-gray-900"
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            onClick={addOnClick}
            className="bg-gray-900 text-white px-4 py rounded  ease-in duration-100 hover:shadow hover:shadow-lg hover:bg-white hover:text-gray-900"
          >
            +
          </button>
        </div>
        <button onClick={() => props.onAdd(quantity)} disabled={!props.stock} className="bg-gray-900/30 text-white px-6 py-1 rounded">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
