import { FaWhatsapp } from "react-icons/fa";

export default function WhatsApp(): JSX.Element {
  return (
    <div className="flex items-center gap-1 hover:underline">
      <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
      <a
        href="https://wa.me/message/GWHRIEN2T32UK1"
        target="_blank"
        className="text-sm sm:text-base"
      >
        +234 808 641 3655
      </a>
    </div>
  );
}
