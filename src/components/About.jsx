import React, { useEffect } from "react";
import { FaGithub, FaReact, FaSass, FaWordpress } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPhp, SiTailwindcss } from "react-icons/si";

const About = () => {
  // Appeler le hook de React "useEffect" pour déclarer un effet au composant.
  useEffect(() => {
    // Stocker dans une variable tous les éléments qui ont une animation.
    let elements = document.querySelectorAll(".div-animate");
    // Exécuter une fonction à chaque défilement de la fenêtre.
    window.onscroll = () => {
      // Pour chaque élément, ajouter ou enlever la classe "show-animation".
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
    <div className="div-about div-animate show-animation flex flex-col items-center min-h-screen">
      <h1 className="animate text-platinum text-4xl font-bold mb-20">
        <span className="uppercase">à</span> propos
      </h1>
      <section className="mb-20">
        <p className="animate text-eerieblack text-xl text-justify font-normal bg-platinum p-4">
          Je me suis intéressé au développement web après mes études dans la
          construction et effectivement j'aime construire et aboutir un projet.
          Aujourd'hui, ce qui me plaît, c'est d'apprendre et découvrir de ce
          métier, que ce soit dans la programmation et sa logique, l'utilité et
          l'efficacité d'avoir du code propre, les environnements et
          technologies web qui permettent de faciliter le travail des
          développeurs. Il y a aussi cette liberté de création que nous laisse
          le savoir-faire de la programmation qui est très motivante.
        </p>
      </section>
      <h2 className="animate text-platinum text-4xl font-bold mb-20">
        Technologies et Outils
      </h2>
      <section className="mb-20">
        <ul className="animate flex flex-wrap justify-center gap-5">
          <li className="flex items-center gap-2 p-2 rounded bg-gunmetal">
            <IoLogoJavascript size={50} className="text-javascript" />
            <span className="text-base font-normal text-platinum">
              JavaScript
            </span>
          </li>
          <li className="flex items-center gap-2 p-2 rounded bg-gunmetal">
            <SiPhp size={50} className="text-php" />
            <span className="text-base font-normal text-platinum">PHP</span>
          </li>
          <li className="flex items-center gap-2 p-2 rounded bg-gunmetal">
            <GrMysql size={50} className="text-mysql" />
            <span className="text-base font-normal text-platinum">MySQL</span>
          </li>
          <li className="flex items-center gap-2 p-2 rounded bg-gunmetal">
            <FaReact size={50} className="text-react" />
            <span className="text-base font-normal text-platinum">React</span>
          </li>
          <li className="flex items-center gap-2 p-2 rounded bg-gunmetal">
            <FaWordpress size={50} className="text-wordpress" />
            <span className="text-base font-normal text-platinum">
              WordPress
            </span>
          </li>
          <li className="flex items-center gap-2 p-2 rounded bg-gunmetal">
            <FaSass size={50} className="text-sass" />
            <span className="text-base font-normal text-platinum">Sass</span>
          </li>
          <li className="flex items-center gap-2 p-2 rounded bg-gunmetal">
            <SiTailwindcss size={50} className="text-tailwind" />
            <span className="text-base font-normal text-platinum">
              Tailwind
            </span>
          </li>
          <li className="flex items-center gap-2 p-2 rounded bg-gunmetal">
            <FaGithub size={50} className="text-github" />
            <span className="text-base font-normal text-platinum">GitHub</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
