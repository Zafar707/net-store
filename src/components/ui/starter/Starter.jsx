import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Starter = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between py-4 px-4 sm:px-6 lg:px-8 text-white gap-4">
        {/* Location Section */}
        <p className="flex items-center gap-2 text-amber-100">
          <FaLocationDot size={16} />
          Shahar: Toshkent
        </p>

        {/* Delivery Info */}
        <p className="font-semibold text-white text-center">
          Buyurtmalaringizni bepul yetkazib beramiz - atigi 1 kun ichida
        </p>

        {/* Language Selector */}
        <select
          className="bg-gray-800 text-white text-sm rounded-md p-1.5 border-none outline-none hover:bg-gray-700 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
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