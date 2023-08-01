import React from 'react'
import Item from './Item'

function ItemList(props) {

  return (
    <div className='grid grid-cols-3  gap-8 p-8 mx-12'>
      {
        props.products.length > 0 
        ? props.products.map(product => <Item key={product.id}{...product}/>)
        : <p> Cargando...</p>
        }
    </div>
  )
}

export default ItemList