"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "../components/sidebar";

export default function Hero(): JSX.Element {
  const [h1Text, setH1Text] = useState<string>("");
  const [charIndex, setCharIndex] = useState<number>(0);
  const [showH2Text, setShowH2Text] = useState<boolean>(false);

  const originalH1Text: string = "Hey, I'm Opeyemi Bello";

  useEffect(() => {
    const h1IntervalId: NodeJS.Timeout = setInterval(() => {
      if (charIndex < originalH1Text.length) {
        setH1Text((prevText) => prevText + originalH1Text.charAt(charIndex));
        setCharIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(h1IntervalId);
      }
    }, 100);

    const h2TimeoutId: NodeJS.Timeout = setTimeout(() => {
      setShowH2Text(true);
    }, 500);

    return () => {
      clearInterval(h1IntervalId);
      clearTimeout(h2TimeoutId);
    };
  }, [charIndex]);

  return (
    <section className="bg-hero-pattern h-screen px-2 flex flex-col items-center justify-center">
      <Sidebar />
      <article className="text-center grid gap-20">
        <h1 className="text-3xl sm:text-5xl font-extrabold">{h1Text}</h1>
        {showH2Text && (
          <h2 className="text-2xl sm:text-3xl font-semibold sm:font-bold">
            A Frontend Web Developer
          </h2>
        )}
        <div className="flex justify-center">
          <Link
            href={`/about`}
            className="px-10 sm:px-12 py-2 sm:py-3 bg-violet-blue rounded uppercase font-medium sm:font-bold text-white animate-bounce"
          >
            more about me
          </Link>
        </div>
      </article>
    </section>
  );
}
