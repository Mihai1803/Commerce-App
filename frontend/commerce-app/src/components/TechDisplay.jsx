import React from 'react'
import ItemDisplay from './ItemDisplay'

import { useEffect } from 'react'
import { getPhones, reset } from '../feautures/item/phone/phoneSlice'
import { useDispatch, useSelector } from 'react-redux'


function TechDisplay() {

  const dispatch = useDispatch()
  const { phones } = useSelector(state => state.phone)
  
  useEffect(() => {
    dispatch(getPhones()).then(() => {
      dispatch(reset())
    })
  }, [])


  return (
    <div className='max-w-screen-2xl mx-auto'>
        <div className='flex flex-wrap flex-col justify-center content-center space-y-2 mt-32'>
          <h4 className='font-bold text-xl text-center mb-2'>Technology</h4>
          <h1 className='font-bold text-2xl text-center'>Smarthphones and Computers</h1>
          <p className='text-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, dolores.</p>
        </div>
        <div className='flex flex-wrap flex-col space-y-10 content-center mt-20
                        md:grid md:grid-cols-3 md:space-y-0 md:gap-8 md:px-6
                        lg:grid-cols-4 lg:px-44'
        >
          <ItemDisplay item={phones[0]} />
          <ItemDisplay item={phones[1]} />
          <ItemDisplay item={phones[2]} />
          <ItemDisplay item={phones[3]} />      
        </div>
    </div>
  )
}

export default TechDisplay