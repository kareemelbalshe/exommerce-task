import React, { useEffect, useState } from "react";
import img1 from "../../assets/img/wallpaperflare.com_wallpaper (1).jpg";
import ShopIcon from "@mui/icons-material/Shop"; // استبدل Shop بأي أيقونة تريدها
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import CountUp from "react-countup"; // استيراد مكتبة CountUp
import { useFetch } from "../../hooks/useFetch";

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
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // تغيير العنصر كل 3 ثوانٍ
    return () => clearInterval(interval); // تنظيف عند الخروج من الكومبوننت
  }, [currentIndex]);

  // الانتقال إلى الشريحة التالية
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data?.length);
  };

  // الانتقال إلى شريحة محددة بالضغط على span
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  return (
    <div className="">
      <div className="flex flex-col items-center justify-between gap-10 mt-20 lg:flex-row mx-6  lg:mx-0 lg:ml-28">
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
      <div className="relative">
      <div className="flex items-center justify-between gap-10 mt-20 flex-row sm:mx-6 lg:mx-28 overflow-hidden">
        {data
          .slice(currentIndex, currentIndex + 3) // عرض 3 عناصر في كل مرة
          .map((item, index) => (
            <div className="w-60 bg-gray-200 p-4 rounded-lg" key={index}>
              <h1 className="text-xl font-bold">{item.username}</h1>
              <p>{item.email}</p>
              <p>{item.phone}</p>
            </div>
          ))}
      </div>

      {/* الدوائر للتنقل بين الشرائح */}
      <div className="flex gap-3 items-center justify-center absolute bottom-2 left-1/2 -translate-x-1/2">
        {Array(5) // خمس دوائر للتحكم في التنقل
          .fill()
          .map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                currentIndex === index
                  ? "bg-red-600 border-2 border-slate-500 scale-125" // الشكل النشط مع تأثير تكبير
                  : "bg-gray-400"
              }`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
      </div>
    </div>
      
    </div>
  );
};

export default About;
