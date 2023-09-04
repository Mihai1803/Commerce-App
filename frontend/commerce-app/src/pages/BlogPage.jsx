import React from 'react'
import Navbar from '../components/Navbar'
import blogDisplay1 from '../img/blogDisplay1.jpg'

import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getPostById, reset } from '../feautures/post/postSlice'

function BlogPage() {
  
  const [imagePath, setImagePath] = useState('')

  const dispatch = useDispatch()
  const { postId } = useParams()
  const { singlePost } = useSelector(state => state.post)

  const postDate = new Date(singlePost.created)
  const day = postDate.getDate()
  const month = postDate.getMonth() + 1
  const year = postDate.getFullYear()
  

  useEffect(() => {
    dispatch(getPostById(postId)).then(() => {
      dispatch(reset())
    })
    setImagePath(singlePost.imageUrl)
  }, [])


  return (
    <div className='bg-gradient-to-t from-white to-cyan-500 h-screen'>
      <Navbar/>
      <div className='flex flex-col
                      lg:flex-row lg:justify-center lg:space-x-32 lg:py-16'
      >
        <div>
          <h1 className='text-3xl text-center font-bold py-10'>{singlePost.title}</h1>
          <img src={blogDisplay1} alt="" className='w-96 h-96 mx-auto mt-4 mb-4 rounded-2xl shadow-2xl' />
        </div>
        <div className='px-10 py-24
                        lg:max-w-2xl lg:mt-12'
        >
          <div className='flex justify-between mb-4'>
            <p className='text-sm capitalize'><span className='font-bold text-md'>Author: </span>{singlePost.author}</p>
            <p className='text-sm'><span className='font-bold text-md'>Date: </span>{`${day}/${month > 9 ? month : '0'+ month}/${year}`}</p>
          </div>
          <p>{singlePost.description}</p>
        </div>
      </div>
    </div>
  )
}

export default BlogPage