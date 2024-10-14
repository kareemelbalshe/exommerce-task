import React from "react";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

const Section3 = () => {
  return (
    <div className="px-6 md:px-20 lg:pl-28 lg:pr-28 py-12 lg:py-20 flex flex-col">
      <h3 className="flex gap-1 justify-start items-center text-red-500">
        <span className="w-5 h-10 bg-red-500 rounded-md"></span> Categories
      </h3>
      <div className="flex flex-col md:flex-row gap-5 items-center justify-between">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Browse by category
        </h1>
        <div className="flex gap-5">
          <button className="rounded-full bg-gray-300 p-2 hover:bg-gray-400 transition-all">
            <WestIcon />
          </button>
          <button className="rounded-full bg-gray-300 p-2 hover:bg-gray-400 transition-all">
            <EastIcon />
          </button>
        </div>
      </div>

      {/* عناصر الفئات */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 my-10">
        {Array(9)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border-2 border-slate-300 p-5 rounded-md hover:bg-red-500 hover:text-white transition-all"
            >
              <PhoneAndroidIcon style={{ fontSize: "40px" }} />
              <h1 className="mt-2 text-lg font-medium">Phone</h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Section3;
