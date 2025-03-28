import React, { useEffect, useState } from 'react'

const Toast = ({message, fakeMessage}) => {
    const [hide, setHide] = useState(false);

    useEffect(()=>{
        setHide(false);
        const timer = setTimeout(()=>{
            fakeMessage();
        },2000)
        return ()=> clearTimeout(timer)
    },[fakeMessage])

    if(!message){
        return 
    }

  return (
    <div className='fixed bottom-5 right-5 bg-gray-900 text-white px-4 py-2 rounded shadow-lg animate-slide-in'>
      <p>{message}</p>
    </div>
  )
}

export default Toast
