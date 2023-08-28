import React from 'react'
import ItemDisplay from './ItemDisplay'

function TechDisplay() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
        <div className='flex flex-wrap flex-col justify-center content-center space-y-2 mt-32'>
          <h4 className='font-bold text-xl text-center mb-2'>Technology</h4>
          <h1 className='font-bold text-2xl text-center'>Smarthphones and Computers</h1>
          <p className='text-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, dolores.</p>
        </div>
        <div className='flex flex-wrap flex-col space-y-10 content-center mt-20
                        md:grid md:grid-cols-3 md:space-y-0 md:gap-8 md:px-6
                        lg:grid-cols-4 lg:px-44'
        >
          <ItemDisplay />
          <ItemDisplay />
          <ItemDisplay />
          <ItemDisplay />      
        </div>
    </div>
  )
}

export default TechDisplay