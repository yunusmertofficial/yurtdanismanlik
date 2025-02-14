"use client";

import { useState } from "react";
import TopBar from "./TopBar";
import MainNav from "./MainNav";
import MobileMenu from "./MobileMenu";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isItemActive = (href: string) => pathname === href;

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="w-full z-50 bg-white shadow-md">
        <TopBar />
      </div>
      <nav
        aria-label="Ana Menü"
        className="sticky -top-1 z-50 bg-white shadow-md"
      >
        <MainNav
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isItemActive={isItemActive}
        />
        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileMenu
              onCloseMenu={handleCloseMenu}
              isItemActive={isItemActive}
            />
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Header;
