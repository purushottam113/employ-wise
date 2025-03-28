import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Card = ({user}) => {
    const {avatar, email, first_name, last_name} = user;
    const navigate = useNavigate();

  return (
    <div className='flex p-4 items-center group'>
        <img className='h-20 w-20 border rounded-full' src={avatar} alt="Avtar"/>
        <div className="flex flex-col justify-center ml-3 w-60">
            <span>{first_name + " " + last_name}</span>
            <p>{email}</p>
        </div>
        <div className="hidden group-hover:flex flex-col gap-2 mx-6">
            <button onClick={()=>navigate("/edit")} className=''>Edit</button>
            <button className=''>Delete</button>
        </div>
    </div>
  )
}

export default Card
