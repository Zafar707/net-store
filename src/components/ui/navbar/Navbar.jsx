import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
          BrandLogo
        </h2>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-9 text-lg text-gray-800">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 border-b-2 border-blue-500 pb-1"
                  : "hover:text-blue-500 hover:border-b-2 hover:border-blue-500 pb-1 transition-all duration-200"
              }
            >
              Bosh sahifa
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/catalog"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 border-b-2 border-blue-500 pb-1"
                  : "hover:text-blue-500 hover:border-b-2 hover:border-blue-500 pb-1 transition-all duration-200"
              }
            >
              Katalog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 border-b-2 border-blue-500 pb-1"
                  : "hover:text-blue-500 hover:border-b-2 hover:border-blue-500 pb-1 transition-all duration-200"
              }
            >
              Biz haqimizda
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 border-b-2 border-blue-500 pb-1"
                  : "hover:text-blue-500 hover:border-b-2 hover:border-blue-500 pb-1 transition-all duration-200"
              }
            >
              Aloqa
            </NavLink>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Qidirish"
            className="border border-gray-300 rounded-lg p-2 pl-4 w-48 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
          />
          <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
        </div>

        {/* Contact Button */}
        <button className="flex items-center gap-2 bg-blue-500 text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-blue-600 transition-all duration-200">
          <IoCallOutline size={18} />
          Aloqaga chiqish
        </button>
      </div>
    </div>
  );
};

export default Navbar;