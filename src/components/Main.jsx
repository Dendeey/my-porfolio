import React, { useEffect } from "react";
import Logo from "../assets/images/Logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Main = () => {
  useEffect(() => {
    let elements = document.querySelectorAll(".div-animate");

    window.onscroll = () => {
      elements.forEach((element) => {
        let posY = window.scrollY;
        let topPos = element.offsetTop - 600;
        let elementHeight = element.offsetHeight;

        if (posY >= topPos && posY < topPos + elementHeight) {
          element.classList.add("show-animation");
        } else {
          element.classList.remove("show-animation");
        }
      });
    };
  }, []);

  return (
    <div
      id="main"
      className="flex flex-col gap-6 px-6 w-full h-screen justify-center items-center"
    >
      <figure className="w-40 h-40">
        <img src={Logo} alt="Logo" />
      </figure>
      <div
        id="main-animate"
        className="div-animate show-animation flex flex-col gap-4 relative"
      >
        <span className="show-appear-animation"></span>
        <h1 className="text-poppyred text-2xl font-semibold">
          Hi<span className="pl-1">!</span> I'm...
        </h1>
        <h2 className="text-poppyred text-5xl font-bold">David Sim</h2>
        <h3 className="text-platinum text-2xl">
          <span className="font-semibold">Junior Web Developer</span> and I'm
          looking for an apprenticeship contract.
        </h3>
        <nav>
          <ul className="flex gap-2">
            <li className="px-2 py-1 rounded bg-poppyred text-platinum cursor-pointer hover:opacity-60 duration-200">
              <a href="#" className="flex items-center gap-2">
                <FaLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </li>
            <li className="px-2 py-1 rounded bg-poppyred text-platinum cursor-pointer hover:opacity-60 duration-200">
              <a href="#" className="flex items-center gap-2">
                <FaGithub size={20} />
                <span>GitHub</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Main;
