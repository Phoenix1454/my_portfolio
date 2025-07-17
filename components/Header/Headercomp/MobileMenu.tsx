import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import { Link } from "react-scroll";
import config from '../../../config'; // 1. Import config

const MobileMenu = props => {
  const { nav } = config; // 2. Destructure the navigation data

  const closeMenu = () => {
    props.setRotate(!props.rotate);
    props.setShowElement(!props.ShowElement);
  };
  
  return (
    <>
      <motion.div
        initial={{ x: "100%" }}
        animate={props.rotate ? { x: "0" } : { x: "100%" }}
        transition={{ x: { duration: 0.4 } }}
        className="w-full fixed h-screen flex md:hidden duration-300 z-20"
      >
        <div
          onClick={() => closeMenu()}
          className="w-1/4 h-full backdrop-blur-sm bg-MobileNavColor/30 hover:cursor-pointer"
        ></div>
        <div
          className="w-3/4 h-full bg-MobileNavBarColor flex flex-col 
        justify-center items-center space-y-8 font-sans"
        >
          {/* 3. Dynamically map over the sections from config.ts */}
          {nav.sections.map((section, index) => (
            <Link
              key={section.id}
              to={section.id}
              spy={true}
              smooth={true}
              offset={-50} // Use a consistent offset or add it to config
              duration={200}
              onClick={() => closeMenu()}
              className="flex flex-col text-center space-y-2"
            >
              <span className="text-AAsecondary text-xs font-mono">0{index + 1}.</span>
              <span
                className="text-white font-Text2 text-sm sm:text-base
               hover:text-AAsecondary hover:cursor-pointer duration-300"
              >
                {section.name} {/* Use dynamic section name */}
              </span>
            </Link>
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
            <button
              className="rounded border font-Text2  border-AAsecondary
             hover:bg-ResumeButtonHover py-2 sm:py-4 px-5 sm:px-10 text-xs text-AAsecondary"
            >
              Resume
            </button>
          </a>
        </div>
      </motion.div>
    </>
  );
};
export default MobileMenu;