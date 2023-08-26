import Link from "next/link";

export default function Bio() {
  return (
    <article className="text-dim-gray text-justify leading-6 grid gap-2">
      <p>
        I&apos;m a Frontend Web Developer committed to crafting functional and
        interactive web applications that offer a world-class user experience.
        Check out some of my work in the&nbsp;
        <Link href={`#projects`} className="text-violet-blue">
          <strong>Projects</strong>
        </Link>
        &nbsp;section.
      </p>
      <p>
        I also enjoy writing articles and sharing content related to what
        I&apos;ve learned, aiming to assist others within the Dev Community.
        Feel free to explore some of my work in the&nbsp;
        <Link href={`#articles`} className="text-violet-blue">
          <strong>Articles</strong>
        </Link>
        &nbsp;section.
      </p>
      <p>
        If you&apos;re interested in exploring potential opportunities or
        discussing collaboration, please don&apos;t hesitate to&nbsp;
        <Link href={`#contact`} className="text-violet-blue">
          <strong>Contact</strong>
        </Link>
        &nbsp;me. I&apos;m looking forward to connecting with you!
      </p>
    </article>
  );
}