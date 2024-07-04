import { CaretDown, CaretRight } from '@phosphor-icons/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion';

const SideRoutes = ({ route, index, isActive, setActiveIndex, isWidthWorthy }) => {

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
            <div className={`sideroutes__title ${isActive && 'activesideroute'}`}
                style={!isWidthWorthy ? { justifyContent: 'center' } : {}}
                onClick={() => handleClick(route?.path)}>
                <div className="sideroutes__title--text">
                    <img
                        src={route?.icon}
                        alt="sidebar--icon"
                        style={!isWidthWorthy ? {
                            height: '1.5rem',
                            width: '1.5rem'
                        } : {}}
                    />

                    <AnimatePresence initial={false}>
                        {isWidthWorthy
                            &&
                            <motion.p
                                key={route?.title} // Ensure the key is unique for each item
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, blur: 10, x: -20 }} // Add additional properties for a smooth exit
                                transition={{ duration: 0.2, ease: [0.42, 0, 1, 1], delay: index * 0.06 }} // Adjust the duration as needed
                            >
                                {route?.title}
                            </motion.p>}
                    </AnimatePresence>
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
