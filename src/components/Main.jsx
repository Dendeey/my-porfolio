import React from "react";
import Logo from "../assets/images/Logo.png";
import { FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
    <div
      id="main"
      className="flex flex-col gap-6 w-full min-h-screen justify-center items-center"
    >
      <figure className="w-40 h-40">
        <img src={Logo} alt="Logo" />
      </figure>
      <div className="flex flex-col gap-4">
        <h1 className="text-poppyred text-2xl font-semibold">
          Bonjour<span className="pl-1">!</span> Je m'appelle...
        </h1>
        <h2 className="text-poppyred text-5xl font-bold">David Sim</h2>
        <h3 className="text-platinum text-2xl">
          <span className="font-semibold">Développeur Web</span> et recherche
          une entreprise pour une alternance.
        </h3>
        <nav>
          <ul className="flex">
            <li className="flex items-center gap-2 px-2 py-1 rounded bg-poppyred text-platinum ">
              <FaLinkedin size={20} />
              <p>LinkedIn</p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Main;
