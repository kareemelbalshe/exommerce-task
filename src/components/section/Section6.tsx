import React from "react";
import img1 from "../../assets/img/wallpaperflare.com_wallpaper (1).jpg";
import img2 from "../../assets/img/wallpaperflare.com_wallpaper (4).jpg";
import img3 from "../../assets/img/wallpaperflare.com_wallpaper (5).jpg";
import img4 from "../../assets/img/wallpaperflare.com_wallpaper (6).jpg";
import SectionLow from "./SectionLow";

const Section6 = () => {
  return (
    <div className="py-12 px-6 md:pl-20 lg:pl-28 lg:py-20 flex flex-col">
      <h3 className="flex gap-1 justify-start items-center text-red-500">
        <span className="w-5 h-10 bg-red-500 rounded-md"></span> Featured
      </h3>

      <div className="flex flex-col gap-5 items-start md:pr-16 lg:pr-28">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          New arrivals
        </h1>

        {/* عرض الصور */}
        <div className="flex flex-col md:flex-row gap-5 items-center justify-center mt-10 mb-20">
          <div className="flex-1">
            <img className="bg-slate-400" src={img1} alt="Image 1" />
          </div>

          <div className="flex-1 flex flex-col gap-5 items-start justify-center">
            <div className="w-full">
            <img src={img2} className="" alt="Image 2" />
            </div>

            <div className="flex flex-col lg:flex-row lg:w-[48.5%] gap-5">
              <img className="flex-1" src={img3} alt="Image 3" />
              <img className="flex-1" src={img4} alt="Image 4" />
            </div>
          </div>
        </div>

        {/* عرض الأيقونات */}
        <SectionLow />
      </div>
    </div>
  );
};

export default Section6;
