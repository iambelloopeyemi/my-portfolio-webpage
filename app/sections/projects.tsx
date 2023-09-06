import ArrowDown from "../components/arrowDown";
import Project from "../components/project";
import Underline from "../components/underline";
import projects from "../data/projects.json";

export default function Projects() {
  return (
    <section className="bg-anti-flash-white h-fit px-5 sm:px-10 md:px-16 lg:px-20 py-12 sm:py-14">
      <header className="flex flex-col items-center gap-3 mb-16 sm:mb-20">
        <h2 className="text-2xl sm:text-4xl font-bold uppercase">projects</h2>
        <Underline />
        <h3 className="text-lg sm:text-xl font-medium sm:font-semibold text-center">
          Below are some of my previous projects
        </h3>
        <ArrowDown />
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
