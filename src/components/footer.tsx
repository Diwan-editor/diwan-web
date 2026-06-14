import { Footer } from "nextra-theme-docs";
import { JSX } from "react/jsx-runtime";
import { ThemeToggle } from "./ThemeToggle";


export default function DiwanFooter(): JSX.Element {
  return (
    <Footer>
      <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-6xl mx-auto py-4 gap-4">
        <div className="text-left">
          <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
            MIT {new Date().getFullYear()} © Diwan Editor.
          </p>
          <p className="text-xs text-neutral-500 mt-0.5">
            Built with Rust, powered by Diwan.
          </p>
        </div>
        <ThemeToggle />
      </div>
    </Footer>

  );
}
