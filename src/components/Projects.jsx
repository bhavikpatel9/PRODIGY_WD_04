import React,{useEffect} from "react";
import { PROJECTS } from "../utils/data";
import { FaGithub } from "react-icons/fa";
import AOS from 'aos';

const Projects = ({ id }) => {
  useEffect(() => {
    AOS.init({
      duration : "800",
    });
  }, [])
  return (
    <>
      <div id={id}>
        <h1 className="mb-14 pt-24 text-center text-4xl" data-aos="zoom-in">Projects</h1>
        <div>
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="flex justify-center mb-8 flex-wrap text-center lg:text-left overflow-hidden"
            >
              <div className="w-full lg:w-1/4  overflow-hidden">
                <div className="relative mb-6 group w-[150px] cursor-pointer mx-auto" 
                    data-aos="fade-right" data-aos-duration="2000">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={150}
                    height={150}
                    className="rounded"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r rounded from-purple-600 to-indigo-700 opacity-85 transition-all duration-400 ease-in-out group-hover:h-full group-hover:opacity-100 h-0"></div>
                  <div className="absolute inset-0 flex flex-col justify-center rounded items-center text-center transform translate-y-1/2 transition-all duration-500 ease-in-out opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <h4 className="text-2xl font-bold text-white tracking-wide leading-tight">
                      <a
                        href={project.gitLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-400"
                      >
                        <FaGithub size={25} />
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-xl lg:w-3/4" data-aos="fade-left" data-aos-duration="2000">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[85%] mx-auto pb-10 border-b-2 border-purple-900 border-opacity-20"></div>
    </>
  );
};

export default Projects;
