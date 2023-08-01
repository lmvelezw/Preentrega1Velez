import React from 'react';
import { Link } from 'react-router-dom';

function Item(props) {
  const formattedPrice = parseInt(props.price).toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  });

  return (
    <article className='flex flex-col p-4 rounded-xl shadow-lg shadow-gray-100 bg-white'>
      <header className='flex flex-col flex-1'>
        <h2 className='flex flex-1 text-center text-m text-yellow-600 font-raleway'>{props.name}</h2>
        <img className='flex align-self-center max-w-full' src={props.image} alt='' />
        <small className='text-stone-400'>Descripción:</small>
        <p>{props.description}</p>
        <div className='my-3'>
        <small className='text-stone-400'>Precio:</small>
        <p className='font-bold text-xl'>{formattedPrice}</p>
        </div>
      </header>
      <Link to={`/item/${props.id}`} className='font-raleway Option border bg-gray-900 text-white px-3 py-1 mt-4 text-center rounded-full ease-in duration-100 hover:bg-white hover:shadow hover:shadow-lg hover:text-yellow-600 hover:border'>
        Detalle de producto
      </Link>
    </article>
  );
}

export default Item;
