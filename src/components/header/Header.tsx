import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { useSelector } from "react-redux";
import { Menu } from "@mui/icons-material";

const Header = () => {
  const { products } = useSelector((state) => state.cart);
  const { wishList } = useSelector((state) => state.wishList);

  const [user, setUser] = useState(true);
  const [active, setActive] = useState(false);
  const [num, setNum] = useState(0); // تعيين 0 كقيمة افتراضية
  const [num2, setNum2] = useState(0); // تعيين 0 كقيمة افتراضية
  
  const location = useLocation();
  const [word, setWord] = useState(location.pathname.slice(1));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setWord(location.pathname.slice(1));
  }, [location]);

  useEffect(() => {
    if (products) {
      setNum(products.length);
    }
  }, [products]);
  
  useEffect(() => {
    if (wishList) {
      setNum2(wishList.length);
    }
  }, [wishList]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between mt-10 pb-5 px-6 lg:px-28 border-b-2 border-b-slate-300">
      {/* Logo */}
      <div className="flex w-[100%] lg:w-auto items-center justify-between">
        <h1 className="font-bold text-2xl">Exclusive</h1>

        {/* Navigation Links */}
        <button
          className="lg:hidden bg-black text-white p-2 rounded-full z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu />
        </button>
      </div>
      <ul
        onClick={() => setIsMenuOpen(false)}
        className={`flex flex-col bg-black z-10 lg:flex-row items-center justify-center gap-4 lg:gap-10 mt-5 lg:mt-0 absolute rounded-md bottom-[53%] right-full w-1/2 text-white lg:text-black p-5 lg:static lg:p-0 lg:bg-transparent transition-transform duration-300 ${
          isMenuOpen ? "translate-x-[200%]" : "translate-x-0"
        } lg:translate-y-0`}
      >
        <li>
          <Link className={word === "" ? "underline" : ""} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={word === "contact" ? "underline" : ""} to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className={word === "about" ? "underline" : ""} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={word === "signup" ? "underline" : ""} to="/signup">
            Sign Up
          </Link>
        </li>
      </ul>

      <div className="relative flex flex-row items-center gap-3 justify-center mt-5 lg:mt-0">
        {/* Search Input */}
        <div className="relative">
          <input
            className="bg-slate-300 border-none outline-none pl-5 pr-14 py-2 rounded-md"
            type="text"
            placeholder="what are you looking for?"
          />
          <SearchIcon className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 cursor-pointer" />
        </div>

        {/* Icons */}
        <div className="flex w-[100px] items-center justify-between mt-2 lg:mt-0">
          <Link className="relative" to="/wish-list">
            <FavoriteBorderIcon className="cursor-pointer hover:text-red-500 transition duration-200" />
            {num2 > 0 && (
              <span className="absolute bg-red-500 text-sm flex items-center justify-center rounded-full h-5 w-5 top-[-40%] right-[-40%] text-white">
                {num2}
              </span>
            )}
          </Link>
          <Link className="relative" to="/cart">
            {num > 0 && (
              <span className="absolute bg-red-500 text-sm flex items-center justify-center rounded-full h-5 w-5 top-[-40%] right-[-40%] text-white">
                {num}
              </span>
            )}
            <ShoppingCartIcon className="cursor-pointer hover:text-blue-500 transition duration-200 z-10" />
          </Link>
          {user && (
            <>
              <PersonIcon
                onClick={() => setActive((prev) => !prev)}
                className="cursor-pointer hover:text-blue-500 transition duration-200"
              />
              {active && (
                <div className="absolute top-full lg:right-[-15%] border-2 rounded-md border-gray-400 p-3 bg-violet-600">
                  <ul
                    onClick={() => setActive(false)}
                    className="flex flex-col gap-5"
                  >
                    <li>
                      <Link to="/account/:id">your account</Link>
                    </li>
                    <li>
                      <Link to="/cart">my orders</Link>
                    </li>
                    <li>
                      <Link to="">my reviews</Link>
                    </li>
                    <li
                      className="cursor-pointer"
                      onClick={() => setUser(false)}
                    >
                      log out
                    </li>
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
