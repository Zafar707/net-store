import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaBalanceScaleRight, FaHeadphonesAlt } from "react-icons/fa";

const Order = () => {
  return (
    <div className="py-8 sm:py-10 bg-gray-50">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <CiDeliveryTruck size={24} />
            </div>
            <h2 className="text-base sm:text-lg font-extrabold text-gray-900">
              BEPUL VA TEZ YETKAZIB BERISH
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Buyurtmalar uchun bepul yetkazib berish
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <FaHeadphonesAlt size={24} />
            </div>
            <h2 className="text-base sm:text-lg font-extrabold text-gray-900">
              24/7 MIJOZLARGA XIZMAT KO'RSATISH
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Do'stona 24/7 mijozlarni qo'llab-quvvatlash
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <FaBalanceScaleRight size={24} />
            </div>
            <h2 className="text-base sm:text-lg font-extrabold text-gray-900">
              PULNI QAYTARIB BERISH KAFOLATI
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Biz pulni 30 kun ichida qaytaramiz
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;