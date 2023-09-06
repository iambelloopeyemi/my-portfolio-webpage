import Link from "next/link";
import { SocialMedia as links } from "../data/socials";
import Contact from "./contact";
import Email from "./email";
import Phone from "./phone";
import WhatsApp from "./whatsapp";
import Underline from "./underline";

export default function Footer(): JSX.Element {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer id="contacts" className="bg-night text-white px-3 pt-10 pb-3">
      <div className="flex flex-col items-center gap-3 mb-6">
        <h6 className="uppercase text-xl sm:text-2xl font-medium">
          contact me
        </h6>
        <Underline />
      </div>
      <div className="mb-6">
        <Contact />
        <div className="grid gap-6">
          <ul className="flex flex-col items-center gap-2">
            <li>
              <Email />
            </li>
            <li>
              <Phone />
            </li>
            <li>
              <WhatsApp />
            </li>
          </ul>
          <ul className="flex items-center justify-center gap-6">
            {links.map(({ link, icon }, index: number) => (
              <li key={index}>
                <Link href={link} target="_blank">
                  {icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t pt-3 flex flex-col items-center">
        <p>
          <strong className="text-xs sm:text-sm font-light">
            © copyright {currentYear}.&nbsp;
          </strong>
        </p>
        <p>
          <strong className="text-xs sm:text-sm font-light">
            Made with ❤️ by Opeyemi Bello
          </strong>
        </p>
      </div>
    </footer>
  );
}
