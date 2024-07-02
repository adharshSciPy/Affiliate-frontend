import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { List, X } from '@phosphor-icons/react';
import { Button } from 'antd';
import { useAuthLogoutMutation } from '../../features/api/authApiSlice';
import { useNotification } from '../../context/NotificationContext';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { notification } = useNotification();
    const [userLogout, { isSuccess, isLoading, isError, error }] = useAuthLogoutMutation();

    const [isMobile, setIsMobile] = useState(false);
    const { isLoggedIn } = useAuth();

    useEffect(() => {
        if (isSuccess) {
            notification('success', 'Logout Successful', '', 'bottomRight');
        } else if (isError) {
            notification('error', 'Logout Failed', error?.data?.message || 'An error occurred', 'bottomRight');
        }
    }, [isSuccess, isError, error, notification]);

    const handleLogout = async () => {
        try {
            await userLogout().unwrap();
            navigate('/auth/login', { replace: true });
        } catch (err) {
            notification('error', 'Logout Failed', error?.data?.message || 'An error occurred', 'bottomRight');
        }
    };

    const renderAuthButtons = () => {
        const path = location.pathname;

        if (isLoggedIn) {
            return <Button onClick={handleLogout}>{isLoading ? 'Logging out...' : 'Logout'}</Button>;
        }

        if (path === '/' || path === '/auth/login') {
            return (
                <>
                    <Button onClick={() => navigate('/auth/register')} style={{ width: '5rem' }}>Sign Up</Button>
                    {path === '/' && <Button onClick={() => navigate('/auth/login')} style={{ width: '5rem' }}>Login</Button>}
                </>
            );
        }

        if (path === '/auth/register') {
            return <Button type='primary' onClick={() => navigate('/auth/login')} style={{ width: '5rem' }}>Login</Button>;
        }

        return null;
    };

    return (
        <div className='navbar'>
            <div className="navbar__container">
                <div className="navbar__logo" onClick={() => navigate('/')}>
                    LOGO
                </div>

                <div className="navbar__items">
                    <div className="navbar__item">
                        <p onClick={() => navigate('/')}>Home</p>
                        <p onClick={() => navigate('/about')}>About Us</p>
                        <p onClick={() => navigate('/testimonials')}>Testimonials</p>
                        <p onClick={() => navigate('/faq')}>FAQ</p>
                        <p onClick={() => navigate('/contact')}>Contact Us</p>
                    </div>

                    <div className="navbar__button">
                        {renderAuthButtons()}
                    </div>
                </div>

                {/* Mobile navbar toggle */}
                <div
                    className="navbar__handburger"
                    onClick={() => setIsMobile(prev => !prev)}
                >
                    {isMobile ? <X size={32} /> : <List size={32} />}
                </div>

                {/* Mobile menu */}
                {isMobile && (
                    <div className="navbar__mobile">
                        <p onClick={() => navigate('/')}>Home</p>
                        <p onClick={() => navigate('/about')}>About Us</p>
                        <p onClick={() => navigate('/testimonials')}>Testimonials</p>
                        <p onClick={() => navigate('/faq')}>FAQ</p>
                        <p onClick={() => navigate('/contact')}>Contact Us</p>
                        {renderAuthButtons()}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
