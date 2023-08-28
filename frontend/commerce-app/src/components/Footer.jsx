import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

function Footer() {

  const scrollToArticle = () => {
    const targetSection = document.getElementById('article')
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const scrollToProduct = () => {
    const targetSection = document.getElementById('product')
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='max-w-screen-2xl mx-auto'>
      <footer>
        <div className='flex flex-col space-y-2 py-10
                        md:px-20
                        lg:flex-row lg:space-y-0 lg:space-x-20 lg:justify-center lg:content-center lg:py-32 lg:mt-20'
        >
          <div className='flex flex-wrap flex-col justify-center content-center py-5 mt-10
                          md:mt-0'
          >
            <h1 className='text-center text-xl font-bold
                          md:text-3xl'
            >
              Subscribe to our newsletter
            </h1>
          </div>
          <div className='flex justify-between px-10 space-x-6
                          md:justify-center md:content-center md:space-x-12'
          >
            <input type="text" placeholder='Enter your Email' className='w-full h-10 px-2 rounded-xl self-center' />
            <button className='px-4 py-2 h-10 border-solid rounded-xl bg-yellow-500 self-center
                               hover:bg-red-300 hover:scale-105'
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className='grid grid-cols-2 justify-center content-center mb-10 mt-10
                        md:grid-cols-4'
        >
          <div className='justify-self-center'>
            <h1 className='font-bold text-3xl'>News</h1>
            <ul>
              <li className='hover:text-red-400 cursor-pointer'>
                <Link to='/'>Home</Link>
              </li>
              <li className='hover:text-red-400 cursor-pointer'>
                <Link onClick={scrollToProduct}>Latest Products</Link>
              </li>
              <li className='hover:text-red-400 cursor-pointer'>
                <Link onClick={scrollToArticle}>Articles</Link>
              </li>
            </ul>
            <br/>
          </div>
          <div className='justify-self-center'>
            <h1 className='font-bold text-3xl'>Account</h1>
            <ul>
              <li className='hover:text-red-400 cursor-pointer'>
                <Link to='/'>Home</Link>
              </li>
              <li className='hover:text-red-400 cursor-pointer'>
                <Link to='/register'>Register</Link>
              </li>
              <li className='hover:text-red-400 cursor-pointer'>
                <Link to='/login'>Login</Link>
              </li>
            </ul>
            <br/>
          </div>
          <div className='justify-self-center'>
            <h1 className='font-bold text-3xl'>Location</h1>
            <ul>
              <li>Adress: Street 1</li>
              <li>City: Bucharest</li>
              <li>Postcode: 11111</li>
            </ul>
            <br/>
          </div>
          <div className='justify-self-center'>
            <h1 className='font-bold text-3xl'>Contact</h1>
            <ul>
              <li>Phone: 0000000</li>
              <li>Email: email@email.com</li>
              <li>FAX: 00000000</li>
            </ul>
            <br/>
          </div>
          
        </div>

        <div className='flex flex-col space-y-6 px-10
                        md:pt-32'
        >
          <div>
            <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, nisi.</p>
          </div>
          <div className='space-x-6 text-center'>
            <FontAwesomeIcon icon={faFacebook} className='fa-2x hover:text-white'/>
            <FontAwesomeIcon icon={faInstagram} className='fa-2x hover:text-white'/>
            <FontAwesomeIcon icon={faTwitter} className='fa-2x hover:text-white'/>
            <FontAwesomeIcon icon={faYoutube} className='fa-2x hover:text-white'/>
          </div>
          <div className='text-center pb-6'>
            Copyright&copy;2023
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer