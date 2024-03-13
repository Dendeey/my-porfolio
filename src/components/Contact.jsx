import React, { useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col px-6 items-center mt-40">
      <h1 className=" text-platinum text-4xl font-bold mb-10">Contact</h1>
      <section className=" w-full flex flex-col">
        <section className="flex flex-col items-center lg:grid lg:grid-cols-3">
          <section className="mb-10 flex flex-col items-center">
            <h2 className="mb-2 text-poppyred font-bold text-2xl">Email</h2>
            <a
              href="mailto:davidsim1035@gmail.com"
              className="text-platinum font-normal text-base hover:text-poppyred duration-100"
            >
              davidsim1035@gmail.com
            </a>
          </section>
          <section className="mb-10 flex flex-col items-center">
            <h2 className="mb-2 text-poppyred font-bold text-2xl">Adresse</h2>
            <p className="text-platinum font-normal text-base">
              Domagné, Ille-et-Vilaine, France
            </p>
          </section>
          <section className="mb-10 flex flex-col items-center">
            <h2 className="mb-2 text-poppyred font-bold text-2xl">Social</h2>
            <ul className="flex flex-row gap-2">
              <li className="bg-platinum rounded-full p-2 hover:opacity-60 duration-100">
                <a
                  href="https://www.linkedin.com/in/sim-david/"
                  target="_blank"
                >
                  <FaLinkedin size={30} className="text-linkedin" />
                </a>
              </li>
              <li className="bg-platinum rounded-full p-2 hover:opacity-60 duration-100">
                <a href="https://github.com/Dendeey" target="_blank">
                  <FaGithub size={30} className="text-github" />
                </a>
              </li>
            </ul>
          </section>
        </section>
      </section>
      <span className=" block border-2 border-platinum w-1/3 mt-10"></span>
    </div>
  );
};

export default Contact;
