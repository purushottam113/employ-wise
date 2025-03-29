import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice';
import axios from 'axios';
import { BASE_URL } from '../utils/constant';
import Toast from './Toast';
import { useNavigate } from 'react-router';


const EditForm = () => {
  const user = useSelector((store)=> store.user) || {};
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  
  
  useEffect(()=>{
    const authToken = sessionStorage.getItem("authToken");
    if(!authToken) {
      navigate("/login")
    };
  },[token, navigate]);
  
  const {id, email, first_name, last_name} = user;
  
  const [firstName, setFirstName] = useState(first_name || "");
  const [lastName, setLastName] = useState(last_name || "");
  const [emailId, setEmailId] = useState(email || "");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("Save Changes...");
  const [errors, setErros] = useState({});

  
  const validate = ()=> {
    let newErrors = {};
    if(!firstName.trim()) newErrors.firstName = "First name is required";
    if(!lastName.trim()) newErrors.lastName = "Last name is required";
    if(!emailId.trim()) newErrors.email = "email id is required";

    setErros(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(validate()){
      try {
        setShowToast(true);
        const res = await axios.put(`${BASE_URL}/api/users/${id}`,{
          email: emailId,
          first_name: firstName,
          last_name: lastName
        })
        setToastMessage("Changes Saved")
      }
      catch (error) {
        setToastMessage("Something went wrong");
      }
    }
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <p className="text-2xl font-bold text-center mb-4">Edit Profile</p>
      <form onSubmit={handleSubmit}  className="space-y-4">
        <div className="">
            <label className="block text-gray-700 font-medium">First Name</label>
            <input type="text" required value={firstName} onChange={(e)=>setFirstName(e.target.value)} className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <label className="block text-red-600 font-light">{errors.firstName}</label>
        </div>
        <div className="">
            <label className="block text-gray-700 font-medium">Last Name</label>
            <input type="text" required value={lastName} onChange={(e)=>setLastName(e.target.value)} className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <label className="block text-red-600 font-light">{errors.lastName}</label>
        </div>
        <div className="">
            <label className="block text-gray-700 font-medium">Email</label>
            <input type="email" required value={emailId} onChange={(e)=>setEmailId(e.target.value)} className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <label className="block text-red-600 font-light">{errors.email}</label>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">Save Changes</button>
      </form>
      {showToast && <Toast message={toastMessage} fakeMessage={()=> setToastMessage("")}/>}
    </div>
  )
}

export default EditForm
