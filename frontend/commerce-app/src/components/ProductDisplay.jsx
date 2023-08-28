import React from 'react'
import ProductBox from './ProductBox'

function ProductDisplay() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
        <div className='flex flex-wrap flex-col space-y-6 content-center justify-center
                        lg:flex-nowrap lg:flex-row lg:space-y-0 lg:justify-between lg:px-40'
        >
          <h1 className='text-2xl font-bold text-center'>Check our products</h1>
          <ul className='flex space-x-6'>
            <li className='hover:text-red-300 cursor-pointer'>Product</li>
            <li className='hover:text-red-300 cursor-pointer'>Product</li>
            <li className='hover:text-red-300 cursor-pointer'>Product</li>
            <li className='hover:text-red-300 cursor-pointer'>Product</li>
          </ul>
        </div>
        <div className='flex flex-wrap flex-col space-y-8 content-center justify-center mt-10
                        md:grid md:grid-cols-3 md:space-y-0 md:gap-8 md:ml-6
                        lg:flex lg:flex-nowrap lg:flex-row lg:space-y-0 lg:space-x-6 lg:ml-0 lg:mt-20'
          >
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
        </div>
    </div>
  )
}

export default ProductDisplay