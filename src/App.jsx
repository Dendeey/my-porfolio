import "normalize.css";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";

function App() {
  return (
    <div className=" bg-eerieblack min-h-full max-w-6xl m-auto px-4">
      <Sidenav />
      <Main />
    </div>
  );
}

export default App;
