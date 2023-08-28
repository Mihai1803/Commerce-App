import React from 'react'
import phone from '../img/iphone.jpg'

function ItemDisplay() {
  return (
    <div className='flex flex-col rounded-2xl shadow-2xl bg-white py-10 px-10'>
      <img src={phone} alt=""  className='w-1/8 h-60 mb-4'/>
      <ul className='flex flex-wrap flex-col content-center'>
        <li>Specs</li>
        <li>Specs</li>
        <li>Specs</li>
      </ul>
      <button className='w-5/6 mx-auto mt-5 border-solid rounded-2xl font-bold bg-yellow-500
                       hover:bg-red-300 hover:scale-105'
      >
        View Product
      </button>
    </div>
  )
}

export default ItemDisplay