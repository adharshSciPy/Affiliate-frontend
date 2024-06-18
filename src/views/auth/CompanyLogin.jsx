import React, {useState}from "react";
import { Input, Button } from "antd";
import LoginImg from "../../assets/images/login-img.png";

const CompanyLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("")
  const [errors, setErrors] = useState({});

// const validate =()=>{
//   const error ={}
//   // const mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!email) {
//     error.email="email is required"
//   } 
//   // else if (!mail.test(String(email).toLowerCase())) {
//   //   error.email="format error"
//   // }
// }

const validation =()=>{
  const errors={}
  if(!email){
    errors.email="email required"
  }
  if(!password){
    errors.password="password required"
  }
  if(password!==cPassword){
    errors.cPassword="password not matching"
  }
  return errors
}

  // const validateEmail = (email) => {
  //   const mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return mail.test(String(email).toLowerCase());
  // };

  // const validatePassword = (password) => {
  //   // Password must be at least 6 characters long and contain at least one number
  //   const pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
  //   return pass.test(String(password));
  // };
  
  const handleSubmit = (e)=>{
    console.log("hello");
    e.preventDefault();
    const validationError=validation()
    setErrors(validationError)
    if(Object.keys(validationError).length===0){
      console.log('form submit successfully')
    }
  }
  

//   const handleSubmit = (e) => {
//     console.log("hello");
//     e.preventDefault();
//     const validationErrors= validate()
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//   } else {
//       // Proceed with form submission
//       console.log('Form submitted successfully:');
//   }

//     // if (!validateEmail(email)) {
//     //   setError('Invalid email format.');
//     //   return;
//     // }

//     // if (!validatePassword(password)) {
//     //   setError('Password must be at least 6 characters long and contain both letters and numbers.');
//     //   return;
//     // }

    
//     // if (email === 'email' && password === 'password') {
//     //     alert('Login successful!');
//     //     setError('');
//     // } else {
//     //     setError('Invalid username or password');
//     // }
// };
  return (
    <div className='login' >
      <div className="login__container">
        <div className="login__hero">
          <div className="login__heading">
            <h2>welcome</h2>
            <p>Login as Company</p>
          </div>
          <div className="login__form">
            <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
           {errors.email&&<p>{errors.email}</p>}
            <Input placeholder="Password" value={password}onChange={(e) => setPassword(e.target.value)} />
            {errors.password&&<p>{errors.password}</p>}
            <Input placeholder="Confirm password" value={cPassword} onChange={(e) => setCPassword(e.target.value)} />
            {errors.cPassword&&<p>{errors.cPassword}</p>}
           
            <Button  disabled ={false}size="large" onClick={(e)=>handleSubmit(e)}>
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

export default CompanyLogin;
