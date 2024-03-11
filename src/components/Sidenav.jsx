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
  window.addEventListener("scroll", () => {
    // On stock la position verticale de la fenêtre
    const scrollPos = window.scrollY;
    const leftSidebar = document.getElementById("leftHeader");
    const topHeader = document.getElementById("topHeader");
    // Quand la position verticale de la fenêtre dépasse 0, on ajoute la classe pour faire apparaître la sidebar de gauche
    // Autrement on supprime la classe

    if (scrollPos <= 0) {
      topHeader.classList.remove("translate-y-[-200px]");
      leftSidebar.classList.add("translate-x-[-200px]");
    } else {
      topHeader.classList.add("translate-y-[-200px]");
      leftSidebar.classList.remove("translate-x-[-200px]");
    }
  });

  return (
    <div id="header">
      <section
        id="leftHeader"
        className="max-desktop:hidden translate-x-[-200px] fixed h-full left-4 flex items-center duration-200"
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
                href="#projets"
                className="bg-platinum text-eerieblack w-12 h-12 rounded-full font-bold flex justify-center items-center hover:scale-105 ease-in duration-200"
              >
                <BsFillGridFill size={25} />
              </a>
            </li>
            <li className="pb-4">
              <a
                href="#a-propos"
                className="bg-platinum text-eerieblack w-12 h-12 rounded-full font-bold flex justify-center items-center hover:scale-105 ease-in duration-200"
              >
                <BsPersonFill size={25} />
              </a>
            </li>
            <li className="pb-4">
              <a
                href="#contact"
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
          className="absolute top-4 right-4 z-[99] lg:hidden cursor-pointer text-platinum"
        />
      ) : (
        <AiOutlineMenu
          size={30}
          onClick={handleNav}
          className="absolute top-4 right-4 z-[99] lg:hidden cursor-pointer text-platinum"
        />
      )}

      {nav ? (
        <section className="fixed w-full h-screen bg-poppyred/90 flex flex-col justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[80%] text-platinum font-bold flex justify-center items-center bg-eerieblack rounded shadow-lg shadow-gray-800 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Accueil</span>
          </a>
          <a
            onClick={handleNav}
            href="#projets"
            className="w-[80%] text-platinum font-bold flex justify-center items-center bg-eerieblack rounded shadow-lg shadow-gray-800 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4">Projets</span>
          </a>
          <a
            onClick={handleNav}
            href="#a-propos"
            className="w-[80%] text-platinum font-bold flex justify-center items-center bg-eerieblack rounded shadow-lg shadow-gray-800 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">
              <span className="uppercase">à</span> propos
            </span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[80%] text-platinum font-bold flex justify-center items-center bg-eerieblack rounded shadow-lg shadow-gray-800 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </section>
      ) : (
        <header
          id="topHeader"
          className="max-laptop:hidden flex justify-center items-center fixed top-0 right-0 left-0 duration-200"
        >
          <section className="flex justify-center items-center px-8 py-4 w-screen max-w-6xl">
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
                    href="#projets"
                    className="flex font-semibold text-platinum hover:text-poppyred duration-200"
                  >
                    <GrProjects size={20} />
                    <span className="pl-2">Projets</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#a-propos"
                    className="flex font-semibold text-platinum hover:text-poppyred duration-200"
                  >
                    <BsPerson size={20} />
                    <span className="pl-2">
                      <span className="uppercase">à</span> propos
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="flex font-semibold text-platinum hover:text-poppyred duration-200"
                  >
                    <AiOutlineMail size={20} />
                    <span className="pl-2">Contact</span>
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        </header>
      )}
    </div>
  );
};

export default Sidenav;
