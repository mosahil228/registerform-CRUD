import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Spinner = ({path="login"}) => {
  const [count, setCount] = useState(2);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location,path]);
  return (
    <>
     
        <h1 className="Text-center">redirecting to you in {count} second </h1>
        <div>
          <span>Loading...</span>
        </div>
      
    </>
  );
};

export default Spinner;