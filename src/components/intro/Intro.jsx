import React from "react";
import Nout from "../../image/original.png";
import BackImage from "../../image/back.png";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro pt-4 sm:pt-6 bg-gray-50">
      <div
        className="intro_wrap max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 shadow-xl hover:shadow-2xl transition-all duration-500"
        style={{ backgroundImage: `url(${BackImage})` }}
      >
        <div className="flex flex-col gap-4 sm:gap-6 max-w-md z-10 px-4 py-6 sm:p-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            New Laptop
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700">
            Lorem ipsum dolor sit <br /> amet consectetur.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 sm:px-6 rounded-full w-fit font-semibold hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl transition-all duration-500">
            Shop now
          </button>
        </div>
        <div className="flex justify-center z-10 px-4 py-6 sm:p-6">
          <img
            src={Nout}
            alt="New laptop product image"
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto object-contain transform hover:scale-105 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;