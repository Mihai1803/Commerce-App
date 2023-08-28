import React from 'react'
import Navbar from '../components/Navbar'
import RegisterForm from '../components/RegisterForm'

function Register() {
  return (
    <>
      <section className='bg-gradient-to-t from-white to-cyan-500'>
        <Navbar />
        <RegisterForm />
      </section>
    </>
  )
}

export default Register