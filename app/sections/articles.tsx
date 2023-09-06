import ArrowDown from "../components/arrowDown";
import Underline from "../components/underline";

export default function Articles() {
  return (
    <section className="bg-anti-flash-white min-h-screen h-fit px-5 sm:px-10 md:px-16 lg:px-20 py-12 sm:py-14">
      <header className="flex flex-col items-center gap-3 sm:gap-5 mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-4xl font-bold uppercase">articles</h2>
        <Underline />
        <h3 className="text-lg sm:text-xl font-medium sm:font-semibold text-center">
          Below are some of my sample articles
        </h3>
        <ArrowDown />
      </header>
      <div className="flex justify-center text-center text-xl sm:text-2xl font-semibold sm:font-bold uppercase">
        Stay tuned for upcoming articles that will be added to this section
      </div>
    </section>
  );
}
