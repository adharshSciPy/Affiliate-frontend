import { ArrowCircleRight, ArrowCircleLeft } from '@phosphor-icons/react'
import React, { useEffect, useState } from 'react'

const Sidebar = ({ isOpen, setIsOpen }) => {

  const handleSidebar = () => {
    setIsOpen((prev) => {
      localStorage.setItem('sidebarOpen', !prev)
      return !prev
    })
  }

  return (
    <div className={`sidebar ${!isOpen && 'offSidebar'}`}>
      <div className="sidebar__shutter" onClick={() => handleSidebar()}>
        {
          isOpen ? <ArrowCircleRight size={32} color='grey' /> : <ArrowCircleLeft size={32} color='grey' />
        }
      </div>
    </div>
  )
}

export default Sidebar