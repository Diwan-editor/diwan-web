// src/app/page.tsx
import Link from "next/link";

export default function LandingPage() {
  return (
    /* This outer div now completely controls the canvas states independently */
    <div className="w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
      <main className="max-w-6xl mx-auto flex flex-col items-center justify-center px-4 py-24 text-center">
        {/* Title */}
        <h1 className="text-8xl md:text-9xl font-black tracking-tighter mb-4 text-neutral-900 dark:text-white">
          Diwan
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl">
          A Rust terminal editor built for speed, built to last.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/docs/getting-started"
            className="px-8 py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-500 active:scale-98 transition-all duration-200 shadow-md shadow-orange-600/10"
          >
            Get Started
          </Link>
          <Link
            href="https://github.com/Diwan-editor/Diwan"
            className="px-8 py-3 border border-neutral-300 dark:border-neutral-800 hover:border-orange-600 dark:hover:border-orange-500 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200 font-medium rounded-lg transition-colors duration-200"
          >
            GitHub
          </Link>
        </div>

        {/* Terminal Demo Window */}
        <div className="mt-20 w-full max-w-4xl aspect-video bg-neutral-900 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden shadow-2xl flex flex-col">
          {/* Window Header */}
          <div className="flex items-center px-4 py-3 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900/60">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="ml-4 text-xs text-neutral-500 dark:text-neutral-400 font-mono tracking-wide">
              diwan — src/main.rs
            </div>
          </div>

          {/* Code Body - Remains an immersive terminal aesthetic across both modes */}
          <div className="p-6 text-left font-mono text-sm leading-relaxed bg-[#0F0F1A] text-neutral-300 grow">
            <div className="flex gap-4">
              <span className="text-neutral-700 select-none w-4 text-right">
                1
              </span>
              <span>
                <span className="text-pink-500 font-medium">fn</span>{" "}
                <span className="text-emerald-400">main</span>() &#123;
              </span>
            </div>
            <div className="flex gap-4">
              <span className="text-neutral-700 select-none w-4 text-right">
                2
              </span>
              <span className="ml-4 text-amber-200">
                println!(
                <span className="text-[#E05C28]">
                  &quot;Hello, Diwan!&quot;
                </span>
                );
              </span>
            </div>
            <div className="flex gap-4">
              <span className="text-neutral-700 select-none w-4 text-right">
                3
              </span>
              <span className="text-neutral-400">&#125;</span>
            </div>
            <div className="mt-4 flex gap-4">
              <span className="text-neutral-700 select-none w-4 text-right">
                4
              </span>
              <span className="bg-neutral-700 text-white animate-pulse px-1 w-2">
                {" "}
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
