import React from 'react'
import Navbar from '../components/Navbar'
import ItemDisplay from '../components/ItemDisplay'

import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Shop() {

  const [productState, setProductState] = useState('Phones')
  const [formData, setFormData] = useState({
    category: '',
    order: ''
  })
  const { category, order } = formData

  const dispatch = useDispatch()
  const { phones } = useSelector(state => state.phone)
  const { computers } = useSelector(state => state.computer)
  const { laptops } = useSelector(state => state.laptop)
  const { watches } = useSelector(state => state.watch)

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setProductState(category)
    setTimeout(() => {
    }, 3000)
  }

  return (
    <div className='bg-gradient-to-t from-white to-cyan-300'>
      <div className='max-w-screen-2xl mx-auto'>
        <Navbar />
        <form className='flex justify-between px-12 py-6
                        md:mt-12'
              onSubmit={onSubmit}
        >
          <div className='space-y-6
                          md:space-y-0 md:space-x-6' 
          >
            <select name="order" id="order" value={order}
                    className='px-6 py-1 border rounded-md'
                    onChange={onChange}
            >
              <option className='text-start'>Popular</option>
              <option className='text-start'>Ascending</option>
              <option className='text-start'>Descending</option>
              <option className='text-start'>On Sale</option>
            </select>
            <select name="category" id="category" value={category}  
                    className='px-6 py-1 border rounded-md'
                    onChange={onChange}
            >
              <option className='text-start'>Phones</option>
              <option className='text-start'>Watches</option>
              <option className='text-start'>Computers</option>
              <option className='text-start'>Laptops</option>
            </select>
          </div>
          <button className='px-6 py-2 self-center border rounded-md font-bold bg-yellow-500
                            hover:bg-red-300'
          >
            Filter
          </button>
        </form>
        <div className='flex flex-col space-y-8 max-w-sm mx-auto px-12 py-12
                        md:grid md:grid-cols-3 md:space-y-0 md:max-w-none gap-8
                        lg:grid-cols-4 lg:py-8 lg:max-w-7xl'
        >
          {
            productState === 'Phones' 
              ?
                phones.map((phone, index) => (
                  <ItemDisplay item={phone} key={index} />
                ))
              :
            productState === 'Computers'
              ?
                computers.map((computer, index) => (
                  <ItemDisplay item={computer} key={index} />
                ))
              :
            productState === 'Laptops'   
              ?
                laptops.map((laptop, index) => (
                  <ItemDisplay item={laptop} key={index} />
                ))
              :
                watches.map((watch, index) => (
                  <ItemDisplay item={watch} key={index} />
                ))
          }
        </div>
      </div>
    </div>
  )
}

export default Shop