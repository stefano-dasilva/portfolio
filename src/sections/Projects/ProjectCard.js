import React  from "react";
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
} from "react-icons/bi";
import { Icon } from "@iconify/react";
import { TbBrandVscode } from "react-icons/tb";
import { useSelector } from "react-redux";

import { FiArrowUpRight } from "react-icons/fi";

const ProjectCard = ({ link, title, skills,animate,index }) => {
    const darkMode = useSelector((state) => state.darkmode.value);
    const language = useSelector((state) => state.language.value)
    const title_content = language === "english" ? title.english : title.italiano

  return (
    <div
      className={`lg:w-1/2 w-full  py-4 text-center flex justify-center transition-all   duration-[1500ms] ${
        index < 2 ? "delay-500" : index < 4 ? "delay-700" : "delay-900"
      } ${animate ? "translate-y-0 opacity-100" : "translate-y-80 opacity-0"}`}
    >
      <div
        className={`   rounded-xl  border-4 w-[85%] ${
          darkMode === false ? "border-lightmodedark" : "border-darkmodelight"
        }  flex flex-col  h-[170px]
        }`}
      >
        <div
          className={`flex flex-row items-center justify-center ${
            darkMode === false ? "bg-lightmodedark" : "bg-darkmodelight"
          } h-1/3 w-full  `}
        >
          <div className="flex flex-row gap-5 text-[20px]">
            <SiThymeleaf
              className={`${skills.includes("THYMELEAF") ? "flex" : "hidden"}`}
            />
            <SiExpress
              className={`${skills.includes("EXPRESS") ? "flex" : "hidden"}`}
            />
            <SiC className={`${skills.includes("C") ? "flex" : "hidden"}`} />
            <SiLatex
              className={`${skills.includes("LATEX") ? "flex" : "hidden"}`}
            />
            <AiOutlineConsoleSql
              className={`${skills.includes("MYSQL") ? "flex" : "hidden"}`}
            />
            <BiLogoJava
              className={`${skills.includes("JAVA") ? "flex" : "hidden"}`}
            />
            <SiHtml5
              className={`${skills.includes("HTML") ? "flex" : "hidden"}`}
            />
            <Icon
              icon="file-icons:vhdl"
              className={`${skills.includes("VHDL") ? "flex" : "hidden"}`}
            />
            <BiLogoReact
              className={`${skills.includes("REACT") ? "flex" : "hidden"}`}
            />
            <BiLogoMongodb
              className={`${skills.includes("MONGODB") ? "flex" : "hidden"}`}
            />
            <BiLogoTailwindCss
              className={`${skills.includes("TAILWIND") ? "flex" : "hidden"}`}
            />
            <BiLogoJavascript
              className={`${skills.includes("JAVASCRIPT") ? "flex" : "hidden"}`}
            />
            <BiLogoCss3
              className={`${skills.includes("CSS") ? "flex" : "hidden"}`}
            />
            <SiIntellijidea
              className={`${skills.includes("INTELLIJ") ? "flex" : "hidden"}`}
            />
            <SiApachemaven
              className={`${skills.includes("MAVEN") ? "flex" : "hidden"}`}
            />

            <SiClion
              className={`${skills.includes("CLION") ? "flex" : "hidden"}`}
            />
            <SiEclipseide
              className={`${skills.includes("ECLIPSE") ? "flex" : "hidden"}`}
            />
            <SiMicrosoftword
              className={`${skills.includes("WORD") ? "flex" : "hidden"}`}
            />
            <TbBrandVscode
              className={`${skills.includes("VSCODE") ? "flex" : "hidden"}`}
            />
          </div>
        </div>
        <div
          className={`flex flex-col h-2/3 w-full justify-around rounded-b-xl transition-color duration-700 ${
            darkMode === false
              ? "bg-slate-100 text-lightmodetext"
              : "bg-[#1d1d1d] text-darkmodetext"
          }  `}
        >
          <h1
            className={` transtion-all duration-200 font-karla mt-2 ${
              darkMode === false ? "text-lightmodetext" : "text-darkmodetext"
            }`}
          >
            {title_content}
          </h1>
          <a
            href={link}
            className="text-xs  flex flex-row items-center gap-2 justify-center  text-left w-full"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub />
            <span className="font-karla">Github Link</span>
            <FiArrowUpRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
