// import { useEffect } from "react";
// import { useState } from "react";
// export default  Navbar = () => {
//   const [active, setActive] = useState(false);
//   const isActive = () => {
//     scrollY > 600 ? setActive(true) : setActive(false); // adjust the 600 value depending on the height from the top you want it to take effect
//   };
//   useEffect(() => {
//     window.addEventListener("scroll", isActive);
//     return () => {
//       window.removeEventListener("scroll", isActive);
//     };
//   }, []);
//   return (
//     <>
//       <div className={active ? "navbar active" : "navbar"}></div> // "navbar
//       active" has the styles for when the effect happens
//     </>
//   );
// };
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  //bg-[#06D8A7]
  return (
    <nav className=" font-inter py-2   border-b-gray-500 border-b ">
      <div className="container mx-auto px-5 py-2 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between ">
          <div className="text-[#24315E] font-semibold text-xl">
            <div className=" bg-amber-200 italic rounded"> . Mikun</div>
          </div>
          <div className=""></div>
          <button
            className="text-white lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MenuIcon className="text-[#24315E] " />
          </button>
        </div>
        <div className=" md:mx-auto md:flex md:justify-between md:py-4 md:space-x-4 ">
          <div className={`lg:flex ${isOpen ? "block" : "hidden"}`}>
            <div className="hidden text-[#24315E] font-semibold text-xl">
              <div className=" bg-amber-200 italic rounded"> . Mikun</div>
            </div>
            <ul className="mt-4 md:mt-0 md:flex md:space-x-8  ">
              <li>
                <a href="#home" smooth className="text-[#24315E]">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" smooth className="text-[#24315E]">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" smooth className="text-[#24315E]">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#services" smooth className="text-[#24315E]">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" smooth className="text-[#24315E]">
                  Contact
                </a>
              </li>
            </ul>
            <a
              href="https://drive.google.com/file/d/1w1lZsDUIJ0-Y6z_jEJR285N9wZs4D_wh/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className=" font-space block md:hidden bg-[#24315E] text-white py-1 px-6 w-30% ">
                Download CV
              </button>
            </a>
          </div>
        </div>
        <a
          href="https://drive.google.com/file/d/1w1lZsDUIJ0-Y6z_jEJR285N9wZs4D_wh/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li className="hidden font-calistoga text-md  lg:block text-white bg-[#24315E] px-4 py-4 hover:bg-white hover:outline-dotted hover:text-slate-800     ">
            Download CV
          </li>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
