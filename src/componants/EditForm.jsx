import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice';
import axios from 'axios';
import { BASE_URL } from '../utils/constant';
import Toast from './Toast';


const EditForm = () => {
  const user = useSelector((store)=> store.user);
  const {id, email, first_name, last_name} = user;
  
  const [firstName, setFirstName] = useState(first_name);
  const [lastName, setLastName] = useState(last_name);
  const [emailId, setEmailId] = useState(email);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("Save Changes...")
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setShowToast(true);
      const res = await axios.put(`${BASE_URL}//users/${1}`,{
        email: emailId,
        first_name: firstName,
        last_name: lastName
      })
    }
      catch (error) {
        setToastMessage("Something going wrong");
      }

  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <p className="text-2xl font-bold text-center mb-4">Edit Profile</p>
      <form onSubmit={handleSubmit}  className="space-y-4">
        <div className="">
            <label className="block text-gray-700 font-medium">First Name</label>
            <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div className="">
            <label className="block text-gray-700 font-medium">Last Name</label>
            <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div className="">
            <label className="block text-gray-700 font-medium">Email</label>
            <input type="email" value={emailId} onChange={(e)=>setEmailId(e.target.value)} className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">Save Changes</button>
      </form>
      {showToast && <Toast  message={toastMessage} fakeMessage={()=> setToastMessage("")}/>}
    </div>
  )
}

export default EditForm
