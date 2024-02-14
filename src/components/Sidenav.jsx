import React, { useState } from "react";
import { AiOutlineHome, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import Logo from "../assets/images/Logo.png";

const Sidenav = () => {
  // Déclarer une variable grâce au hook "useState" de React et l'initier à "false".
  // Puis une fonction qui permet de modifier l'état cette dernière.
  const [nav, setNav] = useState(false);

  // Déclarer une fonction stockée dans une variable qui permet de passer à l'état inverse, soit "true" ou "false".
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div id="header">
      {nav ? (
        <IoMdClose
          size={30}
          onClick={handleNav}
          className="absolute top-4 right-4 z-[99] md:hidden cursor-pointer text-platinum"
        />
      ) : (
        <AiOutlineMenu
          size={30}
          onClick={handleNav}
          className="absolute top-4 right-4 z-[99] md:hidden cursor-pointer text-platinum"
        />
      )}

      {nav ? (
        <div className="fixed w-full h-screen bg-poppyred/90 flex flex-col justify-center items-center z-20">
          <a
            href="#main"
            className="w-[80%] text-platinum font-bold flex justify-center items-center bg-eerieblack rounded shadow-lg shadow-gray-800 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            href="#main"
            className="w-[80%] text-platinum font-bold flex justify-center items-center bg-eerieblack rounded shadow-lg shadow-gray-800 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            href="#main"
            className="w-[80%] text-platinum font-bold flex justify-center items-center bg-eerieblack rounded shadow-lg shadow-gray-800 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">About</span>
          </a>
          <a
            href="#main"
            className="w-[80%] text-platinum font-bold flex justify-center items-center bg-eerieblack rounded shadow-lg shadow-gray-800 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        <header className="md:block hidden">
          <div className="flex justify-center items-center py-4 px-12">
            <a href="#main" className="mr-auto">
              <img className="w-12 h-auto" src={Logo} alt="Logo" />
            </a>
            <nav>
              <ul className="flex gap-12">
                <li>
                  <a
                    href="#main"
                    className="flex font-semibold text-platinum hover:text-poppyred duration-200"
                  >
                    <AiOutlineHome size={20} />
                    <span className="pl-2">Home</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#main"
                    className="flex font-semibold text-platinum hover:text-poppyred duration-200"
                  >
                    <GrProjects size={20} />
                    <span className="pl-2">Projects</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#main"
                    className="flex font-semibold text-platinum hover:text-poppyred duration-200"
                  >
                    <BsPerson size={20} />
                    <span className="pl-2">About</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#main"
                    className="flex font-semibold text-platinum hover:text-poppyred duration-200"
                  >
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
