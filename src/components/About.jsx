import React, { useEffect } from "react";
import { FaGithub, FaReact, FaSass, FaWordpress } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPhp, SiTailwindcss } from "react-icons/si";

const About = () => {
  return (
    <div
      id="a-propos"
      className="div-about div-animate show-animation flex flex-col px-6 items-center mb-40"
    >
      <h1 className="animate text-platinum text-4xl font-bold mb-20">
        <span className="uppercase">à</span> propos
      </h1>
      <section className="mb-40">
        <p className="animate text-eerieblack text-base text-justify font-normal bg-platinum p-4 rounded shadow-lg shadow-gray-800">
          Je me suis intéressé au développement web après mes études dans la
          construction et effectivement j'aime construire et aboutir un projet.
          Aujourd'hui, ce qui me plaît, c'est d'apprendre et découvrir de ce
          métier, que ce soit dans la programmation et sa logique, l'utilité et
          l'efficacité d'avoir du code propre, les stack et technologies web qui
          permettent de faciliter le travail des développeurs. Avoir cette
          faculté de la programmation, c'est aussi un moyen de liberté de
          création et qui nous donne le pouvoir de contribuer à des projets
          "open source".
        </p>
      </section>
      <h2 className="animate flex flex-col md:flex-row md:gap-4 items-center text-platinum text-4xl font-bold mb-20">
        <span>Technologies</span>
        <span>et</span>
        <span>Outils</span>
      </h2>
      <section className="mb-20">
        <ul className="animate flex flex-wrap justify-center gap-5">
          <li className="flex justify-center items-center gap-2 p-2 rounded bg-gunmetal shadow-lg shadow-gray-800 w-32 cursor-pointer hover:scale-105 ease-in duration-200">
            <IoLogoJavascript size={50} className="text-javascript" />
            <span className="text-base font-normal text-platinum">
              JavaScript
            </span>
          </li>
          <li className="flex justify-center items-center gap-2 p-2 rounded bg-gunmetal shadow-lg shadow-gray-800 w-32 cursor-pointer hover:scale-105 ease-in duration-200">
            <SiPhp size={50} className="text-php" />
            <span className="text-base font-normal text-platinum">PHP</span>
          </li>
          <li className="flex justify-center items-center gap-2 p-2 rounded bg-gunmetal shadow-lg shadow-gray-800 w-32 cursor-pointer hover:scale-105 ease-in duration-200">
            <GrMysql size={50} className="text-mysql" />
            <span className="text-base font-normal text-platinum">MySQL</span>
          </li>
          <li className="flex justify-center items-center gap-2 p-2 rounded bg-gunmetal shadow-lg shadow-gray-800 w-32 cursor-pointer hover:scale-105 ease-in duration-200">
            <FaReact size={50} className="text-react" />
            <span className="text-base font-normal text-platinum">React</span>
          </li>
          <li className="flex justify-center items-center gap-2 p-2 rounded bg-gunmetal shadow-lg shadow-gray-800 w-32 cursor-pointer hover:scale-105 ease-in duration-200">
            <FaWordpress size={50} className="text-wordpress" />
            <span className="text-base font-normal text-platinum">
              WordPress
            </span>
          </li>
          <li className="flex justify-center items-center gap-2 p-2 rounded bg-gunmetal shadow-lg shadow-gray-800 w-32 cursor-pointer hover:scale-105 ease-in duration-200">
            <FaSass size={50} className="text-sass" />
            <span className="text-base font-normal text-platinum">Sass</span>
          </li>
          <li className="flex justify-center items-center gap-2 p-2 rounded bg-gunmetal shadow-lg shadow-gray-800 w-32 cursor-pointer hover:scale-105 ease-in duration-200">
            <SiTailwindcss size={50} className="text-tailwind" />
            <span className="text-base font-normal text-platinum">
              Tailwind
            </span>
          </li>
          <li className="flex justify-center items-center gap-2 p-2 rounded bg-gunmetal shadow-lg shadow-gray-800 w-32 cursor-pointer hover:scale-105 ease-in duration-200">
            <FaGithub size={50} className="text-github" />
            <span className="text-base font-normal text-platinum">GitHub</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
