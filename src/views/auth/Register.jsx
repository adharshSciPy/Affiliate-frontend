import React, { useState, useEffect } from 'react';
import { Button, Input, Tooltip } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useUserRegisterMutation } from '../../features/api/authApiSlice';
import LoginImg from '../../assets/images/login-img.png';
import { useNotification } from '../../context/NotificationContext';
import RegisterModal from "./RegisterModal"
import { roles } from "../../constants/roles.js";

const Register = () => {
  const navigate = useNavigate();
  const [userRegistration] = useUserRegisterMutation();
  const { notification } = useNotification();

  // input fields
  const fields = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    cPassword: '',
  };

  const [form, setForm] = useState(fields);
  const [errors, setErrors] = useState(fields);
  const [touched, setTouched] = useState(fields);
  const [isDisabled, setIsDisabled] = useState(true);
  const [role, setRole] = useState(null)

  // to manage submit button's disable state
  useEffect(() => {
    const hasErrors = Object.values(errors).some(error => error !== null && error !== false);
    setIsDisabled(hasErrors);
  }, [errors]);

  // custom validation for input fields
  const validateField = (name, value) => {
    let errorMessage = false;

    switch (name) {
      case 'firstName':
      case 'lastName':
        errorMessage = value.trim() === '' ? 'This field is required.' : false;
        break;
      case 'email':
        if (value.trim() === '') {
          errorMessage = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          errorMessage = 'Please enter a valid email address.';
        }
        break;
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
      case 'cPassword':
        if (value.trim() === '') {
          errorMessage = 'Confirm password is required.';
        } else if (value !== form.password) {
          errorMessage = 'Passwords do not match.';
        }
        break;
      default:
        break;
    }

    setErrors(prevErrors => ({ ...prevErrors, [name]: errorMessage }));
  };

  // reset form fields
  const handleReset = () => {
    setForm(fields);
    setErrors(fields);
    setTouched(fields);
    setIsDisabled(true);
  };

  // input field onchange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    validateField(name, value);
  };

  // focus tracking of input fields
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    validateField(name, value);
  };

  console.log("role", role)

  // submit button
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.password,
        role: role
      };
      const result = await userRegistration({ payload }).unwrap();
      if (result) {
        notification('success', 'Registration Succesfull', result?.data?.message, 'bottomRight');
        navigate('/auth/login');
      }
    } catch (error) {
      notification('error', 'Registration Failed', error?.data?.message, 'bottomRight');
    }
  };

  return (
    <div className='auth'>
      <div className="auth__container">
        <div className="auth__form">
          <div className="auth__form--heading">
            <h2>Welcome</h2>
            <p>{!role && 'Create a new free account'}</p>
            <p>{role && 'Create a new free account as a '} <span>{role === roles.AFFILIATER_ROLE ? 'Affiliater' : role === roles.CUSTOMER_ROLE ? 'Customer' : ''}</span></p>
          </div>

          <div className="auth__form--input">
            <p>First Name</p>
            <Input
              placeholder='John'
              name='firstName'
              value={form.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              size='medium'
            />
            {touched.firstName && errors.firstName && (
              <p className='error-message'>{errors.firstName}</p>
            )}
          </div>

          <div className="auth__form--input">
            <p>Last Name</p>
            <Input
              placeholder='Doe'
              name='lastName'
              value={form.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              size='medium'
            />
            {touched.lastName && errors.lastName && (
              <p className='error-message'>{errors.lastName}</p>
            )}
          </div>

          <div className="auth__form--input">
            <p>Email</p>
            <Input
              placeholder='john@example.com'
              name='email'
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              size='medium'
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
                size='medium'
              />
            </Tooltip>
            {touched.password && errors.password && (
              <p className='error-message'>{errors.password}</p>
            )}
          </div>

          <div className="auth__form--input">
            <p>Confirm Password</p>
            <Input.Password
              placeholder='Re-type password'
              name='cPassword'
              value={form.cPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              size='medium'
            />
            {touched.cPassword && errors.cPassword && (
              <p className='error-message'>{errors.cPassword}</p>
            )}
          </div>

          <div className="auth__form--footer">
            <Button onClick={handleReset}>Reset</Button>
            <Button disabled={isDisabled} onClick={handleSubmit}>Save</Button>
          </div>
        </div>

        <div className="auth__image">
          <img src={LoginImg} alt="" />
        </div>
        <RegisterModal isOpen={true} role={role} setRole={setRole} />
      </div>
    </div>
  );
};

export default Register;
