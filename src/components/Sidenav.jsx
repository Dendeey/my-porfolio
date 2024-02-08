import React, { useState } from "react";
import { AiOutlineHome, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import Logo from "../assets/images/Logo.png";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        size={20}
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden cursor-pointer text-platinum"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            href="#main"
            className="w-[80%] flex justify-center items-center bg-gray-100 rounded-full shadow-lg shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            href="#main"
            className="w-[80%] flex justify-center items-center bg-gray-100 rounded-full shadow-lg shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            href="#main"
            className="w-[80%] flex justify-center items-center bg-gray-100 rounded-full shadow-lg shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">About</span>
          </a>
          <a
            href="#main"
            className="w-[80%] flex justify-center items-center bg-gray-100 rounded-full shadow-lg shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        <header className="md:block hidden">
          <div className=" flex justify-center items-center py-4">
            <a href="#main" className="mr-auto">
              <img className="w-12 h-auto" src={Logo} alt="Logo" />
            </a>
            <nav>
              <ul className="flex gap-12">
                <li>
                  <a href="#main" className="flex">
                    <AiOutlineHome size={20} />
                    <span className="pl-2">Home</span>
                  </a>
                </li>
                <li>
                  <a href="#main" className="flex">
                    <GrProjects size={20} />
                    <span className="pl-2">Projects</span>
                  </a>
                </li>
                <li>
                  <a href="#main" className="flex">
                    <BsPerson size={20} />
                    <span className="pl-2">About</span>
                  </a>
                </li>
                <li>
                  <a href="#main" className="flex">
                    <AiOutlineMail size={20} />
                    <span className="pl-2">Contact</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      )}
    </div>
  );
};

export default Sidenav;
