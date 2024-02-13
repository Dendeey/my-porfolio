import React, { useEffect } from "react";
import "normalize.css";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((elements) => {
      console.log("New instance");
      elements.forEach((element) => {
        console.log("Loop on element");
        if (element.isIntersecting) {
          element.target.classList.add("showElement");
        } else {
          element.target.classList.remove("showElement");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hiddenElement");
    console.log(hiddenElements);
    hiddenElements.forEach((el) => observer.observe(el));

    // Nettoyer l'observateur lors du démontage du composant
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className=" bg-eerieblack min-h-screen w-screen">
      <div className="max-w-6xl m-auto">
        <Sidenav />
        <Main />
        <Projects />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
