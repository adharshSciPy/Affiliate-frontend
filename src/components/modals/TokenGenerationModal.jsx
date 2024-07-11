import React, { useState, useEffect } from 'react'
import { Button, Modal, Input } from 'antd'

import { useGenerateTokenMutation } from '../../features/api/adminApiSlice'
import { PercentageOutlined } from '@ant-design/icons'
import { useNotification } from '../../context/NotificationContext'
import useAuth from '../../hooks/useAuth'
import tokenIcon from '../../assets/dashboard-icons/affiliaterdash1.png'

const TokenGenerationModal = ({ isModal, setIsModal, userDetails, refetch }) => {

    const fields = {
        useCount: '',
        discount: ''
    }

    const { notification } = useNotification();
    const [form, setForm] = useState(fields);
    const [errors, setErrors] = useState(fields);
    const [touched, setTouched] = useState(fields);
    const [isDisabled, setIsDisabled] = useState(true);
    const [generateToken] = useGenerateTokenMutation();
    const { loggedInUserId } = useAuth();


    // button disabled state management
    useEffect(() => {
        const hasErrors = Object.values(errors).some(error => error !== null && error !== false);
        setIsDisabled(hasErrors);
    }, [errors]);

    const close = () => {
        setIsModal(false)
    }

    // validate fields
    const validateField = (name, value) => {
        let errorMessage = false;

        switch (name) {
            case 'discount':
                if (value.trim() === '') {
                    errorMessage = 'Discount field is required'
                }
                else if (!/^\d+$/.test(value)) {
                    errorMessage = 'Please enter a valid discount';
                }
                break;

            case 'useCount':
                if (value.trim() === '') {
                    errorMessage = 'Use Times field is required'
                }
                else if (!/^\d+$/.test(value)) {
                    errorMessage = 'Please enter a Number';
                }
                break;
            default:
                break;
        }
        setErrors(prevErrors => ({ ...prevErrors, [name]: errorMessage }));
    }

    // focus tracking of input fields
    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched({ ...touched, [name]: true });
        validateField(name, value);
    };

    // input field onchange
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        validateField(name, value);
    }

    const handleReset = () => {
        setForm(fields);
        setErrors(fields);
        setTouched(fields);
        setIsDisabled(true);
    }

    const handleGenerate = async () => {
        let userId = userDetails?.id
        let adminId = loggedInUserId;
        let payload = {
            discount: form.discount,
            useCount: form.useCount
        }
        try {
            const response = await generateToken({ payload, userId, adminId }).unwrap();
            if (response) {
                notification('success', 'Token Generated Succesfully', response?.data?.message, 'bottomRight');
                setIsModal(false);
                refetch();
                handleReset()
            }
        } catch (err) {
            setIsModal(false);
            notification('error', 'Token Generated Failed', err?.data?.message, 'bottomRight');
        }
    }
    return (
        <Modal
            centered
            open={isModal}
            width={600}
            onOk={() => verify()}
            onCancel={() => close()}
            footer={null}
        >

            <div className="tokengenerationmodal">
                <div className="tokengenerationmodal__header">
                    <img src={tokenIcon} alt="" />
                    <h3>Generate Token</h3>
                </div>

                <div className="tokengenerationmodal__body">

                    <div className="tokengenerationmodal__body--title">
                        <p>{userDetails?.firstName} {userDetails?.lastName}</p>
                        <p>{userDetails?.email}</p>
                    </div>

                    <div className="tokengenerationmodal__container">
                        <div className="tokengenerationmodal__container--input">
                            <label htmlFor="">Discount</label>
                            <Input
                                name='discount'
                                value={form.discount}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Token discount'
                                addonAfter={<PercentageOutlined />}
                            />
                            <div className="tokengenerationmodal__container--error">
                                {touched.discount && errors.discount && (
                                    <p>{errors.discount}</p>
                                )}
                            </div>
                        </div>

                        <div className="tokengenerationmodal__container--input">
                            <label>Total Use Count</label>
                            <Input
                                name='useCount'
                                value={form.useCount}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Total use count'
                            />
                            <div className="tokengenerationmodal__container--error">
                                {touched.useCount && errors.useCount && (
                                    <p>{errors.useCount}</p>
                                )}
                            </div>
                        </div>

                        <div className="tokengenerationmodal__container--footer">
                            <Button onClick={handleReset}>Reset</Button>
                            <Button disabled={isDisabled} type='primary' onClick={() => handleGenerate()}>Generate</Button>
                        </div>
                    </div>

                </div>
            </div>
        </Modal>
    )
}

export default TokenGenerationModal