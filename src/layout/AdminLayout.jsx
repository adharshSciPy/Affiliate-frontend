import React from 'react'
import { Outlet } from 'react-router-dom'
import { AdminNavbar, AdminSidebar } from '../components'

const AdminLayout = () => {
  return (
    <div className='admin'>
      <div className="admin__container">
        <div className="admin__navbar">
          <AdminNavbar/>
        </div>

        <div className="admin__sidebar">
          <AdminSidebar/>
        </div>

        <div className="admin__body">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminLayout