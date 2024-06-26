import React from 'react'
import pagenotfoundimg from '../../assets/images/pagenotfound.png'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

const PageNotFound = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/logged-in')
    }
    return (
        <div className='pagenotfound'>
            <div className="pagenotfound__image">
                <img src={pagenotfoundimg} alt="page-not-found-404" />
            </div>

            <div className="pagenotfound__text">
                <p>Sorry Requested Resource Not Found</p>
            </div>

            <div className="pagenotfound__button">
                <Button onClick={handleClick} type='primary'>Go Back</Button>
            </div>
        </div>
    )
}

export default PageNotFound