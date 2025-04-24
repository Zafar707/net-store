import React from "react";
const Intro = ({Product}) => {

  return (
    <div className="rounded-[20px] bg-blue-200 w-[1200px] h-[500px] mt-[500px]">
      <div>
        <h2 className=" text-[50px] text-xl font-bold">
          New Laptop
        </h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <button className="  bg-blue-500 text-white py-2 px-4 rounded w-[130px] h-[50px]">
          Shop now
        </button>
          {/* <img src={Product.image} alt="" /> */}
      </div>
    </div>
  );

};

export default Intro;
