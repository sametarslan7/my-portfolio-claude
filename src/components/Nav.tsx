"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="bg-blue-950">
      <nav className="mx-auto flex max-w-3xl items-center justify-center gap-6 px-6 py-4">
        {links.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors ${
                isActive
                  ? "text-white"
                  : "text-blue-200/70 hover:text-white"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
