import React from "react";
import { SlMenu } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { setToggle } from "../../features/MenuSlice";
import content from ".";
const Navbar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.menu.isToggle) ;
  const language = useSelector((state) => state.language.value);
  const darkMode = useSelector((state) => state.darkmode.value);

  const about =
    language === "english"
      ? content.navbar[0].english
      : content.navbar[0].italiano;
  const skills =
    language === "english"
      ? content.navbar[1].english
      : content.navbar[1].italiano;
  const projects =
    language === "english"
      ? content.navbar[2].english
      : content.navbar[2].italiano;
  const contacts =
    language === "english"
      ? content.navbar[3].english
      : content.navbar[3].italiano;

  const handleScroll = (section) => {
    const element = document.getElementById(section);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick = () => {
    dispatch(setToggle());
  };
  return (
    <>
      <div
        className={`flex flex-col w-full   ${
          isOpen === true
            ? "h-screen absolute bg-inherit  z-20  "
            : "h-[100px] "
        }  `}
      >
        <div
          className={`  flex   flex-row  w-full h-[100px] items-end lg:items-center justify-end`}
        >
          <SlMenu
            className={`text-[40px] mr-4 transition-color duration-[1500ms] ${
              darkMode === false ? "text-lightmodedark" : "text-darkmodelight"
            }  cursor-pointermr-7 lg:hidden cursor-pointer`}
            onClick={handleClick}
          />
          {/* INIZIO LG NAV */}
          <ul
            className={`hidden transition-color duration-[1500ms] lg:flex flex-row gap-16 lg:mr-10 ${
              darkMode === false ? "text-lightmodedark" : "text-darkmodelight"
            } font-semibold px-6 font-karla text-xl`}
          >
            <li
              className={` cursor-pointer transition-color duration-[1500ms]  ${
                darkMode === false
                  ? "hover:text-lightmodelight"
                  : "hover:text-darkmodedark"
              }`}
              onClick={() => handleScroll("ciao")}
            >
              {about}
            </li>
            <li
              className={` cursor-pointer transition-color duration-[1500ms]  ${
                darkMode === false
                  ? "hover:text-lightmodelight"
                  : "hover:text-darkmodedark"
              }`}
              onClick={() => handleScroll("skills")}
            >
              {skills}
            </li>
            <li
              className={` cursor-pointer transition-color duration-[1500ms]  ${
                darkMode === false
                  ? "hover:text-lightmodelight"
                  : "hover:text-darkmodedark"
              }`}
              onClick={() => handleScroll("projects")}
            >
              {projects}
            </li>
            <li
              className={` cursor-pointer transition-color duration-[1500ms]  ${
                darkMode === false
                  ? "hover:text-lightmodelight"
                  : "hover:text-darkmodedark"
              }`}
              onClick={() => handleScroll("contacts")}
            >
              {contacts}
            </li>
          </ul>
          {/* FINE LG NAV */}
        </div>
        {isOpen === true ? (
          <div
            className={` ${
              darkMode === false ? "text-lightmodedark" : "text-darkmodelight"
            } transition-all duration-1000  font-semibold font-karla text-2xl  p-4 flex flex-col  gap-[90px] w-full   `}
          >
            <h1
              className="mt-12 cursor-pointer"
              onClick={() => handleScroll("ciao")}
            >
              {about}
            </h1>
            <h1
              className="cursor-pointer"
              onClick={() => handleScroll("skills")}
            >
              {skills}
            </h1>
            <h1
              className="cursor-pointer"
              onClick={() => handleScroll("projects")}
            >
              {projects}
            </h1>
            <h1
              className="cursor-pointer"
              onClick={() => handleScroll("contacts")}
            >
              {contacts}
            </h1>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Navbar;
