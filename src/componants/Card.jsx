import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../utils/constant';
import { removeFeed } from '../utils/feedSlice';
import Toast from './Toast';

const Card = ({user}) => {
    const {id, avatar, email, first_name, last_name} = user;

    const [isdelete, setIsDelete] = useState(false);
    const [toastMessage, setToastMessage] = useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleEdit = ()=> {
      dispatch(addUser(user));
      navigate("/edit");
    }

    const handleDelete = async () => {
      try {
        setIsDelete(true)
        setToastMessage("Deleted")
        await axios.delete(`${BASE_URL}/api/users/${id}`);
        dispatch(removeFeed(id));
      } 
      catch (error) {
        setToastMessage("Something going wrong");
 
      }
    }


  return (<>
    <div className='flex p-4 items-center group'>
        <img className='h-20 w-20 border rounded-full' src={avatar} alt="Avtar"/>
        <div className="flex flex-col justify-center ml-3 w-60">
            <span>{first_name + " " + last_name}</span>
            <p>{email}</p>
        </div>
        {/* <div className="hidden group-hover:flex flex-col gap-2 mx-6"> */}
        <div className="flex flex-col gap-2 mx-6">
            <button onClick={handleEdit} className=''>Edit</button>
            <button onClick={handleDelete} className=''>Delete</button>
        </div>
    </div>
    {isdelete && <Toast message={toastMessage} fakeMessage={()=>setToastMessage("")}/>}
    </>
  )
}

export default Card;
