import React from 'react'
import Navbar from '../components/Navbar'
import blogDisplay1 from '../img/blogDisplay1.jpg'

function BlogPage() {
  return (
    <div className='bg-gradient-to-t from-white to-cyan-500 h-screen'>
      <Navbar/>
      <div className='flex flex-col
                      lg:flex-row lg:justify-center lg:space-x-32 lg:py-16'
      >
        <div>
          <h1 className='text-3xl text-center font-bold py-10'>The new Iphone 14</h1>
          <img src={blogDisplay1} alt="" className='w-96 h-96 mx-auto mt-4 mb-4 rounded-2xl shadow-2xl' />
        </div>
        <div className='px-10 py-24
                        lg:max-w-2xl lg:mt-12'
        >
          <div className='flex justify-between mb-4'>
            <p className='text-sm'><span className='font-bold text-md'>Author:</span>Jhon Doe</p>
            <p className='text-sm'><span className='font-bold text-md'>Date:</span>12/12/2023</p>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa laboriosam enim eius esse nostrum natus quae voluptates doloremque quam eligendi nam, nihil suscipit maiores modi recusandae? Corporis autem accusamus id facilis cumque nemo, dignissimos debitis consectetur! Aut ab vero quasi! Ipsa dolor sapiente dolore repellat, alias totam, ipsum, excepturi accusantium et quos quaerat sint quam recusandae nesciunt ut molestias itaque officiis fugit vitae! Nihil quae, laboriosam ut voluptate commodi animi alias minus recusandae sequi a quas fuga ipsa, quos officia aliquid cumque nobis dignissimos, repellat debitis beatae voluptatum. Expedita reiciendis tempora distinctio assumenda, saepe nesciunt impedit culpa blanditiis sit dolorem.</p>
        </div>
      </div>
    </div>
  )
}

export default BlogPage