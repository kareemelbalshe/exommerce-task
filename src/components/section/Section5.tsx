import React from "react";
import ProductSlider from "../product-slider/ProductSlider";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

const Section5 = () => {
  return (
    <div className="pl-6 py-12 md:pl-20 lg:pl-28 lg:py-20 flex flex-col">
      {/* عنوان القسم */}
      <h3 className="flex gap-1 justify-start items-center text-red-500">
        <span className="w-5 h-10 bg-red-500 rounded-md"></span> Our products
      </h3>
      
      <div className="flex flex-col md:flex-row gap-5 justify-between items-center md:pr-16 lg:pr-28">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Explore our products</h1>
        
        {/* أزرار التنقل */}
        <div className="flex gap-5">
          <button className="rounded-full bg-gray-300 p-2 hover:bg-gray-400">
            <WestIcon />
          </button>
          <button className="rounded-full bg-gray-300 p-2 hover:bg-gray-400">
            <EastIcon />
          </button>
        </div>
      </div>

      {/* عرض المنتجات (Slider) */}
      <ProductSlider />
      <ProductSlider />

      {/* زر عرض جميع المنتجات */}
      <div className="flex items-center justify-center mt-8">
        <button className="btn bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition-all">
          View All products
        </button>
      </div>
    </div>
  );
};

export default Section5;
