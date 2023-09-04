import React from 'react'
import phoneImg from '../img/iphone.jpg'
import { Link } from 'react-router-dom';

function ItemDisplay({ item }) {

  const encodedCategory = encodeURIComponent(item.category)
  
  return (
    <div className='flex flex-col rounded-2xl shadow-2xl bg-white py-10 px-10'>
      <h1 className='pb-2 text-center font-bold'>{item.productName}</h1>
      <img src={phoneImg} alt=""  className='w-1/8 h-60 mb-4'/>
      <ul className='flex flex-wrap flex-col content-center text-center'>
        <li>{item.spec1}</li>
        <li>{item.spec2}</li>
        <li>{item.spec3}</li>
      </ul>
      <button className='w-5/6 mx-auto mt-5 border-solid rounded-2xl font-bold bg-yellow-500
                       hover:bg-red-300 hover:scale-105'
      >
        <Link to={`/product/${item._id}?product=${encodedCategory}`} >View product</Link>
      </button>
    </div>
  )
}

export default ItemDisplay