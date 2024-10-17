import { useLang } from "../../lib/hooks/useLang";
import ProductSlider from "../product-slider/ProductSlider";

const Section4 = () => {
  const { isEn } = useLang();

  return (
    <div
      className={`${
        isEn ? "pl-6 md:pl-20 lg:pl-28" : "pl-6 md:pr-20 lg:pr-28"
      } py-12 lg:py-20 flex flex-col`}
    >
      <h3 className="flex gap-1 justify-start items-center text-red-500">
        <span className="w-5 h-10 bg-red-500 rounded-md"></span> This month
      </h3>

      <div className={`flex items-center justify-between flex-col md:flex-row gap-10 w-full ${
            isEn ? "md:pr-20 lg:pr-28 " : "md:pl-20 lg:pl-28 "
          }`}>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Best selling products
        </h1>

        <div className="flex gap-5">
          <button className="btn bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition-all">
            View All
          </button>
        </div>
      </div>

      <ProductSlider
        url={`https://fakestoreapi.com/products/category/jewelery`}
        click={""}
        setClick={undefined}
      />
    </div>
  );
};

export default Section4;
