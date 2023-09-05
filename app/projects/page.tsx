import { Metadata } from "next";
import Project from "../components/project";
import Underline from "../components/underline";
import projects from "../data/projectDetails.json";

export const metadata: Metadata = {
  title: "Projects | Opeyemi Bello",
  description: "Find out why you should work with me!",
  keywords:
    "web development, web design, frontend engineer, frontend web developer, html, css, sass, tailwind css, javascript, typescript, react, redux, nextjs, git, github, rest api, graphql, technical writing",
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-anti-flash-white h-fit px-5 sm:px-10 md:px-16 lg:px-20 py-12 sm:py-14"
    >
      <header className="flex flex-col items-center gap-3 mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-4xl font-bold uppercase">projects</h2>
        <Underline />
      </header>
      <ul className="flex flex-col items-center">
        {projects.map(
          ({ id, title, article, thumbnail, alt, hostedUrl, githubUrl }) => (
            <li key={id}>
              <Project
                title={title}
                article={article}
                thumbnail={thumbnail}
                alt={alt}
                view="VIEW"
                hostedUrl={hostedUrl}
                github="GITHUB"
                githubUrl={githubUrl}
              />
            </li>
          )
        )}
      </ul>
    </section>
  );
}
