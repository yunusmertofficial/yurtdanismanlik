"use client";
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaPlus, FaMinus } from "react-icons/fa";
import { links } from "@/utils/data";

const MobileMenu: React.FC<{
  onCloseMenu: () => void;
  isItemActive: (href: string) => boolean;
}> = ({ onCloseMenu, isItemActive }) => {
  // Açılır menülerin açık olup olmadığını takip eden state
  const [openMenus, setOpenMenus] = useState<{ [key: number]: boolean }>({});

  // Menü aç/kapa fonksiyonu
  const toggleMenu = (id: number) => {
    setOpenMenus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Dialog
      open={true}
      onClose={onCloseMenu}
      className="relative z-50 md:hidden"
    >
      <div className="fixed inset-0 flex bg-gray-800 bg-opacity-75">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative w-4/5 h-full bg-white p-6 overflow-auto shadow-lg"
        >
          {/* Üst Menü (Başlık ve Kapat Butonu) */}
          <div className="flex justify-between items-center text-xl font-bold">
            <span>Menü</span>
            <button onClick={onCloseMenu} className="text-gray-700">
              ✕
            </button>
          </div>
          <hr className="my-4 border-gray-300" />

          {/* Menü Listesi */}
          <ul className="space-y-4">
            {links.map((link) => (
              <li key={link.id} className="relative">
                {link.items.length > 0 ? (
                  <>
                    {/* Ana Menü Butonu */}
                    <div
                      className="flex justify-between items-center text-lg font-bold cursor-pointer"
                      onClick={() => toggleMenu(link.id)}
                    >
                      <span>{link.label}</span>
                      {openMenus[link.id] ? <FaMinus /> : <FaPlus />}
                    </div>

                    {/* Açılır Alt Menü */}
                    {openMenus[link.id] && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="mt-2 space-y-2 ml-4"
                      >
                        {link.items.map((item) => (
                          <li key={item.id}>
                            <Link
                              href={item.href}
                              onClick={onCloseMenu}
                              className="block text-base font-semibold text-gray-700 hover:text-gray-500"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`block text-lg font-bold ${
                      isItemActive(link.href)
                        ? "text-primary"
                        : "text-gray-700 hover:text-gray-500"
                    }`}
                    onClick={onCloseMenu}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
        <div className="flex-1" onClick={onCloseMenu} />
      </div>
    </Dialog>
  );
};

export default MobileMenu;
