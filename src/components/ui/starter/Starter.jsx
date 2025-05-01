import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Starter = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between py-3 px-4 sm:px-6 lg:px-8 text-white gap-3 sm:gap-4 text-sm sm:text-base">
        <p className="flex items-center gap-2 text-amber-200 hover:text-amber-100 transition-all duration-300">
          <FaLocationDot size={14} />
          Shahar: Toshkent
        </p>
        <p className="font-semibold text-white text-center hover:text-gray-200 transition-all duration-300">
          Buyurtmalaringizni bepul yetkazib beramiz - atigi 1 kun ichida
        </p>
        <select
          className="bg-gray-700 text-white text-xs sm:text-sm rounded-md p-1 sm:p-1.5 border-none outline-none hover:bg-gray-600 focus:ring-2 focus:ring-blue-400 transition-all duration-300"
        >
          <option value="uz">Uz</option>
          <option value="en">English</option>
          <option value="ru">Русский</option>
        </select>
      </div>
    </div>
  );
};

export default Starter;