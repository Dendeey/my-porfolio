import React, { useEffect } from "react";
import {
  FaBootstrap,
  FaExternalLinkAlt,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { SiJavascript, SiPhp, SiTailwindcss } from "react-icons/si";

const Projects = () => {
  return (
    <div
      id="projets"
      className="div-projects div-animate show-animation flex flex-col px-6 max-desktop:mb-40 items-center w-full min-h-screen"
    >
      <h1 className="animate text-platinum text-4xl font-bold mb-20">
        Projets
      </h1>
      <section className="div-projects div-animate show-animation flex flex-wrap justify-center items-center gap-8">
        <section className="animate projects_container flex flex-col justify-between h-30rem sm:w-96 w-full bg-gunmetal rounded-md shadow-lg shadow-gray-800">
          <section className="projects_container_header h-60 bg-reactProject bg-cover bg-center rounded-t-md">
            <a
              target="_blank"
              href="https://github.com/Dendeey/my-porfolio"
              className="flex justify-end"
            >
              <FaExternalLinkAlt size={20} className="text-white m-4" />
            </a>
          </section>
          <section className="projects_container_content p-4">
            <h2 className="text-platinum text-2xl font-semibold pb-5">
              Mon portfolio
            </h2>
            <p className="text-platinum text-sm">
              J'ai créé mon portfolio pour que vous découvrez mon travail !
            </p>
          </section>
          <section className="projects_container_stack p-4">
            <ul className="flex flex-wrap justify-center items-center gap-2">
              <li className="px-3 py-1 rounded-full flex items-center justify-center gap-2 bg-poppyred">
                <FaReact size={20} className="text-sm font-semibold" />
                <p className="text-sm font-semibold">React</p>
              </li>
              <li className="px-4 py-1 rounded-full flex items-center justify-center gap-2 bg-poppyred">
                <IoLogoJavascript size={20} className="text-sm font-semibold" />
                <p className="text-sm font-semibold">JavaScript</p>
              </li>
              <li className="px-4 py-1 rounded-full flex items-center justify-center gap-2 bg-poppyred">
                <SiTailwindcss size={20} className="text-sm font-semibold" />
                <p className="text-sm font-semibold">Tailwind</p>
              </li>
            </ul>
          </section>
        </section>
        <section className="animate projects_container flex flex-col justify-between h-30rem sm:w-96 w-full bg-gunmetal rounded-md shadow-lg shadow-gray-800">
          <section className="projects_container_header h-60 bg-wordpressProject bg-cover bg-center rounded-t-md">
            <a
              target="_blank"
              href="https://github.com/Dendeey/us-domagne-saintdidier"
              className="flex justify-end"
            >
              <FaExternalLinkAlt size={20} className="text-white m-4" />
            </a>
          </section>
          <section className="projects_container_content p-4">
            <h2 className="text-platinum text-2xl font-semibold pb-5">
              Site web de l'USD
            </h2>
            <p className="text-platinum text-sm">
              Création d'un thème custom sur WordPress pour mon club de
              football. Site web de type "Blog" permettant de suivre les
              actualités du club.
            </p>
          </section>
          <section className="projects_container_stack p-4">
            <ul className="flex flex-wrap justify-center items-center gap-2">
              <li className="px-3 py-1 rounded-full flex items-center justify-center gap-2 bg-poppyred">
                <FaWordpress size={20} className="text-sm font-semibold" />
                <p className="text-sm font-semibold">WordPress</p>
              </li>
              <li className="px-4 py-1 rounded-full flex items-center justify-center gap-2 bg-poppyred">
                <SiJavascript size={20} className="text-sm font-semibold" />
                <p className="text-sm font-semibold">JavaScript</p>
              </li>
            </ul>
          </section>
        </section>
        <section className="animate projects_container flex flex-col justify-between h-30rem sm:w-96 w-full bg-gunmetal rounded-md shadow-lg shadow-gray-800">
          <section className="projects_container_header h-60 bg-phpProject bg-cover bg-center rounded-t-md">
            <a
              target="_blank"
              href="https://github.com/Dendeey/res03-projet-final"
              className="flex justify-end"
            >
              <FaExternalLinkAlt size={20} className="text-gunmetal m-4" />
            </a>
          </section>
          <section className="projects_container_content p-4">
            <h2 className="text-platinum text-2xl font-semibold pb-5">
              Projet final de formation
            </h2>
            <p className="text-platinum text-sm">
              Création d'un site web pour une association sportive avec un
              espace administrateur sécurisé pour gérer les contenus.
            </p>
          </section>
          <section className="projects_container_stack p-4">
            <ul className="flex flex-wrap justify-center items-center gap-2">
              <li className="px-3 py-1 rounded-full flex items-center justify-center gap-2 bg-poppyred">
                <SiPhp size={20} className="text-sm font-semibold" />
                <p className="text-sm font-semibold">PHP</p>
              </li>
              <li className="px-4 py-1 rounded-full flex items-center justify-center gap-2 bg-poppyred">
                <SiJavascript size={20} className="text-sm font-semibold" />
                <p className="text-sm font-semibold">JavaScript</p>
              </li>
              <li className="px-4 py-1 rounded-full flex items-center justify-center gap-2 bg-poppyred">
                <GrMysql size={20} className="text-sm font-semibold" />
                <p className="text-sm font-semibold">MySQL</p>
              </li>
              <li className="px-4 py-1 rounded-full flex items-center justify-center gap-2 bg-poppyred">
                <FaBootstrap size={20} className="text-sm font-semibold" />
                <p className="text-sm font-semibold">Bootstrap</p>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Projects;
