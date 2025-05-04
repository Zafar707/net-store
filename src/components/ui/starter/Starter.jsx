import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Starter = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-blue-900 bg-opacity-80 backdrop-blur-xl shadow-lg h-14">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between py-3 px-4 sm:px-6 lg:px-8 text-gray-100 gap-3 sm:gap-4 text-sm sm:text-base h-full">
        <p className="flex items-center gap-2 text-amber-300 hover:text-amber-200 transition-all duration-300 group">
          <FaLocationDot size={14} className="group-hover:scale-110 transition-transform duration-300" />
          <span className="font-medium">Shahar: Toshkent</span>
        </p>
        <p className="font-semibold text-gray-100 text-center hover:text-white transition-all duration-300">
          Buyurtmalaringizni bepul yetkazib beramiz - atigi 1 kun ichida
        </p>
        <select
          className="bg-gray-800 bg-opacity-60 text-gray-100 text-xs sm:text-sm rounded-full px-2 py-1 border border-gray-700 hover:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
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