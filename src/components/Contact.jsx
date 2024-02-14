import React, { useEffect } from "react";

const Contact = () => {
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
    <div className="div-contact div-animate show-animation flex justify-center h-screen ">
      <h1 className="animate text-3xl text-platinum text-4xl font-bold">
        Contact
      </h1>
    </div>
  );
};

export default Contact;
