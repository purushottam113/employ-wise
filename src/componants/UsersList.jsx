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
  const [token, setToken] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(()=>{
    const authToken = sessionStorage.getItem("authToken");
    if(!authToken) {
      console.log("hii")
      navigate("/login");}
  },[])

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
      return <p>Loading....</p>
    }

  return (
    <div>
        {
        feed.map((user)=><Card key={user?.id} user={user}/>)
        }
     <div className='w-1/2 bg-blue-400 m-3 p-3 flex justify-center gap-3'>
       <button disabled={currentPage===1} onClick={()=>prevPage(currentPage)} className="">Prev</button>
        <span className="">{currentPage}</span>
       <button disabled={currentPage===totalPage} onClick={()=>nextPage(currentPage)} className="">Next</button>
     </div>
    </div>
  )
}

export default UsersList
