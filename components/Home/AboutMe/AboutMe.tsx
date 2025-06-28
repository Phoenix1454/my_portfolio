import React from "react";
// Import your Img component if needed
import Img from "../../../components/smallComp/image/Img";
import Image from 'next/image';
import ArrowIcon from "../../../components/Icons/ArrowIcon";

// 1. Import the config data from your config.ts file
import config from '../../../config';   

export default function AboutMe(props) {
  // 2. Destructure the data you need from the config
  const { personalInfo } = config;

  // The 'technologies' array below is hardcoded. Let's replace it.
  // const technologies = [
  //   ["Nextjs/React", "TypeScript/JavaScript", "Tailwind CSS", "Ether.js/web3.js", "AWS/Google Cloud"],
  //   ["Node.js", "Java", "Solidity", "Mongodb", "GraphQL/RESTful APIs"],
  // ];

  // You can now use the data from personalInfo.skills.technicalExpertise
  const technologiesForDisplay = personalInfo.skills.technicalExpertise.map(tech => tech.tools.split(', ')).flat();
  
  // To display them in two columns, we can split the array
  const firstHalf = technologiesForDisplay.slice(0, Math.ceil(technologiesForDisplay.length / 2));
  const secondHalf = technologiesForDisplay.slice(Math.ceil(technologiesForDisplay.length / 2));
  
  // Function to render the experience section from your config
  const renderExperience = () => (
    personalInfo.experience.map((job, index) => (
      <div key={index} className="font-Header text-justify mb-4">
        <span className="text-gray-400">
          <span className="text-AAsecondary">
            {job.title}
          </span>{" "}
          at{" "}
          <span className="text-AAsecondary">{job.company}</span>:
          <br />
          {job.description.map((point, i) => (
            <span key={i}>
              &nbsp;&nbsp;- {point}
              <br />
            </span>
          ))}
        </span>
      </div>
    ))
  );

  return (
    <div id="aboutSection" data-aos="fade-up" className="snap-start flex flex-col items-center py-20 bg-AAprimary">
      {/* Header */}
      <div className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px]">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center mr-4">
            <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"} />
            <span className="text-AAsecondary font-Header text-sm sm:text-xl"> 01.</span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>

        {/* Content */}
        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm">
            {/* Contact Info - Dynamic */}
            <div className="font-Header text-justify">
              <span className="text-gray-400">
                <span className="text-AAsecondary">London, UK</span> |{" "}
                <span className="text-AAsecondary">{personalInfo.contact.email}</span> |{" "}
                <span className="text-AAsecondary">{personalInfo.contact.phone}</span><br />
                <span className="text-AAsecondary">{personalInfo.socialLinks.linkedin.replace('https://', '')}</span>
              </span>
            </div>

            {/* Professional Summary - Dynamic */}
            <div className="font-Header text-justify">
              <span className="text-gray-400">
                {personalInfo.bio}
              </span>
            </div>

            {/* Education - Dynamic */}
            <div className="font-Header text-justify">
              <span className="text-gray-400">
                <span className="text-AAsecondary">Education:</span><br />
                {personalInfo.education.map((edu, index) => (
                  <div key={index}>
                    • {edu.degree}, <span className="text-AAsecondary">{edu.institution}</span> ({edu.duration.includes('Current') ? 'Current' : edu.duration})
                    <br />
                  </div>
                ))}
              </span>
            </div>

            {/* Experience - Dynamic */}
            <div className="font-Header text-justify">
              <span className="text-gray-400">
                <span className="text-AAsecondary">Experience:</span><br />
                {renderExperience()}
              </span>
            </div>

            {/* Skills - Dynamic */}
            <div className="font-Header tracking-wide text-justify">
              <span className="text-gray-400">
                <span className="text-AAsecondary">Technical Skills:</span>
              </span>
            </div>
            
            <div className="font-Header tracking-wide flex flex-row space-x-16 justify-center lg:justify-start">
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {firstHalf.map((tech, index) => (
                    <div key={index} className="flex flex-row items-center space-x-2">
                      <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                      <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {secondHalf.map((tech, index) => (
                    <div key={index} className="flex flex-row items-center space-x-2">
                      <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                      <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

      {/* Image - Desktop/Tablet */}
<div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden">
  <div className="group-hover:translate-x-3 group-hover:translate-y-3 duration-300 absolute w-full h-full border-2 border-AAsecondary translate-x-5 translate-y-5 rounded"></div>
  <div className="absolute w-full h-full rounded overflow-hidden">
    <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
    <Image
      src={personalInfo.profilePicture}
      alt={personalInfo.name}
      fill
      // Changed from object-contain to object-cover for better filling
      // Added object-center to ensure the subject (face) stays centered
      className="object-cover object-center rounded-lg"
      onError={(e) => console.error("Image failed to load")}
    />
  </div>
</div>

{/* Image - Mobile */}
<div className="relative w-full h-48 md:hidden flex justify-center items-center">
  <div className="absolute w-48 h-full rounded translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
  <div className="absolute w-48 h-full rounded overflow-hidden">
    <Image
      src={personalInfo.profilePicture}
      alt={personalInfo.name}
      fill
      // Same changes for mobile - object-cover with object-center
      className="object-cover object-center rounded-lg"
      onError={(e) => console.error("Image failed to load")}
    />
  </div>
  <div className="absolute w-48 h-full bg-AAsecondary opacity-10 md:opacity-60 rounded overflow-hidden"></div>
</div>       </div>
      </div>
    </div>
  );
}