import { Button } from 'antd'
import React from 'react'
import wrong from '../../assets/images/wrong.png'
import { useNavigate } from 'react-router-dom'

const TryLoginAgain = ({ message = '' }) => {
    const navigate = useNavigate()
    return (
        <div className='tryloginagain'>
            <div className="tryloginagain__image">
                <img src={wrong} alt="" />
            </div>
            <div className="tryloginagain__text">
                <h3>Something wrong happened!</h3>
                <p>{message}</p>
            </div>
            <div className="tryloginagain__button">
                <Button onClick={() => navigate('/auth/login')}>Please Login Again</Button>
            </div>
        </div>
    )
}

export default TryLoginAgain