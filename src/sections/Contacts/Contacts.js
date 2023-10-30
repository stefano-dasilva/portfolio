import React from "react";
import { SiGithub, SiLinkedin, SiFacebook, SiInstagram } from "react-icons/si";
import {  useSelector } from "react-redux/es/hooks/useSelector";

const Contacts = () => {

  const darkMode = useSelector((state) => state.darkmode.value)
  return (
    <div
      className={` transition-color duration-[1500ms] w-full flex flex-col justify-around items-center mt-16 m-auto h-[250px] ${
        darkMode === false ? "bg-lightmodelight" : "bg-[#1d1d1d]"
      } `}
      id="contacts"
    >
      <div className="flex flex-row gap-10 items-center w-[70%]  text-[30px] text-white justify-around">
        <a
          href="https://github.com/stefano-dasilva?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <SiGithub className=" opacity-30 hover:opacity-75" />
        </a>
        <span className="text-[30px] opacity-30">|</span>
        <a
          href="https://www.facebook.com/profile.php?id=100001444843174"
          target="_blank "
          rel="noreferrer"
        >
          <SiFacebook className=" opacity-30 hover:opacity-75" />
        </a>
        <span className="text-[30px] opacity-30">|</span>

        <SiInstagram className=" opacity-30 hover:opacity-75" />
        <span className="text-[30px] opacity-30">|</span>
        <a
          href="https://www.linkedin.com/in/stefano-da-silva-87373324a/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLinkedin className=" opacity-30 hover:opacity-75" />
        </a>
      </div>
    </div>
  );
};

export default Contacts;
