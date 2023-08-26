import Link from "next/link";
import Sidebar from "../components/sidebar";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-hero-pattern h-screen px-2 flex flex-col items-center justify-center"
    >
      <Sidebar />
      <article className="text-center grid gap-20">
        <h1 className="text-3xl sm:text-5xl font-extrabold">
          Hey, I&apos;m Opeyemi Bello
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold sm:font-bold">
          Frontend Web Developer
        </h2>
        <div className="flex justify-center">
          <Link
            href={`https://bit.ly/iambelloopeyemiResume`}
            target="_blank"
            className="px-12 py-3 bg-violet-blue rounded font-bold text-white hover:scale-105"
            download
          >
            DOWNLOAD CV
          </Link>
        </div>
      </article>
    </section>
  );
}
