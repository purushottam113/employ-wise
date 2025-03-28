import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleLogout = () => {
    try {
      sessionStorage.clear();
      setIsLogin(false);
      console.log("logout")
      navigate("/login");
    } catch (error) {
      
    }
  }

   useEffect(()=>{
      setToken(sessionStorage.getItem("authToken"));
      if(!token) {
        setIsLogin(false);
      };
    },[token, navigate]);

  return (
    <div className='flex justify-between p-5 bg-amber-200'>
      <p onClick={()=>navigate("/")} className=''>EMPLOY WISE</p>
      {!isLogin?
      <button onClick={()=>navigate("/login")}>Login</button>:
      <button onClick={handleLogout}>Logout</button>}
    </div>
  )
}

export default Navbar
