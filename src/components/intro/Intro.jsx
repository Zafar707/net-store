import React from "react";
import Nout from '../../image/original.png';

const Intro = () => {
  return (
    <div className="bg-white py-10">
      <div className="max-w-[1200px] mx-auto mt-[90px] px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            New Laptop
          </h2>
          <p className="text-lg md:text-2xl">
            Lorem ipsum dolor sit <br /> amet consectetur.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 transition text-white py-2 px-6 rounded w-fit">
            Shop now
          </button>
        </div>
        <div className="flex justify-center">
          <img src={Nout} alt="nout" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
