import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Affiliate from "../../assets/images/growth.png"
import User from "../../assets/images/user 1.png"
import { roles } from "../../constants/roles.js";

function RegisterModal({ setRole }) {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <>
            <Modal
                centered
                open={isOpen}
                onOk={() => setIsOpen(false)}
                onCancel={() => setIsOpen(false)}
                footer={null}
                width={850}
                closable={false}
            >
                <div className='registermodal'>
                    <div className='registermodal__firstcontainer' onClick={() => {
                        setRole(roles.AFFILIATER_ROLE)
                        setIsOpen(false)
                    }}>
                        <div className='registermodal__firstimage'><img src={Affiliate} /></div>
                        <div className='registermodal__firstheading'><p>Register as Affiliate Marketer</p></div>
                        <div className='registermodal__firsttext'><p>Affiliate marketing is like a partnership between companies and individuals.
                            You promote products or services, and when someone makes a purchase through your unique link, you earn a commission.
                            It's a win-win: companies get sales, and you earn money without handling the product directly.
                        </p></div>
                    </div>
                    <div className='registermodal__line'></div>
                    <div className='registermodal__secondcontainer' onClick={() => {
                        setRole(roles.CUSTOMER_ROLE)
                        setIsOpen(false)
                    }}>
                        <div className='registermodal__secondimage'><img src={User} /></div>
                        <div className='registermodal__secondheading'><p>Register as a Customer</p></div>
                        <div className='registermodal__secondtext'><p>Customers are the lifeblood of any business.
                            They're the individuals or entities who purchase goods or services from a company in exchange for money.
                            Understanding their needs, preferences, and behaviors is crucial for businesses to thrive.
                            Building strong relationships with customers through excellent service.
                        </p></div>
                    </div>
                </div>
            </Modal >
        </>
    )
}

export default RegisterModal;