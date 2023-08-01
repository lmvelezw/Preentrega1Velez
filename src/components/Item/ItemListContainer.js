import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProducts, getProductsByCategory } from "./asyncMock";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { db } from "../../services/config";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);

  const {categories} = useParams();
  
  useEffect(() => {
    // const db = getFirestore();

    const itemsCollection = categories ? query(collection(db,"watches"), where("categoryId","==",categories)) : collection(db, "watches");

    getDocs(itemsCollection)
      .then((response) => {
        const filteredProducts = response.docs.map(doc => {
          const data = doc.data()
          return {id: doc.id, ...data}
    })
    setProducts(filteredProducts)
  })
  .catch(error => {
    console.log("Error getting documents:", error);
  })},[categories]);
  
  return (
    <>
      <div className="bg-gray-900 p-10  text-white">
        
        {!categories ? 
        <p className="text-3xl flex justify-center">{props.greeting}</p> :
        <p className="text-1xl flex text-left">Relojes {categories}s</p>
        }
      </div>
      <ItemList products={products} />
    </>
  );
}

export default ItemListContainer;
