import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { DashboardNavbar, Sidebar } from '../components'

const AdminLayout = () => {

  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className='dasbhoard'>
      <div className="dasbhoard__container">
        <div className="dasbhoard__navbar">
          <DashboardNavbar isOpen={isOpen} />
        </div>

        <div className="dasbhoard__sidebar">
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <div className="dasbhoard__body">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminLayout