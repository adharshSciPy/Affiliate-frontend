import React from 'react'
import { useState } from 'react'
import { Button, Switch } from 'antd'
import { toggleDarkMode } from '../../util/darkmode'


const Navbar = () => {
    const [isDark, setIsDark] = useState(false)


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
                        <Button>Login</Button>
                        <Button>Sign Up</Button>
                        <Switch onClick={() => toggleDarkMode(setIsDark)}
                            checkedChildren="light"
                            unCheckedChildren="dark"
                            defaultChecked size='large'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar