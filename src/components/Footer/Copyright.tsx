import React from "react";
import Link from "next/link";

export const Copyright = () => {
  return (
    <div className="py-7 border-t border-border mt-10">
      <div className="flex items-center justify-between whitespace-nowrap overflow-hidden text-ellipsis">
        <span className="text-sm text-secondary-foreground">
          © {new Date().getFullYear()} Tüm hakları saklıdır:{" "}
          <Link
            href="https://yurtdanismanlik.com"
            className="hover:text-primary"
            aria-label="Yurt Danışmanlık"
          >
            yurtdanismanlik.com
          </Link>
        </span>
      </div>
    </div>
  );
};
