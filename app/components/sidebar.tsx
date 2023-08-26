import Link from "next/link";
import { SocialMedia as links } from "../data/socialMedia";

export default function Sidebar() {
  return (
    <aside className="hidden lg:block bg-seasalt p-3 rounded z-10 shadow-lg absolute left-0 top-1/4 translate-x-1/4">
      <ul className="grid gap-5">
        {links.map(({ link, icon }, index) => (
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
