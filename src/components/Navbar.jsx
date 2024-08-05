import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="w-full h-12 p-4  items-center flex flex-row bg-blue-300 justify-between ">
        <div className=" text-orange-300 w-30 text-sm md:text-lg font-semibold bg-white p-1 md:w-40 rounded-l-sm rounded-r-xl whitespace-nowrap overflow-hidden ">
          ShivOhm Articles
        </div>
        <div className="float-right font-semibold ">
          <ul className=" md:flex flex-row gap-5 hidden  text-slate-600 ">
            <li className="cursor-pointer">HOME</li>
            <li className="cursor-pointer">ABOUT US</li>
            <li className="cursor-pointer">CONTACT US</li>
            <li className="cursor-pointer">QUICK LINKS</li>
          </ul>
          <div className="  visible md:hidden">
            <span className="w-5 h-10" > &#x2630;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
