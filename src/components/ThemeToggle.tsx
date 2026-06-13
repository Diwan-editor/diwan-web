"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevents hydration flicker issues
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-9 w-[220px] bg-neutral-100 dark:bg-neutral-900 rounded-lg animate-pulse" />;

  const options = [
    { key: "system", label: "System" },
    { key: "light", label: "Light" },
    { key: "dark", label: "Dark" },
  ];

  return (
    <div className="flex items-center p-1 bg-neutral-100 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-inner">
      {options.map((opt) => {
        const isActive = theme === opt.key;
        return (
          <button
            key={opt.key}
            onClick={() => setTheme(opt.key)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 cursor-pointer ${isActive
              ? "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 shadow-xs border border-neutral-200/40 dark:border-neutral-700/30"
              : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
              }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
