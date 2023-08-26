import Link from "next/link";

interface LinkProps {
  title: string;
  url: string;
  backgroundColor: string;
  color: string;
  border: string;
}

export function InternalLinkButton({
  title,
  url,
  backgroundColor,
  color,
  border,
}: LinkProps) {
  return (
    <Link href={url}>
      <button
        style={{
          backgroundColor: backgroundColor,
          color: color,
          border: border,
        }}
        className="px-12 py-3 rounded font-bold hover:scale-105"
      >
        {title}
      </button>
    </Link>
  );
}

export function ExternalLinkButton({
  title,
  url,
  backgroundColor,
  color,
  border,
}: LinkProps) {
  return (
    <Link href={url} target="_blank">
      <button
        style={{
          backgroundColor: backgroundColor,
          color: color,
          border: border,
        }}
        className="px-12 py-3 rounded font-bold hover:scale-105"
      >
        {title}
      </button>
    </Link>
  );
}
