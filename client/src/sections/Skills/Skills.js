import React, { useEffect, useRef } from "react";
import content from ".";
import { useSelector } from "react-redux";
import {
  SiExpress,
  SiThymeleaf,
  SiIntellijidea,
  SiC,
  SiClion,
  SiEclipseide,
  SiGithub,
  SiMicrosoftword,
  SiLatex,
  SiHtml5,
  SiApachemaven,
} from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import {
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoCss3,
  BiLogoMongodb,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoSass,
} from "react-icons/bi";
import { Icon } from "@iconify/react";
import { TbBrandVscode } from "react-icons/tb";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const sectionref = useRef(null);
  const toolsectionref = useRef(null);

  const [animatesection, setAnimatesection] = useState(false);
  const [animatetoolsection, setAnimatetoolsection] = useState(false);

  const darkMode = useSelector((state) => state.darkmode.value);

  useEffect(() => {
    const handleSectionrefscroll = () => {
      if (sectionref.current) {
        const elementTop = sectionref.current.getBoundingClientRect().top;
        if (elementTop < window.innerHeight) {
          setAnimatesection(true);
        } else {
          setAnimatesection(false);
        }
      }
    };

    window.addEventListener("scroll", handleSectionrefscroll);
    return () => {
      window.removeEventListener("scroll", handleSectionrefscroll);
    };
  }, []);
  useEffect(() => {
    const handletoolSectionrefscroll = () => {
      if (toolsectionref.current) {
        const elementTop = toolsectionref.current.getBoundingClientRect().top;
        if (elementTop < window.innerHeight) {
          setAnimatetoolsection(true);
        } else {
          setAnimatetoolsection(false);
        }
      }
    };

    window.addEventListener("scroll", handletoolSectionrefscroll);
    return () => {
      window.removeEventListener("scroll", handletoolSectionrefscroll);
    };
  }, []);
  const language = useSelector((state) => state.language.value);

  const title_language =
    language === "english"
      ? content.title[0].english
      : content.title[0].italiano;
  const title_tools =
    language === "english"
      ? content.title[1].english
      : content.title[1].italiano;
  const languages_language =
    language === "english"
      ? content.languages.english
      : content.languages.italiano;
  const tools_language =
    language === "english" ? content.tools.english : content.tools.italiano;
  return (
    <>
      <div className="  mt-60 "></div>
      <section
        className="flex   flex-col items-center justify-between   "
        id="skills"
      >
        <div
          className={`  w-[90%]  lg:w-[60%] lg:m-auto transition-all duration-[1500ms] `}
        >
          <h1
            className={` transition-all duration-[1500ms] text-center mt-2 font-poppins ${
              darkMode === false ? "text-lightmodedark" : "text-darkmodedark"
            } ${
              animatesection
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-40"
            }  text-[48px]`}
          >
            {title_language}
          </h1>
          <p
            className={`transition-all duration-[1500ms] delay-500 font-karla leading-[35px] ${
              darkMode === false ? "text-lightmodetext" : "text-darkmodetext"
            } ${
              animatesection
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-40"
            } mt-5`}
            ref={sectionref}
          >
            {languages_language}
          </p>
        </div>
        <div
          className={`  flex flex-row justify-center gap-6 w-[90%] flex-wrap lg:gap-6 mt-20 text-[35px] lg:text-[40px]  transition-all duration-[1500ms] delay-1000  ${
            animatesection
              ? "translate-x-0 opacity-100"
              : "translate-x-40 opacity-0"
          } ${
            darkMode === false ? "text-lightmodelight" : "text-darkmodelight"
          }`}
        >
          <BiLogoReact className="delay-0" />
          <BiLogoMongodb  className="delay-75"/>
          <BiLogoTailwindCss className="delay-100 "/>
          <BiLogoJavascript className="delay-150 "/>
          <BiLogoCss3  className="delay-200"/>
          <BiLogoJava  className="delay300-"/>
          <SiExpress className="delay-500"/>
          <SiThymeleaf  className="delay-700"/>
          <SiHtml5  className="delay-1000"/>
          <SiC  className="delay-[1200]"/>
          <Icon icon="file-icons:vhdl"  className="delay-[1400]"/>
          <AiOutlineConsoleSql className="delay-[1600] "/>
          <BiLogoSass className="delay-[1800]"/>
        </div>
        <div className={`w-[90%]  lg:w-[60%]  lg:mx-auto mt-32 `}>
          <h1
            className={`text-center mt-8 font-poppins transition-all duration-[1500ms] ${
              darkMode === false ? "text-lightmodedark" : "text-darkmodedark"
            }  ${
              animatetoolsection
                ? "translate-y-0 opacity-100"
                : "translate-y-40 opacity-0"
            }  text-[48px]`}
          >
            {title_tools}
          </h1>
          <p
            className={` transition-all duration-[1500ms] delay-500 font-karla leading-[35px] mt-5 ${
              darkMode === false ? "text-lightmodetext" : "text-darkmodetext"
            } ${
              animatetoolsection
                ? "translate-y-0 opacity-100"
                : "translate-y-40 opacity-0"
            } `}
            ref={toolsectionref}
          >
            {tools_language}
          </p>
        </div>
        <div
          className={` flex flex-row gap-8 lg:gap-12 mt-20 mb-6 text-[35px] lg:text-[40px]   transition-all duration-[1500ms] delay-700 ${
            animatetoolsection
              ? "translate-x-0 opacity-100"
              : "translate-x-40 opacity-0"
          } ${
            darkMode === false ? "text-lightmodelight" : "text-darkmodelight"
          }`}
        >
          <TbBrandVscode />
          <SiIntellijidea />
          <SiClion />
          <SiEclipseide />
          <SiGithub />
          <SiLatex />
          <SiApachemaven />
          <SiMicrosoftword />
        </div>
      </section>
    </>
  );
};

export default Skills;
