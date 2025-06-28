import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";

// 1. Import config data
import config from '../../../config'; 
import JobDescription from "./Descriptions/JobDescription"; // Corrected import path

export default function WhereIHaveWorked() {
  const { personalInfo } = config; // Access personalInfo from config

  // Initialize DescriptionJob with the first experience item's title
  const [DescriptionJob, setDescriptionJob] = React.useState(personalInfo.experience[0]?.title || "");

  const GetDescription = () => {
    const selectedJob = personalInfo.experience.find(job => job.title === DescriptionJob);
    if (selectedJob) {
      return <JobDescription job={selectedJob} />;
    }
    return null; // Or a loading/empty state if no job is selected
  };

  return (
    <div data-aos="fade-up" className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary">
      {/* // ? Title "Where I've Worked" */}
      <section className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"} />
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 02.</span>
        </div>

        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Where I&apos;ve Worked
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      {/* // ? Where I've Worked Content section */}
      <section
        className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0
      justify-center md:justify-center items-center md:items-start "
      >
        {/* // ? Left side of Where I've Worked, contains the bar and name of companies */}
        <CompaniesBar setDescriptionJob={setDescriptionJob} personalInfo={personalInfo} /> {/* Pass personalInfo */}
        {/* // ? Description for The job */}
        {GetDescription()}
      </section>
    </div>
  );
}

const CompaniesBar = (props: { setDescriptionJob: Function; personalInfo: any }) => {
  const [barPosition, setBarPosition] = React.useState<number>(0); // Start at 0 for the first company
  const [companyNameBackgroundColorGreen, setCompanyNameBackgroundColorGreen] = React.useState<boolean[]>(
    Array(props.personalInfo.experience.length).fill(false)
  );

  React.useEffect(() => {
    // Set the first company to be active by default
    if (props.personalInfo.experience.length > 0) {
      const initialActiveState = Array(props.personalInfo.experience.length).fill(false);
      initialActiveState[0] = true;
      setCompanyNameBackgroundColorGreen(initialActiveState);
      // Initialize the parent state with the title of the first job
      props.setDescriptionJob(props.personalInfo.experience[0].title);
    }
  }, [props.personalInfo.experience]); // Re-run if experience data changes

  const handleButtonClick = (index: number, jobTitle: string) => {
    setBarPosition(index * 43); // Update bar position
    props.setDescriptionJob(jobTitle); // Update selected job title
    const newActiveState = Array(props.personalInfo.experience.length).fill(false);
    newActiveState[index] = true;
    setCompanyNameBackgroundColorGreen(newActiveState); // Update active tab state
  };

  const CompanyButton = (buttonProps: {
    index: number;
    companyName: string;
    jobTitle: string;
  }) => {
    return (
      <button
        onClick={() => handleButtonClick(buttonProps.index, buttonProps.jobTitle)}
        className={`flex-none sm:text-sm text-xs text-center md:text-left hover:text-AAsecondary
             hover:bg-ResumeButtonHover rounded font-mono
             py-3 md:pl-6 md:px-4 md:w-44 w-32 duration-500
             ${
               companyNameBackgroundColorGreen[buttonProps.index]
                 ? "bg-ResumeButtonHover text-AAsecondary"
                 : "text-gray-500"
             }`}
      >
        {buttonProps.companyName}
      </button>
    );
  };

  return (
    <div
      id="WhereIhaveWorkedSection"
      className=" flex flex-col md:flex-row  w-screen lg:w-auto
      overflow-auto scrollbar-hide md:overflow-hidden pb-4 md:pb-0 justify-start
       sm:justify-center items-start sm:items-center"
    >
      {/* // ? left bar Holder */}
      <div
        className=" hidden md:block bg-gray-500 relative h-0.5 w-34 md:h-[352px] translate-y-1 md:w-0.5
        rounded md:order-1 order-2  "
      >
        {/* // ? animated left bar */}
        <motion.div
          animate={{ y: barPosition }} // Use 'y' for vertical animation
          className={`absolute w-10 h-0.5 md:w-0.5 md:h-12 rounded bg-AAsecondary `}
        ></motion.div>
      </div>
      {/* // ? Companies name as buttons - Dynamic from config */}
      <div className="flex flex-col md:order-2 order-1 space-y-1 pl-8 md:pl-0 ">
        <div className="flex flex-row md:flex-col">
          {props.personalInfo.experience.map((job: any, index: number) => (
            <CompanyButton
              key={job.title} // Use the job title as the unique key
              index={index}
              companyName={job.company} // You can still display the company name if you want
              jobTitle={job.title} // Pass the unique job title to set the state
            />
          ))}
        </div>
        <div className="block md:hidden h-0.5 rounded bg-gray-500">
          <motion.div animate={{ x: barPosition }} className="w-[128px] h-0.5 rounded bg-AAsecondary"></motion.div>
        </div>
      </div>
    </div>
  );
};
