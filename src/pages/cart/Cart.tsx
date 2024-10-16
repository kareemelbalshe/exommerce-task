import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../components/rtk/slices/cart-slice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="overflow-x-auto sm:mx-6 lg:mx-28">
      <table className="min-w-full bg-white rounded-lg my-10">
        <thead>
          <tr className="flex items-center justify-between shadow-md rounded-md border-b border-gray-200 py-3 px-4">
            <th className="flex-1 text-left">Product</th>
            <th className="flex-1 text-left">Price</th>
            <th className="flex-1 text-left">Quantity</th>
            <th className="flex-1 text-left">Subtotal</th>
            <th className="flex-1 text-left">Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              key={index}
              className="flex flex-wrap items-center justify-between shadow-md my-3 bg-white rounded-md border-b border-gray-200 py-3 px-4 hover:bg-gray-50 transition duration-200"
            >
              <td className="flex-1">{product.title}</td>
              <td className="flex-1 text-green-500">
                ${product.price.toFixed(2)}
              </td>
              <td className="flex-1">
                <input
                  type="number"
                  className="w-11 border-[1px] rounded-md pl-1 border-gray-400"
                  value={product.quantity}
                  onChange={(e) =>
                    dispatch(
                      cartAction.updateQuantity({
                        id: product.id,
                        quantity: Number(e.target.value),
                      })
                    )
                  }
                />
              </td>
              <td className="flex-1 text-blue-500">
                ${(product.price * product.quantity).toFixed(2)}
              </td>
              <td className="flex-1">
                <button
                  onClick={() => dispatch(cartAction.deleteFromCart(product))}
                  className="btn"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-[100%] flex items-center justify-between mb-20">
        <button className="btn1" onClick={() => navigate("/")}>
          return to shop
        </button>
        <button className="btn1">update cart</button>
      </div>
      <div className="flex w-[100%] items-center justify-between mb-20">
        <div className="">
          <input
            type="text"
            placeholder="coupon code"
            className="py-3 px-7 border-[1px] border-gray-800 rounded-md mr-5"
          />
          <button className="btn">apply coupon</button>
        </div>
        <div className="flex flex-col gap-3 w-[400px] px-3 py-4 border-[1px] border-gray-800 rounded-md ">
          <h1 className="h11">cart total</h1>
          <div className="flex items-center justify-between border-b-[1px] border-gray-400 py-2">
            <h2>subtotal</h2>
            <p className="">
              $
              {products
                .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
                .toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-between border-b-[1px] border-gray-400 py-2">
            <h2>shipping</h2>
            <p className="">free</p>
          </div>
          <div className="flex items-center justify-between py-2">
            <h2>total</h2>
            <p className="">
              $
              {products
                .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
                .toFixed(2)}
            </p>
          </div>
          <button onClick={()=>navigate("/checkout")} className="btn ml-16">process to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
