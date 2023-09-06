import type { Metadata } from "next";
import About from "../sections/about";

export const metadata: Metadata = {
  title: "About | Opeyemi Bello",
  description: "Find out why you should work with me!",
  keywords:
    "web development, web design, frontend engineer, frontend web developer, html, css, sass, tailwind css, javascript, typescript, react, redux, nextjs, git, github, rest api, graphql, technical writing",
};

export default function AboutPage() {
  return (
    <>
      <About />
    </>
  );
}
