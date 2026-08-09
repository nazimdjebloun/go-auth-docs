import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { appName, siteDescription, siteUrl } from '@/lib/shared';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${appName} — Self-hosted authentication for Go`,
    template: `%s | ${appName}`,
  },
  description: siteDescription,
  keywords: [
    'go-auth',
    'Go authentication library',
    'Golang OAuth',
    'self-hosted authentication',
    'session management Go',
    'Go admin panel',
    'CSRF protection Go',
    'rate limiting Go',
  ],
  authors: [{ name: 'nazimdjebloun' }],
  creator: 'nazimdjebloun',
  openGraph: {
    type: 'website',
    siteName: appName,
    title: `${appName} — Self-hosted authentication for Go`,
    description: siteDescription,
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${appName} — Self-hosted authentication for Go`,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen dark:bg-[#050505]">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
