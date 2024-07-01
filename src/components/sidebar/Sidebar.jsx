import React, { useEffect, useState } from 'react';
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

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { role } = useAuth();
  const navigate = useNavigate();

  const [authLogout, { isLoading, isSuccess, isError, error }] = useAuthLogoutMutation();
  const [activeIndex, setActiveIndex] = useState(null);
  const [routes, setRoutes] = useState([]);
  const { notification } = useNotification(); // Use your custom notification hook
  const [isModal, setIsModal] = useState(false);

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

  const handleSidebar = () => {
    setIsOpen(prev => !prev);
  };

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
    <div className={`sidebar ${isOpen ? 'sidebar--open' : 'sidebar--closed'}`}>
      <div className={`sidebar__shutter ${isOpen ? 'shutter--open' : ''}`} onClick={handleSidebar}>
        {isOpen ? <ArrowCircleLeft size={32} color='#2F6F31' /> : <ArrowCircleRight size={32} color='#2F6F31' />}
      </div>

      <div className="sidebar__container">
        <div className="sidebar__logo">
          <h1>LOGO</h1>
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
  );
};

export default Sidebar;
