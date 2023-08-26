import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Opeyemi Bello | Portfolio Webpage",
  description: "Find out why you should work with me!",
  keywords:
    "web development, web design, frontend engineer, frontend web developer, html, css, sass, tailwind css, javascript, typescript, react, redux, nextjs, git, github, rest api, graphql, technical writing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} text-night flex flex-col`}>
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
