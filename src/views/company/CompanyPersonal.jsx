import { React, useState } from 'react'
import { Input, Button } from 'antd';

function CompanyPersonal() {
    const { TextArea } = Input;
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setForm({ ...form, [name]: value });
    //     validateField(name, value);
    // };
    return (
        <>
            <div className="companypersonal">
                <div className="companypersonal__containerone">
                    <div className="companypersonal__containerone--input">
                        <div className="companypersonal__containerone--label">
                            <p>First Name</p>
                        </div>
                        <div>
                            <Input
                                placeholder='John'
                                name='firstName'
                                // value={form.firstName}
                                // onChange={handleChange}
                                size='medium'
                            />
                        </div>
                    </div>
                    <div className="companypersonal__containerone--input">
                        <div className="companypersonal__containerone--label">
                            <p>Date of Birth</p>
                        </div>
                        <div>
                            <Input
                                placeholder='dd/mm/yyyy'
                                name='DOB'
                                // value={form.firstName}
                                // onChange={handleChange}
                                size='medium'
                            />
                        </div>
                    </div>
                    <div className="companypersonal__containerone--input">
                        <div className="companypersonal__containerone--label">
                            <p>Gender</p>
                        </div>
                        <div>
                            <Input
                                placeholder='Male/Female'
                                name='Gender'
                                // value={form.firstName}
                                // onChange={handleChange}
                                size='medium'
                            />
                        </div>
                    </div>
                    <div className="companypersonal__containerone--input">
                        <div className="companypersonal__containerone--label">
                            <p>Nationality</p>
                        </div>
                        <div>
                            <Input
                                placeholder='Indian'
                                name='firstName'
                                // value={form.firstName}
                                // onChange={handleChange}
                                size='medium'
                            />
                        </div>
                    </div>
                    <div className="companypersonal__containerone--input">
                        <div className="companypersonal__containerone--label">
                            <p>Address</p>
                        </div>
                        <div>
                            <TextArea
                                placeholder='John'
                                name='firstName'
                                // value={form.firstName}
                                // onChange={handleChange}
                                size='medium'
                                rows={4}
                            />
                        </div>
                    </div>
                </div>
                <div className="companypersonal__containertwo">
                    <div className="companypersonal__containertwo--input">
                        <div className="companypersonal__containertwo--label">
                            <p>Last Name</p>
                        </div>
                        <div>
                            <Input
                                placeholder='Doe'
                                name='lastName'
                                // value={form.firstName}
                                // onChange={handleChange}
                                size='medium'
                            />
                        </div>
                    </div>
                    <div className="companypersonal__containertwo--input">
                        <div className="companypersonal__containertwo--label">
                            <p>Phone Number</p>
                        </div>
                        <div>
                            <Input
                                placeholder='9874445631'
                                name='phno'
                                // value={form.firstName}
                                // onChange={handleChange}
                                size='medium'
                            />
                        </div>
                    </div>
                    <div className="companypersonal__containertwo--input">
                        <div className="companypersonal__containertwo--label">
                            <p>Email address</p>
                        </div>
                        <div>
                            <Input
                                placeholder='example@gmail.com'
                                name='phno'
                                // value={form.firstName}
                                // onChange={handleChange}
                                size='medium'
                            />
                        </div>
                    </div>
                    <div className="companypersonal__containertwo--input">
                        <div className="companypersonal__containertwo--label">
                            <p>Website</p>
                        </div>
                        <div>
                            <Input
                                placeholder='example@gmail.com'
                                name='website'
                                // value={form.firstName}
                                // onChange={handleChange}
                                size='medium'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyPersonal