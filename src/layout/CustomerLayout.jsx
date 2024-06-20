import React from 'react'
import { Navbar } from '../components'
import { Outlet } from 'react-router-dom'

const CustomerLayout = () => {
  return (
    <div className='customerlayout'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default CustomerLayout