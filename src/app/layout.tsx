import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { ThemeToggle } from "@/components/ThemeToggle";
import "nextra-theme-docs/style.css";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Metadata } from "next";
import Image from "next/image";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diwan — The Rust Terminal Editor",
  description: "A Rust terminal editor built for speed, built to last.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navbar = (
    <Navbar
      logo={
        <div className="flex items-center gap-2">
          <Image src="/dicon.svg" alt="Diwan" width={40} height={40} />
          <span className="font-bold text-xl tracking-tighter">Diwan</span>
        </div>
      }
      projectLink="https://github.com/Diwan-editor/Diwan"
      align="right"
    />
  );
  const footer = (
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
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Head
        color={{
          hue: 24,
          saturation: 90,
          lightness: { dark: 60, light: 50 },
        }}
      />
      <body className="h-full font-sans antialiased">
        <Layout
          banner={
            <Banner storageKey="diwan-v1">Diwan v1.0 is coming soon! 🚀</Banner>
          }
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/Diwan-editor/Diwan"
          footer={footer}
          nextThemes={{
            defaultTheme: "system",
            attribute: "class",
            storageKey: "diwan-theme",
          }}
          darkMode={false} // Hides Nextra's original duplicate dropdown element cleanly
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
