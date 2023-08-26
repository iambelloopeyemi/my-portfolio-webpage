import Image from "next/image";
import { ExternalLinkButton as LiveDemoButton } from "../components/button";
import { ExternalLinkButton as GitHubButton } from "../components/button";

interface ProjectProps {
  title: string;
  article: string;
  thumbnail: string;
  alt: string;
  view: string;
  hostedUrl: string;
  github: string;
  githubUrl: string;
}

export default function Project({
  title,
  article,
  thumbnail,
  alt,
  view,
  hostedUrl,
  github,
  githubUrl,
}: ProjectProps) {
  return (
    <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 mb-16">
      <div className="w-fit h-fit border rounded shadow-lg hover:cursor-pointer hover:scale-105">
        <Image
          width={500}
          height={500}
          className="h-full w-full object-fill"
          src={thumbnail}
          alt={alt}
        />
      </div>
      <div className="w-fit h-fit">
        <h3 className="text-xl font-bold mb-3 sm:mb-5">{title}</h3>
        <article className="text-dim-gray text-justify leading-6 grid gap-2 mb-8 sm:mb-10">
          {article}
        </article>
        <div className="flex items-center justify-center sm:justify-start gap-5">
          <LiveDemoButton
            title={`${view}`}
            url={`${hostedUrl}`}
            backgroundColor="#3943B7"
            color="#FFF"
            border="none"
          />
          <GitHubButton
            title={`${github}`}
            url={`${githubUrl}`}
            backgroundColor="none"
            color="#3943B7"
            border="1px solid #3943B7"
          />
        </div>
      </div>
    </div>
  );
}
