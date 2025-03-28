import React from 'react'

const Login = () => {
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg space-y-4 ">
      <p className="text-2xl font-bold text-center mb-4">Login</p>
        <div className="">
            <label className="block text-gray-700 font-medium">First Name</label>
            <input type="email" value="eve.holt@reqres.in" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div className="">
            <label className="block text-gray-700 font-medium">Last Name</label>
            <input type="password" value="cityslicka" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
      <button className='block w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition'>Submit</button>
    </div>
  )
}

export default Login

