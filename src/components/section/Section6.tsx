import React from 'react'
import FireTruckIcon from '@mui/icons-material/FireTruck';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import CheckIcon from '@mui/icons-material/Check';
import img1 from "../../assets/img/wallpaperflare.com_wallpaper (1).jpg";
import img2 from "../../assets/img/wallpaperflare.com_wallpaper (4).jpg";
import img3 from "../../assets/img/wallpaperflare.com_wallpaper (5).jpg";
import img4 from "../../assets/img/wallpaperflare.com_wallpaper (6).jpg";

const Section6 = () => {
  return (
    <div className="pl-28 py-20 flex flex-col">
      <h3 className="flex gap-1 justify-start items-center text-red-500">
        <span className="w-5 h-10 bg-red-500 rounded-md"></span> Featured
      </h3>
      <div className="flex gap-5 flex-col items-start pr-28">
        <h1 className="h11">New arrivals</h1> 
        <div className="flex items-center justify-between mt-10 mb-20">
        <img className='w-1/2 bg-slate-400 h-full block mr-5' src={img1} alt="" />
        <div className="w-1/2 flex justify-between items-center flex-col">
          <img src={img2} className='w-full mb-5' alt="" />
          <div className="w-full flex flex-row gap-5 items-center justify-between">
            <img className='w-[48%] h-auto' src={img3} alt="" />
            <img className='w-[48%] h-auto' src={img4} alt="" />
          </div>
        </div>
      </div>
        <div className="flex items-center justify-around gap-10 flex-wrap">
          <div className="flex-1 flex items-center justify-center flex-col">
            <FireTruckIcon style={{fontSize: '70px'}} className='rounded-full text-white bg-black p-1 border-8 border-slate-400' />
            <h1 className='font-bold'>Fire Truck</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, dolorum.</p>
          </div>
          <div className="flex-1 flex items-center justify-center flex-col">
            <HeadsetMicIcon style={{fontSize: '70px'}} className='rounded-full text-white bg-black p-1 border-8 border-slate-400' />
            <h1 className='font-bold'>Headset Mic</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, dolorum.</p>
          </div>
          <div className="flex-1 flex items-center justify-center flex-col">
            <CheckIcon style={{fontSize: '70px'}} className='rounded-full text-white bg-black p-1 border-8 border-slate-400' />
            <h1 className='font-bold'>Check</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, dolorum.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section6
