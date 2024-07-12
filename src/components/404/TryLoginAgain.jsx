import { Button } from 'antd'
import React from 'react'
import wrong from '../../assets/images/wrong.png'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const TryLoginAgain = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const { state } = location;

    console.log('state', state)
    return (
        <div className='tryloginagain'>
            <div className="tryloginagain__body">
                <div className="tryloginagain__image">
                    <img src={wrong} alt="" />
                </div>
                <div className="tryloginagain__text">
                    <h3>Something wrong happened!</h3>
                    <p> {state?.message && <p>{state.message}</p>}</p>
                </div>
                <div className="tryloginagain__button">
                    <Button onClick={() => navigate('/auth/login')}>Please Login Again</Button>
                </div>

            </div>

        </div>
    )
}

export default TryLoginAgain