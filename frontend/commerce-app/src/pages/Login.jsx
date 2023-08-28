import React from 'react'
import Navbar from '../components/Navbar'
import LoginForm from '../components/LoginForm'

function Login() {
  return (
    <section className='bg-gradient-to-t from-white to-cyan-500 h-screen'>
      <Navbar />
      <LoginForm />
    </section>
  )
}

export default Login