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

const Sidebar = ({ isOpen }) => {
  const { role } = useAuth();
  const navigate = useNavigate();
  const componentRef = useRef(null);

  const [authLogout, { isLoading, isSuccess, isError, error }] = useAuthLogoutMutation();
  const [activeIndex, setActiveIndex] = useState(null);
  const [routes, setRoutes] = useState([]);
  const { notification } = useNotification();
  const [isModal, setIsModal] = useState(false);
  const [isWidthWorthy, setIsWidthWorthy] = useState(true);

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

  // handling dynamic width of sidebar
  useEffect(() => {
    let resizeObserver;
    let debounceTimeout;

    const updateWidth = (entries) => {
      if (entries[0]) {
        const newWidth = entries[0].contentRect.width;
        if (newWidth >= 150 && !isWidthWorthy) {
          setIsWidthWorthy(true);
        } else if (newWidth <= 150 && isWidthWorthy) {
          setIsWidthWorthy(false);
        }
      }
    };

    const debouncedUpdateWidth = (entries) => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => updateWidth(entries), 100);
    };

    if (componentRef.current) {
      resizeObserver = new ResizeObserver(debouncedUpdateWidth);
      resizeObserver.observe(componentRef.current);
    }

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      clearTimeout(debounceTimeout);
    };
  }, [isWidthWorthy]);
  //   const updateWidth = () => {
  //     if (componentRef.current) {
  //       const newWidth = componentRef.current.getBoundingClientRect().width;
  //       console.log('new width', newWidth, typeof newWidth);
  //       if (newWidth >= 350) { // Adjusted condition for better clarity
  //         setIsWidthWorthy(true);
  //       } else if (newWidth <= 80) { // Adjusted condition for better clarity
  //         setIsWidthWorthy(false);
  //       }
  //     }
  //   };

  //   // Using ResizeObserver for better accuracy
  //   const observer = new ResizeObserver(updateWidth);
  //   if (componentRef.current) {
  //     observer.observe(componentRef.current);
  //   }

  //   // Cleanup observer on component unmount
  //   return () => {
  //     if (componentRef.current) {
  //       observer.unobserve(componentRef.current);
  //     }
  //   };
  // }, [componentRef]);

  const showmodal = () => {
    setIsModal(true);
  };

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
              {
                isWidthWorthy &&
                <div className="sidebar__profile--name">
                  <p><span>hello, </span>Rajan David</p>
                  <p>helloadmin@gmail.com</p>
                </div>
              }

            </div>
            <div className="sidebar__profile--logout">
              <button onClick={() => showmodal()}>
                <SignOut size={23} color="white" weight="fill" />
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
