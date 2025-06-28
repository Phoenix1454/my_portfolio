import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

// 1. Import the config data
import config from '../../../config';

export default function SomethingIveBuilt() {
  const router = useRouter();
  const { projects } = config; // Destructure projects from config

  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title   */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 03.</span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {/* // ? Dynamically render projects from config.ts */}
        {projects.map((project, index) => {
          // Check if the project has an image
          if (!project.image) return null;

          // Alternate layout based on index (even/odd)
          const isOdd = index % 2 !== 0;

          return (
            <div
              key={project.id} // Use a unique key
              data-aos="fade-up"
              className="relative md:grid md:grid-cols-12 w-full md:h-96 group"
            >
              {/* Left image or Right image based on index */}
              <div
                className={`hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center ${
                  isOdd ? "col-start-1" : "col-start-6"
                } `}
              >
                <div
                  className={`relative rounded w-full h-full ${
                    isOdd ? "col-span-7 col-start-1" : "col-span-7 col-start-6"
                  } `}
                >
                  {project.live_url ? (
                    <a href={project.live_url} target="_blank" rel="noreferrer">
                      <div
                        className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                      ></div>
                    </a>
                  ) : (
                    <div
                      className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-50 duration-300"
                    ></div>
                  )}
                  <Img src={project.image} alt={project.title} className={`w-full rounded h-full `} />
                </div>
              </div>

              {/* Content on the right or left based on index */}
              <div
                className={`md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center ${
                  isOdd ? "md:order-2" : "md:order-1"
                }`}
              >
                {/* Background for text in mobile responsive */}
                <div
                  className={`absolute w-full h-full bg-opacity-70 z-0 ${
                    isOdd ? "" : "md:order-2"
                  }`}
                >
                  <div className="relative w-full h-full">
                    <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                    <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                    <Img src={project.image} alt={project.title} className={`w-full h-full`} />
                  </div>
                </div>

                <div
                  className={`px-8 pt-8 sm:pt-12 md:py-0 ${
                    isOdd ? "xl:col-span-6 xl:col-start-7 col-start-5" : "xl:col-span-6"
                  } col-span-8 flex flex-col items-start ${
                    isOdd ? "md:items-end" : ""
                  } space-y-3 z-10`}
                >
                  <div className={`flex flex-col space-y-1 ${isOdd ? "md:items-end" : ""} z-10`}>
                    <span className="text-AAsecondary text-base">Recent Project</span>
                    {project.live_url ? (
                      <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                        <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                          {project.title}
                        </span>
                      </a>
                    ) : (
                      <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                        {project.title}
                      </span>
                    )}
                  </div>
                  <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                    <p className="text-gray-300 md:text-gray-400 text-left">
                      {project.description}
                    </p>
                  </div>
                  <ul
                    className={`flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 ${
                      isOdd ? "md:justify-end" : "md:justify-start"
                    }`}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="pr-4 z-10">
                        {tech}
                      </span>
                    ))}
                  </ul>
                  <div className="z-10 flex fle-row space-x-5 ">
                    {project.github_url && <GithubIcon link={project.github_url} />}
                    {project.live_url && (
                      <a href={project.live_url} target={"_blank"} rel="noreferrer">
                        <ExternalLink url={""} router={router} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}