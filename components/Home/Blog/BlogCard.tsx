import React from "react";

interface BlogCardProps {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    slug: string;
    coverImage?: string;
    tags?: string[];
}

export default function BlogCard({
    title,
    excerpt,
    date,
    readTime,
    slug,
    coverImage,
    tags = [],
}: BlogCardProps) {
    return (
        <a
            href={`/blog/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-AAtertiary rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
        >
            {coverImage && (
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={coverImage}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
            )}
            <div className="p-6 space-y-3">
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                    <span>{date}</span>
                    <span>•</span>
                    <span>{readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-200 group-hover:text-AAsecondary transition-colors">
                    {title}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-2">{excerpt}</p>
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="text-xs px-2 py-1 bg-AAprimary text-AAsecondary rounded"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </a>
    );
}
