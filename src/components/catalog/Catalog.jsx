import React from "react";
import { BsSmartwatch } from "react-icons/bs";
import { FaCamera, FaHeadphones } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdSmartphone } from "react-icons/md";
import { SlHandbag } from "react-icons/sl";

const Catalog = () => {
  return (
    <div className="py-8 sm:py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-6 sm:mb-8">
          Kataloglar
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {[
            { icon: <MdSmartphone size={40} />, label: "Telefon" },
            { icon: <HiOutlineDesktopComputer size={40} />, label: "Kompyuter" },
            { icon: <BsSmartwatch size={40} />, label: "Aqli soat" },
            { icon: <FaCamera size={40} />, label: "Kamera" },
            { icon: <FaHeadphones size={40} />, label: "Quloqchinlar" },
            { icon: <SlHandbag size={40} />, label: "Aksesuarlar" },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white w-full h-[120px] sm:h-[145px] rounded-2xl shadow-lg hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 flex flex-col justify-center items-center"
            >
              <span className="text-gray-700 group-hover:text-white transition-all duration-300">
                {item.icon}
              </span>
              <p className="text-center mt-2 sm:mt-3 font-semibold text-sm sm:text-base lg:text-lg text-gray-900 group-hover:text-white">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;