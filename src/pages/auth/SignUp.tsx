import img1 from "/assets/img/wallpaperflare.com_wallpaper (1).jpg";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import { useTheme } from "../../lib/hooks/ThemeContext";

const SignUp = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="mt-16 mb-32 flex justify-center items-center flex-col gap-6 lg:gap-0 lg:flex-row">
      <img className="lg:w-1/2 h-auto" src={img1} alt="" />
      <div className="w-[90%] lg:w-1/2 flex items-start flex-col mx-20">
        <h1 className="h11">Create an account</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
          dolorum.
        </p>
        <div className="flex flex-col gap-5 items-center justify-start w-full">
          <input
            className={`${
              isDarkMode && "bg-gray-800"
            } border-b-4 border-gray-400 text-gray-400 py-2 w-full`}
            placeholder="name"
            type="text"
            name=""
            id=""
          />
          <input
            className={`${
              isDarkMode && "bg-gray-800"
            } border-b-4 border-gray-400 text-gray-400 py-2 w-full`}
            placeholder="email"
            type="email"
            name=""
            id=""
          />
          <input
            className={`${
              isDarkMode && "bg-gray-800"
            } border-b-4 border-gray-400 text-gray-400 py-2 w-full`}
            placeholder="password"
            type="password"
            name=""
            id=""
          />
          <button className="btn w-full">Create Account</button>
          <button className="w-full border-2 border-gray-400 py-4 px-10 rounded-md">
            <GoogleIcon /> Sign Up with Google
          </button>
          <p>
            Already have an account?{" "}
            <Link className="text-gray-400" to="/login">
              Login In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
