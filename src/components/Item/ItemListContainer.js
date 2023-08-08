import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/config";
import { toast } from "react-toastify";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);

  const {categories} = useParams();
  
  useEffect(() => {
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
    toast.error("Error getting documents: " + error);
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
