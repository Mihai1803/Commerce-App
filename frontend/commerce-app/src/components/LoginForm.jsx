import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login, reset } from '../feautures/auth/authSlice'

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const { email, password } = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isLoading, isError, isSucces } = useSelector(state => state.auth)

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
    const userData = {
      email,
      password
    }
    dispatch(login(userData))
    navigate('/user-panel')
  }

  return (
    <form className='flex flex-wrap flex-col space-y-12 content-center h-4/5 py-12
                               md:mt-12'
          onSubmit={onSubmit}        
    >
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
      <div className='flex justify-center'>
        <button className='px-10 py-2 border-solid rounded-2xl font-bold bg-yellow-500
                           hover:bg-red-300'
        >
          Login
        </button>
      </div>
    </form>
  )
}
export default LoginForm