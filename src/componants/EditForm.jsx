import React from 'react'

const EditForm = () => {
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <p className="text-2xl font-bold text-center mb-4">Edit Profile</p>
      <form action="" className="space-y-4">
        <div className="">
            <label className="block text-gray-700 font-medium">First Name</label>
            <input type="text" value="firstName" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div className="">
            <label className="block text-gray-700 font-medium">Last Name</label>
            <input type="text" value="lastName" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div className="">
            <label className="block text-gray-700 font-medium">Email</label>
            <input type="email" value="email@gmail.com" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">Save Changes</button>
      </form>
    </div>
  )
}

export default EditForm
