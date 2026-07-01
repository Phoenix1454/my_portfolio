import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import config from '../../../config';

export default function OpenSource() {
  const { openSource } = config as any;

  if (!openSource || openSource.length === 0) return null;

  return (
    <div
      id="openSourceSection"
      data-aos="fade-up"
      className="flex flex-col space-y-8 bg-AAprimary w-full
      2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-16 px-4"
    >
      {/* Title */}
      <div className="flex flex-row items-center">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary" />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm sm:text-xl"> 03.5.</span>
          <span className="font-bold tracking-wider text-gray-200 text-lg md:text-2xl opacity-85">
            {" "}Open Source
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {openSource.map((item: any, index: number) => (
          <a
            key={index}
            href={item.prUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col space-y-3 bg-AAtertiary rounded-lg p-6 border border-gray-700 hover:border-AAsecondary transition-colors duration-300"
          >
            <div className="flex flex-row items-center justify-between">
              <span className="text-AAsecondary font-mono text-xs">{item.repo}</span>
              <span className={`text-xs px-2 py-1 rounded font-mono ${
                item.type === 'Bug Fix' ? 'text-red-400 bg-red-400/10' :
                item.type === 'Tests' ? 'text-blue-400 bg-blue-400/10' :
                'text-green-400 bg-green-400/10'
              }`}>
                {item.type}
              </span>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <span className="text-AAsecondary font-mono text-sm">{item.pr}</span>
              <span className="text-gray-200 font-semibold text-sm group-hover:text-AAsecondary transition-colors">
                {item.title}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.description}
            </p>
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${item.status === 'merged' ? 'bg-purple-400' : 'bg-green-400'}`}></div>
              <span className="text-xs text-gray-500 capitalize">{item.status}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
