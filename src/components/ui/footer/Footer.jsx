import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black text-white py-8 ">
      <div className="max-w-[1200px] w-full mx-auto flex justify-between gap-13">
        {/* Left Section */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-extrabold tracking-wide">BrandLOGO</h3>
          <p className="mt-3 text-gray-300 font-light">Biz ijtimoiy tarmoqlarda</p>
          <div className="flex space-x-5 mt-5">
            <span className="text-gray-300 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
              <FaTwitter size={20} />
            </span>
            <span className="text-gray-300 hover:text-pink-400 transition-colors duration-300 transform hover:scale-110">
              <FaInstagram size={20} />
            </span>
            <span className="text-gray-300 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110">
              <FaLinkedin size={20} />
            </span>
            <span className="text-gray-300 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110">
              <FaFacebookF size={20} />
            </span>
          </div>
        </div>

        {/* Center Section */}
        <div className="flex space-x-20">
          <div className="flex flex-col">
            <h3 className="text-xl font-bold tracking-wide">Aloqa</h3>
            <p className="mt-3 text-gray-300 font-light">Manzil: Toshkent sh</p>
            <p className="text-gray-300 font-light hover:text-blue-400 transition-colors duration-300">
              qwertyui@gmail.com
            </p>
            <p className="text-gray-300 font-light">+998917777777</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold tracking-wide">Haqimizda</h3>
            <p className="mt-3 text-gray-300 font-light">Maxfiylik Siyosati va</p>
            <p className="text-gray-300 font-light">Shaxsiy Malumotlarni</p>
            <p className="text-gray-300 font-light">Himoya Qilish</p>
            <p className="text-gray-300 font-light">Mahsulotlarni va</p>
            <p className="text-gray-300 font-light">tolovlarni qaytarish</p>
            <p className="text-gray-300 font-light">siyosati</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold tracking-wide">Savol berish</h3>
          <div className="mt-3">
            <input
              type="text"
              placeholder="Ismingiz"
              className="w-[200px] p-3 mb-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 placeholder-gray-400 transition-all duration-300"
            />
            <input
              type="text"
              placeholder="Telefon raqam *"
              className="w-[200px] p-3 mb-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 placeholder-gray-400 transition-all duration-300"
            />
            <input
              type="text"
              placeholder="Savol berish..."
              className="w-[200px] p-3 mb-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 placeholder-gray-400 transition-all duration-300"
            />
            <button className="w-[200px] p-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 active:bg-blue-800 transition-all duration-300 transform hover:scale-105">
              Yuborish
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] w-full mx-auto flex justify-between mt-8 text-gray-400 border-t border-gray-700 pt-4">
        <p className="text-sm font-light">
          “2024 © “notebook.uz” MChJ. TIN 309376127. Barcha huquqlar himoyalangan”
        </p>
        <p className="text-sm font-light">HAMKOR: Clean Coders group</p>
      </div>
    </div>
  );
};

export default Footer;