import { ArrowCircleRight, ArrowCircleLeft, SignOut } from '@phosphor-icons/react'
import React, { useEffect, useState } from 'react'

import SideRoutes from './SideRoutes'
import useAuth from '../../hooks/useAuth'
import { adminSidebarRoutes, affiliateSidebarRoutes, companySidebarRoutes } from '../../constants/sidebarRoutes'
import { roles } from '../../constants/roles'
import profileImg from '../../assets/images/profile.png'

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { role } = useAuth()

  const [activeIndex, setActiveIndex] = useState(null);
  const [routes, setRoutes] = useState()

  useEffect(() => {
    if (role === roles.ADMIN_ROLE) {
      setRoutes(adminSidebarRoutes)
    }
    else if(role === roles.COMPANY_ROLE) {
      setRoutes(companySidebarRoutes)
    }
    else if(role === roles.AFFILIATER_ROLE) {
      setRoutes(affiliateSidebarRoutes)
    }
  }, [role])

  const handleSidebar = () => {
    setIsOpen((prev) => {
      return !prev
    })
  }

  return (
    <div className={`sidebar ${isOpen ? 'sidebar--open' : 'sidebar--closed'}`}>
      <div
        className={`sidebar__shutter ${isOpen ? 'shutter--open' : ''}`}
        onClick={handleSidebar}
      >
        {isOpen ? <ArrowCircleLeft size={32} color='#2F6F31' /> : <ArrowCircleRight size={32} color='#2F6F31' />}
      </div>

      <div className="sidebar__container">
        <div className="sidebar__logo">
          <h1>LOGO</h1>
        </div>

          {/* <div className="sidebar__search">
            <input type="text" placeholder='Search here..' />
          </div> */}

        <div className="sidebar__routes">
          {routes?.map((route, index) => (
            <SideRoutes
              route={route}
              index={index}
              key={index}
              isActive={activeIndex === index}
              setActiveIndex={setActiveIndex}
              isOpen={isOpen}
            />
          ))}
        </div>

        <div className="sidebar__profile">

          <div className="sidebar__profile--details">
            <div className="sidebar__profile--logo">
              <img src={profileImg} alt="profile" />
            </div>

            <div className="sidebar__profile--name">
              <p><span>hello, </span>Rajan David</p>
              <p>helloadmin@gmail.com</p>
            </div>
          </div>

          <div className="sidebar__profile--logout">
            <button>
              <SignOut size={28} color="white" weight="fill" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
