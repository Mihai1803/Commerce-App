import React from 'react'
import headphones from '../img/headphones.jpg'

function ProductBox() {
  return (
    <div className='w-fit shadow-2xl bg-white hover:scale-110'>
      <div className='flex flex-wrap flex-col space-y-2 justify-center content-center py-10'>
          <img src={headphones} alt=""  className='w-64 h-64'/>
          <h1 className='text-xl font-bold text-center'>Product Name</h1>
          <h4 className='text-center'>Price</h4>
      </div>
    </div>
  )
}

export default ProductBox