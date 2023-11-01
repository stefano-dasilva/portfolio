import "./App.css";
import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Contacts from "./sections/Contacts/Contacts";
import { useSelector } from "react-redux";
import { useEffect, useState} from "react";
import axios from "axios";

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  const darkMode = useSelector((state) => state.darkmode.value);
  const [load, setLoad] = useState(false)

  const handleLogger = async () => {
    try {
      const response = await axios.get(
        `https://stefano-da-silva-api.vercel.app`
      );
      console.log(response);
      setLoad(true)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleLogger();
  }, []);

  return (
    <div
      className={`App m-auto overflow-x-hidden overflow-y-hidden w-screen transition-color delay-700 duration-[1500ms] ${
        darkMode === false ? "bg-lightmodeback" : "bg-darkmodeback"
      }`}
    >
      {load === true ? (
        <>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contacts />
        </>
      ) : null}
    </div>
  );
}

export default App;
