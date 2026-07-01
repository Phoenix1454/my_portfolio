import React, { useState } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import config from '../../../config';

export default function TechLife() {
  const { techLife } = config;
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(techLife.flatMap(post => post.tags)));
  const filtered = activeTag ? techLife.filter(p => p.tags.includes(activeTag)) : techLife;
  const sorted = [...filtered].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div
      id="blogSection"
      className="flex flex-col items-center py-24 bg-AAprimary w-full
        2xl:px-72 lg:px-24 md:px-16 sm:px-16 px-4 space-y-12"
    >
      {/* Title */}
      <div data-aos="fade-up" className="flex flex-row items-center w-full">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary" />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm sm:text-xl"> 04.</span>
          <span className="font-bold tracking-wider text-gray-200 text-lg md:text-2xl opacity-85">
            {" "}Tech Life
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <p data-aos="fade-up" className="text-gray-400 text-sm md:text-base max-w-2xl w-full">
        Life outside the terminal — events, adventures, and the people that make it worth it.
      </p>

      {/* Tag filters */}
      <div data-aos="fade-up" className="flex flex-wrap gap-2 w-full">
        <button
          onClick={() => setActiveTag(null)}
          className={`text-xs px-3 py-1 rounded-full border transition-colors duration-200 font-mono
            ${!activeTag
              ? 'border-AAsecondary text-AAsecondary bg-AAsecondary/10'
              : 'border-gray-600 text-gray-500 hover:border-AAsecondary hover:text-AAsecondary'
            }`}
        >
          All
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={`text-xs px-3 py-1 rounded-full border transition-colors duration-200 font-mono
              ${activeTag === tag
                ? 'border-AAsecondary text-AAsecondary bg-AAsecondary/10'
                : 'border-gray-600 text-gray-500 hover:border-AAsecondary hover:text-AAsecondary'
              }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Photo grid */}
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
      >
        {sorted.map((post, index) => (
          <div
            key={post.id}
            className="group bg-AAtertiary rounded-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Photo */}
            <div className="relative h-64 overflow-hidden bg-gray-800">
              {post.image ? (
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <span className="text-gray-500 text-sm font-mono">photo coming soon</span>
                </div>
              )}
              {/* Date badge */}
              <div className="absolute top-3 left-3 bg-AAprimary/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-AAsecondary font-mono">
                {post.date}
              </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
              <div className="flex items-center space-x-1 text-xs text-gray-500 font-mono">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{post.location}</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{post.caption}</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 bg-AAprimary text-AAsecondary rounded font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
