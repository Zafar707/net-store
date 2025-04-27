import React from "react";
import { BsSmartwatch } from "react-icons/bs";
import { FaCamera, FaHeadphones } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdSmartphone } from "react-icons/md";
import { SlHandbag } from "react-icons/sl";

const Catalog = () => {
  return (
    <div className="py-10">
      <div className="max-w-[1200px] mx-auto mt-14 px-4 flex flex-col">
        <h3 className="text-2xl font-bold mb-8">Kataloglar</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {[
            { icon: <MdSmartphone size={56} />, label: "Telefon" },
            { icon: <HiOutlineDesktopComputer size={56} />, label: "Kompyuter" },
            { icon: <BsSmartwatch size={56} />, label: "Aqli soat" },
            { icon: <FaCamera size={56} />, label: "Kamera" },
            { icon: <FaHeadphones size={56} />, label: "Quloqchinlar" },
            { icon: <SlHandbag size={56} />, label: "Aksesuarlar" },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 w-full h-[145px] rounded-2xl bg-white hover:bg-blue-700 transition flex flex-col justify-center items-center"
            >
              <span>{item.icon}</span>
              <p className="text-center mt-3 font-bold text-lg text-black group-hover:text-white">
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
