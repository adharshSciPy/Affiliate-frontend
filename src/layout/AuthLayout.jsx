import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div>
      Auth
      <Outlet />
    </div>
  )
}

export default AuthLayout