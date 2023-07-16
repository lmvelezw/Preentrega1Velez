import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProducts, getProductsByCategory } from "./asyncMock";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);

  const {categories} = useParams();
  
  useEffect(() => {
    const asyncFunc = categories ? getProductsByCategory : getProducts;
    asyncFunc(categories)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categories]);

  return (
    <>
      <div className="bg-gray-900 p-10 flex justify-center text-white">
        <p className="text-3xl">{props.greeting}</p>
      </div>
      <ItemList products={products} />
    </>
  );
}

export default ItemListContainer;
