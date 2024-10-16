import React, { useState } from "react";
import { useSelector } from "react-redux";

const CheckOut = () => {
  const inp = ["name", "z", "s", "cb", "gvj", "klk"];
  const { products } = useSelector((state) => state.cart);

  const [inputValues, setInputValues] = useState(Array(inp.length).fill("")); // للحفاظ على القيم
  const [errors, setErrors] = useState(Array(inp.length).fill("")); // للحفاظ على الأخطاء

  const handleChange = (index, e) => {
    const value = e.target.value;

    // Regular expression to allow only Arabic and English letters
    const regex = /^[a-zA-Z\u0600-\u06FF ]*$/;

    let updatedValues = [...inputValues];
    updatedValues[index] = value;

    setInputValues(updatedValues);

    let updatedErrors = [...errors];

    if (regex.test(value)) {
      updatedErrors[index] = ""; // No error if valid
    } else {
      updatedErrors[index] = "Please enter only Arabic or English letters."; // Error message
    }

    setErrors(updatedErrors);
  };
  return (
    <div className="flex my-16 gap-20 flex-col lg:flex-row justify-between items-start sm:mx-6 lg:mx-28">
      <div className="flex-1 flex flex-col gap-3">
        <h1 className="h11">billing details</h1>
        {inp.map((string, index) => (
          <div key={index} className="flex flex-col mb-4">
            <label htmlFor={string} className="text-gray-400">
              {string}
              <span className="text-red-700">*</span>
            </label>
            <input
              className="bg-gray-300 border-none outline-none pl-5 pr-14 py-2 rounded-md"
              type="text"
              id={string}
              value={inputValues[index]}
              onChange={(e) => handleChange(index, e)}
            />
            {errors[index] && (
              <p style={{ color: "red", marginTop: "5px" }}>{errors[index]}</p>
            )}
          </div>
        ))}
        <div className="">
          <input
            type="checkbox"
            name=""
            id="check"
            className="text-red-500 mr-2"
          />
          <label htmlFor="check">Lorem ipsum dolor sit amet.</label>
        </div>
      </div>
      <div className="flex-1">
        <div className="">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex my-2 gap-3 items-center justify-between"
            >
              <div className="flex gap-2 items-center">
                <img src={product.image} alt="" className="w-16 h-16" />
              </div>
              <div className="flex gap-2 items-center w-32">
                <p className="text-gray-400">
                  <span className="text-green-600 font-bold">
                    {product.quantity} pieces
                  </span>
                  {"   "}
                  {product.price.toFixed(2) * product.quantity}$
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full py-4 rounded-md ">
          <div className="flex items-center justify-between border-b-[1px] border-gray-400 py-3">
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
        </div>
        <div className="mb-5">
          <input
            type="text"
            placeholder="coupon code"
            className="py-3 px-7 border-[1px] border-gray-800 rounded-md mr-5"
          />
          <button className="btn">apply coupon</button>
        </div>{" "}
        <button className="btn">place order</button>
      </div>
    </div>
  );
};

export default CheckOut;
