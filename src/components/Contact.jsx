import React, { useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className="div-contact div-animate show-animation flex flex-col px-6 items-center mb-20"
    >
      <h1 className="animate text-platinum text-4xl font-bold mb-20">
        Contact
      </h1>
      <section className="animate w-full flex flex-col">
        <section className="mb-20 flex flex-col items-center lg:grid lg:grid-cols-3">
          <section className="mb-10 flex flex-col items-center">
            <h2 className="mb-2 text-poppyred font-bold text-2xl">Email</h2>
            <a
              href="mailto:davidsim1035@gmail.com"
              className="text-platinum font-normal text-base hover:text-poppyred duration-200"
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
              <li className="bg-platinum rounded-full p-2 hover:opacity-60 duration-200">
                <a href="#">
                  <FaLinkedin size={30} className="text-linkedin" />
                </a>
              </li>
              <li className="bg-platinum rounded-full p-2 hover:opacity-60 duration-200">
                <a href="#">
                  <FaGithub size={30} className="text-github" />
                </a>
              </li>
            </ul>
          </section>
        </section>
      </section>
      <span className="animate block border-2 border-platinum w-1/3"></span>
    </div>
  );
};

export default Contact;
