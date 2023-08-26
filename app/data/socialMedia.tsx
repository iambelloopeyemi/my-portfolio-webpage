import { ReactNode } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface SocialMediaAccount {
  link: string;
  icon: ReactNode;
}

export const SocialMedia: SocialMediaAccount[] = [
  {
    link: "https://github.com/iambelloopeyemi",
    icon: <FaGithub className="h-8 w-8 hover:scale-105" />,
  },
  {
    link: "https://www.linkedin.com/in/iambelloopeyemi",
    icon: <FaLinkedin className="h-8 w-8 hover:scale-105" />,
  },
  {
    link: "https://twitter.com/iambelloopeyemi",
    icon: <FaTwitter className="h-8 w-8 hover:scale-105" />,
  },
];
