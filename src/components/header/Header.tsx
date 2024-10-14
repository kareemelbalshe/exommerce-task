import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  const location = useLocation();

  const [word, setWord] = useState(location.pathname.slice(1));

  useEffect(() => {
    setWord(location.pathname.slice(1));
  }, [location]);

  return (
    <div className="flex items-center justify-between mt-10 pb-5 px-28 border-b-2 border-b-slate-300">
      <h1 className="font-bold text-2xl">Exclusive</h1>
      <ul className="flex items-center justify-between gap-10">
        <li>
          <Link className={word === '' ? 'underline' : ''} to="/">Home</Link>
        </li>
        <li>
          <Link className={word === 'contact' ? 'underline' : ''} to="/contact">Contact</Link>
        </li>
        <li>
          <Link className={word === 'about' ? 'underline' : ''} to="/about">About</Link>
        </li>
        <li>
          <Link className={word === 'signup' ? 'underline' : ''} to="/signup">Sign Up</Link>
        </li>
      </ul>
      <div className="flex items-center gap-3 justify-center">
        <div className="relative">
          <input
            className="bg-slate-300 border-none outline-none pl-5 pr-14 py-2 rounded-md"
            type="text"
            placeholder="what are you looking for?"
          />
          <SearchIcon className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500" />
        </div>
        <FavoriteBorderIcon />
        <ShoppingCartIcon />
      </div>
    </div>
  );
};

export default Header;
