"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function BioCopy(): JSX.Element {
  const [currentParagraph, setCurrentParagraph] = useState<number>(0);
  const [showButton, setShowButton] = useState<boolean>(false);

  // Define the paragraphs as JSX elements
  const paragraphs = [
    <p key={0}>
      I&apos;m a Frontend Web Developer committed to crafting functional and
      interactive web applications that offer a world-class user experience.
      Check out some of my work in the Projects page.
    </p>,
    <p key={1}>
      I also enjoy writing articles and sharing content related to what
      I&apos;ve learned, aiming to assist others within the Dev Community. Feel
      free to explore some of my work in the Articles page.
    </p>,
    <p key={2}>
      If you&apos;re interested in exploring potential opportunities or
      discussing collaboration, please don&apos;t hesitate to Contact me.
      I&apos;m looking forward to connecting with you!
    </p>,
  ];

  useEffect(() => {
    if (currentParagraph < paragraphs.length) {
      const timeoutId: NodeJS.Timeout = setTimeout(() => {
        setCurrentParagraph((prevIndex) => prevIndex + 1);
      }, 2000); // Adjust the time to control how long each paragraph is displayed

      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      // All paragraphs have been displayed, show the button
      setShowButton(true);
    }
  }, [currentParagraph]);

  return (
    <>
      <article className="text-night text-justify sm:text-lg leading-6 grid gap-4 mb-6 sm:mb-8">
        {paragraphs.slice(0, currentParagraph)}
      </article>
      {showButton && (
        <div className="flex justify-center">
          <Link
            href={`https://bit.ly/iambelloopeyemiResume`}
            target="_blank"
            className="px-10 sm:px-12 py-2 sm:py-3 bg-violet-blue rounded uppercase font-bold text-white animate-bounce"
          >
            download my cv
          </Link>
        </div>
      )}
    </>
  );
}
