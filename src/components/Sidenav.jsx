import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
  AiFillHome,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson, BsPersonFill, BsFillGridFill } from "react-icons/bs";
import { IoMdClose, IoMdMail } from "react-icons/io";
import Logo from "../assets/images/Logo.png";

const Sidenav = () => {
  // Déclarer une variable grâce au hook "useState" de React et l'initier à "false".
  // Puis une fonction qui permet de modifier l'état cette dernière.
  // Déclarer une fonction stockée dans une variable qui permet de passer à l'état inverse, soit "true" ou "false".
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  // Au scroll de la page, déplacer la barre de naviguation du haut à gauche.
  function moveNavBarToLeft() {
    const headerElement = document.getElementById("topHeader");
    const topHeaderPos = document.headerElement.offsetTop;
  }

  return (
    <div id="header">
      <section
        id="leftHeader"
        className="max-xl:hidden fixed h-full left-4 flex items-center"
      >
        <nav>
          <ul>
            <li className="pb-4">
              <a
                href="#main"
                className=" bg-platinum text-eerieblack w-12 h-12 px-2 rounded-full font-bold flex justify-center items-center hover:scale-105 ease-in duration-200"
              >
                <AiFillHome size={25} />
              </a>
            </li>
            <li className="pb-4">
              <a
                href="#main"
                className="bg-platinum text-eerieblack w-12 h-12 rounded-full font-bold flex justify-center items-center hover:scale-105 ease-in duration-200"
              >
                <BsFillGridFill size={25} />
              </a>
            </li>
            <li className="pb-4">
              <a
                href="#main"
                className="bg-platinum text-eerieblack w-12 h-12 rounded-full font-bold flex justify-center items-center hover:scale-105 ease-in duration-200"
              >
                <BsPersonFill size={25} />
              </a>
            </li>
            <li className="pb-4">
              <a
                href="#main"
                className="bg-platinum text-eerieblack w-12 h-12 rounded-full font-bold flex justify-center items-center hover:scale-105 ease-in duration-200"
              >
                <IoMdMail size={25} />
              </a>
            </li>
          </ul>
        </nav>
      </section>
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
            <span className="pl-4">Accueil</span>
          </a>
          <a
            href="#main"
            className="w-[80%] text-platinum font-bold flex justify-center items-center bg-eerieblack rounded shadow-lg shadow-gray-800 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4">Projets</span>
          </a>
          <a
            href="#main"
            className="w-[80%] text-platinum font-bold flex justify-center items-center bg-eerieblack rounded shadow-lg shadow-gray-800 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">
              <span className="uppercase">à</span> propos
            </span>
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
        <header id="topHeader" className="md:block hidden">
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
                    <span className="pl-2">Accueil</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#main"
                    className="flex font-semibold text-platinum hover:text-poppyred duration-200"
                  >
                    <GrProjects size={20} />
                    <span className="pl-2">Projets</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#main"
                    className="flex font-semibold text-platinum hover:text-poppyred duration-200"
                  >
                    <BsPerson size={20} />
                    <span className="pl-2">Skills</span>
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
