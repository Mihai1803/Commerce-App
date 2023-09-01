import React from 'react'
import { Link } from  'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faMagnifyingGlass, faUser} from '@fortawesome/free-solid-svg-icons'
import { logout } from '../feautures/auth/authSlice'

function Navbar() {

  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  

  const scrollToArticle = () => {
    const targetSection = document.getElementById('article')
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const scrollToFooter = () => {
    const targetSection = document.getElementById('footer')
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const onClick = () => {
    dispatch(logout())
  }


  return (
    <div className='max-w-screen-2xl mx-auto'>
        <header className='flex flex-col space-y-2 py-12 px-8
                           md:space-y-6
                           lg:flex-row lg:space-y-0 lg:space-x-4 lg:justify-evenly lg:content-center'
        >
            <h1 className='uppercase text-2xl font-extrabold text-center mb-3
                           md:mb-0'
            >
              <Link to='/' className='hover:text-white'>commerce</Link>
            </h1>
            <input 
              type="text"  
              className='w-1/2 mx-auto h-8 px-3 text-center
                         md:w-1/4 
                         lg:text-start' 
              placeholder='Search'
            />
            <nav>
              <ul className='flex space-x-10 py-4 justify-center
                             md:py-0'
              >
                <li><Link to='/' className='text-lg hover:text-white'>Home</Link></li>
                {
                  user ?
                  (
                    <li><button to='/' className='text-lg hover:text-white' onClick={onClick}>Logout</button></li>
                  ) :
                  (
                    <>
                      <li><Link to='/register' className='text-lg hover:text-white'>Register</Link></li>
                      <li><Link to='/login' className='text-lg hover:text-white'>Login</Link></li>
                    </>
                  )
                }
                <li><Link to='/' className='text-lg hover:text-white' onClick={scrollToArticle}>Articles</Link></li>
                <li><Link to='/' className='text-lg hover:text-white' onClick={scrollToFooter}>Contact</Link></li>
                
              </ul>
            </nav>
            <div className='flex justify-center space-x-4'>
              <FontAwesomeIcon icon={faMagnifyingGlass} className='mt-1 hover:text-white'/>
              <Link to='/user-panel'>
                <FontAwesomeIcon icon={faUser}  className='mt-1 hover:text-white'/>
              </Link>
              <FontAwesomeIcon icon={faHeart} className='mt-1 hover:text-white' />
            </div>
        </header>
    </div>
  )
}

export default Navbar