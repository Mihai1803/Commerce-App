import React from 'react'
import Navbar from '../components/Navbar'
import ItemDisplay from '../components/ItemDisplay'

function Shop() {
  return (
    <div className='bg-gradient-to-t from-white to-cyan-300'>
      <div className='max-w-screen-2xl mx-auto'>
        <Navbar />
        <div className='flex justify-between px-12 py-6
                        md:mt-12'
        >
          <div className='space-y-6
                          md:space-y-0 md:space-x-6' 
          >
            <select name="" id="" placeholder='Filter' className='px-6 py-1 border rounded-md'>
              <option value="" className='text-start'>Popular</option>
              <option value="" className='text-start'>Ascending</option>
              <option value="" className='text-start'>Descending</option>
              <option value="" className='text-start'>On Sale</option>
            </select>
            <select name="" id="" placeholder='Filter' className='px-6 py-1 border rounded-md'>
              <option value="" className='text-start'>Phones</option>
              <option value="" className='text-start'>Watches</option>
              <option value="" className='text-start'>Computers</option>
              <option value="" className='text-start'>Laptops</option>
            </select>
          </div>
          <button className='px-6 py-2 self-center border rounded-md font-bold bg-yellow-500
                            hover:bg-red-300'
          >
            Filter
          </button>
        </div>
        <div className='flex flex-col space-y-8 max-w-sm mx-auto px-12 py-12
                        md:grid md:grid-cols-3 md:space-y-0 md:max-w-none gap-8
                        lg:grid-cols-4 lg:py-8 lg:max-w-7xl'
        >
          <ItemDisplay />
          <ItemDisplay />
          <ItemDisplay />
          <ItemDisplay />
          <ItemDisplay />
          <ItemDisplay />
          <ItemDisplay />
          <ItemDisplay />
        </div>
      </div>
    </div>
  )
}

export default Shop