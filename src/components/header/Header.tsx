import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
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
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  const location = useLocation();
  const [word, setWord] = useState(location.pathname.slice(1));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

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

  // إغلاق القائمة عند الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
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
    // إضافة حدث الاستماع لتغير الحجم
    window.addEventListener("resize", handleResize);

    // تنظيف عند إلغاء التحميل
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between mt-10 pb-5 px-6 lg:px-28 border-b-2 border-b-slate-300">
      {/* Logo */}
      <div className="flex w-[100%] lg:w-auto items-center justify-between">
        <h1 className="font-bold text-2xl">Exclusive</h1>

        {/* زر المنيو */}
        <button
          ref={buttonRef}
          className="lg:hidden bg-black text-white p-2 rounded-full z-50 h-12" // ضبط ارتفاع الزر
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu />
        </button>
      </div>

      {/* القائمة الجانبية */}
      <ul
        ref={menuRef}
        className={`z-20 flex flex-col bg-black lg:flex-row items-center justify-center gap-4 lg:gap-10 mt-5 lg:mt-0 absolute rounded-md right-full w-full text-white lg:text-black p-5 lg:static lg:p-0 lg:bg-transparent transition-transform duration-300 lg:h-auto ${
          isMenuOpen ? "translate-x-[100%]" : "translate-x-0"
        } translate-y-0`}
      >
        <li>
          <Link onClick={()=>setIsMenuOpen(false)} className={word === "" ? "underline" : ""} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={()=>setIsMenuOpen(false)} className={word === "contact" ? "underline" : ""} to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link onClick={()=>setIsMenuOpen(false)} className={word === "about" ? "underline" : ""} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link onClick={()=>setIsMenuOpen(false)} className={word === "signup" ? "underline" : ""} to="/signup">
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
                <div className="z-10 absolute flex items-center justify-center text-white top-full left-[67%] w-[130px] lg:left-[76%] lg:w-[150px] border-2 rounded-md border-gray-400 p-3 bg-violet-600">
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



// import { Link, useLocation } from "react-router-dom";
// import { useState, useEffect, useRef } from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import PersonIcon from "@mui/icons-material/Person";
// import { useSelector } from "react-redux";
// import { Menu } from "@mui/icons-material";

// const Header = () => {
//   const { products } = useSelector((state) => state.cart);
//   const { wishList } = useSelector((state) => state.wishList);

//   const [user, setUser] = useState(true);
//   const [active, setActive] = useState(false);
//   const [num, setNum] = useState(0);
//   const [num2, setNum2] = useState(0);

//   const location = useLocation();
//   const [word, setWord] = useState(location.pathname.slice(1));
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const menuRef = useRef(null);
//   const buttonRef = useRef(null);

//   useEffect(() => {
//     setWord(location.pathname.slice(1));
//   }, [location]);

//   useEffect(() => {
//     if (products) {
//       setNum(products.length);
//     }
//   }, [products]);

//   useEffect(() => {
//     if (wishList) {
//       setNum2(wishList.length);
//     }
//   }, [wishList]);

//   // إغلاق القائمة عند الضغط خارجها
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         menuRef.current &&
//         !menuRef.current.contains(event.target) &&
//         buttonRef.current &&
//         !buttonRef.current.contains(event.target)
//       ) {
//         setIsMenuOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [menuRef, buttonRef]);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth > 768) {
//         setIsMenuOpen(false);
//       }
//     };
//     // إضافة حدث الاستماع لتغير الحجم
//     window.addEventListener("resize", handleResize);

//     // تنظيف عند إلغاء التحميل
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_auto] items-center justify-between mt-10 pb-5 px-6 lg:px-28 border-b-2 border-b-slate-300 gap-5 lg:gap-0">
//       {/* Logo and Menu Button */}
//       <div className="flex w-full lg:w-auto items-center justify-between">
//         <h1 className="font-bold text-2xl">Exclusive</h1>
//         {/* زر المنيو */}
//         <button
//           ref={buttonRef}
//           className="lg:hidden bg-black text-white p-2 rounded-full z-50 h-12"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <Menu />
//         </button>
//       </div>

//       {/* القائمة الجانبية */}
//       <ul
//         ref={menuRef}
//         className={`z-20 flex flex-col bg-black lg:flex-row items-center justify-center gap-4 lg:gap-10 mt-5 lg:mt-0 absolute rounded-md right-full w-full text-white lg:text-black p-5 lg:static lg:p-0 lg:bg-transparent transition-transform duration-300 lg:h-auto ${isMenuOpen ? "translate-x-[100%]" : "translate-x-0"} translate-y-0`}
//       >
//         <li>
//           <Link className={word === "" ? "underline" : ""} to="/">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link className={word === "contact" ? "underline" : ""} to="/contact">
//             Contact
//           </Link>
//         </li>
//         <li>
//           <Link className={word === "about" ? "underline" : ""} to="/about">
//             About
//           </Link>
//         </li>
//         <li>
//           <Link className={word === "signup" ? "underline" : ""} to="/signup">
//             Sign Up
//           </Link>
//         </li>
//       </ul>

//       {/* Search and Icons */}
//       <div className="relative grid grid-cols-[auto_auto] gap-5 lg:gap-3 items-center">
//         {/* Search Input */}
//         <div className="relative col-span-2 lg:col-span-1">
//           <input
//             className="bg-slate-300 border-none outline-none pl-5 pr-14 py-2 rounded-md w-full"
//             type="text"
//             placeholder="what are you looking for?"
//           />
//           <SearchIcon className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 cursor-pointer" />
//         </div>

//         {/* Icons */}
//         <div className="flex items-center justify-between gap-3">
//           <Link className="relative" to="/wish-list">
//             <FavoriteBorderIcon className="cursor-pointer hover:text-red-500 transition duration-200" />
//             {num2 > 0 && (
//               <span className="absolute bg-red-500 text-sm flex items-center justify-center rounded-full h-5 w-5 top-[-40%] right-[-40%] text-white">
//                 {num2}
//               </span>
//             )}
//           </Link>
//           <Link className="relative" to="/cart">
//             {num > 0 && (
//               <span className="absolute bg-red-500 text-sm flex items-center justify-center rounded-full h-5 w-5 top-[-40%] right-[-40%] text-white">
//                 {num}
//               </span>
//             )}
//             <ShoppingCartIcon className="cursor-pointer hover:text-blue-500 transition duration-200 z-10" />
//           </Link>
//           {user && (
//             <>
//               <PersonIcon
//                 onClick={() => setActive((prev) => !prev)}
//                 className="cursor-pointer hover:text-blue-500 transition duration-200"
//               />
//               {active && (
//                 <div className="z-10 absolute flex items-center justify-center text-white top-full left-0 lg:left-auto lg:right-0 w-[130px] lg:w-[150px] border-2 rounded-md border-gray-400 p-3 bg-violet-600">
//                   <ul
//                     onClick={() => setActive(false)}
//                     className="flex flex-col gap-5"
//                   >
//                     <li>
//                       <Link to="/account/:id">Your Account</Link>
//                     </li>
//                     <li>
//                       <Link to="/cart">My Orders</Link>
//                     </li>
//                     <li>
//                       <Link to="">My Reviews</Link>
//                     </li>
//                     <li
//                       className="cursor-pointer"
//                       onClick={() => setUser(false)}
//                     >
//                       Log Out
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
