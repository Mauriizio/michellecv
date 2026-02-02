"use client";

import { useTheme } from "next-themes";
import { useMemo } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = useMemo(() => resolvedTheme === "dark", [resolvedTheme]);

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-9 w-14 items-center rounded-full border border-border bg-surface shadow-sm transition hover:border-primary/60"
      aria-label="Toggle color theme"
      suppressHydrationWarning
    >
      <span className="sr-only">Toggle theme</span>
      <span
        className={`absolute left-1 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-background text-primary shadow transition ${
          isDark ? "translate-x-5" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="currentColor"
          >
            <path d="M12 3a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1Zm0 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7-5a1 1 0 0 1 1-1h1.5a1 1 0 1 1 0 2H20a1 1 0 0 1-1-1ZM3 12a1 1 0 0 1 1-1H5.5a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm14.95-6.95a1 1 0 0 1 1.42 0l1.06 1.06a1 1 0 1 1-1.42 1.42l-1.06-1.06a1 1 0 0 1 0-1.42ZM3.57 20.43a1 1 0 0 1 0-1.42l1.06-1.06a1 1 0 1 1 1.42 1.42l-1.06 1.06a1 1 0 0 1-1.42 0Zm16.86 0a1 1 0 0 1-1.42 0l-1.06-1.06a1 1 0 0 1 1.42-1.42l1.06 1.06a1 1 0 0 1 0 1.42ZM6.05 5.05a1 1 0 0 1 0 1.42L5 7.53A1 1 0 1 1 3.58 6.1l1.06-1.06a1 1 0 0 1 1.41 0Z" />
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="currentColor"
          >
            <path d="M21 15.5A9 9 0 1 1 8.5 3 7 7 0 0 0 21 15.5Z" />
          </svg>
        )}
      </span>
    </button>
  );
}
