import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createItem, resetCreate } from '../feautures/item/create/createSlice'

function ItemForm() {
  const [formData, setFormData] = useState({
    productName: '',
    category: '',
    price: '',
    spec1: '',
    spec2: '',
    spec3: '',
    imageUrl: ''
  })
  const { productName, category, price, spec1, spec2, spec3, imageUrl } = formData
  
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const onChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const itemData = {
      productName,
      category,
      price,
      spec1,
      spec2,
      spec3,
      imageUrl
    }
    dispatch(createItem(itemData))
    navigate('/user-panel')
  }


  return (
    <form className='flex flex-wrap flex-col space-y-12 content-center h-4/5 py-12
                               md:mt-6'
          onSubmit={onSubmit}
    >
      <div className='flex flex-col space-y-2'>
        <label htmlFor="">Product Name:</label>
        <input 
          type="text"
          id='productName'
          name='productName'
          value={productName} 
          className='py-1 px-2 rounded-md'
          onChange={onChange}
        />
      </div>
      <div className='flex flex-col space-y-2'>
        <label htmlFor="">Category:</label>
        <select 
          name="category" 
          id="category"
          value={category} 
          placeholder='Filter' 
          className='py-1 px-2 border rounded-md'
          onChange={onChange}
        >
          <option className='text-start'>Phone</option>
          <option className='text-start'>Watch</option>
          <option className='text-start'>Computer</option>
          <option className='text-start'>Laptop</option>
        </select>
      </div>
      <div className='flex flex-col space-y-2'>
        <label htmlFor="">Price:</label>
        <input 
          type="number"
          id='price'
          name='price'
          value={price} 
          className='py-1 px-2 rounded-md'
          onChange={onChange}
        />
      </div>
      <div className='flex flex-col space-y-2'>
        <label htmlFor="">Spec 1:</label>
        <input 
          type="text"
          id='spec1'
          name='spec1'
          value={spec1} 
          className='py-1 px-2 rounded-md'
          onChange={onChange}
        />
      </div>
      <div className='flex flex-col space-y-2'>
        <label htmlFor="">Spec 2:</label>
        <input 
          type="text"
          id='spec2'
          name='spec2'
          value={spec2} 
          className='py-1 px-2 rounded-md'
          onChange={onChange}
        />
      </div>
      <div className='flex flex-col space-y-2'>
        <label htmlFor="">Spec 3:</label>
        <input 
          type="text"
          id='spec3'
          name='spec3'
          value={spec3} 
          className='py-1 px-2 rounded-md'
          onChange={onChange}
        />
      </div>
      <div className='flex flex-col space-y-2'>
        <label htmlFor="">Upload Iamge:</label>
        <input 
          type="file"
          id='imageUrl'
          name='imageUrl'
          value={imageUrl} 
          className='rounded-md space'
          onChange={onChange} 
        />
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