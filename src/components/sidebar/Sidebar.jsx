import React, { useEffect, useState, useRef } from 'react';
import { ArrowCircleRight, ArrowCircleLeft, SignOut } from '@phosphor-icons/react';

import { useNavigate } from 'react-router-dom';
import { useAuthLogoutMutation } from '../../features/api/authApiSlice';
import useAuth from '../../hooks/useAuth';
import { useNotification } from '../../context/NotificationContext';

import { roles } from '../../constants/roles';
import { adminSidebarRoutes, affiliateSidebarRoutes, companySidebarRoutes } from '../../constants/sidebarRoutes';
import SideRoutes from './SideRoutes';
import profileImg from '../../assets/images/profile.png';
import LogoutModal from '../modals/LogoutModal';
import Closebutton from './Closebutton';

const Sidebar = ({ isOpen }) => {
  const { role } = useAuth();
  const navigate = useNavigate();
  const componentRef = useRef(null);

  const [authLogout, { isLoading, isSuccess, isError, error }] = useAuthLogoutMutation();
  const [activeIndex, setActiveIndex] = useState(null);
  const [routes, setRoutes] = useState([]);
  const { notification } = useNotification();
  const [isModal, setIsModal] = useState(false);
  const [isWidthWorthy, setIsWidthWorthy] = useState(false)

  useEffect(() => {
    switch (role) {
      case roles.ADMIN_ROLE:
        setRoutes(adminSidebarRoutes);
        break;
      case roles.COMPANY_ROLE:
        setRoutes(companySidebarRoutes);
        break;
      case roles.AFFILIATER_ROLE:
        setRoutes(affiliateSidebarRoutes);
        break;
      default:
        setRoutes([]);
    }
  }, [role]);

  useEffect(() => {
    const updateWidth = () => {
      if (componentRef.current) {
        const newWidth = componentRef.current.getBoundingClientRect().width;
        console.log('new with', newWidth, typeof (newWidth))
        if (newWidth === 80) {
          setIsWidthWorthy(true)
        }
        else {
          setIsWidthWorthy(false)
        }
      }
    };

    // Update width initially
    updateWidth();

    // Update width on window resize
    window.addEventListener('resize', updateWidth);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', updateWidth);
  }, [isOpen, componentRef]);

  const showmodal = () => {
    setIsModal(true)
  }

  const handleLogout = async () => {
    try {
      const response = await authLogout().unwrap();
      if (response) {
        notification('success', response?.message, '', 'bottomRight');
        navigate('/auth/login', { replace: true });
      }
    } catch (err) {
      notification('error', 'Logout Failed', error?.data?.message || 'An error occurred', 'bottomRight');
    }
  };

  return (
    <>
      <div ref={componentRef} className={`sidebar ${isOpen ? 'sidebar--open' : 'sidebar--closed'}`}>
        <div className="sidebar__container">
          <div className="sidebar__header">

            <div className="sidebar__header--logo">
              <h1>LOGO</h1>
            </div>
          </div>

          <div className="sidebar__routes">
            {routes?.map((route, index) => (
              <SideRoutes
                route={route}
                index={index}
                key={index}
                isActive={activeIndex === index}
                setActiveIndex={setActiveIndex}
                isOpen={isOpen}
                isWidthWorthy={isWidthWorthy}
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
              <button onClick={() => showmodal()}>
                <SignOut size={28} color="white" weight="fill" />
              </button>
            </div>
          </div>
        </div>
        <LogoutModal isModal={isModal} setIsModal={setIsModal} logout={handleLogout} />
      </div>
    </>

  );
};

export default Sidebar;
