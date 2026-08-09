export const appName = 'go-auth';
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

// Set NEXT_PUBLIC_SITE_URL in your deployment environment to the real
// production domain — this feeds metadataBase, the sitemap, and robots.txt.
// Falls back to localhost so local builds still work without it.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const siteDescription =
  'A self-hosted authentication and session library for Go — email/password, OAuth, organizations, and an admin panel, with CSRF protection and rate limiting on by default.';

export const gitConfig = {
  user: 'nazimdjebloun',
  repo: 'go-auth',
  branch: 'main',
};
