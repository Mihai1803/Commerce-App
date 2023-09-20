import React from 'react'
import Navbar from './Navbar'
import ItemDisplay from './ItemDisplay'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserItems, reset } from '../feautures/auth/authSlice'

function UserItems() {

  const dispatch = useDispatch()
  const { user, userItems } = useSelector(state => state.auth)
  const { computers, phones, laptops, watches } = userItems

  useEffect(() => {
    dispatch(getUserItems(user.id)).then(() => {
      dispatch(reset())
    })
    // eslint-disable-next-line
  }, [])


  return (
    <div className='bg-gradient-to-t from-white to-cyan-300'>
      <div className='max-w-screen-2xl mx-auto'>
        <Navbar />
        <div className='flex flex-col space-y-8 max-w-sm mx-auto px-12 py-12
                        md:grid md:grid-cols-3 md:space-y-0 md:max-w-none gap-8
                        lg:grid-cols-4 lg:py-8 lg:max-w-7xl'
        >
          {
            computers.length !== 0 &&
              computers.map((computer, index) => (
                <ItemDisplay item={computer} key={index} />
              ))
          }
          {
            phones.length !== 0 &&
              phones.map((phone, index) => (
                <ItemDisplay item={phone} key={index} />
              ))
          }
          {
            laptops.length !== 0 &&
              laptops.map((laptop, index) => (
                <ItemDisplay item={laptop} key={index} />
              ))
          }
          {
            watches.length !== 0 &&
              watches.map((watch, index) => (
                <ItemDisplay item={watch} key={index} />
              ))
          }
        </div>
      </div>
    </div>
  )
}

export default UserItems