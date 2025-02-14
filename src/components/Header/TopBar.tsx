import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { SiGmail } from "react-icons/si";

const TopBar: React.FC = () => {
  return (
    <div className="hidden md:block bg-gray-100">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-2 text-sm text-gray-700">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1">
            <MdPhone className="text-gray-600" />
            <span>+90 549 565 6868</span>
          </span>
          <span className="flex items-center space-x-1">
            <MdEmail className="text-gray-600" />
            <span>yurtdanismanlikk@gmail.com</span>
          </span>
          <span className="flex items-center space-x-1">
            <MdLocationOn className="text-gray-600" />
            <span>{"İstanbul / Kadıköy / Osmanağa mahallesi"}</span>
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <Link
            href="https://www.instagram.com/yurtdanismanlikk/"
            aria-label="Instagram"
          >
            <FaInstagram className="text-gray-600 hover:text-pink-600 cursor-pointer" />
          </Link>
          <Link href="mailto:yurtdanismanlikk@gmail.com" aria-label="Gmail">
            <SiGmail className="text-gray-600 hover:text-red-600 cursor-pointer" />
          </Link>
          <Link
            href="https://www.facebook.com/yurtdanismanlikk/"
            className="w-9 h-9 bg-muted flex justify-center items-center rounded-full hover:bg-primary transition-all"
            aria-label="LinkedIn"
          >
            <FaFacebook className="text-foreground" />
          </Link>
          <Link href="https://wa.me/905495656868" aria-label="Whatsapp">
            <FaWhatsapp className="text-gray-600 hover:text-green-500 cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
