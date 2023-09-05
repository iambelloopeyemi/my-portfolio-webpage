"use client";
import { useState } from "react";
import Link from "next/link";
import { smoothScrollTo } from "../utils/scroll";
import { FaTimes, FaBars } from "react-icons/fa";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const links: string[] = ["about", "projects", "articles"];

  const handleSmoothScroll = (
    id: string,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    smoothScrollTo(id, event);
  };

  return (
    <header className="bg-seasalt px-4 sm:px-8 lg:px-16 py-3 z-50 shadow-lg">
      <nav className="h-12 flex justify-between items-center">
        <div className="flex justify-center items-center">
          <Link
            href={`#home`}
            className="text-lg font-bold text-violet-blue uppercase hover:scale-105"
          >
            iambelloopeyemi
          </Link>
        </div>
        <ul className="flex justify-center items-center sm:gap-6 lg:gap-12">
          {links.map((link) => (
            <li
              key={link}
              className="sm:last:bg-violet-blue sm:last:text-white sm:last:px-3 sm:last:py-2 sm:last:rounded sm:last:hover:scale-105"
            >
              <Link
                href={`#${link}`}
                onClick={(event) => handleSmoothScroll(link, event)}
                className="hidden sm:block font-semibold uppercase hover:text-violet-blue sm:last:hover:text-white hover:scale-105 sm:last:hover:scale-100"
              >
                {link}
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
                  href={`#${link}`}
                  onClick={(event) => handleSmoothScroll(link, event)}
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
