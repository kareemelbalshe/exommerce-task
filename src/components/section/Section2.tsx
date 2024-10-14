import React, { useEffect, useState } from 'react'
import ProductSlider from '../product-slider/ProductSlider'
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

const Section2 = () => {
  const initialTime = 3 * 24 * 60 * 60; 

  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  const [click, setClick] = useState("");

  return (
    <div className='pl-28 py-20 flex flex-col'>
      <h3 className='flex gap-1 justify-start items-center text-red-500'><span className='w-5 h-10 bg-red-500 rounded-md'></span> Today's</h3>
      <div className="flex gap-5">
      <h1 className='h11 w-1/12'>Flash Sale</h1>
      <div className="flex items-center justify-between gap-10 w-full pr-28">
        <div className="flex justify-center items-end gap-10">
          <div className="">
            <p>days</p>
            <h2 className='text-3xl font-bold'>{days}</h2>
          </div>
          <span className='text-red-500 text-2xl font-bold'>:</span>
          <div className="">
            <p>hours</p>
            <h2 className='text-3xl font-bold'>{hours}</h2>
          </div>
          <span className='text-red-500 text-2xl font-bold'>:</span>
          <div className="">
            <p>minutes</p>
            <h2 className='text-3xl font-bold'>{minutes}</h2>
          </div>
          <span className='text-red-500 text-2xl font-bold'>:</span>
          <div className="">
            <p>seconds</p>
            <h2 className='text-3xl font-bold'>{seconds}</h2>
          </div>
        </div>
        <div className="flex gap-5">
          <button onClick={()=>setClick("left")} className='rounded-full bg-gray-300 p-2'><WestIcon /></button>
          <button onClick={()=>setClick("right")} className='rounded-full bg-gray-300 p-2'><EastIcon /></button>
        </div>
      </div>
      </div>
      
      <ProductSlider click={click} setClick={setClick}/>
      <div className="flex items-center justify-center"><button className='btn'>View All products</button></div>
      
    </div>
  )
}

export default Section2