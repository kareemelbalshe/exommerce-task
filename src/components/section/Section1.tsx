import { useEffect, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import img1 from "/assets/img/wallpaperflare.com_wallpaper (1).jpg";
import img2 from "/assets/img/wallpaperflare.com_wallpaper (4).jpg";
import img3 from "/assets/img/wallpaperflare.com_wallpaper (5).jpg";
import img4 from "/assets/img/wallpaperflare.com_wallpaper (6).jpg";
import img5 from "/assets/img/wallpaperflare.com_wallpaper (9).jpg";
import { Link } from "react-router-dom";
import { useFetch } from "../../lib/hooks/useFetch";
import { useLang } from "../../lib/hooks/useLang";

const Section1 = () => {
  const images = [img1, img2, img3, img4, img5];
  const [currentIndex, setCurrentIndex] = useState(0);

  const { isEn } = useLang();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const { data, loading, error } = useFetch<string[]>(
    `https://fakestoreapi.com/products/categories`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  // };

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };

  return (
    <div className="flex gap-10 item-start mx-6 lg:mx-28 flex-col lg:flex-row">
      <div
        className={`w-1/2 lg:w-2/12 lg:m-0 m-auto ${
          isEn ? "lg:border-r-2" : "lg:border-l-2"
        }  lg:border-slate-300`}
      >
        <ul className="mt-10">
          <li className="flex justify-between">
            <Link to="/look">lorem-lorem</Link>
            <ChevronRightIcon className={`${!isEn&&"rotate-180"}`} />
          </li>
          <li className="flex justify-between">
            <Link to="/look">lorem-lorem</Link>
            <ChevronRightIcon className={`${!isEn&&"rotate-180"}`} />
          </li>
          {data?.map((item: string, index: number) => (
            <li key={index} className="flex justify-between">
              <Link to={`/category/${item}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex overflow-hidden relative w-6/12 mt-10 mx-auto">
        {/* <button onClick={prevSlide} className="absolute left-0 z-10 bg-white p-2 rounded-full">{"<"}</button> */}
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{
            transform: `${isEn ? "translateX(-" : "translateX("}${
              currentIndex * 100
            }%)`,
          }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-auto"
            />
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
