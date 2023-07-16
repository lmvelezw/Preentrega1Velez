import React from 'react'
import Item from './Item'

function ItemList(props) {

  return (
    <div className='grid grid-cols-3  gap-8 p-4'>
      {props.products.map(product => <Item key={product.id}{...product}/>)}
    </div>
  )
}

export default ItemList