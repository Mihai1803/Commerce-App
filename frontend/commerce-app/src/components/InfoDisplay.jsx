import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from '@fortawesome/free-solid-svg-icons'

function InfoDisplay() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
        <div className='flex flex-col space-y-8 px-4
                        lg:flex-row lg:space-y-0 lg:space-x-6 lg:mt-36'
        >
           <div className='flex space-x-4 mr-5'>
              <FontAwesomeIcon icon={faTruck}  className='fa-2x'/>
              <div className='flex flex-col space-x-2'>
                <h4 className='font-bold text-xl'>Quick Delivery</h4> 
                <p className='max-w-max'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ex illum a dicta incidunt labore eveniet neque hic consequuntur non temporibus, alias debitis adipisci commodi fugit ipsam natus perspiciatis odio voluptas ullam? Adipisci quaerat libero perspiciatis enim quasi. Laborum, doloremque.</p>
              </div>
            </div>
            <div className='flex space-x-4 mr-5'>
              <FontAwesomeIcon icon={faTruck}  className='fa-2x'/>
              <div className='flex flex-col space-x-2'>
                <h4 className='font-bold text-xl'>Quick Delivery</h4> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ex illum a dicta incidunt labore eveniet neque hic consequuntur non temporibus, alias debitis adipisci commodi fugit ipsam natus perspiciatis odio voluptas ullam? Adipisci quaerat libero perspiciatis enim quasi. Laborum, doloremque.</p>
              </div>
            </div>
            <div className='flex space-x-4 mr-5'>
              <FontAwesomeIcon icon={faTruck}  className='fa-2x'/>
              <div className='flex flex-col space-x-2'>
                <h4 className='font-bold text-xl'>Quick Delivery</h4> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ex illum a dicta incidunt labore eveniet neque hic consequuntur non temporibus, alias debitis adipisci commodi fugit ipsam natus perspiciatis odio voluptas ullam? Adipisci quaerat libero perspiciatis enim quasi. Laborum, doloremque.</p>
              </div>
            </div>
            <div className='flex space-x-4 mr-5'>
              <FontAwesomeIcon icon={faTruck}  className='fa-2x'/>
              <div className='flex flex-col space-x-2'>
                <h4 className='font-bold text-xl'>Quick Delivery</h4> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ex illum a dicta incidunt labore eveniet neque hic consequuntur non temporibus, alias debitis adipisci commodi fugit ipsam natus perspiciatis odio voluptas ullam? Adipisci quaerat libero perspiciatis enim quasi. Laborum, doloremque.</p>
              </div>
            </div>
        </div>
      </div>
  )
}

export default InfoDisplay