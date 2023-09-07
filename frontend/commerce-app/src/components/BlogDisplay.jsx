import React from 'react'

import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { getPosts, reset } from '../feautures/post/postSlice'
import { useDispatch, useSelector } from 'react-redux'

function BlogDisplay() {


  const dispatch = useDispatch()
  const { landingPosts } = useSelector(state => state.post)

  useEffect(() => {
    dispatch(getPosts()).then(() => {
      dispatch(reset())
    })
  }, [])

  return (
    <div className='max-w-screen-2xl mx-auto'>
      <div className='py-60 px-10 
                      md:px-44'
      >
        <div className='grid gap-10 grid-cols-1
                        lg:grid-cols-3'
        >
          <div 
            className='flex flex-col content-center justify-center rounded-lg shadow-2xl bg-white
                      lg:row-span-2'
          >
            <img src={landingPosts[0].imageUrl} alt="" className='w-1/2 mx-auto my-4' />
            <div className='flex flex-col content-center justify-center p-5'>
              <h1 className='mb-2 text-2xl font-bold text-center'>{landingPosts[0].title}</h1>
              <button className='w-1/2 mx-auto mt-5 py-1 border-solid rounded-2xl bg-yellow-500
                                 hover:bg-red-300 hover:scale-110'
              >
                <Link to={`/post/${landingPosts[0]._id}`}>Read More</Link>
              </button>
            </div>
          </div>
          <div className='flex flex-wrap space-y-4 content-center justify-center rounded-lg shadow-2xl bg-white'>
            <img src={landingPosts[3].imageUrl} alt="" className='w-1/2 my-4' />
            <div className='flex flex-col space-y-4 pb-5'>
              <h1 className='text-xl font-bold text-center'>{landingPosts[3].title}</h1>
              <button className='w-1/2 mx-auto py-1 border-solid rounded-2xl bg-yellow-500
                                 hover:bg-red-300 hover:scale-110'
              >
                <Link to={`/post/${landingPosts[3]._id}`}>Read More</Link>
              </button>
            </div>
          </div>
          <div className='flex flex-wrap space-y-4 content-center justify-center rounded-lg shadow-2xl bg-white'>
            <img src={landingPosts[2].imageUrl} alt="" className='w-1/2 my-4' />
            <div className='flex flex-col space-y-4 pb-5'>
              <h1 className='text-xl font-bold text-center'>{landingPosts[2].title}</h1>
              <button className='w-1/2 mx-auto py-1 border-solid rounded-2xl bg-yellow-500
                                 hover:bg-red-300 hover:scale-110'
              >
                <Link to={`/post/${landingPosts[2]._id}`}>Read More</Link>
              </button>
            </div>
          </div>
          <div className='flex flex-wrap space-y-4 content-center justify-center rounded-lg shadow-2xl bg-white
                          md:flex-nowrap md:justify-between 
                          lg:col-span-2 lg:justify-between lg:py-6 lg:space-y-0'
          >
            <img src={landingPosts[1].imageUrl} alt="" className='w-1/2 h-32 mt-4' />
            <div className='flex flex-col space-y-4 pb-5
                            lg:mr-10 lg:py-10'
            >
              <h1 className='text-xl font-bold text-center'>{landingPosts[1].title}</h1>
              <button className='w-1/2 mx-auto py-1 border-solid rounded-2xl bg-yellow-500
                                 hover:bg-red-300 hover:scale-110'
              >
                <Link to={`/post/${landingPosts[1]._id}`}>Read More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDisplay