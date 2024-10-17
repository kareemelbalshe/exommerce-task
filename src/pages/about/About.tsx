/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import img1 from "/assets/img/wallpaperflare.com_wallpaper (1).jpg";
import ShopIcon from "@mui/icons-material/Shop";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import CountUp from "react-countup";
import { useFetch } from "../../lib/hooks/useFetch";
import SectionLow from "../../components/section/SectionLow";

const arr = [
  {
    icon: <ShopIcon style={{ fontSize: "40px" }} />,
    number: 10300,
    text: "Lorem ipsum dolor sit amet.",
  },
  {
    icon: <StarIcon style={{ fontSize: "40px" }} />,
    number: 8100,
    text: "Aliquam tincidunt mauris.",
  },
  {
    icon: <FavoriteIcon style={{ fontSize: "40px" }} />,
    number: 12400,
    text: "Curabitur tempor dui.",
  },
  {
    icon: <LocalMallIcon style={{ fontSize: "40px" }} />,
    number: 5700,
    text: "Vivamus eget sapien.",
  },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const url = "https://fakestoreapi.com/users";
  const { data, loading, error } = useFetch(url);

  useEffect(() => {
    setTimeout(() => {
      setCurrentIndex(1);
    }, 3000);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const visibleItems = () => {
    if (currentIndex + 3 <= data.length) {
      return data.slice(currentIndex, currentIndex + 3);
    } else {
      return [
        ...data.slice(currentIndex, data.length),
        ...data.slice(0, (currentIndex + 3) % data.length),
      ];
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="">
      <div
        dir="ltr"
        className="flex flex-col items-center justify-between gap-10 mt-20 lg:flex-row mx-6  lg:mx-0 lg:ml-28"
      >
        <div className="">
          <h1 className="text-6xl">Our story</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
            non ipsa voluptas perspiciatis necessitatibus, quis laborum
            distinctio, harum cumque eos itaque ducimus sequi dicta qui tempora
            nam repudiandae adipisci ad.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
            expedita.
          </p>
        </div>
        <div className="">
          <img src={img1} alt="" />
        </div>
      </div>
      <div className="flex items-center justify-between flex-col lg:flex-row gap-5 mt-20 sm:mx-6 lg:mx-28">
        {arr.map((item, index) => (
          <div
            key={index}
            className="flex min-w-[250px] flex-col items-center justify-center border-2 border-slate-300 p-5 rounded-md hover:bg-red-500 hover:text-white transition-all"
          >
            {item.icon}
            <h1 className="mt-2 text-lg font-medium">
              <CountUp end={item.number} duration={3} separator="," />{" "}
            </h1>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <div className="lg:mx-28 mb-20">
        <div className="flex items-center flex-col justify-center gap-10 mt-20 lg:flex-row lg:mx-28 overflow-x-hidden">
          {visibleItems().map((item, index: number) => (
            <div className="bg-gray-100 p-6 rounded-md w-[200px]" key={index}>
              <h1 className="text-xl font-bold text-center">{item.username}</h1>
              <p className="text-center text-gray-600">{item.email}</p>
              <p className="text-center text-gray-600">{item.phone}</p>
            </div>
          ))}
        </div>

        {/* الدوائر للتنقل بين الشرائح */}
        <div className="flex gap-3 mt-10 mb-20 items-center justify-center m-auto">
          {Array.from({ length: data.length }).map((_, index) => (
            <span
              key={index}
              className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
                currentIndex === index
                  ? "bg-red-600 border-2 border-slate-500 scale-125" // الشكل النشط مع تأثير تكبير
                  : "bg-gray-400"
              }`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
        <SectionLow />
      </div>
    </div>
  );
};

export default About;
