import React from 'react'

function ItemForm() {
  return (
    <form action="" className='flex flex-wrap flex-col space-y-12 content-center h-4/5 py-12
                               md:mt-6'
    >
      <div className='flex flex-col space-y-2'>
        <label htmlFor="">Product Name:</label>
        <input type="text" className='py-1 px-2 rounded-md'/>
      </div>
      <div className='flex flex-col space-y-2'>
        <label htmlFor="">Category:</label>
        <select name="" id="" placeholder='Filter' className='py-1 px-2 border rounded-md'>
              <option value="" className='text-start'>Phones</option>
              <option value="" className='text-start'>Watches</option>
              <option value="" className='text-start'>Computers</option>
              <option value="" className='text-start'>Laptops</option>
        </select>
      </div>
      <div className='flex flex-col space-y-2'>
        <label htmlFor="">Price:</label>
        <input type="number" className='py-1 px-2 rounded-md'/>
      </div>
      <div className='flex flex-col space-y-2'>
        <label htmlFor="">Spec 1:</label>
        <input type="text" className='py-1 px-2 rounded-md'/>
      </div>
      <div className='flex flex-col space-y-2'>
        <label htmlFor="">Spec 2:</label>
        <input type="text" className='py-1 px-2 rounded-md'/>
      </div>
      <div className='flex flex-col space-y-2'>
        <label htmlFor="">Spec 3:</label>
        <input type="text" className='py-1 px-2 rounded-md'/>
      </div>
      <div className='flex flex-col space-y-2'>
        <label htmlFor="">Upload Iamge:</label>
        <input type="file" className='rounded-md space' />
      </div>
      <div className='flex justify-center'>
        <button className='px-10 py-2 border-solid rounded-2xl font-bold bg-yellow-500
                           hover:bg-red-300'
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default ItemForm