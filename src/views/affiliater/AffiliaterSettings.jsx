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
                                )
                            },
                            {
                                label: 'Privacy & Policies',
                                key: '2',
                                children: (
                                    <>
                                        {activeKey === '2' && (
                                            <div className="affiliatersettings__details">
                                                <h3>Privacy & Policies</h3>
                                                <p>See information regarding your Privacy & Policies</p>
                                            </div>
                                        )}
                                        <AffiliaterPolicies />
                                    </>

                                )
                            },
                            {
                                label: 'User Agreement',
                                key: '3',
                                children: (
                                    <>
                                        {activeKey === '3' && (
                                            <div className="affiliatersettings__details">
                                                <h3>User Agreement</h3>
                                                <p>See information regarding your User Agreement</p>
                                            </div>
                                        )}
                                        <AffiliaterAgreement />
                                    </>
                                )
                            },
                            {
                                label: 'Notifications',
                                key: '4',
                                children: (
                                    <>
                                        {activeKey === '4' && (
                                            <div className="affiliatersettings__details">
                                                <h3>Enable Desktop Notification</h3>
                                                <p>Decide whether you want to be notified of new messages or updates</p>
                                            </div>
                                        )}
                                        <AffiliaterNotification />
                                    </>
                                )
                            },
                            {
                                label: 'Help?',
                                key: '5',
                                children: (
                                    <>
                                        {activeKey === '5' && (
                                            <div className="affiliatersettings__details">
                                                <h3>Help?</h3>
                                                <p>See information regarding your Help Settings</p>
                                            </div>
                                        )}
                                        <AffiliaterHelp />
                                    </>
                                )
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default AffiliaterSettings