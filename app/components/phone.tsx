import { FaPhoneSquare } from "react-icons/fa";

export default function Phone(): JSX.Element {
  return (
    <div className="flex items-center gap-1">
      <FaPhoneSquare className="w-4 h-4 sm:w-5 sm:h-5" />
      <span className="text-sm sm:text-base">+234 808 641 3655</span>
    </div>
  );
}
