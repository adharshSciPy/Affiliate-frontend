import React from 'react'
import LoginImg from '../../assets/images/login-img.png'
import { Button, Input, Tooltip } from 'antd'

const Login = () => {
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
              name='firstName'
              size='large'
            />
          </div>

          <div className="auth__form--input">
            <p>Password</p>
            <Tooltip title="Password must contain at least 8 characters, including uppercase, lowercase, number, and symbol" placement="topRight">
              <Input.Password
                placeholder='Password should be alphanumeric'
                name='password'
                size='large'
              />
            </Tooltip>
          </div>

          <div className="auth__form--footer">
            <Button size='large'>Reset</Button>
            <Button size='large'>Save</Button>
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