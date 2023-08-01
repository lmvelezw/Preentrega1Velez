import React from 'react'
import { CarritoContext } from '../../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'




function Cart() {
    
    const {cart, removeList,total,totalQty} = useContext(CarritoContext)

   if( totalQty === 0) {
    return (
        <div className='flex flex-col h-screen justify-items-center'>
            <h2 className='flex text-xl flex justify-center my-8'>No hay productos en el carrito</h2>
            
            <Link to="/" className='Option text-2xl text-center m-8 py-4 bg-gray-900 text-white rounded-full'>Ver todos los productos</Link>
        </div>
    )
   }


  return (
    <div className='bg-gray-900/10 min-h-screen'>
        {cart.map(product => <CartItem key={product.id} {...product}/>)}
        <div className='flex items-center justify-items-end mx-12 justify-between'>
            
            <button className='bg-red-800 px-8 py-3 m-4 rounded-full text-white shadow hover:bg-white hover:text-red-800' onClick={() => removeList()} >Eliminar productos</button>

            <div className='flex gap-4 items-center'>
                {totalQty>1 ? <p> Llevas {totalQty} productos </p> : <p> Llevas {totalQty} producto </p>}
                <strong> Valor total: ${parseInt(total).toLocaleString("es-CO")} </strong>
                
                
                <Link to='/checkout'className='border bg-lime-800 px-8 py-3 m-4 rounded-full text-white shadow hover:bg-white hover:text-lime-800'>Comprar</Link>
            </div>
            </div>

    </div>
  )
}

export default Cart