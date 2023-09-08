import React from 'react'
import Navbar from '../components/Navbar'

import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPhoneById, reset } from '../feautures/item/phone/phoneSlice'
import { getLaptopById, resetLaptop } from '../feautures/item/laptop/laptopSlice'
import { getWatchById, resetWatch } from '../feautures/item/watch/watchSlice'
import { getComputerById, resetComputer } from '../feautures/item/computer/computerSlice'


function ProductPage( ) {

  const dispatch = useDispatch()
  const { singlePhone } = useSelector(state => state.phone)
  const { singleComputer } = useSelector(state => state.computer)
  const { singleLaptop } = useSelector(state => state.laptop)
  const { singleWatch } = useSelector(state => state.watch)

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)

  const encodedCategory = searchParams.get('product')
  const decodedCategory = decodeURIComponent(encodedCategory)
  const { productId } = useParams()

  console.log(decodedCategory);
  useEffect(() => {
    if (decodedCategory === 'Phone') {
      dispatch(getPhoneById(productId)).then(() => {
        dispatch(reset())
      })
    } else if (decodedCategory === 'Computer') {
      dispatch(getComputerById(productId)).then(() => {
        dispatch(resetComputer())
      })
    } else if (decodedCategory === 'Laptop') {
      dispatch(getLaptopById(productId)).then(() => {
        dispatch(resetLaptop())
      })
    } else if (decodedCategory === 'Watch') {
      dispatch(getWatchById(productId)).then(() => {
        dispatch(resetWatch())
      })
    }
    //eslint-disable-next-line
  }, [])
  console.log(singleWatch.productName);

  return (
    <div className='bg-gradient-to-t from-white to-cyan-500'>
      <Navbar/>
      <div className='flex flex-col
                      lg:flex-row lg:space-x-52 lg:justify-center lg:mt-20'
      >
        <div className='flex flex-col space-y-8'>
          <img src={
            decodedCategory === 'Phone' ? singlePhone.imageUrl :
            decodedCategory === 'Computer' ? singleComputer.imageUrl :
            decodedCategory === 'Laptop' ? singleLaptop.imageUrl : 
            singleWatch.imageUrl
          } 
               alt="" 
               className='w-96 h-96 mx-auto mt-20 rounded-xl shadow-2xl
                          lg:mx-0' 
          />
          <h1 className='text-3xl text-center font-semibold
                        lg:text-center'
          >
            {
              decodedCategory === 'Phone' ? singlePhone.productName :
              decodedCategory === 'Computer' ? singleComputer.productName :
              decodedCategory === 'Laptop' ? singleLaptop.productName : 
              singleWatch.productName
            }
          </h1>
        </div>
        <div className='lg:max-w-lg lg:flex lg:flex-col lg:justify-center'> 
          <div className='p-10'>
            <h1 className='font-bold'>Description</h1>
            <p>
              {
                decodedCategory === 'Phone' ? singlePhone.description :
                decodedCategory === 'Computer' ? singleComputer.description :
                decodedCategory === 'Laptop' ? singleLaptop.description : 
                singleWatch.description
              }
            </p>
          </div>
          <div className='flex justify-between px-10 pb-10'>
            <p className='text-lg'><span className='font-bold'>Price: </span> 
              {
                decodedCategory === 'Phone' ? `$${singlePhone.price}` :
                decodedCategory === 'Computer' ? `$${singleComputer.price}` :
                decodedCategory === 'Laptop' ? `$${singlePhone.price}` : 
                `$${singleWatch.price}`
              }
            </p>
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