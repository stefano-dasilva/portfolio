import React from "react";
import Navbar from "./Navbar";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../features/LanguageSlice";
import { setDarkMode } from "../../features/DarkModeSlice";
import { MdLightMode, MdDarkMode } from "react-icons/md";


const Home = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.value);
  const darkMode = useSelector((state) => state.darkmode.value);
 
  useEffect(() => {
    console.log(language);
  }, [language]);

  const handleLanguage = (language) => {
    dispatch(setLanguage(language));
  };

  const handleDarkMode = () => {
    dispatch(setDarkMode());
  };

  

  return (
    <>
      <Navbar />
      <div className=" flex z-1 w-[95%] m-auto flex-col  gap-4  ">
        <div
          className={`flex flex-row gap-4 items-center transition-color duration-[1500ms] delay-500 ${
            darkMode === false ? "text-lightmodetext" : "text-darkmodetext"
          }  `}
        >
          <div className="flex flex-row gap-4 items-center ">
            <span
              className={`font-karla cursor-pointer ${
                language === "italian" ? "text-black" : "text-gray-500"
              }`}
              onClick={() => handleLanguage("italian")}
            >
              IT
            </span>
            <span
              className={`font-karla cursor-pointer ${
                language === "english" ? "text-black" : "text-gray-500"
              }`}
              onClick={() => handleLanguage("english")}
            >
              ENG
            </span>
          </div>
        </div>        
        <div
          className={`flex transition-all duration-[1500ms] delay-300  flex-row h-[50px] rounded-full items-center   bg-white   w-[90px] ${
            darkMode === false ? "bg-slate-400" : "bg-[#1d1d1d]"
          } `}
        >
          <div
            className={`flex justify-center items-center delay-300 cursor-pointer  h-[45px] w-[45px] rounded-full   transition-all duration-[1500ms]  ${
              darkMode === false
                ? "translate-x-0 bg-lightmodeback "
                : "translate-x-full bg-black"
            }`}
            onClick={handleDarkMode}
          >
            <MdLightMode
              className={`transition-all delay-300  text-black duration-[1500ms] w-1/2 h-1/2 ${
                darkMode === false ? "flex" : "hidden"
              }`}
            />{" "}
            <MdDarkMode
              className={`transition-all delay-300 text-white duration-[1500ms] w-1/2 h-1/2 ${
                darkMode === false ? "hidden" : "flex"
              }`}
            />
          </div>
        </div>
        <h1
          className={`font-poppins leading-[64px] text-[60px] lg:text-[70px] transition-color duration-[1500ms] delay-500 ${
            darkMode === false ? "text-lightmodelight" : "text-darkmodelight"
          } `}
        >
          <span
            className={` transition-color duration-[1500ms] delay-500 ${
              darkMode === false ? "text-lightmodedark" : "text-darkmodedark"
            }`}
          >
            hello
          </span>{" "}
          world!
          <br />
          {language === "english" ? "Welcome " : "Benvenuti "}
          <span
            className={` transition-color duration-[1500ms] delay-500 ${
              darkMode === false ? "text-lightmodedark" : "text-darkmodedark"
            } `}
          >
            {language === "english" ? "to my " : "sul mio "}
          </span>
          {language === "english" ? "website" : "sito"}
        </h1>
        <h1
          className={`font-karla  mt-24 text-[18px] transition-color duration-[1500ms] delay-500 ${
            darkMode === false ? "text-lightmodetext" : "text-darkmodetext"
          }`}
        >
          {language === "english"
            ? "Slide down to get to know me!"
            : "Scorri in basso per scoprire chi sono!"}
        </h1>
        <div className="flex flex-row  justify-end mt-28 gap-4  text-white  font-karla">
          <button
            className={`px-8 py-4 rounded-xl  h-full w-1/2 lg:w-1/5 transition-color duration-[1500ms] delay-500 ${
              darkMode === false ? "bg-lightmodedark" : "bg-darkmodedark"
            } `}
          >
            {language === "english" ? "My projects" : "Progetti"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
