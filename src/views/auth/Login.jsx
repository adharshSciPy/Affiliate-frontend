import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input, Tooltip } from 'antd'
import { useDispatch } from 'react-redux'
import LoginImg from '../../assets/images/login-img.png'

import { useUserLoginMutation } from '../../features/api/authApiSlice'
import { useNotification } from '../../context/NotificationContext'
import { setLogin } from '../../features/slice/authSlice'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [userLogin] = useUserLoginMutation()
  const { notification } = useNotification()

  // input fields
  const fields = {
    email: 'johndoe@gmail.com',
    password: 'JOHNjohn@1'
  }

  const [form, setForm] = useState(fields)
  const [errors, setErrors] = useState(fields)
  const [touched, setTouched] = useState(fields)
  const [isDisabled, setIsDisabled] = useState(true)

  // to manage submit button's disable state
  useEffect(() => {
    const hasErrors = Object.values(errors).some(error => error !== null && error !== false);
    setIsDisabled(hasErrors);
  }, [errors]);

  // custom validation for input fields
  const validateField = (name, value) => {
    let errorMessage = false
    switch (name) {
      case 'email':
        if (value.trim() === '') {
          errorMessage = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          errorMessage = 'Please enter a valid email address'
        }
        break
      case 'password':
        if (value.trim() === '') {
          errorMessage = 'Password is required.';
        } else if (value.length < 8) {
          errorMessage = 'Password must be at least 8 characters.';
        } else if (!/[a-z]/.test(value)) {
          errorMessage = 'Password must contain at least one lowercase letter.';
        } else if (!/[A-Z]/.test(value)) {
          errorMessage = 'Password must contain at least one uppercase letter.';
        } else if (!/\d/.test(value)) {
          errorMessage = 'Password must contain at least one number.';
        } else if (!/[!@#$%^&*()_\-+[\]{}|;:',.<>?]/.test(value)) {
          errorMessage = 'Password must contain at least one special character.';
        }
        break;
      default:
        break
    }
    setErrors(prevErrors => ({ ...prevErrors, [name]: errorMessage }));
  }

  // reset form fields
  const handleReset = () => {
    setForm(fields);
    setErrors(fields);
    setTouched(fields);
    setIsDisabled(true);
  }

  // input field onchange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    validateField(name, value);
  }

  // focus tracking of input fields
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    validateField(name, value);
  };

  // submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        email: form.email,
        password: form.password
      }
      const result = await userLogin({ payload }).unwrap()
      if (result) {
        dispatch(setLogin({ accessToken: result?.token }))
        notification('success', 'Login Succesfull', result?.data?.message, 'bottomRight');
        navigate('/logged-in')
      }
    } catch (error) {
      notification('error', 'Login Failed', error?.data?.message, 'bottomRight');

    }
  }

  return (
    <div className='auth'>
      <div className="auth__container">
        <div className="auth__form">
          <div className="auth__form--heading">
            <h2>Welcome</h2>
            <p>Login to your account</p>
          </div>

          <div className="auth__form--input">
            <p>Email</p>
            <Input
              placeholder='john@example.com'
              name='email'
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              size='large'
            />
            {touched.email && errors.email && (
              <p className='error-message'>{errors.email}</p>
            )}
          </div>

          <div className="auth__form--input">
            <p>Password</p>
            <Tooltip title="Password must contain at least 8 characters, including uppercase, lowercase, number, and symbol" placement="topRight">
              <Input.Password
                placeholder='Password should be alphanumeric'
                name='password'
                value={form.password}
                onChange={handleChange}
                onBlur={handleBlur}
                size='large'
              />
            </Tooltip>
            {touched.password && errors.password && (
              <p className='error-message'>{errors.password}</p>
            )}
          </div>

          <div className="auth__form--footer">
            <Button onClick={handleReset} size='large'>Reset</Button>
            <Button disabled={isDisabled} onClick={handleSubmit} size='large'>Login</Button>
          </div>
        </div>

        <div className="auth__image">
          <img src={LoginImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login