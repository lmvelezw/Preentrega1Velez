import React from 'react'
import Item from './Item'

function ItemList(props) {

  return (
    <div className='grid grid-cols-3  gap-8 p-8 mx-12'>
      {
        props.products.length > 0 
        ? props.products.map(product => <Item key={product.id}{...product}/>)
        : <h3 className='text-center py-4 px-8'> Cargando...</h3>
        }
    </div>
  )
}

export default ItemList