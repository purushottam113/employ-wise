import React, { useEffect } from 'react'

const Toast = ({message, fakeMessage}) => {

    useEffect(()=>{
        const timer = setTimeout(()=>{
                       fakeMessage();
                      },2000)
        return ()=> clearTimeout(timer)
    },[fakeMessage])

    if(!message){
        return 
    }

  return (
    <div className='fixed top-4 right-2 bg-gray-900 text-white px-4 py-2 rounded shadow-lg animate-slide-in'>
      <p>{message}</p>
    </div>
  )
}

export default Toast
