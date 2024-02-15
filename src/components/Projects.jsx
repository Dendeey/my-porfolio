import React, { useEffect } from "react";
import { FaExternalLinkAlt, FaReact } from "react-icons/fa";

const Projects = () => {
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
    <div className="div-projects div-animate show-animation flex flex-col px-6 mb-52 items-center w-full min-h-screen">
      <h1 className="animate text-platinum text-4xl font-bold mb-8">
        Projects
      </h1>
      <section className="div-projects div-animate show-animation flex flex-wrap gap-8">
        <section className="animate projects_container flex flex-col bg-gunmetal rounded-md">
          <section className="projects_container_header h-60 bg-portfolioProject bg-cover rounded-t-md">
            <a href="#" className="flex justify-end">
              <FaExternalLinkAlt size={20} className="text-white m-4" />
            </a>
          </section>
          <section className="projects_container_content p-4">
            <h2 className="text-platinum text-3xl font-bold pb-2">Titre 1</h2>
            <p className="text-platinum text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </section>
          <section className="projects_container_stack p-4">
            <ul className="flex flex-wrap justify-center items-center">
              <li className="px-4 py-1 rounded-full flex items-center justify-center gap-2 bg-poppyred">
                <FaReact size={20} className="text-base font-semibold" />
                <p className="text-base font-semibold">React</p>
              </li>
            </ul>
          </section>
        </section>
        <section className="animate projects_container flex flex-col bg-gunmetal rounded-md">
          <section className="projects_container_header h-60 bg-portfolioProject bg-cover rounded-t-md">
            <a href="#" className="flex justify-end">
              <FaExternalLinkAlt size={20} className="text-white m-4" />
            </a>
          </section>
          <section className="projects_container_content p-4">
            <h2 className="text-platinum text-3xl font-bold pb-2">Titre 1</h2>
            <p className="text-platinum text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </section>
          <section className="projects_container_stack p-4">
            <ul className="flex flex-wrap justify-center items-center">
              <li className="px-4 py-1 rounded-full flex items-center justify-center gap-2 bg-poppyred">
                <FaReact size={20} className="text-base font-semibold" />
                <p className="text-base font-semibold">React</p>
              </li>
            </ul>
          </section>
        </section>
        <section className="animate projects_container flex flex-col bg-gunmetal rounded-md">
          <section className="projects_container_header h-60 bg-portfolioProject bg-cover rounded-t-md">
            <a href="#" className="flex justify-end">
              <FaExternalLinkAlt size={20} className="text-white m-4" />
            </a>
          </section>
          <section className="projects_container_content p-4">
            <h2 className="text-platinum text-3xl font-bold pb-2">Titre 1</h2>
            <p className="text-platinum text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </section>
          <section className="projects_container_stack p-4">
            <ul className="flex flex-wrap justify-center items-center">
              <li className="px-4 py-1 rounded-full flex items-center justify-center gap-2 bg-poppyred">
                <FaReact size={20} className="text-base font-semibold" />
                <p className="text-base font-semibold">React</p>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Projects;
