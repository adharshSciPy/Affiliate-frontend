import React from 'react'
import { Button } from "antd";

function AffiliaterNotification() {
    return (
        <div className='affiliaternotification'>
            <div className="affiliaternotification__buttoncontainer">
                <div className="affiliaterhelp__buttongreen">
                <Button type='primary' success>On</Button>
                </div>
                <div className="affiliaterhelp__buttongrey">
                <Button className='off' style={{backgroundColor:'var(--text-grey)'}} type='primary' >Off</Button>
                </div>
            </div>
            <div className="affiliaternotification__notification">
                <h2>Notifications</h2>
            </div>
        </div>
    )
}

export default AffiliaterNotification