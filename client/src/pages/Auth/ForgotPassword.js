import React, {useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate} from "react-router-dom";


const  ForgotPassword= () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
   email: "", newPassword: "",answer:""
  })

 

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value })
  }
  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`, {
        email:userData.email,
        newPassword:userData.newPassword,
        answer:userData.answer
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
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
            <div className="title">Reset Password</div>
            <div className="content">
              <form onSubmit={handleSubmit}>
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">Email</span>
                    <input type="email" placeholder="Enter your email" name="email" value={userData.email} onChange={handleInput} required />
                  </div>
                  <div className="input-box">
                    <span className="details">your favourite game</span>
                    <input type="text" placeholder="Enter your answer" name="answer" value={userData.answer} onChange={handleInput} required />
                  </div>
                  <div className="input-box">
                    <span className="details">Password</span>
                    <input type="Enter new password" placeholder="Enter your password" name="newPassword" value={userData.newPassword} onChange={handleInput} required />
                  </div>
                 

                </div>

                <div className="button">
                  <input type="submit" value="Reset Password" />
                </div>
               
              </form>
            </div>
          </div>


        </div>

      </div>
    </>
  )
}

export default  ForgotPassword;

