import React, { useContext, useState } from "react";
import { assets } from "@/assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "@/context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="sticky top-0 z-50 bg-[#F3EDE4] border-b border-[#e6dfd6] shadow-sm">

      <div className="flex items-center justify-between px-6 sm:px-16 py-6 font-modern">

        {/* ================= LOGO ================= */}
<Link
  to="/"
  className="relative flex flex-col justify-center h-12 leading-none group cursor-pointer"
>
  {/* MKT (Default) */}
  <span className="font-royal text-3xl tracking-widest text-[#8B1E3F] transition-all duration-700 ease-in-out group-hover:opacity-0 group-hover:-translate-y-4">
    MKT
  </span>

  {/* Maa Kripa Trendz (On Hover) */}
  <span className="absolute top-1 font-royal text-2xl tracking-wider text-[#8B1E3F] opacity-0 translate-y-4 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap">
    Maa Kripa Trendz
  </span>

  {/* Subtitle */}
  <span className="text-[10px] tracking-[4px] text-gray-500 mt-1">
    ETHNIC WEAR
  </span>
</Link>

        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden sm:flex gap-12 text-sm tracking-[3px] font-semibold">

          {["/", "/collection", "/about", "/contact"].map((path, index) => {
            const labels = ["HOME", "COLLECTION", "ABOUT", "CONTACT"];

            return (
              <NavLink
                key={index}
                to={path}
                className={({ isActive }) =>
                  `relative group transition-all duration-300 ${
                    isActive
                      ? "text-[#8B1E3F]"
                      : "text-gray-700 hover:text-[#8B1E3F]"
                  }`
                }
              >
                <span className="relative z-10">{labels[index]}</span>

                {/* Golden underline */}
                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-gradient-to-r from-[#8B1E3F] to-[#D4AF37] transition-all duration-500 group-hover:w-full"></span>

                {/* Soft glow background */}
                <span className="absolute inset-0 scale-0 group-hover:scale-100 transition duration-500 rounded-md bg-[#8B1E3F]/5"></span>
              </NavLink>
            );
          })}

        </ul>

        {/* ================= RIGHT ICONS ================= */}
        <div className="flex items-center gap-6">

          {/* Search */}
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            className="w-5 cursor-pointer hover:scale-110 transition duration-200"
            alt=""
          />

          {/* Profile */}
          <div className="group relative">
            <Link to="/login">
              <img
                className="w-5 cursor-pointer hover:scale-110 transition duration-200"
                src={assets.profile_icon}
                alt=""
              />
            </Link>

            {/* Dropdown */}
            <div className="hidden group-hover:block absolute right-0 mt-4">
              <div className="flex flex-col gap-2 w-40 py-4 px-5 bg-white rounded-xl shadow-lg border border-[#e6dfd6] text-gray-600">
                <p className="cursor-pointer hover:text-[#8B1E3F] transition">
                  My Profile
                </p>
                <p className="cursor-pointer hover:text-[#8B1E3F] transition">
                  Orders
                </p>
                <p className="cursor-pointer hover:text-[#8B1E3F] transition">
                  Logout
                </p>
              </div>
            </div>
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <img
              src={assets.cart_icon}
              className="w-5 hover:scale-110 transition"
              alt=""
            />
            <p className="absolute -right-2 -bottom-2 w-5 h-5 flex items-center justify-center bg-[#8B1E3F] text-white rounded-full text-[10px] font-semibold shadow-md">
              {getCartCount()}
            </p>
          </Link>

          {/* Mobile Menu Icon */}
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-5 cursor-pointer sm:hidden"
            alt=""
          />
        </div>
      </div>

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className={`fixed top-0 right-0 h-full bg-[#F3EDE4] transition-all duration-300 ease-in-out z-50 ${
          visible ? "w-64" : "w-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col pt-6 text-gray-700 font-modern">

          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 px-6 py-4 cursor-pointer border-b"
          >
            <img
              className="h-4 rotate-180"
              src={assets.dropdown_icon}
              alt=""
            />
            <p className="font-semibold">Back</p>
          </div>

          {["/", "/collection", "/about", "/contact"].map((path, index) => {
            const labels = ["HOME", "COLLECTION", "ABOUT", "CONTACT"];
            return (
              <NavLink
                key={index}
                onClick={() => setVisible(false)}
                className="py-4 px-6 hover:bg-[#e8dfd5] transition"
                to={path}
              >
                {labels[index]}
              </NavLink>
            );
          })}

        </div>
      </div>

    </div>
  );
};

export default Navbar;