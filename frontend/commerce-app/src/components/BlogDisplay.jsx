import React from 'react'
import BlogDisplay1 from '../img/blogDisplay1.jpg'
import watch from '../img/watch.jpg'
import laptop from '../img/laptop.jpg'
import computer from '../img/computer.jpeg'

function BlogDisplay() {

 
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
            <img src={BlogDisplay1} alt="" className='w-1/2 mx-auto my-4' />
            <div className='flex flex-col content-center justify-center p-5'>
              <h1 className='mb-2 text-2xl font-bold text-center'>Check out the new Iphones</h1>
              <button className='w-1/2 mx-auto mt-5 py-1 border-solid rounded-2xl bg-yellow-500
                                 hover:bg-red-300 hover:scale-110'
              >
                Read More
              </button>
            </div>
          </div>
          <div className='flex flex-wrap space-y-4 content-center justify-center rounded-lg shadow-2xl bg-white'>
            <img src={watch} alt="" className='w-1/2 my-4' />
            <div className='flex flex-col space-y-4 pb-5'>
              <h1 className='text-xl font-bold text-center'>Check out the new Apple Watches</h1>
              <button className='w-1/2 mx-auto py-1 border-solid rounded-2xl bg-yellow-500
                                 hover:bg-red-300 hover:scale-110'
              >
                Read More
              </button>
            </div>
          </div>
          <div className='flex flex-wrap space-y-4 content-center justify-center rounded-lg shadow-2xl bg-white'>
            <img src={laptop} alt="" className='w-1/2 my-4' />
            <div className='flex flex-col space-y-4 pb-5'>
              <h1 className='text-xl font-bold text-center'>Check out the new MacBooks</h1>
              <button className='w-1/2 mx-auto py-1 border-solid rounded-2xl bg-yellow-500
                                 hover:bg-red-300 hover:scale-110'
              >
                Read More
              </button>
            </div>
          </div>
          <div className='flex flex-wrap space-y-4 content-center justify-center rounded-lg shadow-2xl bg-white
                          md:flex-nowrap md:justify-between 
                          lg:col-span-2 lg:justify-between lg:py-6 lg:space-y-0'
          >
            <img src={computer} alt="" className='w-1/2 h-32 mt-4' />
            <div className='flex flex-col space-y-4 pb-5
                            lg:mr-10 lg:py-10'
            >
              <h1 className='text-xl font-bold text-center'>Check out the new Computers</h1>
              <button className='w-1/2 mx-auto py-1 border-solid rounded-2xl bg-yellow-500
                                 hover:bg-red-300 hover:scale-110'
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDisplay