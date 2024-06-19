import React, { useState } from "react";
import { Input, Button } from "antd";
import LoginImg from "../../assets/images/login-img.png";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validation = () => {
    const errors = {};
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const passRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!email) {
      errors.email = "email required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email format";
    }
    if (!password) {
      errors.password = "Password required";
    } else if (!passRegex.test(password)) {
      errors.password =
        "Password must be at least 8 characters long and contain an uppercase letter, a lowercase letter, a number and a special character";
    }
    if (cPassword ===""){
      errors.cPassword= "";
    }
    else if (password !== cPassword) {
      errors.cPassword = "password not matching";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    console.log("hello");

    e.preventDefault();

    const validationError = validation();
    setErrors(validationError);
    if (Object.keys(validationError).length === 0) {
      console.log("form submit successfully");
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__hero">
          <div className="login__heading">
            <h2>Welcome</h2>
            <p>Login as Admin</p>
          </div>

          <div className="login__form">
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p>{errors.email}</p>}
            <Input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p>{errors.password}</p>}
            <Input
              placeholder="Confirm password"
              value={cPassword}
              onChange={(e) => setCPassword(e.target.value)}
            />
            {errors.cPassword && <p>{errors.cPassword}</p>}
            <Button disabled={false} onClick={handleSubmit} size="large">
              Submit
            </Button>
          </div>
        </div>

        <div className="login__image">
          <img src={LoginImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
