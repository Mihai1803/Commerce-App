import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createPost, reset } from '../feautures/post/postSlice'

function PostForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: ''
  })
  const { title, description, image } = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isError, isSuccess } = useSelector(state => state.post)

  useEffect(() => {
    if (isError) {
      console.log('Error');
    }
    if (isSuccess) {
      navigate('/')
    }
    dispatch(reset())
  },[isError, isSuccess, navigate])
  
  const onChange = (e) => {
    if (e.target.name === 'image') {
      setFormData(prevState => ({
        ...prevState,
        image: e.target.files[0]
      }))
      console.log(e.target.files[0]);
    } else {
      setFormData(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value
      }))
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const postData = {
      title,
      description,
      photo: image
    }
    dispatch(createPost(postData))
  }


  return (
    <form className='flex flex-wrap flex-col space-y-12 content-center h-4/5 py-12
                               md:mt-12'
          onSubmit={onSubmit}
    >
      <div className='flex flex-col space-y-2'>
        <label htmlFor="">Title:</label>
        <input 
          type="text"
          id='title'
          name='title'
          value={title} 
          className='px-2 py-1 rounded-md'
          onChange={onChange}
        />
      </div>
      <div className='flex flex-col space-y-2'>
        <label htmlFor="">Desciption:</label>
        <textarea 
          id="description" 
          name="description" 
          value={description}
          className='px-2 rounded-md'
          onChange={onChange}
        ></textarea>
      </div>
      <div className='flex flex-col space-y-2'>
        <label htmlFor="">Upload Iamge:</label>
        <input 
          type="file"
          id='image'
          name='image'
          // value={image}
          onChange={onChange}
        />
      </div>
      <div className='flex justify-center'>
        <button className='px-10 py-2 border-solid rounded-2xl font-bold bg-yellow-500
                           hover:bg-red-300'
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default PostForm