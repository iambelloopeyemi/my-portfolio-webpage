import { FaEnvelope } from "react-icons/fa";

export default function Email(): JSX.Element {
  return (
    <div className="flex items-center gap-1 hover:underline">
      <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5" />
      <a
        href="mailto:iambelloopeyemi@gmail.com"
        className="text-sm sm:text-base"
      >
        iambelloopeyemi@gmail.com
      </a>
    </div>
  );
}
