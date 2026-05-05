"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/submission", label: "Submission" },
  { href: "/program", label: "Program" },
  { href: "/call-for-papers", label: "Call for Papers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a2c5a]">
      <nav className="mx-auto max-w-7xl px-6 py-4 md:px-10">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white">
            <div className="text-lg font-extrabold tracking-wide md:text-xl">
              ICEI2026
            </div>
            <div className="text-xs text-cyan-200">Organized by BEIS</div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-100 transition hover:text-cyan-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white transition hover:bg-white/10 md:hidden"
          >
            {menuOpen ? (
              <span className="text-2xl leading-none">&times;</span>
            ) : (
              <span className="text-2xl leading-none">&#9776;</span>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="mt-4 rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-md md:hidden">
            <div className="flex flex-col">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:text-cyan-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}