import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { truncate } from "../../lib/functions/truncate";
import { Product } from "../../lib/types/types";
import { wishListAction } from "../../lib/rtk/slices/love-slice";
import { cartAction } from "../../lib/rtk/slices/cart-slice";
import { RootState } from "../../lib/rtk/store";

const WishList = () => {
  const { wishList } = useSelector((state: RootState) => state?.wishList);

  const dispatch = useDispatch();

  const [num, setNum] = useState(0);

  useEffect(() => {
    if (wishList) {
      setNum(wishList.length);
    }
  }, [wishList]);

  return (
    <div className="flex gap-5 items-start flex-wrap my-10 overflow-x-scroll hide-scrollbar sm:mx-6 lg:mx-28">
      <div className="flex items-center justify-between w-full">
        <h1 className="h11">wish list ({num})</h1>
        <button className="btn1">move all to bag</button>
      </div>
      <div className="flex gap-5 items-start flex-wrap my-5 overflow-x-scroll hide-scrollbar">
        {wishList.map((item: Product, index: number) => (
          <div
            className="flex gap-2 m-auto lg:m-0 items-start flex-col"
            key={index}
          >
            <div className="w-60 h-60 flex justify-center items-center bg-gray-300 relative overflow-hidden group">
              <img className="w-16" src={item.image} alt="" />

              <DeleteIcon
                onClick={() => dispatch(wishListAction.addToWishList(item))}
                className="absolute right-2 top-4 cursor-pointer"
              />
              <button
                onClick={() => dispatch(cartAction.addToCart(item))}
                className="absolute bottom-0 w-full bg-black text-white p-2 transition-all duration-300"
              >
                <ShoppingCartIcon /> Add to Cart
              </button>
            </div>
            <h1>{truncate(item.title, 20)}</h1>
            <p>Price: {item.price} $</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
