import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import config from '../../../config';

export default function Blog() {
  const { blog } = config as any;
  if (!blog || blog.length === 0) return null;

  return (
    <div
      id="blogSection"
      data-aos="fade-up"
      className="flex flex-col space-y-8 bg-AAprimary w-full
      2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-16 px-4"
    >
      {/* Title */}
      <div className="flex flex-row items-center">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary" />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm sm:text-xl"> 04.</span>
          <span className="font-bold tracking-wider text-gray-200 text-lg md:text-2xl opacity-85">
            {" "}Writing
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blog.map((post: any, index: number) => (
          <a
            key={index}
            href={`/blog/${post.slug}`}
            className="group flex flex-col space-y-3 bg-AAtertiary rounded-lg p-6 border border-gray-700 hover:border-AAsecondary transition-colors duration-300"
          >
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string, i: number) => (
                <span key={i} className="text-xs px-2 py-1 bg-AAsecondary/10 text-AAsecondary rounded font-mono">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-gray-200 font-bold text-base group-hover:text-AAsecondary transition-colors leading-snug">
              {post.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
            <div className="flex items-center space-x-2 text-xs text-gray-500 font-mono pt-1">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
