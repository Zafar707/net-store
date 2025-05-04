import React from "react";
import { FaUsers } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { BsGraphUp } from "react-icons/bs";
import about from "../../../image/about.png";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Biz haqimizda
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={about}
            alt="Laptop image"
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition duration-300">
            <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <FaUsers className="text-gray-700 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">33k</h3>
            <p className="text-gray-600 mt-2">Monthly Product</p>
          </div>
          <div className="bg-blue-600 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition duration-300">
            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-4">
              <MdAttachMoney className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-white">45.5k</h3>
            <p className="text-white mt-2">Customer active in site</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition duration-300">
            <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <GiReceiveMoney className="text-gray-700 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">25k</h3>
            <p className="text-gray-600 mt-2">Annual gross in our site</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition duration-300">
            <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <BsGraphUp className="text-gray-700 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">25k</h3>
            <p className="text-gray-600 mt-2">Annual gross in our site</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;