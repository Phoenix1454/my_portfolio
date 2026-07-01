import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import ArrowIcon from '../../components/Icons/ArrowIcon';
import config from '../../config';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

export default function BlogPost({ post }: { post: BlogPost }) {
  if (!post) return null;

  const paragraphs = post.content.split('\n\n');

  return (
    <>
      <Head>
        <title>{post.title} — Amit Kumar</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <div className="min-h-screen bg-AAprimary text-gray-300">
        {/* Nav */}
        <div className="px-6 py-6 flex items-center space-x-3">
          <Link href="/" className="text-AAsecondary font-mono text-sm hover:underline">
            ← home
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-500 font-mono text-sm">blog</span>
        </div>

        {/* Article */}
        <article className="max-w-2xl mx-auto px-6 pb-32">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag, i) => (
              <span key={i} className="text-xs px-2 py-1 bg-AAsecondary/10 text-AAsecondary rounded font-mono">
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-100 leading-tight mb-4">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center space-x-3 text-sm text-gray-500 mb-12 font-mono">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          {/* Content */}
          <div className="space-y-6 text-gray-300 leading-relaxed">
            {paragraphs.map((para, i) => {
              if (para.startsWith('## ')) {
                return (
                  <h2 key={i} className="text-xl font-bold text-gray-100 mt-10 mb-2">
                    {para.replace('## ', '')}
                  </h2>
                );
              }
              if (para.startsWith('```')) {
                const code = para.replace(/```\w*\n?/, '').replace(/```$/, '');
                return (
                  <pre key={i} className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm text-AAsecondary font-mono border border-gray-700">
                    <code>{code}</code>
                  </pre>
                );
              }
              // Inline markdown links
              const rendered = para.replace(
                /\[([^\]]+)\]\(([^)]+)\)/g,
                '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-AAsecondary hover:underline">$1</a>'
              );
              return (
                <p key={i} className="text-gray-400" dangerouslySetInnerHTML={{ __html: rendered }} />
              );
            })}
          </div>
        </article>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { blog } = config as any;
  const paths = (blog || []).map((post: BlogPost) => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { blog } = config as any;
  const post = (blog || []).find((p: BlogPost) => p.slug === params?.slug) || null;
  return { props: { post } };
};
