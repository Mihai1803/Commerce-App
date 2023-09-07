import React, { useState } from 'react'

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPhones, reset } from '../feautures/item/phone/phoneSlice'
import { getLaptops, resetLaptop } from '../feautures/item/laptop/laptopSlice'
import { getWatches, resetWatch } from '../feautures/item/watch/watchSlice'
import { getComputers, resetComputer } from '../feautures/item/computer/computerSlice'


function ProductDisplay() {

  const [productState, setProductState] = useState('Phone')

  const dispatch = useDispatch()
  const { phones } = useSelector(state => state.phone)
  const { computers } = useSelector(state => state.computer)
  const { laptops } = useSelector(state => state.laptop)
  const { watches } = useSelector(state => state.watch)

  
  useEffect(() => {
    dispatch(getPhones()).then(() => {
      dispatch(reset())
    })
    dispatch(getComputers()).then(() => {
      dispatch(resetComputer())
    })
    dispatch(getLaptops()).then(() => {
      dispatch(resetLaptop())
    })
    dispatch(getWatches()).then(() => {
      dispatch(resetWatch())
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
 
  const phoneState = () => {
    setProductState('Phone')
  }
  const computerState = () => {
    setProductState('Computer')
  }
  const laptopState = () => {
    setProductState('Laptop')
  }
  const watchState = () => {
    setProductState('Watch')
  }  

  return (
    <div className='max-w-screen-2xl mx-auto'>
        <div className='flex flex-wrap flex-col space-y-6 content-center justify-center
                        lg:flex-nowrap lg:flex-row lg:space-y-0 lg:justify-between lg:px-40'
        >
          <h1 className='text-2xl font-bold text-center'>Check our products</h1>
          <ul className='flex space-x-6'>
            <li className='hover:text-red-300 cursor-pointer' onClick={phoneState}>Phone</li>
            <li className='hover:text-red-300 cursor-pointer' onClick={computerState}>Computer</li>
            <li className='hover:text-red-300 cursor-pointer' onClick={laptopState}>Laptop</li>
            <li className='hover:text-red-300 cursor-pointer' onClick={watchState}>Watch</li>
          </ul>
        </div>
        <div className='flex flex-wrap flex-col space-y-8 content-center justify-center mt-10
                        md:grid md:grid-cols-3 md:space-y-0 md:gap-8 md:ml-6
                        lg:flex lg:flex-nowrap lg:flex-row lg:space-y-0 lg:space-x-6 lg:ml-0 lg:mt-20'
          >
          <div className='w-fit shadow-2xl bg-white hover:scale-110'>
            <div className='flex flex-wrap flex-col space-y-2 justify-center content-center py-10'>
              <img 
                src= {
                  productState === 'Phone' ? phones[0].imageUrl :
                  productState === 'Computer' ? computers[0].imageUrl :
                  productState === 'Laptop' ? laptops[0].imageUrl :
                  watches[0].imageUrl
                }
                alt=""  
                className='w-64 h-64'
              />
              <h1 className='text-xl font-bold text-center'>
                { 
                  productState === 'Phone' ? phones[0].productName :
                  productState === 'Computer' ? computers[0].productName :
                  productState === 'Laptop' ? laptops[0].productName :
                  watches[0].productName
                }
              </h1>
              <h4 className='text-center'>
              { 
                  productState === 'Phone' ? `$${phones[0].price }`:
                  productState === 'Computer' ? `$${computers[0].price }` :
                  productState === 'Laptop' ? `$${laptops[0].price }` :
                  `$${watches[0].price}`
              }
              </h4>
            </div>
         </div>
          
          <div className='w-fit shadow-2xl bg-white hover:scale-110'>
            <div className='flex flex-wrap flex-col space-y-2 justify-center content-center py-10'>
              <img 
                src= {
                  productState === 'Phone' ? phones[1].imageUrl :
                  productState === 'Computer' ? computers[1].imageUrl :
                  productState === 'Laptop' ? laptops[1].imageUrl :
                  watches[1].imageUrl
                }
                alt=""  
                className='w-64 h-64'
              />
              <h1 className='text-xl font-bold text-center'>
                { 
                  productState === 'Phone' ? phones[1].productName :
                  productState === 'Computer' ? computers[1].productName :
                  productState === 'Laptop' ? laptops[1].productName :
                  watches[1].productName
                }
              </h1>
              <h4 className='text-center'>
              { 
                  productState === 'Phone' ? `$${phones[1].price }`:
                  productState === 'Computer' ? `$${computers[1].price }` :
                  productState === 'Laptop' ? `$${laptops[1].price }` :
                  `$${watches[1].price}`
              }
              </h4>
            </div>
         </div>
          
          <div className='w-fit shadow-2xl bg-white hover:scale-110'>
            <div className='flex flex-wrap flex-col space-y-2 justify-center content-center py-10'>
              <img 
                src= {
                  productState === 'Phone' ? phones[2].imageUrl :
                  productState === 'Computer' ? computers[2].imageUrl :
                  productState === 'Laptop' ? laptops[2].imageUrl :
                  watches[2].imageUrl
                }
                alt=""  
                className='w-64 h-64'
              />
              <h1 className='text-xl font-bold text-center'>
                { 
                  productState === 'Phone' ? phones[2].productName :
                  productState === 'Computer' ? computers[2].productName :
                  productState === 'Laptop' ? laptops[2].productName :
                  watches[2].productName
                }
              </h1>
              <h4 className='text-center'>
              { 
                  productState === 'Phone' ? `$${phones[2].price }`:
                  productState === 'Computer' ? `$${computers[2].price }` :
                  productState === 'Laptop' ? `$${laptops[2].price }` :
                  `$${watches[2].price}`
              }
              </h4>
            </div>
         </div>
          
          <div className='w-fit shadow-2xl bg-white hover:scale-110'>
            <div className='flex flex-wrap flex-col space-y-2 justify-center content-center py-10'>
              <img 
                src= {
                  productState === 'Phone' ? phones[3].imageUrl :
                  productState === 'Computer' ? computers[3].imageUrl :
                  productState === 'Laptop' ? laptops[3].imageUrl :
                  watches[3].imageUrl
                }
                alt=""  
                className='w-64 h-64'
              />
              <h1 className='text-xl font-bold text-center'>
                { 
                  productState === 'Phone' ? phones[3].productName :
                  productState === 'Computer' ? computers[3].productName :
                  productState === 'Laptop' ? laptops[3].productName :
                  watches[3].productName
                }
              </h1>
              <h4 className='text-center'>
              { 
                  productState === 'Phone' ? `$${phones[3].price }`:
                  productState === 'Computer' ? `$${computers[3].price }` :
                  productState === 'Laptop' ? `$${laptops[3].price }` :
                  `$${watches[3].price}`
              }
              </h4>
            </div>
         </div>
        </div>
    </div>
  )
}

export default ProductDisplay