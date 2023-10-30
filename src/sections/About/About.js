import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import content from ".";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { MdOutlineReplay } from "react-icons/md";
import { TbMovie } from "react-icons/tb";
const audio = new Audio("/phoebe.mp3");

const About = () => {
  const [animate, setAnimate] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [iseEnded, setEnded] = useState(false);
  const language = useSelector((state) => state.language.value);
  const darkMode = useSelector((state) => state.darkmode.value);
  const content_language =
    language === "english"
      ? content.description.english
      : content.description.italiano;
  const title_language =
    language === "english" ? content.title.english : content.title.italiano;

  const ref = useRef(null);

  const handlePlay = () => {
    if (!isPlaying && !iseEnded) {
      audio.play();
      setIsPlaying(true);
    } else if (isPlaying && !iseEnded) {
      audio.pause();
      setIsPlaying(false);
    } else if (iseEnded) {
      audio.currentTime = 0;
      setIsPlaying(true);
      setEnded(false);
      audio.play();
    }
  };

  useEffect(() => {
    const handleended = () => {
      setIsPlaying(false);
      setEnded(true);
      console.log("FINITA");
    };

    audio.addEventListener("ended", handleended);
    return () => {
      audio.removeEventListener("ended", handleended);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const elementTop = ref.current.getBoundingClientRect().top;
        if (elementTop < window.innerHeight) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(language);
  }, [language]);

  return (
    <>
      <div className=" mt-[400px] " id="ciao"></div>
      <section
        className={`flex   flex-col  lg:w-[60%] mt-10 lg:mx-auto gap-4 items-center 
      `}
      >
        <h2
          className={`transition-all duration-[1500ms] font-poppins text-[48px] mt-2 ${
            darkMode === false ? "text-lightmodedark" : "text-darkmodedark"
          } ${
            animate ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
          }`}
        >
          {title_language}
        </h2>
        <div className={`  w-[90%] mt-5 mx-auto `}>
          <p
            className={` transition-all duration-[1500ms] delay-500 font-karla leading-[35px] ${
              darkMode === false ? "text-lightmodetext" : "text-slate-300"
            } ${
              animate ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
            } `}
            ref={ref}
          >
            {content_language}
            <div className="flex flex-col">
              <div>
                <h1 className="font-karla mt-6 text-base text-center">
                 {language === "english" ? "My week favourites" : "I preferiti della settimana"}
                </h1>
              </div>
              <div className="flex flex-row justify-around items-center mt-6">
                <div className="flex flex-row items-center gap-4 lg:gap-6 text-[20px] lg:text-[30px] ">
                  <BsPlayFill
                    className={` cursor-pointer ${
                      isPlaying === true || iseEnded === true
                        ? "hidden"
                        : "flex"
                    }`}
                    onClick={handlePlay}
                  />
                  <BsPauseFill
                    className={` cursor-pointer ${
                      isPlaying === true && iseEnded === false
                        ? "flex"
                        : "hidden"
                    }`}
                    onClick={handlePlay}
                  />
                  <MdOutlineReplay
                    className={` cursor-pointer ${
                      iseEnded === true ? "flex" : "hidden"
                    }`}
                    onClick={handlePlay}
                  />
                  <div className="flex flex-col">
                    <span className="font-karla text-sm lg:text-lg">Motion Sickness</span>
                    <span className="font-karla text-xs lg:text-base">Phoebe bridgers </span>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-4 lg:gap-6">
                  <a
                    href="https://www.youtube.com/watch?v=P15S6ND8kbQ"
                    target="_blank "
                    rel="noreferrer"
                  >
                    <TbMovie className="text-[20px] cursor-pointer" />
                  </a>
                  <div className="flex flex-col">
                    <span className="text-sm lg:text-lg">No Hard Feelings</span>
                    <span className="text-xs lg:text-base"> Gene Stupnitsky</span>
                  </div>
                </div>
              </div>
            </div>
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
