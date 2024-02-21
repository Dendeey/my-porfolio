import "normalize.css";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="overflow-x-hidden bg-eerieblack min-h-screen">
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
