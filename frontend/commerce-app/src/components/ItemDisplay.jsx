import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { deleteItem, reset } from '../feautures/auth/authSlice'

function ItemDisplay({ item }) {

  const encodedCategory = encodeURIComponent(item.category)
  const dispatch = useDispatch()
  const [showConfirmation, setShowConfirmation] = useState(false)


  const onDeleteClick = () => {
    setShowConfirmation(true)
  }

  const onCancelDelete = () => {
    setShowConfirmation(false)
  }

  const onConfirmDelete = () => {
    dispatch(deleteItem(item._id))
    dispatch(reset())
    setShowConfirmation(false);
    window.location.reload()
  }

  
  return (
    <div className='flex flex-col rounded-2xl shadow-2xl bg-white pb-10 pt-4 px-6'>
      {
        showConfirmation ? (
          <div>
            <p className='py-2 text-xs text-center'>Are you sure you want to delete the item?</p>
            <div className='flex justify-center'>
              <button
                onClick={onConfirmDelete}
                className='bg-red-500 text-white px-4 py-1 rounded mr-2'
              >
                Yes
              </button>
              <button
                onClick={onCancelDelete}
                className='bg-gray-400 text-white px-4 py-1 rounded mr-2'
              >
                No
              </button>
            </div>
          </div>
        ) : (
          <div className={item.user ? 'block' : 'hidden'} onClick={onDeleteClick}>
            <FontAwesomeIcon icon={faX} className='text-red-500' />
          </div>
        )
      }
      <h1 className='pb-2 mt-2 text-center font-bold'>{item.productName}</h1>
      <img src={item.imageUrl} alt=""  className='w-1/8 h-60 m'/>
      <ul className='flex flex-wrap flex-col content-center text-center'>
        <li>{item.spec1}</li>
        <li>{item.spec2}</li>
        <li>{item.spec3}</li>
      </ul>
      <button className='w-5/6 mx-auto mt-5 border-solid rounded-2xl font-bold bg-yellow-500
                       hover:bg-red-300 hover:scale-105'
      >
        <Link to={`/product/${item._id}?product=${encodedCategory}`} >View product</Link>
      </button>
    </div>
  )
}

export default ItemDisplay