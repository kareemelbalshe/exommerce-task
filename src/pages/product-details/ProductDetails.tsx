import { useState } from "react";
import { useFetch } from "../../lib/hooks/useFetch";
import { useParams } from "react-router-dom";
import StarRating from "../../components/product-slider/StarRating";
import { useDispatch, useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { cartAction } from "../../lib/rtk/slices/cart-slice";
import { wishListAction } from "../../lib/rtk/slices/love-slice";
import { RootState } from "../../lib/rtk/store";
import { Product } from "../../lib/types/types";

const ProductDetails = () => {
  const dispatch = useDispatch();

  const { wishList } = useSelector((state: RootState) => state.wishList);

  const [num, setNum] = useState(0);
  const { productId } = useParams();

  const { data, loading, error } = useFetch<Product>(
    `https://fakestoreapi.com/products/${productId}`
  );

  const increase = () => {
    setNum(num + 1);
  };

  const decrease = () => {
    if (num > 0) setNum(num - 1);
  };

  const isInWishlist = (item: Product) => {
    return wishList.some(
      (wishlistItem: Product) => wishlistItem.id === item.id
    );
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="flex flex-col lg:flex-row my-20 gap-32 sm:mx-6 lg:mx-28">
      <div className="flex flex-1 items-center gap-10">
        <div className="flex flex-col w-[20%] gap-5">
          <img src={data?.image} alt="" />
          <img src={data?.image} alt="" />
          <img src={data?.image} alt="" />
          <img src={data?.image} alt="" />
        </div>
        <img className="w-[80%]" src={data?.image} alt="" />
      </div>
      <div className="flex-1 flex flex-col gap-5">
        <div className="">
          <h1 className="h11">{data?.title}</h1>
          <p>Price: {data?.price} $</p>
          <StarRating rating={data?.rating?.rate ?? 0} />
          <span>({data?.rating?.count})</span>
          <p>({data?.description})</p>
        </div>
        <hr />
        <div className="flex gap-10 items-center">
          <div className="">
            <span
              onClick={decrease}
              className="py-2 cursor-pointer bg-red-500 text-white px-3 border-[1px] border-gray-500"
            >
              -
            </span>
            <span className="py-2 px-6 text-center border-t-[1px] border-b-[1px] border-gray-500">
              {num}
            </span>
            <span
              onClick={increase}
              className="py-2 cursor-pointer bg-red-500 text-white px-3 border-[1px] border-gray-500"
            >
              +
            </span>
          </div>
          <button
            onClick={() => {
              dispatch(cartAction.addToCart({ ...data, quantity: num }));
              alert(`product has been added to the cart!`);
            }}
            className="py-2 cursor-pointer bg-red-500 text-white px-5 border-[1px] rounded-md"
          >
            buy now
          </button>
          {data && (
            <div className="">
              {isInWishlist(data) ? (
                <FavoriteIcon
                  onClick={() => dispatch(wishListAction.addToWishList(data))}
                  className="cursor-pointer text-red-500 border-[1px] border-gray-500 rounded-sm p-1"
                  style={{ fontSize: "35px" }}
                />
              ) : (
                <FavoriteBorderIcon
                  onClick={() => dispatch(wishListAction.addToWishList(data))}
                  className="cursor-pointer border-[1px] border-gray-500 rounded-sm p-1"
                  style={{ fontSize: "35px" }}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
