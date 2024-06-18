import React, { useState } from 'react'
import { Input, Button } from 'antd';
import LoginImg from '../../assets/images/login-img.png'

const AdminLogin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cPassword, setCPassword] = useState('')
  const [error, setError] = useState('');


  const validateEmail = (email) => {
    const mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return mail.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    // Password must be at least 6 characters long and contain at least one number
    const pass = /^(?=.*[0-9])(?=.*[a-zA-Z]).{6,}$/;
    return pass.test(String(password));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Invalid email format.');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 6 characters long and contain both letters and numbers.');
      return;
    }

    if (password !== cPassword) {
      setError('Passwords do not match.');
      return;
    }


      if (email === email && password === password) {
        alert('Login successful!');
   
      } else {
        setError('Invalid email or password, please try again.');
      }
    
  };

  return (
    <div className='login' >
      <div className="login__container">

        <div className="login__hero">

          <div className="login__heading">
            <h2>Welcome</h2>
            <p>Login as Admin</p>
          </div>

          <div className="login__form">
            <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <Input placeholder='Confirm password' value={cPassword} onChange={(e) => setCPassword(e.target.value)} />
            {error && <div className="error">{error}</div>}
            <Button disabled={false} onClick={handleSubmit} size='large'>Submit</Button>
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