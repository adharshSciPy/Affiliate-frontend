import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import Affiliate from "../../assets/images/growth.png";
import User from "../../assets/images/user 1.png";
import { roles } from "../../constants/roles.js";

function RegisterModal({ role, setRole }) {
    const [isOpen, setIsOpen] = useState(true);
    const [showRoleContent, setShowRoleContent] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false); 

    useEffect(() => {
        if (role) {
            setIsTransitioning(true);   
            const timer = setTimeout(() => {
                setShowRoleContent(true);
                setIsTransitioning(false);
            }, 500);
            return () => clearTimeout(timer);
        } else {
            setShowRoleContent(false);
        }
    }, [role]);

    const initialPos = role === roles.AFFILIATER_ROLE ? { x: -100 } : { x: 100 }; 

    const handleGoBack = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setRole(null);
            setIsTransitioning(false);
        }, 500);
    };

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
                maskClosable={false}
                mask={true}
                style={{minHeight: '50%', height: '50%'}}
            >
                <AnimatePresence initial={false}>
                    {!role ? (
                        <motion.div
                            key="roleSelection"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="registermodal"
                            style={{minHeight: '100%', height: '100%'}}
                        >
                            <div className="registermodal__container" onClick={() => setRole(roles.AFFILIATER_ROLE)}>
                                <div className="registermodal__image">
                                    <img src={Affiliate} alt="Affiliate Marketer" />
                                </div>
                                <div className="registermodal__heading">
                                    <h3>Affiliate Marketer</h3>
                                </div>
                                <div className="registermodal__text">
                                    <p>Affiliate marketing is like a partnership between companies and individuals.
                                        <div className="registermodal__text--mobile">You promote products or services, and when someone makes a purchase through your unique link, you earn a commission.
                                            It's a win-win: companies get sales, and you earn money without handling the product directly.
                                        </div>
                                    </p>
                                </div>
                            </div>

                            <div className="registermodal__line"></div>

                            <div className="registermodal__container" onClick={() => setRole(roles.CUSTOMER_ROLE)}>
                                <div className="registermodal__image">
                                    <img src={User} alt="Customer" />
                                </div>
                                <div className="registermodal__heading">
                                    <h3>Customer</h3>
                                </div>
                                <div className="registermodal__text">
                                    <p>Affiliate marketing is like a partnership between companies and individuals.
                                        <div className="registermodal__text--mobile">You promote products or services, and when someone makes a purchase through your unique link, you earn a commission.
                                            It's a win-win: companies get sales, and you earn money without handling the product directly.
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        showRoleContent && !isTransitioning && ( // Prevent new content during transition
                            <motion.div
                                key={role}
                                initial={initialPos}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: initialPos.x > 0 ? 100 : -100 }}
                                transition={{ duration: 0.5 }}
                                className="registermodal__selectedcontainer"
                                style={{minHeight: '100%', height: '100%'}}
                            >
                                {role === roles.AFFILIATER_ROLE && (
                                    <>
                                        <div className="registermodal__image">
                                            <img src={Affiliate} alt="Affiliate Marketer" />
                                        </div>
                                        <div className="registermodal__heading">
                                            <h3>Register as Affiliate Marketer</h3>
                                        </div>
                                        <div className="registermodal__text">
                                            <p>Affiliate marketing is like a partnership between companies and individuals.
                                                <div className="registermodal__text--mobile">You promote products or services, and when someone makes a purchase through your unique link, you earn a commission.
                                                    It's a win-win: companies get sales, and you earn money without handling the product directly.
                                                </div>
                                            </p>
                                        </div>
                                    </>
                                )}
                                {role === roles.CUSTOMER_ROLE && (
                                    <>
                                        <div className="registermodal__image">
                                            <img src={User} alt="Customer" />
                                        </div>
                                        <div className="registermodal__heading">
                                            <h3>Register as a Customer</h3>
                                        </div>
                                        <div className="registermodal__text">
                                            <p>Affiliate marketing is like a partnership between companies and individuals.
                                                <div className="registermodal__text--mobile">You promote products or services, and when someone makes a purchase through your unique link, you earn a commission.
                                                    It's a win-win: companies get sales, and you earn money without handling the product directly.
                                                </div>
                                            </p>
                                        </div>
                                    </>
                                )}

                                <div className="registermodal__button">
                                    <Button onClick={handleGoBack}>Go Back</Button>
                                    <Button type='primary' onClick={() => { setIsOpen(false) }}>Continue</Button>
                                </div>
                            </motion.div>
                        )
                    )}
                </AnimatePresence>
            </Modal>
        </>
    );
}

export default RegisterModal;
