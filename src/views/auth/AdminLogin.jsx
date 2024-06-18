import React, { useState } from 'react'
import { Input, Button } from 'antd';
import LoginImg from '../../assets/images/login-img.png'

const AdminLogin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cPassword, setCPassword] = useState('')

  return (
    <div className='login'>
      <div className="login__container">

        <div className="login__hero">

          <div className="login__heading">
            <h2>Welcome</h2>
            <p>Login as User</p>
          </div>

          <div className="login__form">
            <Input placeholder="Email" value={email} />
            <Input placeholder='Password' value={password} />
            <Input placeholder='Confirm password' value={cPassword} />
            <Button disabled={true} size='large'>Submit</Button>
          </div>
        </div>

        <div className="login__image">
          <img src={LoginImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AdminLogin