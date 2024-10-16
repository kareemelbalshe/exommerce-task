import React from "react";
import FireTruckIcon from '@mui/icons-material/FireTruck';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import CheckIcon from '@mui/icons-material/Check';

const SectionLow = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around gap-10 md:gap-5 flex-wrap">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <FireTruckIcon
          style={{ fontSize: "70px" }}
          className="rounded-full text-white bg-black p-1 border-8 border-slate-400"
        />
        <h1 className="font-bold text-lg mt-2">Fire Truck</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
          dolorum.
        </p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <HeadsetMicIcon
          style={{ fontSize: "70px" }}
          className="rounded-full text-white bg-black p-1 border-8 border-slate-400"
        />
        <h1 className="font-bold text-lg mt-2">Headset Mic</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
          dolorum.
        </p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <CheckIcon
          style={{ fontSize: "70px" }}
          className="rounded-full text-white bg-black p-1 border-8 border-slate-400"
        />
        <h1 className="font-bold text-lg mt-2">Check</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
          dolorum.
        </p>
      </div>
    </div>
  );
};

export default SectionLow;
