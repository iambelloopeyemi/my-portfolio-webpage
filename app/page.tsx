import About from "./sections/about";
import Articles from "./sections/articles";
import Contact from "./sections/contacts";
import Hero from "./sections/hero";
import Projects from "./sections/projects";

export default function Sections() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Articles />
      <Contact />
    </>
  );
}
