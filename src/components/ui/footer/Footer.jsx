import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-6 sm:py-8">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-6 sm:gap-8">
        <div className="flex flex-col">
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-wide bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
            BrandLOGO
          </h3>
          <p className="mt-3 text-gray-300 font-light text-sm sm:text-base">
            Biz ijtimoiy tarmoqlarda
          </p>
          <div className="flex space-x-4 sm:space-x-5 mt-4 sm:mt-5">
            <span className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
              <FaTwitter size={18} />
            </span>
            <span className="text-gray-300 hover:text-pink-400 transition-all duration-300 transform hover:scale-110">
              <FaInstagram size={18} />
            </span>
            <span className="text-gray-300 hover:text-blue-600 transition-all duration-300 transform hover:scale-110">
              <FaLinkedin size={18} />
            </span>
            <span className="text-gray-300 hover:text-blue-500 transition-all duration-300 transform hover:scale-110">
              <FaFacebookF size={18} />
            </span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 md:gap-20">
          <div className="flex flex-col">
            <h3 className="text-lg sm:text-xl font-extrabold tracking-wide">
              Aloqa
            </h3>
            <p className="mt-3 text-gray-300 font-light text-sm sm:text-base">
              Manzil: Toshkent sh
            </p>
            <p className="text-gray-300 font-light hover:text-blue-400 transition-all duration-300 text-sm sm:text-base">
              qwertyui@gmail.com
            </p>
            <p className="text-gray-300 font-light text-sm sm:text-base">
              +998917777777
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg sm:text-xl font-extrabold tracking-wide">
              Haqimizda
            </h3>
            <p className="mt-3 text-gray-300 font-light text-sm sm:text-base">
              Maxfiylik Siyosati va
            </p>
            <p className="text-gray-300 font-light text-sm sm:text-base">
              Shaxsiy Malumotlarni
            </p>
            <p className="text-gray-300 font-light text-sm sm:text-base">
              Himoya Qilish
            </p>
            <p className="text-gray-300 font-light text-sm sm:text-base">
              Mahsulotlarni va
            </p>
            <p className="text-gray-300 font-light text-sm sm:text-base">
              tolovlarni qaytarish
            </p>
            <p className="text-gray-300 font-light text-sm sm:text-base">
              siyosati
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg sm:text-xl font-extrabold tracking-wide">
            Savol berish
          </h3>
          <div className="mt-3">
            <input
              type="text"
              placeholder="Ismingiz"
              className="w-full max-w-[200px] p-2 sm:p-3 mb-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-200 placeholder-gray-400 transition-all duration-300 text-sm sm:text-base"
            />
            <input
              type="text"
              placeholder="Telefon raqam *"
              className="w-full max-w-[200px] p-2 sm:p-3 mb-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-200 placeholder-gray-400 transition-all duration-300 text-sm sm:text-base"
            />
            <input
              type="text"
              placeholder="Savol berish..."
              className="w-full max-w-[200px] p-2 sm:p-3 mb-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-200 placeholder-gray-400 transition-all duration-300 text-sm sm:text-base"
            />
            <button className="w-full max-w-[200px] p-2 sm:p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
              Yuborish
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between mt-6 sm:mt-8 text-gray-400 border-t border-gray-700 pt-4 gap-4">
        <p className="text-xs sm:text-sm font-light text-center sm:text-left">
          “2024 © “notebook.uz” MChJ. TIN 309376127. Barcha huquqlar himoyalangan”
        </p>
        <p className="text-xs sm:text-sm font-light text-center sm:text-right">
          HAMKOR: Clean Coders group
        </p>
      </div>
    </div>
  );
};

export default Footer;