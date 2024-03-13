import React, { useEffect } from "react";
import Logo from "../assets/images/Logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Main = () => {
  // Appeler le hook de React "useEffect" pour déclarer un effet au composant.
  useEffect(() => {
    // Stocker dans une variable tous les éléments qui ont une animation.
    let elements = document.querySelectorAll(".div-animate");

    // Exécuter une fonction à chaque défilement de la fenêtre.
    window.onscroll = () => {
      // Pour chaque élément, ajouter ou enlever la classe "show-animation".
      elements.forEach((element) => {
        let posY = window.scrollY;
        let topPos = element.offsetTop - 500;
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
      className="flex flex-col gap-6 px-6 w-full h-screen justify-center items-center lg:flex-row-reverse max-tablet:mb-40"
    >
      <figure>
        <img className="w-52 max-mobile:w-40" src={Logo} alt="Logo" />
      </figure>
      <section
        id="main-animate"
        className="div-animate show-animation flex flex-col gap-8 relative lg:w-3/5"
      >
        <span className="show-appear-animation"></span>
        <h1 className="text-platinum text-2xl max-mobile:text-xl font-semibold">
          Hi<span className="pl-1">!</span>
        </h1>
        <h2 className="text-poppyred text-8xl max-mobile:text-6xl font-bold">
          Ici David
        </h2>
        <h3 className="text-platinum text-4xl max-mobile:text-2xl">
          Je souhaite continuer mon aventure en apprentissage en tant que&nbsp;
          <span className="font-semibold">Développeur Web</span>.
        </h3>
        <nav>
          <ul className="flex gap-2">
            <li className="px-2 py-1 rounded bg-poppyred text-sm text-platinum font-medium cursor-pointer hover:opacity-60 duration-100">
              <a
                href="https://www.linkedin.com/in/sim-david/"
                target="_blank"
                className="flex items-center gap-2"
              >
                <FaLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </li>
            <li className="px-2 py-1 rounded bg-poppyred text-sm text-platinum font-medium cursor-pointer hover:opacity-60 duration-100">
              <a
                href="https://github.com/Dendeey"
                target="_blank"
                className="flex items-center gap-2"
              >
                <FaGithub size={20} />
                <span>GitHub</span>
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default Main;
