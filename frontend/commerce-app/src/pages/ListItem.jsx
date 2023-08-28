import React from 'react'
import Navbar from '../components/Navbar'
import ItemForm from '../components/ItemForm'

function ListItem () {
  return (
      <section className='bg-gradient-to-t from-white to-cyan-500'>
        <Navbar />
        <ItemForm />
      </section>
  )
}

export default ListItem