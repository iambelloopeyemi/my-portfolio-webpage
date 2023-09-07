import ArrowDown from "../components/arrowDown";
// import Bio from "../components/bio";
import BioCopy from "../components/bioCopy";
import SkillTag from "../components/skillTag";
import Underline from "../components/underline";
import { skills } from "../data/skills";

export default function About() {
  return (
    <section className="bg-anti-flash-white h-fit py-12 sm:py-14">
      <header className="flex flex-col items-center gap-3 sm:gap-5 mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-4xl font-bold uppercase">about</h2>
        <Underline />
        <h3 className="text-lg sm:text-xl font-medium sm:font-semibold text-center">
          Get to know me!
        </h3>
        <ArrowDown />
      </header>
      <div className="bg-seasalt px-5 py-10 flex flex-col items-center gap-14 sm:gap-10 mb-20">
        <div className="flex flex-col items-center sm:w-2/3">
          <h3 className="text-2xl text-center font-bold mb-6 sm:mb-8">
            About Me
          </h3>
          <BioCopy />
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-2xl text-center font-bold mb-6 sm:mb-8">
            My Skills
          </h3>
          <ul className="flex justify-center items-center flex-wrap gap-4 sm:w-2/3">
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
