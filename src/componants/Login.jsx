import React from 'react'

const Login = () => {
  return (
    <div className='h-80 w-1/2 bg-emerald-300 flex flex-col gap-5 p-2 justify-center items-center'>
      <input type="text" className='border w-2/3'/>
      <input type="text" className='border w-2/3'/>
      <button>Submit</button>
    </div>
  )
}

export default Login
