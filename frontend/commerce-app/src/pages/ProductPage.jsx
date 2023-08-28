import React from 'react'
import Navbar from '../components/Navbar'
import headphones from '../img/headphones.jpg'

function ProductPage() {
  return (
    <div className='bg-gradient-to-t from-white to-cyan-500'>
      <Navbar/>
      <div className='flex flex-col
                      lg:flex-row lg:space-x-52 lg:justify-center lg:mt-20'
      >
        <div className='flex flex-col space-y-8'>
          <img src={headphones} alt="" className='w-96 h-96 mx-auto mt-20 rounded-xl shadow-2xl
                                                  lg:mx-0' 
          />
          <h1 className='text-3xl text-center font-semibold
                        lg:text-left'
          >
            Headphones Beats 500 2023
          </h1>
        </div>
        <div className='lg:max-w-lg lg:flex lg:flex-col lg:justify-center'> 
          <div className='p-10'>
            <h1 className='font-bold'>Description</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aperiam nesciunt error at, ratione cupiditate soluta, ad sit suscipit vel, odit quas. Dolorem, quas repudiandae possimus cumque est dolorum accusantium eveniet in, quae laborum voluptate iste dignissimos nobis quam ducimus?</p>
          </div>
          <div className='flex justify-between px-10 pb-10'>
            <p className='text-lg'><span className='font-bold'>Price:</span> $100</p>
            <button className='px-4 py-1 border-solid rounded-xl font-bold bg-yellow-500
                              hover:bg-red-300 hover:scale-110'
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage