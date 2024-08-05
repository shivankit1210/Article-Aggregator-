import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="w-full h-12 p-4  items-center flex flex-row bg-blue-300 ">
        <div className=" text-orange-300 w-36 text-sm md:text-lg bg-white p-1 md:w-36 rounded-r-xl whitespace-nowrap overflow-hidden ">
          ShivOhm Articles
        </div>
        <div>
          <ul className=" flex-row gap-5  hidden text-slate-600 md:visible ">
            <li className="cursor-pointer">HOME</li>
            <li className="cursor-pointer">ABOUT US</li>
            <li className="cursor-pointer">CONTACT US</li>
            <li className="cursor-pointer">QUICK LINKS</li>
          </ul>
          <div className="  visible md:hidden">
            <span > &#x2630;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
x