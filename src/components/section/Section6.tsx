import React from "react";
import FireTruckIcon from "@mui/icons-material/FireTruck";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import CheckIcon from "@mui/icons-material/Check";
import img1 from "../../assets/img/wallpaperflare.com_wallpaper (1).jpg";
import img2 from "../../assets/img/wallpaperflare.com_wallpaper (4).jpg";
import img3 from "../../assets/img/wallpaperflare.com_wallpaper (5).jpg";
import img4 from "../../assets/img/wallpaperflare.com_wallpaper (6).jpg";

const Section6 = () => {
  return (
    <div className="pl-6 py-12 md:pl-20 lg:pl-28 lg:py-20 flex flex-col">
      <h3 className="flex gap-1 justify-start items-center text-red-500">
        <span className="w-5 h-10 bg-red-500 rounded-md"></span> Featured
      </h3>

      <div className="flex flex-col gap-5 items-start md:pr-16 lg:pr-28">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          New arrivals
        </h1>

        {/* عرض الصور */}
        <div className="flex flex-col md:flex-row gap-5 items-center justify-between mt-10 mb-20">
          <img
            className="w-full md:w-[48%] bg-slate-400 h-auto block"
            src={img1}
            alt="Image 1"
          />

          <div className="w-full md:w-[48%] flex flex-col gap-5">
            <img src={img2} className="w-full" alt="Image 2" />

            <div className="flex gap-[2%]">
              <img className="w-[48%] h-auto" src={img3} alt="Image 3" />
              <img className="w-[48%] h-auto" src={img4} alt="Image 4" />
            </div>
          </div>
        </div>

        {/* عرض الأيقونات */}
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
      </div>
    </div>
  );
};

export default Section6;
