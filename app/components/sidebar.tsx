import Link from "next/link";
import { SocialMedia as links } from "../data/socialMedia";

export default function Sidebar(): JSX.Element {
  return (
    <aside className="hidden lg:block bg-seasalt p-3 rounded z-10 shadow-lg absolute left-0 top-1/2 translate-x-1/2">
      <ul className="grid gap-5">
        {links.map(({ link, icon }, index: number) => (
          <li key={index}>
            <Link href={link} target="_blank">
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
