import React from 'react'
import Navbar from '../components/Navbar'
import TechDisplay from '../components/TechDisplay'
import InfoDisplay from '../components/InfoDisplay'
import BlogDisplay from '../components/BlogDisplay'
import ProductDisplay from '../components/ProductDisplay'
import Footer from '../components/Footer'

function Landing() {
  return (
    <>
      <section className='bg-gradient-to-t from-white to-cyan-500'>
        <Navbar/>
        <div className='flex flex-wrap flex-col justify-center
                        md:flex-row space-x-20'
        >
          <div className='flex  flex-wrap flex-col space-y-10 mb-28 justify-center content-center
                          lg:mt-28'
          >
            <h1 className='text-3xl font-extrabold'>Check our new products</h1>
            <button className='w-1/2 mx-auto py-2 border-solid rounded-2xl font-bold bg-yellow-500 
                             hover:bg-red-300 hover:scale-110'
            > 
              See More
            </button>
          </div>
        </div>
      </section>
      <section id='product' className='bg-gradient-to-b from-white to-cyan-100'>
        <InfoDisplay />
        <TechDisplay />
      </section>
      <section id='article' className='bg-cyan-100'>
        <BlogDisplay />
      </section>
      <section className='bg-gradient-to-t from-white to-cyan-100'>
        <ProductDisplay />
      </section>
      <section id='footer' className='bg-gradient-to-b from-white to-cyan-500'>
        <Footer/>
      </section>
    </>
  )
}

export default Landing