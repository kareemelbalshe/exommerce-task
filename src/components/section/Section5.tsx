import React from "react";
import ProductSlider from "../product-slider/ProductSlider";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

const Section5 = () => {
  return (
    <div className="pl-28 py-20 flex flex-col">
      <h3 className="flex gap-1 justify-start items-center text-red-500">
        <span className="w-5 h-10 bg-red-500 rounded-md"></span> Our products
      </h3>
      <div className="flex gap-5 justify-between items-center pr-28">
        <h1 className="h11">Explore our products</h1>
        <div className="flex gap-5">
          <button className="rounded-full bg-gray-300 p-2">
            <WestIcon />
          </button>
          <button className="rounded-full bg-gray-300 p-2">
            <EastIcon />
          </button>
        </div>
      </div>

      <ProductSlider />
      <ProductSlider />
      <div className="flex items-center justify-center">
        <button className="btn">View All products</button>
      </div>
    </div>
  );
};

export default Section5;
