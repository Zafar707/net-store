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
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-opacity-90 backdrop-blur-lg shadow-lg fixed top-14 left-0 right-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
          BrandLogo
        </h2>

        {/* Nav Links (Desktop) */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-9 text-base lg:text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold border-b-2 border-white pb-1"
                  : "text-gray-200 hover:text-white hover:border-b-2 hover:border-white pb-1 transition-all duration-300"
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
                  ? "text-white font-semibold border-b-2 border-white pb-1"
                  : "text-gray-200 hover:text-white hover:border-b-2 hover:border-white pb-1 transition-all duration-300"
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
                  ? "text-white font-semibold border-b-2 border-white pb-1"
                  : "text-gray-200 hover:text-white hover:border-b-2 hover:border-white pb-1 transition-all duration-300"
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
                  ? "text-white font-semibold border-b-2 border-white pb-1"
                  : "text-gray-200 hover:text-white hover:border-b-2 hover:border-white pb-1 transition-all duration-300"
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
              <IoClose size={28} className="text-white" />
            ) : (
              <IoMenu size={28} className="text-white" />
            )}
          </button>
        </div>

        {/* Search Bar (Desktop) */}
        <div className="hidden md:flex relative">
          <input
            type="text"
            placeholder="Qidirish"
            className="border border-gray-300 rounded-lg p-2 pl-4 w-40 lg:w-48 bg-white bg-opacity-20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
          />
          <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white" size={20} />
        </div>

        {/* Contact Button (Desktop) */}
        <button className="hidden md:flex items-center gap-2 bg-white text-blue-600 rounded-full px-3 lg:px-4 py-2 text-xs lg:text-sm font-semibold hover:bg-gray-100 transition-all duration-300">
          <IoCallOutline size={16} />
          Aloqaga chiqish
        </button>
      </div>

      {/* Modal Menu (Mobile) */}
      {isModalOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 max-w-sm shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Menyu</h2>
              <button onClick={toggleModal}>
                <IoClose size={24} className="text-gray-800" />
              </button>
            </div>
            <ul className="flex flex-col gap-4 text-lg text-gray-800">
              <li>
                <NavLink
                  to="/"
                  onClick={toggleModal}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 font-semibold"
                      : "hover:text-blue-500 transition-all duration-300"
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
                      ? "text-blue-500 font-semibold"
                      : "hover:text-blue-500 transition-all duration-300"
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
                      ? "text-blue-500 font-semibold"
                      : "hover:text-blue-500 transition-all duration-300"
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
                      ? "text-blue-500 font-semibold"
                      : "hover:text-blue-500 transition-all duration-300"
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
                  className="border border-gray-300 rounded-lg p-2 pl-4 w-full bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                />
                <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              </div>
              <button className="flex items-center justify-center gap-2 bg-blue-500 text-white rounded-full px-4 py-2 w-full text-sm font-semibold hover:bg-blue-600 transition-all duration-300">
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