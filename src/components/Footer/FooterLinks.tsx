import { links } from "@/utils/data";
import Link from "next/link";
import React from "react";

const hizmetlerimiz = links.find((link) => link.id === 3);
const linksData = [
  {
    title: "Hızlı Linkler",
    links: links.map((link) => ({
      name: link.label,
      href: link.href,
    })),
  },
  {
    title: "Hizmetlerimiz",
    links: hizmetlerimiz?.items
      ? hizmetlerimiz.items.map((link) => ({
          name: link.label,
          href: link.href,
        }))
      : [],
  },
];

export const FooterLinks = () => {
  return (
    <>
      {linksData.map((section, index) => (
        <div key={index} className="text-left">
          <div className="text-lg font-semibold text-foreground mb-2">
            {section.title}
          </div>
          <hr />
          <br />
          <ul className="text-sm space-y-6">
            {section.links.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="text-secondary-foreground hover:text-primary transition-all"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};
