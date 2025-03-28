import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';

const UsersList = () => {

    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [page, setPage] = useState(1);

    const fetchUsers = async () =>{
        const res = await axios.get(`https://reqres.in/api/users?page=${page}`);
        console.log(res?.data?.data);
        setUsers(res?.data?.data);
        setTotalPage(res?.data?.total_pages);
        setCurrentPage(res?.data?.page);
    }

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

    if(users.length <= 0){
        return 
    }

  return (
    <div>
        {
        users.map((user)=><Card key={user?.id} user={user}/>)
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
