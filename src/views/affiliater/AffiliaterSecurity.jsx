import { React, useState } from 'react'
import { Button, Input } from 'antd';

function AffiliaterSecurity() {
    const [isVerified, setIsVerified] = useState(false);
    const [verificationCode, setVerificationCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [verificationError, setVerificationError] = useState('');
    const handleVerification = () => {
        // Simulate verification logic
        if (verificationCode === '12345') { // replace with actual verification logic
            setIsVerified(true);
            setVerificationError('');
        } else {
            setVerificationError('Verification failed. Please try again.');
        }
    };
    return (
        <div className='affiliatersecurity'>
            <div className="affiliatersecurity__heading">
                Security & Password
            </div>
            <div className="affiliatersecurity__container">
                <p className='text'>Reset your Password</p>
                <p className='font'>We can confirm that the scope of the password reset we completed last week did protect all impacted users.</p>

                {!isVerified ? (
                    <div className='affiliatersecurity__verifyinput'>
                        <label>
                            To continue, first verify it's you
                            <Input
                                type="text"
                                value={verificationCode}
                                onChange={(e) => setVerificationCode(e.target.value)}

                            />
                            {verificationError && <p style={{ color: 'red' }}>{verificationError}</p>}
                        </label>

                        <div className="affiliatersecurity__submitbutton">
                            <Button type='primary' success onClick={handleVerification}>Submit</Button>
                        </div>
                    </div>
                ) : (
                    <div className='affiliatersecurity__verifyinput'>
                        <label>
                            Enter your new password
                            <Input
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </label>
                        <div className="affiliatersecurity__submitbutton">
                            <Button type='primary' success>Submit</Button>
                        </div>
                    </div>
                )}

                <div className="affiliatersecurity__delete">
                    <p>Delete your account</p>
                    <div className="affiliatersecurity__deletebut">
                        <Button className='del' type='primary' danger>Delete</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AffiliaterSecurity