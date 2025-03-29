import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../utils/constant';
import { removeFeed } from '../utils/feedSlice';
import Toast from './Toast';

const Card = ({user, isSelected, onCardClick}) => {
    const {id, avatar, email, first_name, last_name} = user;
    const [isdelete, setIsDelete] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleEdit = ()=> {
      dispatch(addUser(user));
      navigate("/edit");
    };

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
    };

  return (<>
    <div className='md:max-w-4xl w-full flex p-2 sm:p-4 items-center group shadow-md rounded-lg border border-gray-200'
      onClick={(e) => { e.stopPropagation(); onCardClick(); }}
    >
        <img className='h-14 w-14 sm:h-16 sm:w-16 border-2 border-gray-300 rounded-full' src={avatar} alt="Avtar"/>
        <div className="flex flex-col justify-center ml-2 sm:ml-4 sm:w-60">
            <span className='text-base sm:text-lg text-gray-800 font-semibold'>{first_name + " " + last_name}</span>
            <p className='text-xs sm:text-sm text-gray-500'>{email}</p>
        </div>

        <div className= {`${isSelected?"flex":"hidden"} flex-col gap-2 mx-6 absolute sm:static right-4 group-hover:flex`}>
            <button onClick={handleEdit} className='px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition'>Edit</button>
            <button onClick={handleDelete} className='px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition'>Delete</button>
        </div>
    </div>
    {isdelete && <Toast message={toastMessage} fakeMessage={()=>setToastMessage("")}/>}
    </>
  )
}

export default Card;
