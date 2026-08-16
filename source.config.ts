import { defineCollections, defineConfig, defineDocs } from 'fumadocs-mdx/config';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import { z } from 'zod';

// You can customize Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    // `date` is only used by content/docs/changelog/*.mdx (release notes),
    // to sort/list entries on the changelog index page — every other doc
    // page just leaves it unset.
    schema: pageSchema.extend({
      date: z.string().optional(),
    }),
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// One file per post, its own route tree at /blog (app/(home)/blog).
export const blog = defineCollections({
  type: 'doc',
  dir: 'content/blog',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
  }),
});

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});
