import Bio from "../components/bio";
import SkillTag from "../components/skillTag";
import Underline from "../components/underline";

export default function About() {
  const skills: string[] = [
    "HTML",
    "CSS",
    "SASS",
    "Tailwindcss",
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "Nextjs",
    "Rest API",
    "GraphQL",
    "Git",
    "GitHub",
    "CLI",
    "Figma",
  ];

  return (
    <section
      id="about"
      className="bg-seasalt h-fit px-5 sm:px-10 md:px-16 lg:px-20 py-12 sm:py-14"
    >
      <header className="flex flex-col items-center gap-3 mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-4xl font-bold uppercase">about me</h2>
        <Underline />
      </header>
      <div className="grid sm:grid-cols-2 gap-14 sm:gap-10 mb-16">
        <div>
          <h3 className="text-2xl text-center font-bold mb-6 sm:mb-8">
            Get to know me!
          </h3>
          <Bio />
        </div>
        <div>
          <h3 className="text-2xl text-center font-bold mb-6 sm:mb-8">
            My Skills
          </h3>
          <ul className="flex justify-center sm:justify-start flex-wrap gap-4">
            {skills.map((skill) => (
              <li key={skill}>
                <SkillTag title={skill} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
