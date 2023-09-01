import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from '../feautures/auth/authSlice'



function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const { name, email, password, confirmPassword } = formData
  const { user, isLoading, isError, isSucces } = useSelector(state => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isError) {
      console.log('Error');
    }
    if (isSucces || user) {
      navigate('/')
    }
    dispatch(reset())
  },[isError, isSucces, user, navigate, dispatch])

  const onChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))

  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      console.log('Passwords do not match');
    } else {
      const userData = {
        name,
        email,
        password
      }
      dispatch(register(userData))
      navigate('/')
    }
  }



  return (
    <form className='flex flex-wrap flex-col space-y-12 content-center h-4/5 py-12
                               md:mt-12'
          onSubmit={onSubmit}
    >
      <div className='flex flex-col space-y-2'>
        <label htmlFor="">Name:</label>
        <input 
          type="text"
          id='name'
          name='name'
          value={name} 
          className='px-2 rounded-md'
          onChange={onChange}
        />
      </div>
      <div className='flex flex-col space-y-2'>
        <label htmlFor="">Email:</label>
        <input
          type="email" 
          id='email'
          name='email'
          value={email} 
          className='px-2 rounded-md'
          onChange={onChange} 
        />
      </div>
      <div className='flex flex-col space-y-2'>
        <label htmlFor="">Password:</label>
        <input 
          type="password"
          id='password'
          name='password'
          value={password}  
          className='px-2 rounded-md'
          onChange={onChange}
          autoComplete='off' 
        />
      </div>
      <div className='flex flex-col space-y-2'>
        <label htmlFor="">Confirm Password:</label>
        <input 
          type="password" 
          id='confirmPassword'
          name='confirmPassword'
          value={confirmPassword} 
          className='px-2 rounded-md' 
          onChange={onChange}
          autoComplete='off'
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

export default RegisterForm