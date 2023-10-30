import React, { useEffect, useState } from "react";
import projects from ".";
import ProjectCard from "./ProjectCard";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const [ref, inview] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inview) {
      setAnimate(true);
    }
  }, [inview]);

  const darkMode = useSelector((state) => state.darkmode.value);
  const language = useSelector((state) => state.language.value);

  const content = language === "english" ? "Projects" : "Progetti";

  return (
    <div className={`w-[95%] mt-20 m-auto `}>
      <h1
        className={`font-poppins text-[48px] transition-all duration-[1500ms] mt-10 text-center ${
          darkMode === false ? "text-lightmodedark" : "text-darkmodedark"
        } ${
          animate ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
        } `}
        ref={ref}
        id="projects"
      >
        {content}
      </h1>
      <div className={` mt-6 flex justify-between flex-wrap  `}>
        {projects.map((project, index) => (
          <ProjectCard
            animate ={animate}
            index={index}
            title={project.title}
            link={project.link}
            skills={project.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
