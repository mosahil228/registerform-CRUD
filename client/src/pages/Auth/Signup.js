import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState("");

  const [selectedOptions, setSelectedOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
  });

  const [userData, setUserData] = useState({
    firstName: "", lastName: "", email: "", gender: "", date: "", country: "", state: "", city: "", zipcode: "", phone: "", address: "", password: "", answer: ""
  })

  //checkbox
  const handleOptionChange = (event) => {
    const { name, checked } = event.target;
    setSelectedOptions({
      ...selectedOptions,
      [name]: checked,
    });
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value })
  }
  // form function
  const handleSubmit = async (e) => {
    console.log(photo);
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/signup`, {
        photo: photo,
        first_name: userData.firstName,
        last_name: userData.lastName,
        email: userData.email,
        gender: userData.gender,
        date: userData.date,
        country: userData.country,
        state: userData.state,
        city: userData.city,
        zipcode: userData.zipcode,
        phone: userData.phone,
        area: selectedOptions,
        address: userData.address,
        password: userData.password,
        answer: userData.answer,
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
            <div className="title">Registration</div>
            <div className="content">
              <form onSubmit={handleSubmit}>
                <div className="user-details">
                  <div className="input-box">
                    <div className="label">
                      <label className="btn btn-outline-secondary col-md-12">
                        {photo ? photo.name : "Upload Photo"}
                        <input
                          type="file"
                          name="photo"
                          accept="image/*"
                          onChange={(e) => setPhoto(e.target.files[0])}
                          hidden
                        />
                      </label>
                    </div>
                    <div className="label">
                      {photo && (
                        <div className="label-photo">
                          <img
                            src={URL.createObjectURL(photo)}
                            alt="product_photo"
                            height={"200px"}
                            className="img img-responsive"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="input-box">
                    <span className="details">First Name</span>
                    <input type="text" placeholder="Enter your first name" name="firstName" value={userData.firstName} onChange={handleInput} required />
                  </div>
                  <div className="input-box">
                    <span className="details">Last name</span>
                    <input type="text" placeholder="Enter your last name" name="lastName" value={userData.lastName} onChange={handleInput} required />
                  </div>
                  <div className="input-box">
                    <span className="details">Email</span>
                    <input type="email" placeholder="Enter your email" name="email" value={userData.email} onChange={handleInput} required />
                  </div>
                  <div className="input-box">
                    <span className="details">Gender</span>
                    <div className='lableDiv'>
                      <label className='radioLable'>
                        <input
                          name="gender" value="male" onChange={handleInput}
                          type="radio"
                          checked={userData.gender === 'male'}
                        />
                        male
                      </label>
                      <label className='radioLable'>
                        <input
                          type="radio"

                          name="gender" value="female" onChange={handleInput}
                          checked={userData.gender === 'female'}
                        />
                        female
                      </label>
                    </div>


                  </div>
                  <div className="input-box">
                    <span className="details">D.O.B</span>
                    <input type="date" name="date" value={userData.date} onChange={handleInput} />
                  </div>
                  <div className="input-box">
                    <span className="details">Country</span>
                    <input type="text" placeholder="Enter your Country" name="country" value={userData.country} onChange={handleInput} required />
                  </div>
                  <div className="input-box">
                    <span className="details">State</span>
                    <input type="text" placeholder="Enter your state" name="state" value={userData.state} onChange={handleInput} required />
                  </div>
                  <div className="input-box">
                    <span className="details">City</span>
                    <input type="text" placeholder="Enter your City name" name="city" value={userData.city} onChange={handleInput} required />
                  </div>
                  <div className="input-box">
                    <span className="details">Zip code</span>
                    <input type="text" placeholder="Enter your Zip code" name="zipcode" value={userData.zipcode} onChange={handleInput} required />
                  </div>


                  <div className="input-box">
                    <span className="details">Phone Number</span>
                    <input type="phone" placeholder="Enter your number" name="phone" value={userData.phone} onChange={handleInput} required />
                  </div>
                  <div className="input-box">
                    <span className="details">Address</span>
                    <input type="text" placeholder="Enter your Address" name="address" value={userData.address} onChange={handleInput} required />
                  </div>
                  <div className="input-box">
                    <span className="details">Area of intrest</span>
                    <div className='lableDiv'><label>
                      <input
                        type="checkbox"
                        name="option1"
                        checked={selectedOptions.option1}
                        onChange={handleOptionChange}
                      />
                      Reading
                    </label>
                      <label>
                        <input
                          type="checkbox"
                          name="option2"
                          checked={selectedOptions.option2}
                          onChange={handleOptionChange}
                        />
                        Writing
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          name="option3"
                          checked={selectedOptions.option3}
                          onChange={handleOptionChange}
                        />
                        Travelling
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          name="option4"
                          checked={selectedOptions.option4}
                          onChange={handleOptionChange}
                        />
                        Playing
                      </label></div>
                  </div>
                  <div className="input-box">
                    <span className="details">Password</span>
                    <input type="password" placeholder="Enter your password" name="password" value={userData.password} onChange={handleInput} required />
                  </div>
                  <div className="input-box">
                    <span className="details">What is your favourite game?</span>
                    <input type="text" placeholder="Enter your answer" name="answer" value={userData.answer} onChange={handleInput} required />
                  </div>
                </div>
                <div className="button">
                  <input type="submit" value="Register" />
                </div>
              </form>
            </div>

          </div>


        </div>


      </div>
    </>
  )
}

export default Signup

