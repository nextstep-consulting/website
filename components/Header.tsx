"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const BrandMark = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Next Step"
  >
    <text
      x="50%"
      y="44"
      textAnchor="middle"
      fontFamily="Instrument Serif, serif"
      fontSize="44"
      fontWeight="500"
      fill="#0a2540"
      letterSpacing="-2"
    >
      N
    </text>
    <text
      x="50%"
      y="44"
      textAnchor="middle"
      fontFamily="Instrument Serif, serif"
      fontSize="44"
      fontWeight="500"
      fill="#c9a14a"
      letterSpacing="-2"
      dx="12"
    >
      S
    </text>
    <path
      d="M40 26 L 56 8 M 49 8 L 56 8 L 56 15"
      stroke="#c9a14a"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#pricing", label: "Pricing" },
    { href: "#about", label: "About" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-[var(--line)] backdrop-blur-md"
      style={{ background: "rgba(251,250,247,0.85)" }}
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <a href="#top" className="flex items-center gap-2.5 group">
            <BrandMark className="w-8 h-8" />
            <div className="text-[15px] font-semibold tracking-tight text-[var(--ink)]">
              Next Step{" "}
              <span className="font-normal text-[var(--muted)]">
                · Consulting
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm text-[var(--muted)]">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[var(--ink)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3.5">
            <a href="#contact" className="btn btn-primary btn-pill">
              Book a call <span className="opacity-70">→</span>
            </a>
          </div>

          <button
            className="md:hidden p-2 text-[var(--ink)]"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden pb-6"
          >
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[var(--muted)] hover:text-[var(--ink)] transition-colors text-base"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="btn btn-primary btn-pill self-start"
                onClick={() => setOpen(false)}
              >
                Book a call <span className="opacity-70">→</span>
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
