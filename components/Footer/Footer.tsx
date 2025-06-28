import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import AppContext from "../AppContextFolder/AppContext"; // Assuming this is the correct path

// 1. Import the config data
import config from '../../config';

// A mapping object to connect social key names to their Icon components
const SocialIconsMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  // Add other icons here if you add them to your config.ts
  // twitter: TwitterIcon,
};

const ClickableIcon = props => {
  return (
    <a href={props.href} className="" target={"_blank"} rel="noreferrer">
      <props.Icon className={"w-5 h-5 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer"} />
    </a>
  );
};

export default function Footer(props: { githubUrl: string; hideSocialsInDesktop: boolean }) {
  // 2. Destructure the data from the config
  const { personalInfo } = config;

  return (
    <div className="bg-AAprimary flex flex-col justify-center items-center py-8 space-y-4">
      {/* // ? Reach me at */}
      <div className={`flex flex-row space-x-8 ${props.hideSocialsInDesktop ? "lg:hidden" : ""}`}>
        {/* 3. Dynamically map over social links from config */}
        {Object.keys(personalInfo.socialLinks).map((key) => {
          const IconComponent = SocialIconsMap[key];
          const href = personalInfo.socialLinks[key];
          
          // Only render if we have a corresponding icon component and a URL
          if (!IconComponent || !href) return null;

          return <ClickableIcon key={key} href={href} Icon={IconComponent} />;
        })}
      </div>
      
      {/* 4. Use the GitHub URL from config */}
      <a href={personalInfo.socialLinks.github} className="" target={"_blank"} rel="noreferrer">
        <div
          className="group flex flex-col font-mono justify-center items-center  text-gray-400 
    text-sm  space-y-2  "
        >
          {/* 5. Use the name from config */}
          <span className="group-hover:text-AAsecondary sm:text-sm text-xs">
            Built by {personalInfo.name}
          </span>

          <span className="text-xs flex flex-row items-center space-x-2 group-hover:text-AAsecondary">
            <GithubIcon className={"w-4 h-4 text-gray-400 fill-current group-hover:text-AAsecondary"} />
            <span className="">Source code - Github</span>
          </span>
        </div>
      </a>
    </div>
  );
}