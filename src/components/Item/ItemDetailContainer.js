import React, { useEffect, useState } from 'react'
import { getProductsById } from './asyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
  const [products, setProducts] = useState(null)

  const {itemId} = useParams()

  useEffect(() => {
    getProductsById(itemId)
    .then(response => {
      setProducts(response)
    })
    .catch(error => {
      console.error(error)
    })
  },[])
  
  
  return (

    <div>
      <ItemDetail {...products}/>
    </div>
  )
}

export default ItemDetailContainer