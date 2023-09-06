"use client";
import { useState } from "react";
import Link from "next/link";
import { FaTimes, FaBars } from "react-icons/fa";

export default function Header() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const links: string[] = ["home", "about", "projects", "articles"];

  return (
    <header className="bg-seasalt px-4 sm:px-8 lg:px-16 py-3 z-50 shadow-lg">
      <nav className="h-12 flex justify-between items-center">
        <div className="flex justify-center items-center">
          <Link
            href={`/`}
            className="text-lg font-bold text-violet-blue uppercase hover:scale-105"
          >
            iambelloopeyemi
          </Link>
        </div>
        <ul className="flex justify-center items-center sm:gap-6 lg:gap-12">
          {links.map((link, index) => (
            <li
              key={link}
              className={`${
                index === links.length - 1
                  ? "sm:bg-violet-blue sm:text-white sm:px-3 sm:py-2 sm:rounded sm:hover:scale-105"
                  : "hover:text-violet-blue hover:scale-105"
              }`}
            >
              <Link
                href={`/${index === 0 ? (link = "/") : link}`}
                className="hidden sm:block font-semibold uppercase"
              >
                {index === 0 ? (link = "home") : link}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setOpen(!isOpen)}
          className="sm:hidden text-violet-blue"
        >
          {isOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
        {isOpen && (
          <ul className="sm:hidden bg-seasalt w-screen h-fit py-7 shadow-lg ease-in-out absolute top-16 right-0 flex flex-col justify-center items-center gap-5">
            {links.map((link) => (
              <li key={link} onClick={() => setOpen(!isOpen)}>
                <Link
                  href={`/${link}`}
                  className="font-semibold uppercase hover:text-violet-blue"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
