import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import GithubIcon from "../../Icons/GithubIcon";
import LinkedinIcon from "../../Icons/LinkedinIcon";
import InstagramIcon from "../../Icons/InstagramIcon";
import YoutubeIcon from "../../Icons/YoutubeIcon";

// 1. Import the config data from your config.ts file
import config from '../../../config';

const IconClickableWithAnimation = props => {
  return (
    <motion.div
      whileHover={{
        y: -3,
        transition: { duration: 0.1 },
      }}
      className=""
    >
      <a href={props.href} className="" target={"_blank"} rel="noreferrer">
        <props.Icon className={"w-6 h-6 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer"} />
      </a>
    </motion.div>
  );
};

export default function SocialMediaEmail(props: { finishedLoading: boolean }) {
  // 2. Destructure the data you need from the config
  const { personalInfo } = config;

  return (
    <>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ y: { delay: props.finishedLoading ? 0 : 11, duration: props.finishedLoading ? 0 : 0.5 } }}
        className="z-10 fixed bottom-0 left-0  hidden lg:flex flex-row px-12 items-center justify-between  "
      >
        <div className="flex flex-col space-y-8 justify-center items-center">
          <div className="flex flex-col justify-center items-center space-y-5">
            {/* Github Icon - Dynamic href */}
            <IconClickableWithAnimation Icon={GithubIcon} href={personalInfo.socialLinks.github} />
            {/* Linkedin icon - Dynamic href */}
            <IconClickableWithAnimation Icon={LinkedinIcon} href={personalInfo.socialLinks.linkedin} />
            {/* 3. Optional: Add Instagram or YouTube if you want them.
            {personalInfo.socialLinks.instagram && (
              <IconClickableWithAnimation Icon={InstagramIcon} href={personalInfo.socialLinks.instagram} />
            )}
            {personalInfo.socialLinks.youtube && (
              <IconClickableWithAnimation Icon={YoutubeIcon} href={personalInfo.socialLinks.youtube} />
            )}
            */}
          </div>
          <div className="h-28 w-0.5 bg-gray-400"></div>
        </div>
      </motion.div>

      {/* // ? Email Address bar               */}
      <motion.div
        initial={{ y: "170%" }}
        animate={{ y: "0%" }}
        // ! change delay from 0 to 11
        transition={{ y: { delay: props.finishedLoading ? 0 : 11, duration: props.finishedLoading ? 0 : 0.5 } }}
        className="z-10 fixed bottom-0 -right-10 hidden lg:flex flex-row items-center justify-between"
      >
        <div className="flex flex-col space-y-24 justify-center items-center">
          {/* Open Email on click - Dynamic href and text */}
          <motion.div
            initial={{ rotate: 90 }}
            whileHover={{
              y: -3,
              transition: { y: { duration: 0.1 }, rotate: { duration: 0 } },
            }}
            className=""
          >
            <a href={`mailto:${personalInfo.contact.email}`} target={"_blank"} rel="noreferrer">
              <span className=" font-Header tracking-wider text-gray-400 hover:text-AAsecondary hover:cursor-pointer">
                {personalInfo.contact.email} {/* Use dynamic email */}
              </span>
            </a>
          </motion.div>

          <div className="h-24 w-0.5 bg-gray-400"></div>
        </div>
      </motion.div>
    </>
  );
}