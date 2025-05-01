import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCallOutline, IoMenu, IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="bg-gradient-to-r from-blue-800 to-indigo-900 bg-opacity-90 backdrop-blur-xl shadow-lg fixed top-14 left-0 right-0 z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wider bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
          BrandLogo
        </h2>

        {/* Nav Links (Desktop) */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-9 text-base lg:text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold border-b-2 border-blue-400 pb-1"
                  : "text-gray-200 hover:text-white hover:border-b-2 hover:border-blue-400 pb-1 transition-all duration-300"
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
                  ? "text-white font-semibold border-b-2 border-blue-400 pb-1"
                  : "text-gray-200 hover:text-white hover:border-b-2 hover:border-blue-400 pb-1 transition-all duration-300"
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
                  ? "text-white font-semibold border-b-2 border-blue-400 pb-1"
                  : "text-gray-200 hover:text-white hover:border-b-2 hover:border-blue-400 pb-1 transition-all duration-300"
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
                  ? "text-white font-semibold border-b-2 border-blue-400 pb-1"
                  : "text-gray-200 hover:text-white hover:border-b-2 hover:border-blue-400 pb-1 transition-all duration-300"
              }
            >
              Aloqa
            </NavLink>
          </li>
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleModal}>
            {isModalOpen ? (
              <IoClose size={28} className="text-white hover:text-blue-400 transition-all duration-300" />
            ) : (
              <IoMenu size={28} className="text-white hover:text-blue-400 transition-all duration-300" />
            )}
          </button>
        </div>

        {/* Search Bar (Desktop) */}
        <div className="hidden md:flex relative">
          <input
            type="text"
            placeholder="Qidirish"
            className="border border-gray-500 bg-gray-800 bg-opacity-50 text-gray-200 placeholder-gray-400 rounded-full p-2 pl-4 w-40 lg:w-48 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          />
          <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-200 hover:text-blue-400 transition-all duration-300" size={20} />
        </div>

        {/* Contact Button (Desktop) */}
        <button className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full px-3 lg:px-4 py-2 text-xs lg:text-sm font-semibold hover:from-blue-600 hover:to-indigo-600 hover:shadow-lg transition-all duration-300">
          <IoCallOutline size={16} />
          Aloqaga chiqish
        </button>
      </div>

      {/* Modal Menu (Mobile) */}
      {isModalOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-95 flex items-center justify-center z-50">
          <div className="bg-gray-800 bg-opacity-90 backdrop-blur-xl rounded-xl p-6 w-11/12 max-w-sm shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Menyu
              </h2>
              <button onClick={toggleModal}>
                <IoClose size={24} className="text-white hover:text-blue-400 transition-all duration-300" />
              </button>
            </div>
            <ul className="flex flex-col gap-4 text-lg text-gray-200">
              <li>
                <NavLink
                  to="/"
                  onClick={toggleModal}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-400 font-semibold"
                      : "hover:text-blue-400 transition-all duration-300"
                  }
                >
                  Bosh sahifa
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/catalog"
                  onClick={toggleModal}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-400 font-semibold"
                      : "hover:text-blue-400 transition-all duration-300"
                  }
                >
                  Katalog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={toggleModal}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-400 font-semibold"
                      : "hover:text-blue-400 transition-all duration-300"
                  }
                >
                  Biz haqimizda
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={toggleModal}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-400 font-semibold"
                      : "hover:text-blue-400 transition-all duration-300"
                  }
                >
                  Aloqa
                </NavLink>
              </li>
            </ul>
            <div className="mt-6">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Qidirish"
                  className="border border-gray-600 bg-gray-900 bg-opacity-50 text-gray-200 placeholder-gray-400 rounded-full p-2 pl-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                />
                <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-200 hover:text-blue-400 transition-all duration-300" size={20} />
              </div>
              <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full px-4 py-2 w-full text-sm font-semibold hover:from-blue-600 hover:to-indigo-600 hover:shadow-lg transition-all duration-300">
                <IoCallOutline size={18} />
                Aloqaga chiqish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;