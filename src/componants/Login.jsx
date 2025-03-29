import React, { useState } from 'react'
import { BASE_URL, defaultEmail, defaultPassword } from '../utils/constant'
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { isLogin } from '../utils/loginSlice';
import Toast from './Toast';

const Login = () => {
    const [emailId, setEmailId] = useState(defaultEmail);
    const [password, setPassword] = useState(defaultPassword);
    const [errors, setErros] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLogined = useSelector((store)=> store.login);
    
    const validate = ()=> {
      let newErrors = {};
      if(!emailId.trim()) newErrors.emailId = "Email id is required";
      if(!password.trim()) newErrors.password = "Password is required";
  
      setErros(newErrors);
      return Object.keys(newErrors).length === 0;
    }

    const handleLogin = async() => {
      try {
        if(validate()){
          const res = await axios.post(`${BASE_URL}/api/login`,
            {
              email: emailId,
              password: password
            }
          );
          sessionStorage.setItem("authToken", res?.data?.token);
          dispatch(isLogin(true));
          const timer = setTimeout(()=>{
            navigate("/");
          },500);
          return ()=> clearImmediate(timer);
        }
      } catch (error) {
        console.log("error")
      }
    }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg space-y-4 ">
      <p className="text-2xl font-bold text-center mb-4">Login</p>
        <div className="">
            <label className="block text-gray-700 font-medium">Email</label>
            <input type="email" required value={emailId} onChange={(e)=>setEmailId(e.target.value)} className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <label className="block text-red-600 font-light">{errors.emailId}</label>
        </div>
        <div className="">
            <label className="block text-gray-700 font-medium">Password</label>
            <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <label className="block text-red-600 font-light">{errors.password}</label>
        </div>
      <button onClick={handleLogin} className='block w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition'>Submit</button>
      {isLogined && <Toast message={"Login Successful"} fakeMessage={()=> setToastMessage("")}/>}
    </div>
  )
}

export default Login

