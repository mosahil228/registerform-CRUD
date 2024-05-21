import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate,useLocation } from "react-router-dom";
import { useAuth } from '../../context/auth';

const Login = () => {
  const navigate = useNavigate();
  const location=useLocation();
  const [userData, setUserData] = useState({
   email: "", password: ""
  })
  const[auth,setAuth]=useAuth();



  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value })
  }
  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, {
        email:userData.email,
        password:userData.password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user:res.data.user,
          token:res.data.token
        })
        localStorage.setItem('auth',JSON.stringify(res.data))
        navigate(location.state||"/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
     
      <div className='loginContainer'>
        <div className='loginBox'>
          <div className="container">
            <div className="title">Login</div>
            <div className="content">
              <form onSubmit={handleSubmit}>
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">Email</span>
                    <input type="email" placeholder="Enter your email" name="email" value={userData.email} onChange={handleInput} required />
                  </div>
                  <div className="input-box">
                    <span className="details">Password</span>
                    <input type="password" placeholder="Enter your password" name="password" value={userData.password} onChange={handleInput} required />
                  </div>
                 

                </div>

                <div className="button">
                  <input type="submit" value="Login" />
                </div>
                <div className="button" style={{cursor:"pointer"}} onClick={()=>{navigate('/forgot-password')}} >
                   Forgot password
                </div>
              </form>
            </div>
          </div>


        </div>

      </div>
    </>
  )
}

export default Login

