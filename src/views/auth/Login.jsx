import React, { useState } from 'react'
import { Input, Button } from 'antd';
import LoginImg from '../../assets/images/login-img.png'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cPassword, setCPassword] = useState('')
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {}
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if (!email) {
      errors.email = "Email is required"
    } else if (!emailRegex.test(email)) {
      errors.email = "Email formate is required"
    }
    if (!password) {
      errors.password = "Password is required"
    } else if (!passwordRegex.test(password)) {
      errors.password = 'Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character'
    }
    if (cPassword === "") {
      errors.cPassword = "Re-type the password"
    } else if (password !== cPassword) {
      if (password === "" || !passwordRegex.test(password)) {
        errors.password = "password required"
      }
      else {
        errors.cPassword = "Password not matching"
      }
    }
    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission
      console.log('Form submitted successfully');
    }
  }
  const handleReset = () => {
    setEmail("")
    setPassword("")
    setCPassword("")
    setErrors("")
  }

  return (
    <div className='login'>
      <div className="login__container">

        <div className="login__hero">

          <div className="login__heading">
            <h2>Welcome</h2>
            <p>Login as User</p>
          </div>

          <div className="login__form" >
            <Input placeholder="john@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <p>{errors.email}</p>}
            <Input type='password' placeholder='Password should be alphanumeric' value={password} onChange={(e) => setPassword(e.target.value)} />
            {errors.password && <p>{errors.password}</p>}
            <Input type='password' placeholder='Re-type password' value={cPassword} onChange={(e) => setCPassword(e.target.value)} />
            {errors.cPassword && <p>{errors.cPassword}</p>}
            <Button onClick={() => handleReset()} size='large'>Reset</Button>
            <Button onClick={(e) => handleSubmit(e)} disabled={false} size='large'>Submit</Button>
          </div>
        </div>

        <div className="login__image">
          <img src={LoginImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login
