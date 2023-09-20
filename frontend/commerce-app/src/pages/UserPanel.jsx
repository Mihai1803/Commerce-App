import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import avatar from '../img/avatar.avif'

function UserPanel() {

  const { user } = useSelector(state => state.auth)

  return (
    <section className='bg-gradient-to-t from-white to-cyan-300 h-screen'>
      <div className='max-w-screen-2xl mx-auto'>
        <Navbar />
        <div className='w-5/6 h-fit mx-auto mt-24 border border-solid border-cyan-300 rounded-3xl shadow-2xl bg-white relative 
                        lg:w-1/2 lg:mt-32'
        >
          <div className='flex flex-col'>
            <img src={avatar} alt="" className='w-24 h-24 rounded-ss-3xl absolute top-0 left-0
                                                md:w-52 md:h-52' 
            />
            <div className='flex flex-wrap flex-col space-y-4 pt-32 pb-12 px-12
                            md:content-center md:py-12 md:ml-24'
            >
              <p className='text-lg'><span className='font-bold text-xl'>Name: </span>{user.user}</p>
              <p className='text-lg'><span className='font-bold text-xl'>Email: </span>{user.email}</p>
              <p className='text-lg'><span className='font-bold text-xl'>Number of products for sale: </span>{user.productsForSale}</p>
              <p className='text-lg'><span className='font-bold text-xl'>Interests:</span> {user.interests !== ' ' ? user.interests : 'No interests'}</p>
            </div>
          </div>
          <div className='flex flex-col space-y-8 mb-8
                          2xl:flex-row 2xl:space-y-0 2xl:pr-6'                
          >
              <div className='mx-auto'>
                <Link to='/list-item' className='px-4 py-2 border-solid rounded-2xl font-bold bg-yellow-400
                                        lg:ml-6
                                        hover:bg-red-300 hover:scale-110'
                >
                  List Item Online
                </Link>
              </div>
              <div className='mx-auto'>
                <Link to='/create-post' className='px-4 py-2 border-solid rounded-2xl font-bold bg-yellow-400
                                        lg:ml-6
                                        hover:bg-red-300 hover:scale-110'
                >
                  Create Blog Post
                </Link>
              </div>
              <div className='mx-auto'>
                <Link to='/user-items' className='px-4 py-2 border-solid rounded-2xl font-bold bg-yellow-400
                                        lg:ml-6
                                        hover:bg-red-300 hover:scale-110'
                >
                  My items for sale
                </Link>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserPanel