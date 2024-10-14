import React from "react";
import img1 from "../../assets/img/wallpaperflare.com_wallpaper (1).jpg";

const Login = () => {
  return (
    <div className="mt-16 mb-32 flex justify-center items-center">
      <img className="w-1/2 h-auto" src={img1} alt="" />
      <div className="w-1/2 flex items-start flex-col mx-20">
        <h1 className="h11">Login to your account</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
          dolorum.
        </p>
        <div className="flex flex-col gap-5 items-center justify-start w-full">
          <input
            className="border-b-4 border-gray-400 text-gray-400 py-2 w-full"
            placeholder="email"
            type="email"
            name=""
            id=""
          />
          <input
            className="border-b-4 border-gray-400 text-gray-400 py-2 w-full"
            placeholder="password"
            type="password"
            name=""
            id=""
          />
          <div className="flex items-center justify-between w-full mt-5">
            <button className="btn">Create Account</button>
            <a href="" className="text-red-500">Forgot password?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
