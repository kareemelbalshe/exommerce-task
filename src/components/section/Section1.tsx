import React, { useEffect, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import img1 from "../../assets/img/wallpaperflare.com_wallpaper (1).jpg";
import img2 from "../../assets/img/wallpaperflare.com_wallpaper (4).jpg";
import img3 from "../../assets/img/wallpaperflare.com_wallpaper (5).jpg";
import img4 from "../../assets/img/wallpaperflare.com_wallpaper (6).jpg";
import img5 from "../../assets/img/wallpaperflare.com_wallpaper (9).jpg";

const Section1 = () => {
  const images = [img1, img2, img3, img4, img5];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  // };

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };

  return (
    <div className="flex gap-10 item-start sm:mx-6 lg:mx-28 flex-col lg:flex-row">
      <div className="w-1/2 lg:w-2/12 lg:m-0 m-auto lg:border-r-2 lg:border-slate-300">
        <ul className="mt-10">
        <li className="flex justify-between">
              <a href="#">lorem-lorem</a>
              <ChevronRightIcon />
            </li>
            <li className="flex justify-between">
              <a href="#">lorem-lorem</a>
              <ChevronRightIcon />
            </li>
          {Array(11).fill("lorem-lorem").map((item, index) => (
            <li key={index} className="flex justify-between">
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex overflow-hidden relative w-6/12 mt-10 mx-auto">
        {/* <button onClick={prevSlide} className="absolute left-0 z-10 bg-white p-2 rounded-full">{"<"}</button> */}
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Slide ${index}`} className="w-full h-auto" />
          ))}
        </div>
        {/* <button onClick={nextSlide} className="absolute right-0 z-10 bg-white p-2 rounded-full">{">"}</button> */}

        <div className="flex gap-3 items-center justify-center absolute bottom-2 left-1/2 -translate-x-1/2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index
                  ? "bg-red-600 border-2 border-slate-500"
                  : "bg-gray-500"
              }`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section1;
