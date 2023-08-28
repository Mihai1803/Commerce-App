import React from 'react'
import Navbar from '../components/Navbar'
import PostForm from '../components/PostForm'

function CreatePost() {
  return (
    <>
      <section className='bg-gradient-to-t from-white to-cyan-500'>
        <Navbar />
        <PostForm />
      </section>
    </>
  )
}

export default CreatePost