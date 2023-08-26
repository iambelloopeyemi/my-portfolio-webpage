import Underline from "../components/underline";

export default function Articles() {
  return (
    <section
      id="articles"
      className="bg-seasalt h-fit px-5 sm:px-10 md:px-16 lg:px-20 py-12 sm:py-14"
    >
      <header className="flex flex-col items-center gap-3 sm:gap-5 mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-4xl font-bold uppercase">articles</h2>
        <Underline />
        <p className="sm:text-xl font-medium text-center">
          Stay tuned for upcoming articles that will be added to this section
        </p>
      </header>
    </section>
  );
}
