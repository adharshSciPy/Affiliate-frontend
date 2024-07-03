import { CaretDown, CaretRight } from '@phosphor-icons/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const SideRoutes = ({ route, index, isActive, setActiveIndex }) => {

    const navigate = useNavigate()
    const [isChildren, setIsChildren] = useState(route?.children && route?.children?.length > 0)
    const handleClick = (path) => {
        if (!path) {
            isChildren && setActiveIndex(isActive ? null : index);
        }
        else {
            navigate(path)
        }
    };

    return (
        <div className={`sideroutes`} key={index}>
            <div className={`sideroutes__title ${isActive && 'activesideroute'}`} onClick={() => handleClick(route?.path)}>
                <div className="sideroutes__title--text">
                    <img src={route?.icon} alt="route?.icon" />
                    <p>{route?.title}</p>
                </div>

                <div className="sideroutes__title--button">
                    {isChildren ?
                        isActive
                            ?
                            <CaretDown size={20} color="black" weight="fill" />
                            :
                            <CaretRight size={20} color="white" weight="fill" />
                        :
                        ''
                    }
                </div>
            </div>

            {isChildren && isActive &&
                route?.children.map((child, idx) => (
                    <div className="sideroutes__child" key={idx}>
                        <p>{child.icon}</p>
                        <p>{child.title}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default SideRoutes;
