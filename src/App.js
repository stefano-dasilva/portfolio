import "./App.css";
import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Contacts from "./sections/Contacts/Contacts";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  const darkMode = useSelector((state) => state.darkmode.value)

  useEffect(()=>{
    console.log(darkMode)
  },[darkMode])

  return (
    <div className={`App m-auto overflow-x-hidden  overflow-y-hidden w-screen transition-color delay-700 duration-[1500ms] ${darkMode === false ? "bg-lightmodeback" : "bg-darkmodeback"} `}>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
