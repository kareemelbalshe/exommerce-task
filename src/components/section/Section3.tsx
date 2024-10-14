import React from "react";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const Section3 = () => {
  return (
    <div className="pl-28 pr-28 py-20 flex flex-col">
      <h3 className="flex gap-1 justify-start items-center text-red-500">
        <span className="w-5 h-10 bg-red-500 rounded-md"></span> categories
      </h3>
      <div className="flex gap-5 items-center justify-between">
        <h1 className="h11">Browse by category</h1>
        <div className="flex gap-5">
          <button className="rounded-full bg-gray-300 p-2">
            <WestIcon />
          </button>
          <button className="rounded-full bg-gray-300 p-2">
            <EastIcon />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between my-10">
        <div className="flex gap-2 items-center justify-center flex-col border-2 border-slate-300 p-5 rounded-md hover:bg-red-500 hover:text-white">
          <PhoneAndroidIcon />
          <h1>Phone</h1>
        </div>
        <div className="flex gap-2 items-center justify-center flex-col border-2 border-slate-300 p-5 rounded-md hover:bg-red-500 hover:text-white">
          <PhoneAndroidIcon />
          <h1>Phone</h1>
        </div>
        <div className="flex gap-2 items-center justify-center flex-col border-2 border-slate-300 p-5 rounded-md hover:bg-red-500 hover:text-white">
          <PhoneAndroidIcon />
          <h1>Phone</h1>
        </div>
        <div className="flex gap-2 items-center justify-center flex-col border-2 border-slate-300 p-5 rounded-md hover:bg-red-500 hover:text-white">
          <PhoneAndroidIcon />
          <h1>Phone</h1>
        </div>
        <div className="flex gap-2 items-center justify-center flex-col border-2 border-slate-300 p-5 rounded-md hover:bg-red-500 hover:text-white">
          <PhoneAndroidIcon />
          <h1>Phone</h1>
        </div>
        <div className="flex gap-2 items-center justify-center flex-col border-2 border-slate-300 p-5 rounded-md hover:bg-red-500 hover:text-white">
          <PhoneAndroidIcon />
          <h1>Phone</h1>
        </div>
        <div className="flex gap-2 items-center justify-center flex-col border-2 border-slate-300 p-5 rounded-md hover:bg-red-500 hover:text-white">
          <PhoneAndroidIcon />
          <h1>Phone</h1>
        </div>
        <div className="flex gap-2 items-center justify-center flex-col border-2 border-slate-300 p-5 rounded-md hover:bg-red-500 hover:text-white">
          <PhoneAndroidIcon />
          <h1>Phone</h1>
        </div>
        <div className="flex gap-2 items-center justify-center flex-col border-2 border-slate-300 p-5 rounded-md hover:bg-red-500 hover:text-white">
          <PhoneAndroidIcon />
          <h1>Phone</h1>
        </div>
      </div>
    </div>
  );
};

export default Section3;
