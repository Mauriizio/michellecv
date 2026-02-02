"use client";

import { useTheme } from "next-themes";
import { useMemo } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = useMemo(() => resolvedTheme === "dark", [resolvedTheme]);

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full border border-[var(--border)] bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-white dark:bg-slate-900/80 dark:text-slate-100"
      aria-label="Toggle dark mode"
      suppressHydrationWarning
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
