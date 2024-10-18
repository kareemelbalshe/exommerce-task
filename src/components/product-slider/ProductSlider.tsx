/* eslint-disable react-hooks/exhaustive-deps */
import StarRating from "./StarRating";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useFetch } from "../../lib/hooks/useFetch";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { truncate } from "../../lib/functions/truncate";
import { wishListAction } from "../../lib/rtk/slices/love-slice";
import { cartAction } from "../../lib/rtk/slices/cart-slice";
import { RootState } from "../../lib/rtk/store";
import { Product } from "../../lib/types/types";

interface ProductSliderProps {
  url: string;
  click: string;
  setClick: (direction: "left" | "right" | "") => void;
}

export default function ProductSlider({
  url,
  click,
  setClick,
}: ProductSliderProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { wishList } = useSelector((state: RootState) => state.wishList);

  const navigate = useNavigate();

  useEffect(() => {
    if (click === "left") {
      if (currentIndex >= 0) goPrev();
    } else if (click === "right") {
      goNext();
    }
  }, [click]);

  const { data, loading, error } = useFetch<Product[]>(url);

  const dispatch = useDispatch();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const goNext = () => {
    if (data && Array.isArray(data) && currentIndex < data?.length - 5) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data?.length);
      setClick("");
    }
  };

  const goPrev = () => {
    const validData = data as Product[];
    if (validData.length > 0) {
      if (currentIndex > 0) {
        setCurrentIndex(
          (prevIndex) => (prevIndex - 1 + validData?.length) % validData?.length
        );
        setClick("");
      }
    }
  };

  const isInWishlist = (item: Product) => {
    return wishList.some(
      (wishlistItem: Product) => wishlistItem.id === item.id
    );
  };

  return (
    <div className="flex gap-5 items-start my-10 overflow-x-scroll hide-scrollbar">
      {data
        ?.slice(currentIndex, currentIndex + data?.length)
        .map((item, index) => (
          <div className="flex gap-2 items-start flex-col" key={index}>
            <div className="w-60 h-60 flex justify-center items-center relative overflow-hidden group">
              <img className="w-32" src={item.image} alt="" />

              {isInWishlist(item) ? (
                <FavoriteIcon
                  onClick={() => dispatch(wishListAction.addToWishList(item))}
                  className="absolute right-2 top-4 cursor-pointer text-red-500"
                />
              ) : (
                <FavoriteBorderIcon
                  onClick={() => dispatch(wishListAction.addToWishList(item))}
                  className="absolute right-2 top-4 cursor-pointer"
                />
              )}

              <RemoveRedEyeIcon
                onClick={() => navigate(`/product/${item.id}`)}
                className="absolute right-2 top-12"
              />

              <button
                onClick={() => {
                  dispatch(cartAction.addToCart(item));
                  alert(`product has been added to the cart!`);
                }}
                className="absolute bottom-[-100%] w-full bg-black text-white p-2 transition-all duration-300 group-hover:bottom-0"
              >
                Add to Cart
              </button>
            </div>
            <h1>{truncate(item.title, 20)}</h1>
            <p>Price: {item.price} $</p>
            <StarRating rating={item?.rating?.rate} />
            <span>({item?.rating?.count})</span>
          </div>
        ))}
    </div>
  );
}
