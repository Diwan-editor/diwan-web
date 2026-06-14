import { Layout } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Metadata } from "next";
import DiwanNavbar from "@/components/navbar";
import DiwanFooter from "@/components/footer";
import DiwanBanner from "@/components/banner";

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
          banner={<DiwanBanner />}
          navbar={<DiwanNavbar />}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/Diwan-editor/Diwan"
          footer={<DiwanFooter />}
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
