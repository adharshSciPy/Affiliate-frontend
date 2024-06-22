import React from 'react'
import { Outlet } from 'react-router-dom'
import { ServiceNavbar, ServiceSidebar } from '../components'

const ServiceLayout = () => {
    return (
        <div className='service'>
            <div className="service__container">
                <div className="service__navbar">
                    <ServiceNavbar />
                </div>

                <div className="service__sidebar">
                    <ServiceSidebar />
                </div>

                <div className="service__body">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default ServiceLayout