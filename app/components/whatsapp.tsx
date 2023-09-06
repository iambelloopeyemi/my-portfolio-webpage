import { FaWhatsapp } from "react-icons/fa";

export default function WhatsApp(): JSX.Element {
  return (
    <div className="flex items-center gap-1">
      <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
      <span className="text-sm sm:text-base">+234 705 253 1409</span>
    </div>
  );
}
