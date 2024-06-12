import React from 'react'
import { useState } from 'react'

const Navbar = () => {
    const [isDark, setIsDark] = useState(false)

    const toggleDarkMode = () => {
        setIsDark((prev) => {
            const newTheme = !prev;

            if (newTheme) {
                document.body.classList.add('dark-theme');
                document.body.classList.remove('light-theme');
            } else {
                document.body.classList.add('light-theme');
                document.body.classList.remove('dark-theme');
            }

            return newTheme; // Return the new state
        });
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
                        <button>Login</button>
                        <button>Sign Up</button>
                        <button onClick={() => toggleDarkMode()}>toggle</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar