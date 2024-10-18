import ProductSlider from "../product-slider/ProductSlider";
import DoubleButtons from "../double-buttons/DoubleButtons";
import { useState } from "react";
import { useLang } from "../../lib/hooks/useLang";

const Section5 = () => {
  const [click, setClick] = useState("");
  const { isEn } = useLang();

  return (
    <div
      className={`${
        isEn ? "pl-6 md:pl-20 lg:pl-28" : "pr-6 md:pr-20 lg:pr-28"
      } py-12 lg:py-20 flex flex-col`}
    >
      <h3 className="flex gap-1 justify-start items-center text-red-500">
        <span className="w-5 h-10 bg-red-500 rounded-md"></span> Our products
      </h3>

      <div
        className={`flex items-center justify-between flex-col md:flex-row gap-10 w-full ${
          isEn ? "md:pr-20 lg:pr-28 " : "md:pl-20 lg:pl-28 "
        }`}
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Explore our products
        </h1>

        <DoubleButtons setClick={setClick} />
      </div>

      <ProductSlider
        url={`https://fakestoreapi.com/products/category/electronics`}
        click={click}
        setClick={setClick}
      />
      <ProductSlider
        url={`https://fakestoreapi.com/products/category/men's clothing`}
        click={""}
        setClick={()=>{}}
      />

      <div className="flex items-center justify-center mt-8">
        <button className="btn bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition-all">
          View All products
        </button>
      </div>
    </div>
  );
};

export default Section5;
