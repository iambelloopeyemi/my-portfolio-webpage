import Link from "next/link";
import { SocialMedia as links } from "../data/socialMedia";

export default function Footer() {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-night px-2 py-10 text-white grid gap-5">
      <ul className="flex justify-center items-center gap-5">
        {links.map(({ link, icon }, index) => (
          <li key={index}>
            <Link href={link} target="_blank">
              {icon}
            </Link>
          </li>
        ))}
      </ul>
      <strong className="text-sm font-light text-center">
        © copyright {currentYear}. Made by Opeyemi Bello
      </strong>
    </footer>
  );
}
