'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// Client component because "Go back" needs router.back(), which only exists
// on the client. The rest could be static, but splitting the page in two to
// save that would cost more than it saves.
export default function NotFound() {
  const router = useRouter();

  // history.length is only readable in the browser, and reading it during
  // render would desync server and client markup. Resolving it in an effect
  // keeps the first paint identical on both, then hides the back button if
  // this tab has nowhere to go back to (a pasted link, a fresh tab).
  const [canGoBack, setCanGoBack] = useState(false);
  useEffect(() => {
    setCanGoBack(window.history.length > 1);
  }, []);

  return (
    <>
      {/* Same background treatment as the home page. */}
      <div
        className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.webp')" }}
      />
      <div className="fixed inset-0 z-0 pointer-events-none bg-linear-to-b from-white/50 via-white/70 to-white/95 dark:from-black/40 dark:via-black/70 dark:to-black/95" />

      <main className="relative z-10 flex-1 flex items-center justify-center px-5 py-16 sm:px-6 sm:py-24">
        <div className="w-full max-w-lg rounded-3xl border border-gray-200 dark:border-white/6 bg-white/60 dark:bg-white/3 backdrop-blur-xl p-7 sm:p-10 text-center">
          <span className="inline-flex items-center rounded-full border border-gray-300 dark:border-white/15 bg-white/50 dark:bg-transparent px-4 py-1.5 text-xs font-medium text-gray-600 dark:text-white/60">
            404 — Page not found
          </span>

          <h1 className="mt-6 text-3xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-gray-900 dark:text-white break-all">
            go-auth
          </h1>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-white/50">
            This page doesn&apos;t exist, or it moved. The docs are the best place to
            pick the thread back up.
          </p>

          {/* Stacked and full-width on phones, inline once there's room. */}
          <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-3">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center rounded-full bg-gray-900 dark:bg-white text-white dark:text-black px-7 py-2.5 text-[15px] font-medium transition-all hover:opacity-90"
            >
              Go to docs
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-white/15 bg-white/50 dark:bg-transparent text-gray-700 dark:text-white/70 px-7 py-2.5 text-[15px] font-medium transition-all hover:border-gray-400 dark:hover:border-white/30"
            >
              Home
            </Link>
            {canGoBack && (
              <button
                type="button"
                onClick={() => router.back()}
                className="inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-white/15 bg-white/50 dark:bg-transparent text-gray-700 dark:text-white/70 px-7 py-2.5 text-[15px] font-medium transition-all hover:border-gray-400 dark:hover:border-white/30"
              >
                Go back
              </button>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
