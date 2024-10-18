import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { useSelector } from "react-redux";
import { Menu } from "@mui/icons-material";
import { RootState } from "../../lib/rtk/store";
import { useTranslation } from "react-i18next";
import { useLang } from "../../lib/hooks/useLang";

const Header = () => {
  const { t } = useTranslation();
  const { isEn } = useLang();

  const { products } = useSelector((state: RootState) => state.cart);
  const { wishList } = useSelector((state: RootState) => state.wishList);

  const [user, setUser] = useState(true);
  const [active, setActive] = useState(false);
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  const [word, setWord] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const menuRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, buttonRef]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center gap-5 justify-between mt-10 pb-5 px-6 lg:px-28 border-b-2 border-b-slate-300">
      <div className="flex w-[100%] md:w-auto items-center justify-between">
        <h1 className="font-bold text-2xl">{t("exclusive")}</h1>
      </div>

      <div className="relative w-full md:w-auto">
        <button
          ref={buttonRef}
          className={`absolute -top-12 md:hidden bg-black text-white p-2 rounded-full z-50 h-12 ${
            isEn ? "right-0" : "left-0"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu />
        </button>
        <ul
          ref={menuRef}
          className={`z-20 flex flex-col bg-slate-400 md:flex-row items-center justify-center gap-4 md:gap-10 md:mt-0 absolute rounded-md right-full w-full p-5 md:static md:p-0 md:bg-transparent transition-transform duration-300 md:h-auto 
              ${isEn && isMenuOpen && "translate-x-[100%]"}
              ${isEn && !isMenuOpen && "-translate-x-7"}
              ${!isEn && isMenuOpen && "translate-x-[100%] lg:translate-x-0"}
              ${!isEn && !isMenuOpen && "translate-x-[210%]"}
          translate-y-0`}
        >
          <li>
            <Link
              onClick={() => setIsMenuOpen(false)}
              className={word === "" ? "underline" : ""}
              to="/"
            >
              {t("home")}
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsMenuOpen(false)}
              className={word === "contact" ? "underline" : ""}
              to="/contact"
            >
              {t("contact")}
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsMenuOpen(false)}
              className={word === "about" ? "underline" : ""}
              to="/about"
            >
              {t("about")}
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setIsMenuOpen(false)}
              className={word === "signup" ? "underline" : ""}
              to="/signup"
            >
              {t("signup")}
            </Link>
          </li>
        </ul>
      </div>

      <div className="relative flex flex-row items-center gap-3 justify-center mt-5 lg:mt-0">
        <div className="relative">
          <input
            className="bg-slate-300 border-none outline-none pl-5 pr-14 py-2 rounded-md"
            type="text"
            placeholder="what are you looking for?"
          />
          <SearchIcon className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 cursor-pointer" />
        </div>

        <div className="flex w-[100px] items-center justify-between mt-2 lg:mt-0">
          <Link className="relative" to="/wish-list">
            <FavoriteBorderIcon className="cursor-pointer hover:text-red-500 transition duration-200" />
            {num2 > 0 && (
              <span
                className={`absolute bg-red-500 text-sm flex items-center justify-center rounded-full h-5 w-5 top-[-40%] ${
                  isEn ? "right-[-40%]" : "left-[-40%]"
                } text-white`}
              >
                {num2}
              </span>
            )}
          </Link>
          <Link className="relative" to="/cart">
            {num > 0 && (
              <span
                className={`absolute bg-red-500 text-sm flex items-center justify-center rounded-full h-5 w-5 top-[-40%] ${
                  isEn ? "right-[-40%]" : "left-[-40%]"
                } text-white`}
              >
                {num}
              </span>
            )}
            <ShoppingCartIcon className="cursor-pointer hover:text-blue-500 transition duration-200 z-10" />
          </Link>
          {user && (
            <div className="relative">
              <PersonIcon
                onClick={() => setActive((prev) => !prev)}
                className="cursor-pointer hover:text-blue-500 transition duration-200"
              />
              {active && (
                <div
                  className={`z-10 absolute flex items-center justify-center text-white top-full sm:left-[50%] sm:-translate-x-1/2 w-[130px] lg:w-[150px] border-2 rounded-md border-gray-400 p-3 bg-violet-600 ${
                    isEn ? "-right-[20%]" : "-left-[20%]"
                  }`}
                >
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
