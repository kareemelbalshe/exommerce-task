import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTheme } from "../../lib/hooks/ThemeContext";

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      dir="ltr"
      className={`${!isDarkMode ? "bg-black" : "bg-gray-800"} text-white`}
    >
      <div className="flex flex-col gap-5 px-6 py-3 md:gap-8 md:px-16 md:py-5 lg:px-28 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-1 items-start flex-1">
          <h1 className="text-lg md:text-xl lg:text-2xl">Exclusive</h1>
          <h2 className="text-sm md:text-base lg:text-lg">Subscribe</h2>
          <p className="text-xs md:text-sm lg:text-base">
            Get 10% off that order
          </p>
          <div className="relative w-full max-w-xs">
            <input
              className={`${
                !isDarkMode ? "bg-black" : "bg-gray-800"
              } text-slate-400 border-2 border-slate-50 outline-none rounded-sm py-1 px-3 w-full`}
              placeholder="Enter your email"
            />
            <SendIcon className="absolute right-2 top-1/2 -translate-y-1/2 text-white" />
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-lg md:text-xl lg:text-2xl">Support</h1>
          <p className="text-xs md:text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            dolorum.
          </p>
          <p className="text-xs md:text-sm lg:text-base">example@gmail.com</p>
          <p className="text-xs md:text-sm lg:text-base">+1 (123) 456 7890</p>
        </div>

        <div className="flex-1">
          <h1 className="text-lg md:text-xl lg:text-2xl">Help</h1>
          <ul className="text-xs md:text-sm lg:text-base">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Sign Up</a>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <h1 className="text-lg md:text-xl lg:text-2xl">About</h1>
          <ul className="text-xs md:text-sm lg:text-base">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Sign Up</a>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <h1 className="text-lg md:text-xl lg:text-2xl">Download App</h1>
          <p className="text-gray-500 text-xs md:text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            dolorum.
          </p>
          <div className="flex flex-col items-start">
            <img src="" alt="" className="w-24 h-auto lg:w-32" />
            <div className="flex gap-2">
              <img src="" alt="" className="w-12 h-auto lg:w-16" />
              <img src="" alt="" className="w-12 h-auto lg:w-16" />
            </div>
            <ul className="flex gap-2 mt-2">
              <li>
                <FacebookIcon />
              </li>
              <li>
                <InstagramIcon />
              </li>
              <li>
                <LinkedInIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="my-4" />
      <div className="py-5 text-center text-white">
        <p className="text-xs md:text-sm lg:text-base">© 2024 Exclusive</p>
      </div>
    </div>
  );
};

export default Footer;
