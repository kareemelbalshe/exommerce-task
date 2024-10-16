import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const nav=useNavigate()
  return (
    <div className='flex items-center justify-center flex-col gap-10 my-40 w-3/4 mx-auto'>
      <h1 className='text-6xl font-bold'>404 not found</h1>
      <p className='text-center text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, dignissimos minus eaque fugiat placeat ea doloremque voluptates temporibus enim! Vel quae quaerat qui labore totam! Dolore quia delectus officia a.</p>
      <button className='btn' onClick={()=>nav("/")}>back to home page</button>
    </div>
  )
}

export default NotFound
