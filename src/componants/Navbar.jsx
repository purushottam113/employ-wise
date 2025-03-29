import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router'
import { isLogin } from '../utils/loginSlice';

const Navbar = () => {
  const navigate = useNavigate();
  const isLogined = useSelector((store)=> store.login);
  const dispatch = useDispatch();

  const handleLogout = () => {
    try {
      sessionStorage.clear();
      dispatch(isLogin(false));
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    const authtoken = sessionStorage.getItem("authToken");
    if(authtoken) dispatch(isLogin(true))
  },[])

  return (
    <div className='flex justify-between p-4 bg-gradient-to-r from-blue-500 to-purple-700 shadow-md'>
      <p onClick={()=>navigate("/")} className='text-white text-xl font-bold cursor-pointer hover:text-gray-200 transition'>EMPLOY WISE</p>
      {isLogined?
      <button onClick={handleLogout} className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition'>Logout</button>:
      <button onClick={()=>navigate("/login")} className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition'>Login</button>
      }
    </div>
  )
}

export default Navbar
