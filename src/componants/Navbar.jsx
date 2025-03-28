import React from 'react'
import { useNavigate } from 'react-router'

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='flex justify-between p-5 bg-amber-200'>
      <p onClick={()=>navigate("/")} className=''>EMPLOY WISE</p>
      <button onClick={()=>navigate("/login")}>Login</button>
    </div>
  )
}

export default Navbar
