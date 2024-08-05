import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="w-full h-12 gap-96 p-4  items-center flex flex-row bg-blue-300 ">
        <div className=" text-orange-300 bg-white p-1 w-full rounded-r-xl">
          ShivOhm News
        </div>
        <div>
          <ul className="flex flex-row gap-5 invisible text-slate-600 md:visible ">
            <li className="cursor-pointer">HOME</li>
            <li className="cursor-pointer">ABOUT US</li>
            <li className="cursor-pointer">CONTACT US</li>
            <li className="cursor-pointer">QUICK LINKS</li>
          </ul>
          <div className="  visible md:invisibe">
            <span > &#x2630;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
