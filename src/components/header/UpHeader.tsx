import React from "react";

const UpHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center text-white bg-black py-5 gap-3">
      {/* Empty div for potential logo or space */}
      <div className=""></div>

      {/* Sale announcement */}
      <p className="text-center">
        Summer sale all swim and free express delivery - off 50%!
        <span className="font-bold underline cursor-pointer ml-2">
          Shop now
        </span>
      </p>

      {/* Language selection */}
      <select className="bg-black text-white border-none outline-none cursor-pointer">
        <option>English</option>
        <option>Arabic</option>
      </select>
    </div>
  );
};

export default UpHeader;
