import React from 'react'
import { Navbar } from '../components'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <>
      <div className='authlayout'>
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}

export default AuthLayout