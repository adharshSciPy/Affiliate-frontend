import React, { createContext, useContext, useState } from 'react';
import { notification as AntNotification } from 'antd';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    const notification = (type, message, description, placement, duration = 2) => {
        const key = Date.now();
        AntNotification[type]({
            key,
            message,
            description,
            placement,
            duration,

        });
        setNotifications(prevNotifications => [...prevNotifications, key]);
    };

    return (
        <NotificationContext.Provider value={{ notification }}>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotification = () => useContext(NotificationContext);
