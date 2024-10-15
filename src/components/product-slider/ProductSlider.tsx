import StarRating from "./StarRating";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useFetch } from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../rtk/slices/cart-slice";

export default function ProductSlider({ click, setClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (click === "left") {
      goPrev();
    } else if (click === "right") {
      goNext();
    }
  }, [click]);

  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );

  const dispatch = useDispatch();

  const truncate = (str, maxLength) => {
    return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const goNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % data.length // الانتقال للصورة التالية مع التأكد من عدم تجاوز العدد
    );
    setClick("");
  };

  const goPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + data.length) % data.length // الانتقال للصورة السابقة مع الالتفاف إلى النهاية
    );
    setClick("");
  };

  return (
    <div className="flex gap-5 items-start my-10 overflow-x-scroll hide-scrollbar">
      {data
        .slice(currentIndex, currentIndex + data.length)
        .map((item, index) => (
          <div className="flex gap-2 items-start flex-col" key={index}>
            <div className="w-60 h-60 flex justify-center items-center bg-gray-300 relative overflow-hidden group">
              <img className="w-16" src={item.image} alt="" />
              <FavoriteBorderIcon className="absolute right-2 top-4" />
              <RemoveRedEyeIcon className="absolute right-2 top-12" />

              <button
                onClick={async() => await dispatch(cartAction.addToCart(item))}
                className="absolute bottom-[-100%] w-full bg-black text-white p-2 transition-all duration-300 group-hover:bottom-0"
              >
                Add to Cart
              </button>
            </div>
            <h1>{truncate(item.title, 20)}</h1>
            <p>Price: {item.price} $</p>
            <StarRating rating={item.rating.rate} />
            <span>({item.rating.count})</span>
          </div>
        ))}
    </div>
  );
}
