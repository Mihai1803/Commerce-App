import React from 'react'
import Navbar from '../components/Navbar'

import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPhoneById, reset } from '../feautures/item/phone/phoneSlice'


function ProductPage( ) {

  const dispatch = useDispatch()
  const { singlePhone } = useSelector(state => state.phone)

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)

  const encodedCategory = searchParams.get('product')
  const decodedCategory = decodeURIComponent(encodedCategory)
  const { productId } = useParams()

  useEffect(() => {
    if (decodedCategory === 'Phone') {
      dispatch(getPhoneById(productId)).then(() => {
        dispatch(reset())
      })
    }
  }, [])

  return (
    <div className='bg-gradient-to-t from-white to-cyan-500'>
      <Navbar/>
      <div className='flex flex-col
                      lg:flex-row lg:space-x-52 lg:justify-center lg:mt-20'
      >
        <div className='flex flex-col space-y-8'>
          <img src={singlePhone.imageUrl} alt="" className='w-96 h-96 mx-auto mt-20 rounded-xl shadow-2xl
                                                  lg:mx-0' 
          />
          <h1 className='text-3xl text-center font-semibold
                        lg:text-center'
          >
            {singlePhone.productName}
          </h1>
        </div>
        <div className='lg:max-w-lg lg:flex lg:flex-col lg:justify-center'> 
          <div className='p-10'>
            <h1 className='font-bold'>Description</h1>
            <p>{singlePhone.description}</p>
          </div>
          <div className='flex justify-between px-10 pb-10'>
            <p className='text-lg'><span className='font-bold'>Price:</span> {`$${singlePhone.price}`}</p>
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