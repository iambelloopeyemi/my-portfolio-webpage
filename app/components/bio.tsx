"use client";
import { useState, useEffect, useRef } from "react";

export default function Bio(): JSX.Element {
  const [text, setText] = useState<string[]>(["", "", ""]);
  const [charIndex, setCharIndex] = useState<number>(0);

  const originalTexts: string[] = [
    "I'm a Frontend Web Developer committed to crafting functional and interactive web applications that offer a world-class user experience. Check out some of my work in the Projects page.",
    "I also enjoy writing articles and sharing content related to what I've learned, aiming to assist others within the Dev Community. Feel free to explore some of my work in the Articles page.",
    "If you're interested in exploring potential opportunities or discussing collaboration, please don't hesitate to Contact me. I'm looking forward to connecting with you!",
  ];

  const originalTextsRef = useRef(originalTexts);

  useEffect(() => {
    const intervalId: NodeJS.Timeout = setInterval(() => {
      if (charIndex < originalTextsRef.current[0].length) {
        setText((prevText) => [
          prevText[0] + originalTextsRef.current[0].charAt(charIndex),
          prevText[1],
          prevText[2],
        ]);
        setCharIndex((prevIndex) => prevIndex + 1);
      } else if (
        charIndex <
        originalTextsRef.current[1].length + originalTextsRef.current[0].length
      ) {
        setText((prevText) => [
          prevText[0],
          prevText[1] +
            originalTextsRef.current[1].charAt(
              charIndex - originalTextsRef.current[0].length
            ),
          prevText[2],
        ]);
        setCharIndex((prevIndex) => prevIndex + 1);
      } else if (
        charIndex <
        originalTextsRef.current[2].length +
          originalTextsRef.current[0].length +
          originalTextsRef.current[1].length
      ) {
        setText((prevText) => [
          prevText[0],
          prevText[1],
          prevText[2] +
            originalTextsRef.current[2].charAt(
              charIndex -
                originalTextsRef.current[0].length -
                originalTextsRef.current[1].length
            ),
        ]);
        setCharIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => {
      clearInterval(intervalId);
    };
  }, [charIndex]);

  return (
    <article className="text-night text-justify leading-6 grid gap-4">
      {text.map((paragraph, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
    </article>
  );
}
