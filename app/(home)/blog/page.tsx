import Link from 'next/link';
import type { Metadata } from 'next';
import { blog } from 'collections/server';
import { appName } from '@/lib/shared';

export const metadata: Metadata = {
  title: 'Blog',
  description: `Updates and announcements from the ${appName} project.`,
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogIndexPage() {
  const posts = [...blog].sort((a, b) => (a.date > b.date ? -1 : 1));

  return (
    <>
      <div
        className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.webp')" }}
      />
      <div className="fixed inset-0 z-0 pointer-events-none bg-linear-to-b from-white/50 via-white/70 to-white/95 dark:from-black/40 dark:via-black/70 dark:to-black/95" />

      <main className="relative z-10 flex-1 max-w-3xl mx-auto px-6 pt-32 pb-24 sm:pt-44">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-12">
          Blog
        </h1>
        <div className="grid gap-4">
          {posts.map((post) => {
            const slug = post.info.path.replace(/\.mdx?$/, '');

            return (
              <Link
                key={slug}
                href={`/blog/${slug}`}
                className="block rounded-2xl p-6 bg-white/60 dark:bg-white/3 border border-gray-200 dark:border-white/6 backdrop-blur-md transition-all duration-300 hover:bg-white/80 dark:hover:bg-white/5 hover:border-gray-300 dark:hover:border-white/15"
              >
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-base font-semibold text-[#005A73] dark:text-[#00ADD8]">
                    {post.title}
                  </h2>
                  <span className="text-xs text-gray-500 dark:text-white/40">{post.date}</span>
                </div>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-white/50">
                  {post.description}
                </p>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
}
