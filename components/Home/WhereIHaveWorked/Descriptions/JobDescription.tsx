import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon"; // Adjust path if needed

export default function JobDescription({ job }: { job: any }) {
  const { title, company, duration, description } = job;

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Job Title and Company */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            {title} <span className="text-AAsecondary">@ {company}</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">{duration}</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description */}
          {description.map((item: string, index: number) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span className="text-gray-500 sm:text-sm text-xs">
                  {item}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}