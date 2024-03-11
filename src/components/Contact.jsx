import React, { useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className="div-contact div-animate show-animation flex flex-col px-6 items-center"
    >
      <h1 className="animate text-platinum text-4xl font-bold mb-20">
        Contact
      </h1>
      <section className="animate w-full flex flex-col lg:flex-row lg:justify-between">
        <section className="mb-20 w-full lg:pr-8">
          <form action="" method="get">
            <fieldset className="flex flex-col mb-4">
              <label
                for="name"
                className="mb-2 text-xl text-poppyred font-bold"
              >
                Nom{" "}
              </label>
              <input
                className="rounded p-2"
                type="text"
                name="name"
                id="name"
                placeholder="Votre nom"
                required
              />
            </fieldset>
            <fieldset className="flex flex-col mb-4">
              <label
                for="email"
                className="mb-2 text-xl text-poppyred font-bold"
              >
                Email{" "}
              </label>
              <input
                className="rounded p-2"
                type="email"
                name="email"
                id="email"
                placeholder="Votre email"
                required
              />
            </fieldset>
            <fieldset className="flex flex-col mb-4">
              <label
                for="message"
                className="mb-2 text-xl text-poppyred font-bold"
              >
                Message{" "}
              </label>
              <textarea
                className="rounded p-2"
                id="story"
                name="story"
                rows="5"
                cols="33"
                placeholder="Votre message"
              ></textarea>
            </fieldset>
            <fieldset className="flex justify-center pt-4">
              <button className="bg-poppyred p-2 rounded hover:opacity-60 duration-200">
                <input
                  className="font-medium text-platinum cursor-pointer"
                  type="submit"
                  value="Envoyer !"
                />
              </button>
            </fieldset>
          </form>
        </section>
        <section className="self-center mb-10 flex flex-col lg:w-full lg:self-auto lg:items-end">
          <section className="mb-10 lg:flex lg:flex-col lg:items-end">
            <h2 className="mb-2 text-poppyred font-bold text-2xl">Email</h2>
            <p className="text-platinum font-normal text-base">
              davidsim1035@gmail.com
            </p>
          </section>
          <section className="mb-10 lg:flex lg:flex-col lg:items-end">
            <h2 className="mb-2 text-poppyred font-bold text-2xl">Adresse</h2>
            <p className="text-platinum font-normal text-base">
              Domagné, Ille-et-Vilaine, France
            </p>
          </section>
          <section className="mb-10 lg:flex lg:flex-col lg:items-end">
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
    </div>
  );
};

export default Contact;
