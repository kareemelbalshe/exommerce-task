import { useEffect, useState } from "react";
import ProductSlider from "../product-slider/ProductSlider";
import { useLang } from "../../lib/hooks/useLang";
import DoubleButtons from "../double-buttons/DoubleButtons";

const Section2 = () => {
  const { isEn } = useLang();

  const [click, setClick] = useState("");

  const initialTime = 3 * 24 * 60 * 60;

  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  return (
    <div
      className={`${
        isEn ? "pl-6 md:pl-20 lg:pl-28" : "pr-6 md:pr-20 lg:pr-28"
      } py-20 flex flex-col`}
    >
      <h3 className="flex gap-1 justify-start items-center text-red-500">
        <span className="w-5 h-10 bg-red-500 rounded-md"></span> Today's
      </h3>
      <div className="flex gap-5 flex-col md:flex-row">
        <h1 className="w-[200px] text-2xl md:text-3xl lg:text-4xl font-bold">
          Flash Sale
        </h1>
        <div
          className={`flex items-center justify-between flex-col md:flex-row gap-10 w-full ${
            isEn ? "md:pr-20 lg:pr-28 " : "md:pl-20 lg:pl-28 "
          }`}
        >
          <div className="flex justify-center items-end gap-5 lg:gap-10">
            <div className="">
              <p>days</p>
              <h2 className="text-3xl font-bold">{days}</h2>
            </div>
            <span className="text-red-500 text-2xl font-bold">:</span>
            <div className="">
              <p>hours</p>
              <h2 className="text-3xl font-bold">{hours}</h2>
            </div>
            <span className="text-red-500 text-2xl font-bold">:</span>
            <div className="">
              <p>minutes</p>
              <h2 className="text-3xl font-bold">{minutes}</h2>
            </div>
            <span className="text-red-500 text-2xl font-bold">:</span>
            <div className="">
              <p>seconds</p>
              <h2 className="text-3xl font-bold">{seconds}</h2>
            </div>
          </div>
          <DoubleButtons setClick={setClick} />
        </div>
      </div>

      <ProductSlider
        url={`https://fakestoreapi.com/products`}
        click={click}
        setClick={setClick}
      />
      <div className="flex items-center justify-center">
        <button className="btn">View All products</button>
      </div>
    </div>
  );
};

export default Section2;
