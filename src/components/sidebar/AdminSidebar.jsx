import { ArrowCircleRight, ArrowCircleLeft } from '@phosphor-icons/react'
import React, { useEffect, useState } from 'react'

const AdminSidebar = () => {

  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    const isOpen = localStorage.getItem('sidebarOpen')
    setIsOpen(isOpen)
  }, [])

  const handleSidebar = () => {
    setIsOpen((prev) => {
      localStorage.setItem('sidebarOpen', !prev)
      return !prev
    })
  }

  return (
    <div className={`adminsidebar ${!isOpen && 'offSidebar'}`}>
      <div className="adminsidebar__shutter" onClick={() => handleSidebar()}>
        {
          isOpen ? <ArrowCircleRight size={32} color='grey' /> : <ArrowCircleLeft size={32} color='grey' />
        }
      </div>
    </div>
  )
}

export default AdminSidebar