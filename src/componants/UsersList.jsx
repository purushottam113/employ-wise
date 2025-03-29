import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';
import { BASE_URL } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../utils/feedSlice';
import { useNavigate } from 'react-router';

const UsersList = () => {
  
  const feed = useSelector((store)=> store.feed);
  const [currentPage, setCurrentPage] = useState(1);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCardClick = (userId) => {
    setSelectedCardId(selectedCardId === userId ? null: userId);
  };

  useEffect(() => {
    const authToken = sessionStorage.getItem("authToken");
    if(!authToken) {
      navigate("/login");}

    const handleClickOutside = (event) => {
        if (!event.target.closest(".card-container")) {
            setSelectedCardId(null);
        }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

    const fetchUsers = async () =>{
      const res = await axios.get(`${BASE_URL}/api/users?page=${page}`);
      dispatch(addFeed(res?.data?.data));
      setTotalPage(res?.data?.total_pages);
      setCurrentPage(res?.data?.page);
    };
    
    const nextPage = (pageNumber)=>{    
      setPage(pageNumber + 1);
      setCurrentPage(pageNumber + 1);
    }
    const prevPage = (pageNumber)=>{
      setPage(pageNumber - 1);
      setCurrentPage(pageNumber - 1);
    }

    useEffect(()=>{
        fetchUsers();
    },[page]);

    if(!feed || feed.length==0){
      return <p className='mt-10 text-center'>No user Found, please refresh!</p>
    }

  return (
    <div className='h-4/5 sm:min-h-screen flex flex-col justify-between'>
      <div className='max-w-lg md:min-w-lg sm:mx-auto mt-2 p-6'>
      <p className='my-3 text-center font-semibold border-b-1 pt-2'>Users List</p>
        {
          feed.map((user)=><Card key={user?.id} 
                                 user={user} 
                                 isSelected={selectedCardId === user.id} 
                                 onCardClick={() => handleCardClick(user.id)}/>)
        }
      </div>

      {/* Pagination */}
     <div className='absolute bottom-1 w-full sm:w-auto sm:sticky  sm:bottom-4 md:min-w-lg mx-auto m-3 my-4 px-4 py-3 flex justify-evenly gap-4 rounded-lg shadow-md md:bg-amber-50'>
       <button disabled={currentPage===1} onClick={()=>prevPage(currentPage)}
         className={`px-4 py-2 rounded-md transition ${
           currentPage === 1 
           ? "text-gray-500 cursor-not-allowed" 
           : "bg-white text-blue-600 hover:bg-blue-100"
          }`}>Prev</button>
        <span className="font-semibold text-lg my-auto">{currentPage}</span>
       <button disabled={currentPage===totalPage} onClick={()=>nextPage(currentPage)} 
          className={`px-4 py-2 rounded-md transition ${
            currentPage === totalPage
            ? "text-gray-500 cursor-not-allowed" 
            : "bg-white text-blue-600 hover:bg-blue-100"
          }`}>Next</button>
    </div>
    </div>
  )
}

export default UsersList
