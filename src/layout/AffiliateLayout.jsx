import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { DashboardNavbar, Sidebar } from '../components'


const AffiliateLayout = () => {

  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className='dashboard'>
      <div className="dashboard__container">
        <div className="dashboard__navbar">
          <DashboardNavbar isOpen={isOpen} message='Welcome Affiliater' />
        </div>

        <div className="dashboard__sidebar">
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <div className="dashboard__body">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AffiliateLayout