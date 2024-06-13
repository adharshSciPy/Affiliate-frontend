import React from 'react'
import Icon1 from '../../assets/client-icons/Icon-1.svg'
import Icon2 from '../../assets/client-icons/Icon-2.svg'
import Icon3 from '../../assets/client-icons/Icon-3.svg'
import Icon4 from '../../assets/client-icons/Icon-4.svg'

const Achievements = () => {

    const counts = [
        {
            count: '2,256,341',
            title: 'Members',
            icon: Icon1
        },
        {
            count: '3,23,321',
            title: 'Event Bookings',
            icon: Icon3
        },
        {
            count: '46,0231',
            title: 'Clubs',
            icon: Icon2
        },
        {
            count: '1,96,762',
            title: 'Members',
            icon: Icon4
        }
    ]

    return (
        <div className='achievements'>
            <div className="achievements__body">

                <div className="achievements__header">
                    <p>Helping <span>business</span></p>
                    <p><span>reinvent itself</span></p>
                    <p>We reached here with our dedication and hard work</p>
                </div>

                <div className="achievements__counts">
                    {
                        counts.map((item, index) => {
                            return (
                                <div className="achievements__count" key={index}>
                                    <div className="achievements__icon">
                                        <img src={item.icon} alt="achievements-icons" />
                                    </div>
                                    <div className="achievements__text">
                                        <p>{item.count}</p>
                                        <p>{item.title}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Achievements