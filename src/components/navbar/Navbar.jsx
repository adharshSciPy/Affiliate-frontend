import React from 'react'
import { useState } from 'react'
import { Button, Switch } from 'antd'
import { toggleDarkMode } from '../../utils/darkmode'
import { List, X } from '@phosphor-icons/react'


const Navbar = () => {
    const [isDark, setIsDark] = useState(false)
    const [isMobile, setIsMobile] = useState(false)


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
                        <Button>Login</Button>
                        <Button>Sign Up</Button>
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