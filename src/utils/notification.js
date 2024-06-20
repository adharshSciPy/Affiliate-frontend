import { notification } from 'antd';

const openNotification = (api = false, type = '', message, description, placement) => {

    if (api) {
        api[type]({
            message,
            placement,
            description
        });
    }
    else {
        notification.open({
            message,
            placement,
            description
        });
    }
};

export { openNotification }