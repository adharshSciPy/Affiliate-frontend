import { Bell, Gear } from '@phosphor-icons/react'
import React from 'react'

const DashboardNavbar = ({ isOpen, message, description }) => {
    return (
        <div className={`dashnavbar ${!isOpen ? 'fullwidth' : ''}`}>
            <div className="dashnavbar__container">
                <div className="dashnavbar__text">
                    <h3>{message}</h3>
                    <p>Get the overview of all your progress and Let’s get back to the work</p>
                </div>

                <div className="dashnavbar__buttons">
                    <button><Bell size={20} color='white' weight="fill" /></button>
                    <button><Gear size={20} color='white' weight="fill" /></button>
                </div>
            </div>
        </div>
    )
}

export default DashboardNavbar