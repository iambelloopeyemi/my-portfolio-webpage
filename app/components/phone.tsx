import { FaPhoneSquare } from "react-icons/fa";

export default function Phone(): JSX.Element {
  return (
    <div className="flex items-center gap-1 hover:underline">
      <FaPhoneSquare className="w-4 h-4 sm:w-5 sm:h-5" />
      <a
        href="tel:234-705-352-1409"
        target="_blank"
        className="text-sm sm:text-base"
      >
        +234 705 352 1409
      </a>
    </div>
  );
}
