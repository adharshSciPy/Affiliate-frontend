import React, { useState, useEffect } from 'react'
import { Button, Input } from 'antd'
import LoginImg from '../../assets/images/login-img.png'

import { useuserRegisterMutation } from '../../features/api/authApiSlice'

const Register = () => {

  const [userRegistration, { isLoading, isSuccess, isError }] = useuserRegisterMutation()

  const fields = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    cPassword: '',
  }


  const [form, setForm] = useState(fields)
  const [errors, setErrors] = useState(fields)
  const [touched, setTouched] = useState(fields)
  const [isDisabled, setIsDisabled] = useState(false)

  const handleReset = () => {
    setForm(fields)
    setErrors(fields)
    setTouched(fields)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });

    // Validate on blur
    if (!value) {
      setErrors({ ...errors, [name]: true });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await userRegistration(payload).unwrap();
      console.log('User registered:', result);
    } catch (error) {
      console.error('Failed to register user:', error);
    }
  };


  return (
    <div className='register'>
      <div className="register__container">

        <div className="register__form">
          <div className="register__form--heading">
            <h2>Welcome</h2>
            <p>Create a new free account as a customer</p>
          </div>

          {/* fist name */}
          <div className="register__form--input">
            <p>First Name</p>
            <Input
              placeholder='John'
              name='firstName'
              value={form.firstName}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
              size='large' />
            {touched.firstName && errors.firstName && (
              <p>First name required</p>
            )}
          </div>

          {/* last name */}
          <div className="register__form--input">
            <p>Last Name</p>
            <Input
              placeholder='Doe'
              name='lastName'
              value={form.lastName}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
              size='large'
            />
            {touched.lastName && errors.lastName && (
              <p>Last name required</p>
            )}
          </div>

          {/* email */}
          <div className="register__form--input">
            <p>Email</p>
            <Input
              placeholder='john@example.com'
              name='email'
              value={form.email}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
              size='large'
            />
            {touched.email && errors.email && (
              <p>Email required</p>
            )}
          </div>

          {/* password */}
          <div className="register__form--input">
            <p>Last Name</p>
            <Input
              placeholder='Password should be alphanumeric'
              name='password'
              value={form.password}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
              size='large'
            />
            {touched.password && errors.password && (
              <p>Password required</p>
            )}
          </div>

          {/* confirm password */}
          <div className="register__form--input">
            <p>Last Name</p>
            <Input
              placeholder='Re-type password'
              name='cPassword'
              value={form.cPassword}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
              size='large'
            />
            {touched.cPassword && errors.cPassword && (
              <p>Confirm Password required</p>
            )}
          </div>

          <div className="register__form--footer">
            <Button onClick={() => handleReset()}>Reset</Button>
            <Button disabled={isDisabled} onClick={() => handleSubmit()}>{isLoading ? 'Loading' : 'Save'}</Button>
          </div>
        </div>

        <div className="register__image">
          <img src={LoginImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Register