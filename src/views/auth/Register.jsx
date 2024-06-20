import React, { useState } from 'react'
import { Button, Input, Tooltip, notification } from 'antd'
import { useNavigate } from 'react-router-dom'

import { openNotification } from '../../utils/notification'
import { useUserRegisterMutation } from '../../features/api/authApiSlice'
import LoginImg from '../../assets/images/login-img.png'

const Register = () => {

  const navigate = useNavigate()
  const [userRegistration] = useUserRegisterMutation()
  const [api, contextHolder] = notification.useNotification()

  // input fields
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

  // handle reset
  const handleReset = () => {
    setForm(fields)
    setErrors(fields)
    setTouched(fields)
  }

  // handle input field change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // handle blur for traking is touched or not
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });

    if (!value) {
      setErrors({ ...errors, [name]: true });
      setIsDisabled(true)
    }
  };

  // final api submi button
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let payload = {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.password,
        role: 'customer'
      }
      const result = await userRegistration({ payload }).unwrap();
      if (result) {
        openNotification(api, 'success', 'Registration Success', result?.data?.message, 'bottomRight')
        navigate('/auth/login')
      }
    } catch (error) {
      console.error('Failed to register user:', error);
      openNotification(api, 'error', 'Registration failed', error?.data?.message, 'bottomRight')
    }
  };


  return (
    <div className='register'>
      {contextHolder}
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
              size='medium'
            />
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
              size='medium'
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
              size='medium'
            />
            {touched.email && errors.email && (
              <p>Email required</p>
            )}
          </div>

          {/* password */}
          <div className="register__form--input">
            <p>Password</p>
            <Tooltip title="Password contains 8 characters" placement="topRight">
              <Input.Password
                placeholder='Password should be alphanumeric'
                name='password'
                value={form.password}
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
                size='medium'
              />
            </Tooltip>
            {touched.password && errors.password && (
              <p>Password required</p>
            )}
          </div>

          {/* confirm password */}
          <div className="register__form--input">
            <p>Confirm Password</p>
            <Input.Password
              placeholder='Re-type password'
              name='cPassword'
              value={form.cPassword}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
              size='medium'
            />
            {touched.cPassword && errors.cPassword && (
              <p>Confirm Password required</p>
            )}
          </div>

          <div className="register__form--footer">
            <Button onClick={handleReset}>Reset</Button>
            <Button disabled={isDisabled} onClick={handleSubmit}>Save</Button>
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