import React from 'react'

function RegisterForm() {
  return (
    <form action="" className='flex flex-wrap flex-col space-y-12 content-center h-4/5 py-12
                               md:mt-12'
    >
      <div className='flex flex-col space-y-2'>
        <label htmlFor="">Name:</label>
        <input type="text" className='px-2 rounded-md'/>
      </div>
      <div className='flex flex-col space-y-2'>
        <label htmlFor="">Email:</label>
        <input type="email" className='px-2 rounded-md' />
      </div>
      <div className='flex flex-col space-y-2'>
        <label htmlFor="">Password:</label>
        <input type="password" className='px-2 rounded-md' />
      </div>
      <div className='flex flex-col space-y-2'>
        <label htmlFor="">Confirm Password:</label>
        <input type="password" className='px-2 rounded-md' />
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