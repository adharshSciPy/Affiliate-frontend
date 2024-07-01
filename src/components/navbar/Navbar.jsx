import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { List, X } from '@phosphor-icons/react';
import { Button, Switch } from 'antd';

import { useAuthLogoutMutation } from '../../features/api/authApiSlice';
import { useNotification } from '../../context/NotificationContext';
import { toggleDarkMode } from '../../utils/darkmode';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const navigate = useNavigate();
    const { notification } = useNotification();
    const [userLogout, {isSuccess, isLoading, isError, error }] = useAuthLogoutMutation();

    useEffect(() => {
        if (isSuccess) {
            notification('success', 'Logout Successful', '', 'bottomRight');
        } else if (isError) {
            notification('error', 'Logout Failed', error?.data?.message || 'An error occurred', 'bottomRight');
        }
    }, [isSuccess, isError, error, notification]);

    const [isDark, setIsDark] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const { isLoggedIn } = useAuth();

    const handleLogout = async () => {
        try {
            await userLogout().unwrap();
            navigate('/auth/login', { replace: true });
        } catch (err) {
            notification('error', 'Logout Failed', error?.data?.message || 'An error occurred', 'bottomRight');
        }
    };

    return (
        <div className='navbar'>
            <div className="navbar__container">
                <div className="navbar__logo">
                    LOGO
                </div>

                <div className="navbar__items">
                    <div className="navbar__item">
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Testimonials</p>
                        <p>FAQ</p>
                        <p>Contact Us</p>
                    </div>

                    <div className="navbar__button">
                        <Switch
                            onClick={() => toggleDarkMode(setIsDark)}
                            checkedChildren="Light"
                            unCheckedChildren="Dark"
                            defaultChecked={isDark}
                            size='large'
                        />
                        {isLoggedIn ? (
                            <Button onClick={handleLogout}>{isLoading ? 'Logging out...' : 'Logout'}</Button>
                        ) : (
                            <>
                                <Button onClick={() => navigate('/auth/login')}>Login</Button>
                                <Button onClick={() => navigate('/auth/register')}>Sign Up</Button>
                            </>
                        )}
                    </div>
                </div>

                {/* Mobile navbar toggle */}
                <div
                    className="navbar__handburger"
                    onClick={() => setIsMobile((prev) => !prev)}
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
                        {isLoggedIn ? (
                            <Button onClick={handleLogout}>{isLoading ? 'Logging out...' : 'Logout'}</Button>
                        ) : (
                            <>
                                <Button onClick={() => navigate('/auth/login')}>Login</Button>
                                <Button onClick={() => navigate('/auth/register')}>Sign Up</Button>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
