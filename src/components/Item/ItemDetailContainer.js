import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/config";
import { toast } from "react-toastify";

function ItemDetailContainer() {
  const [products, setProducts] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    const docRef = doc(db, "watches", itemId);

    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const fileredProduct = { id: response.id, ...data };
        setProducts(fileredProduct);
      })
      .catch((error) => {
        toast.error("Error getting document: " + error);
      });
  }, [itemId]);

  return (
    <div>
      <ItemDetail {...products} />
    </div>
  );
}

export default ItemDetailContainer;
