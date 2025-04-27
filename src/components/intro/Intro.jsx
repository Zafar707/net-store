import React from "react";
import Nout from "../../image/original.png"; // Rasm yo‘li to‘g‘ri ekanligiga ishonch hosil qiling
import "./Intro.css"; // CSS faylini import qilish

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro_wrap max-w-[1200px] mx-auto mt-16 px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Matn va Tugma */}
        <div className="flex flex-col gap-6 max-w-md z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            New Laptop
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Lorem ipsum dolor sit <br /> amet consectetur.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg w-fit transition-all duration-200">
            Shop now
          </button>
        </div>

        {/* Rasm */}
        <div className="flex justify-center z-10">
          <img
            src={Nout}
            alt="nout"
            className="max-w-full h-auto md:max-w-[600px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;