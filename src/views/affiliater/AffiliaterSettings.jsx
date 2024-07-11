import { React, useState } from 'react'
import { Tabs } from 'antd';
import AffiliaterSecurity from './AffiliaterSecurity';
import AffiliaterPolicies from './AffiliaterPolicies';
import AffiliaterAgreement from './AffiliaterAgreement';
import AffiliaterNotification from './AffiliaterNotification';
import AffiliaterHelp from './AffiliaterHelp';

function AffiliaterSettings() {
    const [activeKey, setActiveKey] = useState('1');
    const handleTabChange = (key) => {
        setActiveKey(key);
    };
    return (
        <div className="affiliatersettings">
            <div className="affiliatersettings__container">
                <div className="affiliatersettings__heading">Settings</div>
                <div className="affiliatersettings__tabs">
                    <Tabs
                        defaultActiveKey="1"
                        tabPosition='top'
                        onChange={handleTabChange}
                        items={[
                            {
                                label: 'Security & Password',
                                key: '1',
                                children: (
                                    <>
                                        {activeKey === '1' && (
                                            <div className="affiliatersettings__details">
                                                <h3>Security & Password</h3>
                                                <p>See information regarding your Security and Password</p>
                                            </div>
                                        )}
                                        <AffiliaterSecurity />
                                    </>
                                ),
                            },
                            {
                                label: 'Privacy & Policies',
                                key: '2',
                                children: <AffiliaterPolicies />,
                            },
                            {
                                label: 'User Agreement',
                                key: '3',
                                children: <AffiliaterAgreement />,
                            },
                            {
                                label: 'Notifications',
                                key: '4',
                                children: <AffiliaterNotification />,
                            },
                            {
                                label: 'Help?',
                                key: '5',
                                children: <AffiliaterHelp />,
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default AffiliaterSettings