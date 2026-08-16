import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { blog } from 'collections/server';
import { DocsBody } from 'fumadocs-ui/layouts/docs/page';
import { getMDXComponents } from '@/components/mdx';

function findPost(slug: string) {
  return blog.find((post) => post.info.path.replace(/\.mdx?$/, '') === slug);
}

export default async function BlogPostPage(props: PageProps<'/blog/[slug]'>) {
  const { slug } = await props.params;
  const post = findPost(slug);
  if (!post) notFound();

  const Body = post.body;

  return (
    <>
      <div
        className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.webp')" }}
      />
      <div className="fixed inset-0 z-0 pointer-events-none bg-linear-to-b from-white/50 via-white/70 to-white/95 dark:from-black/40 dark:via-black/70 dark:to-black/95" />

      <main className="relative z-10 flex flex-col flex-1 w-full min-w-0 max-w-4xl mx-auto px-6 pt-32 pb-24 sm:pt-44">
        <div className="flex flex-col w-full min-w-0 rounded-2xl p-8 sm:p-10 bg-white/60 dark:bg-white/3 border border-gray-200 dark:border-white/6 backdrop-blur-md">
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            {post.title}
          </h1>
          <p className="text-sm text-gray-500 dark:text-white/40 mt-3 mb-10">{post.date}</p>
          <DocsBody className="w-full min-w-0">
            <Body components={getMDXComponents()} />
          </DocsBody>
        </div>
      </main>
    </>
  );
}

export async function generateStaticParams() {
  return blog.map((post) => ({ slug: post.info.path.replace(/\.mdx?$/, '') }));
}

export async function generateMetadata(props: PageProps<'/blog/[slug]'>): Promise<Metadata> {
  const { slug } = await props.params;
  const post = findPost(slug);
  if (!post) notFound();

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
    },
  };
}
