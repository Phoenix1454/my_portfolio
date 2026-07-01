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

      <div className="flex flex-col space-y-24 md:space-y-32 xl:space-y-40">
        {/* // ? Dynamically render projects from config.ts */}
        {[...projects].reverse().map((project, index) => {
          // Check if the project has an image
          if (!project.image) return null;

          // Alternate layout based on index (even/odd)
          const isOdd = index % 2 !== 0;

          return (
            <div
              key={project.id}
              data-aos="fade-up"
              className="relative w-full group"
            >
              {/* Desktop Layout */}
              <div className="hidden md:grid md:grid-cols-12 gap-4 items-center">
                {/* Image Side */}
                <div className={`col-span-7 ${isOdd ? 'order-2' : 'order-1'}`}>
                  <div className="relative rounded overflow-hidden bg-gray-800 min-h-[260px]">
                    {project.live_url ? (
                      <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                        <div className="absolute inset-0 bg-AAprimary opacity-50 hover:opacity-0 transition-opacity duration-300 z-10"></div>
                      </a>
                    ) : (
                      <div className="absolute inset-0 bg-AAprimary opacity-50 z-10"></div>
                    )}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          (e.target as HTMLImageElement).style.display = 'none';
                          parent.style.background = 'linear-gradient(135deg, #1a2035 0%, #0d1117 100%)';
                          parent.innerHTML += `<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:5"><span style="color:#64ffda;font-family:monospace;font-size:0.75rem;opacity:0.5">${project.title}</span></div>`;
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className={`col-span-5 ${isOdd ? 'order-1' : 'order-2'} ${isOdd ? 'pr-8' : 'pl-8'}`}>
                  <div className={`flex flex-col space-y-4 ${isOdd ? 'items-end text-right' : 'items-start text-left'}`}>
                    <div className="flex flex-col space-y-1">
                      <span className="text-AAsecondary text-sm">Recent Project</span>
                      {project.live_url ? (
                        <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                          <h3 className="text-gray-200 font-bold text-xl hover:text-AAsecondary transition-colors cursor-pointer">
                            {project.title}
                          </h3>
                        </a>
                      ) : (
                        <h3 className="text-gray-200 font-bold text-xl">
                          {project.title}
                        </h3>
                      )}
                    </div>

                    <div className="bg-AAtertiary rounded-md p-6 w-full">
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <ul className={`flex flex-wrap gap-3 text-gray-400 text-xs ${isOdd ? 'justify-end' : 'justify-start'}`}>
                      {project.technologies.map((tech, techIndex) => (
                        <li key={techIndex}>{tech}</li>
                      ))}
                    </ul>

                    <div className="flex space-x-4">
                      {project.github_url && <GithubIcon link={project.github_url} />}
                      {project.live_url && (
                        <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink url={""} router={router} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden relative">
                <div className="relative rounded overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-AAsecondary opacity-10 z-10"></div>
                  <div className="absolute inset-0 bg-AAprimary opacity-80 z-10"></div>
                  <Img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                </div>

                <div className="flex flex-col space-y-3 px-4">
                  <div className="flex flex-col space-y-1">
                    <span className="text-AAsecondary text-sm">Recent Project</span>
                    {project.live_url ? (
                      <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                        <h3 className="text-AAsecondary font-bold text-xl">
                          {project.title}
                        </h3>
                      </a>
                    ) : (
                      <h3 className="text-AAsecondary font-bold text-xl">
                        {project.title}
                      </h3>
                    )}
                  </div>

                  <div className="py-4">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <ul className="flex flex-wrap gap-3 text-gray-300 text-xs">
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex}>{tech}</li>
                    ))}
                  </ul>

                  <div className="flex space-x-4 pt-2">
                    {project.github_url && <GithubIcon link={project.github_url} />}
                    {project.live_url && (
                      <a href={project.live_url} target="_blank" rel="noopener noreferrer">
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