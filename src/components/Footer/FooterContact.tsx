import React from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const FooterContact = () => {
  return (
    <div>
      <div className="text-lg font-semibold text-foreground mb-2">İletişim</div>
      <hr />
      <br />
      <ul className="text-sm space-y-4">
        <li className="flex items-center space-x-2">
          <FaPhoneAlt className="text-primary" />
          <Link
            href="tel:+905495656868"
            className="hover:text-primary transition-all"
            aria-label="Telefon"
          >
            +90 549 565 6868
          </Link>
        </li>
        <li className="flex mt-4 space-x-4">
          <Link
            href="mailto:yurtdanismanlikk@gmail.com"
            className="w-9 h-9 bg-muted flex justify-center items-center rounded-full hover:bg-primary transition-all"
            aria-label="Facebook"
          >
            <SiGmail className="text-foreground" />
          </Link>
          <Link
            href="https://instagram.com/yurtdanismanlikk"
            className="w-9 h-9 bg-muted flex justify-center items-center rounded-full hover:bg-primary transition-all"
            aria-label="Instagram"
          >
            <FaInstagram className="text-foreground" />
          </Link>
          <Link
            href="https://www.facebook.com/yurtdanismanlikk/"
            className="w-9 h-9 bg-muted flex justify-center items-center rounded-full hover:bg-primary transition-all"
            aria-label="LinkedIn"
          >
            <FaFacebook className="text-foreground" />
          </Link>
          <Link
            href="https://wa.me/905495656868"
            className="w-9 h-9 bg-muted flex justify-center items-center rounded-full hover:bg-primary transition-all"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="text-foreground" />
          </Link>
        </li>
      </ul>
    </div>
  );
};
