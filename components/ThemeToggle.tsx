"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-md border px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
