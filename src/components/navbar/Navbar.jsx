import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Switch } from 'antd'
import { toggleDarkMode } from '../../utils/darkmode'
import { List, X } from '@phosphor-icons/react'
import useAuth from '../../hooks/useAuth'


const Navbar = () => {
    const navigate = useNavigate()

    const [isDark, setIsDark] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    const { isLoggedIn } = useAuth()

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
                        <Switch onClick={() => toggleDarkMode(setIsDark)}
                            checkedChildren="light"
                            unCheckedChildren="dark"
                            defaultChecked size='large'
                        />
                        {
                            isLoggedIn ?
                                <Button>Logout</Button>
                                :
                                <>
                                    <Button onClick={() => navigate('/auth/login')}>Login</Button>
                                    <Button onClick={() => navigate('/auth/register')}>Sign Up</Button>
                                </>
                        }

                    </div>
                </div>

                {/* mobile navbar */}
                <div className="navbar__handburger"
                    onClick={() => setIsMobile((prev) => !prev)}
                >
                    {
                        isMobile ?
                            <X size={32} />
                            :
                            <List size={32} />
                    }

                </div>

                {
                    isMobile &&
                    <div className="navbar__mobile">
                        ss
                    </div>
                }

            </div>
        </div>
    )
}

export default Navbar