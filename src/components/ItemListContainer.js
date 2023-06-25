import React from 'react'

function ItemListContainer(props) {
  return (
    <div className='bg-gray-900 p-40 flex justify-center text-white'>
       <p className='text-3xl'>{props.greeting}</p>
    </div>
  )
}

export default ItemListContainer