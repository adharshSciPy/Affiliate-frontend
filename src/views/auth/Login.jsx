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
    if (!email) {
      errors.name = "Name is required"
    }
    if (!password) {
      errors.password = "Password is required"
    }
    if (password !== cPassword) {
      errors.cPassword = "Password not matching"
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

  return (
    <div className='login'>
      <div className="login__container">

        <div className="login__hero">

          <div className="login__heading">
            <h2>Welcome</h2>
            <p>Login as User</p>
          </div>

          <div className="login__form" >
            <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.name && <p>{errors.name}</p>}
            <Input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            {errors.password && <p>{errors.password}</p>}
            <Input placeholder='Confirm password' value={cPassword} onChange={(e) => setCPassword(e.target.value)} />
            {errors.cPassword && <p>{errors.cPassword}</p>}
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
