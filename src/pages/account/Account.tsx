import React from 'react'

const Account = () => {
  return (
    <div className='flex flex-col gap-20 lg:flex-row justify-between my-20 mx-6 lg:mx-28'>
      <div className="flex-1 flex flex-col gap-5">
        <h1 className='h11'>my account</h1>
        <p className='text-gray-400 pl-7'>Lorem, ipsum.</p>
        <p className='text-gray-400 pl-7'>Lorem, ipsum.</p>
        <p className='text-gray-400 pl-7'>Lorem, ipsum.</p>
        <h1 className='h11'>my account</h1>
        <p className='text-gray-400 pl-7'>Lorem, ipsum.</p>
        <p className='text-gray-400 pl-7'>Lorem, ipsum.</p>
        <h1 className='h11'>my account</h1>
      </div>
      <div className="flex flex-1 flex-col items-end gap-4">
        <h1 className='h11 text-red-500 w-full'>edit your profile</h1>
        <div className="w-full flex gap-5 items-center justify-between flex-wrap">
          <div className="w-full lg:w-[48%]">
          <label htmlFor="">name</label>
          <input className='w-full bg-gray-300 p-2 rounded-md' type="text" name="" id="" />
          </div>
          <div className="w-full lg:w-[48%]">
          <label htmlFor="">name</label>
          <input className='w-full bg-gray-300 p-2 rounded-md' type="text" name="" id="" />
          </div>
          <div className="w-full lg:w-[48%]">
          <label htmlFor="">name</label>
          <input className='w-full bg-gray-300 p-2 rounded-md' type="text" name="" id="" />
          </div>
          <div className="w-full lg:w-[48%]">
          <label htmlFor="">name</label>
          <input className='w-full bg-gray-300 p-2 rounded-md' type="text" name="" id="" />
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="">thing</label>
          <input className=' w-full bg-gray-300 p-2 rounded-md' type="text" name="" id="" />
        </div>
        <input className='w-full bg-gray-300 p-2 rounded-md' type="text" name="" id="" />
        <input className='w-full bg-gray-300 p-2 rounded-md' type="text" name="" id="" />
        <div className="flex gap-5">
          <button className='btn1'>cancel</button>
        <button className='btn'>send changes</button>
        </div>
      </div>
    </div>
  )
}

export default Account
