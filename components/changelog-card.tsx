import Link from 'next/link';

export function ChangelogCard({
  version,
  date,
  description,
  href,
}: {
  version: string;
  date: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded-2xl p-6 bg-white/60 dark:bg-white/3 border border-gray-200 dark:border-white/6 backdrop-blur-md transition-all duration-300 hover:bg-white/80 dark:hover:bg-white/5 hover:border-gray-300 dark:hover:border-white/15"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="inline-flex items-center rounded-full bg-[#007D9C]/10 dark:bg-[#00ADD8]/15 text-[#005A73] dark:text-[#00ADD8] text-xs font-semibold px-3 py-1 tracking-wide">
          {version}
        </span>
        <span className="text-xs text-gray-500 dark:text-white/40">{date}</span>
      </div>
      <p className="text-sm leading-relaxed text-gray-600 dark:text-white/50">{description}</p>
    </Link>
  );
}
