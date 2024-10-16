import React from "react";
import ProductSlider from "../product-slider/ProductSlider";

const Section4 = () => {
  return (
    <div className="pl-6 py-12 md:pl-20 lg:pl-28 lg:py-20 flex flex-col">
      {/* عنوان الشهر */}
      <h3 className="flex gap-1 justify-start items-center text-red-500">
        <span className="w-5 h-10 bg-red-500 rounded-md"></span> This month
      </h3>

      <div className="flex flex-col md:flex-row gap-5 justify-between items-start md:pr-16 lg:pr-28">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Best selling products
        </h1>

        {/* زر عرض الكل */}
        <div className="flex gap-5">
          <button className="btn bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition-all">
            View All
          </button>
        </div>
      </div>

      {/* عرض المنتجات (Slider) */}
      <ProductSlider />
    </div>
  );
};

export default Section4;
