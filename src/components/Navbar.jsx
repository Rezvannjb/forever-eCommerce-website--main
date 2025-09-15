import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useSession } from "../context/SessionProvider";
import { signOut } from "../helpers/Auth";
import { toast } from "react-toastify";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [userData, setUserData] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  const isAuthenticated = useSession();

  const handleLogOut = () => {
    signOut();
    toast.success("با موفقیت خارج شدید")
  };
  return (
    <>
      <div className="flex items-center justify-between py-5 font-medium font-yekan">
        <Link to="/">
          <img src={assets.logo} alt="logo" className="w-36" />
        </Link>

        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>خانه</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to="/collection"
            className="flex flex-col items-center gap-1"
          >
            <p>مجموعه</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>درباره ما</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>تماس با ما</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>

        <div className="flex items-center gap-6">
          <img
            onClick={() => {
              setShowSearch(true);
            }}
            src={assets.search_icon}
            alt=""
            className="w-5 cursor-pointer "
          />
          <div className="group relative">
            <Link to={!isAuthenticated && "/login"}>
              <span onClick={isAuthenticated && handleLogOut}>
                <img
                  src={assets.profile_icon}
                  alt=""
                  className="w-5 cursor-pointer inline-block mx-4"
                />
                {isAuthenticated ? <span>log out</span> : <span>log in</span>}
              </span>
            </Link>
          </div>
        </div>

        <Link to="/cart" className="relative ">
          <img src={assets.cart_icon} alt="" className="w-5 min-w-5 " />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        <img
          src={assets.menu_icon}
          alt=""
          className="w-5 cursor-pointer sm:hidden "
          onClick={() => setVisible(!visible)} //visibility toggle (true/false))
        />
      </div>

      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white ease-in duration-300
             ${visible ? "w-full" : "w-0"}`}
      >
        <div className="flex flex-col text-gray-600 ">
          <div
            onClick={() => {
              setVisible(false);
            }}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
            <p className="font-semibold">بازگشت</p>
          </div>

          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className="py-2 pl-6 border"
            to="/"
          >
            {" "}
            خانه{" "}
          </NavLink>
          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className="py-2 pl-6 border"
            to="/collection"
          >
            {" "}
            مجموعه{" "}
          </NavLink>
          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className="py-2 pl-6 border"
            to="/about"
          >
            {" "}
            درباره ما{" "}
          </NavLink>
          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className="py-2 pl-6 border"
            to="/contact"
          >
            {" "}
            تماس با ما{" "}
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
