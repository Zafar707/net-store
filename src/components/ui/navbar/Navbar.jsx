import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className=" flex justify-between w-[1200px] mt-5  m-auto">
        <h2 className="text-black text-[30px]">BrandLogo</h2>
        <ul className=" flex gap-9 text-[26px] text-black">
          <li>
            <NavLink to="/">Bosh sahifa</NavLink>
          </li>
          <li>
            <NavLink to="/">Katalog</NavLink>
          </li>
          <li>
            <NavLink to="/about">Biz haqimizda</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Aloqa</NavLink>
          </li>
        </ul>
        <div className="relative">
          <input
            type="text"
            placeholder="Qidirish"
            className="border-2 border-black rounded-md p-2"
          />
          <CiSearch className="absolute right-4 top-2" size={25} />
        </div>
        <div className="relative flex gap-2 items-center ">
          <button className="bg-blue-500 text-white rounded-2xl w-[160px] h-[38px] text-[14px] ">Aloqaga chiqish</button>
          <IoCallOutline size={20} className="absolute left-2" color="white" />
        </div>
    
      </div>
    </div>
  );
};

export default Navbar;
