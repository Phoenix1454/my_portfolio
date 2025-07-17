import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import { Link as ReactScrollLink } from "react-scroll";
// 1. Import the config data
import config from '../../../config';

export default function DesktopMenu(props: { finishedLoading: boolean }) {
  // 2. Destructure the navigation data from the config
  const { nav } = config;

  return (
    <div className="font-mono text-xs md:flex hidden flex-row items-center space-x-8 ">
      {/* 3. Dynamically map over the sections from config.ts */}
      {nav.sections.map((section, index) => (
        <motion.div
          key={section.id} // Use the section ID as a unique key
          initial={{
            y: -40,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            duration: props.finishedLoading ? 0 : 1.2,
            delay: props.finishedLoading ? 0 : 9.4 + (index * 0.3), // Dynamically adjust delay
          }}
          className=" text-AAsecondary"
        >
          <ReactScrollLink to={section.id} spy={true} smooth={true} offset={-100} duration={200}>
            &gt; 0{index + 1}. <span className="text-white hover:cursor-pointer hover:text-AAsecondary duration-300">{section.name}</span>
          </ReactScrollLink>
        </motion.div>
      ))}

      {/* 4. Use the resume URL from config */}
      <a href={nav.resumeUrl} target={"_blank"} rel="noreferrer" onClick={() => { // <--- The correct way: assign an arrow function
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'resume_download', {
        'event_category': 'engagement',
        'event_label': 'Resume Download Button'
      });
    }
  }}>
        <motion.button
          initial={{
            y: -40,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            duration: props.finishedLoading ? 0 : 1.2,
            delay: props.finishedLoading ? 0 : 10.2,
          }}
          className="text-AAsecondary border border-spacing-2 py-2 px-3 rounded-sm border-AAsecondary hover:bg-ResumeButtonHover"
        >
          Resume
        </motion.button>
      </a>
    </div>
  );
}