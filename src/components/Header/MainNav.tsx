"use client";
import React from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { links } from "@/utils/data";

type Props = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  isItemActive: (href: string) => boolean;
};

const MainNav: React.FC<Props> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  isItemActive,
}) => {
  return (
    <div className="flex justify-center items-center h-20 bg-gray-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full px-8">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" aria-label="Ana Sayfa">
            <Image
              src="/logo.webp"
              alt="logo"
              width={250}
              height={73}
              priority
            />
          </Link>
        </div>

        {/* Masaüstü Menü */}
        <div className="hidden md:flex items-center space-x-6 relative">
          <ul className="flex space-x-8">
            {links.map((link) => (
              <li
                key={link.id}
                className="capitalize relative group font-semibold"
              >
                {link.items.length > 0 ? (
                  <Link href={link.href}>
                    <div className="relative flex items-center text-gray-700 hover:text-gray-500 cursor-pointer">
                      {link.label}
                      <FaChevronDown className="ml-1 transition-transform duration-200 group-hover:rotate-180" />
                      <div
                        className={`absolute -bottom-2 left-0 h-[2px] bg-primary transition-all duration-300 ${
                          isItemActive(link.href) ? "w-full" : "w-0"
                        }`}
                      />
                    </div>
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    className="relative text-gray-700 hover:text-gray-500"
                  >
                    {link.label}
                    <div
                      className={`absolute -bottom-2 left-0 h-[2px] bg-primary transition-all duration-300 ${
                        isItemActive(link.href) ? "w-full" : "w-0"
                      }`}
                    />
                  </Link>
                )}

                {/* Açılır Menü */}
                {link.items.length > 0 && (
                  <div className="absolute left-0 min-w-[200px] z-10 transition-all duration-300 ease-in-out opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                    <div className="mt-5"></div>
                    <ul className="py-4 px-6 bg-white shadow-lg rounded-lg space-y-2 relative">
                      {link.items.map((item) => (
                        <li
                          key={item.id}
                          className="hover:bg-gray-100 p-2 rounded-md transition-colors duration-200 whitespace-nowrap cursor-pointer"
                        >
                          <Link
                            href={item.href}
                            className="block text-gray-700 font-semibold"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobil Menü Butonu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700"
            aria-label="Mobil Menü"
          >
            <FaBars size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
