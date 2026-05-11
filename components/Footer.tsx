"use client";

import { motion } from "framer-motion";

const BrandMark = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      x="50%"
      y="44"
      textAnchor="middle"
      fontFamily="Instrument Serif, serif"
      fontSize="44"
      fontWeight="500"
      fill="#ffffff"
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

const cols = [
  {
    heading: "Services",
    items: [
      { label: "Freelance Visa", href: "#services" },
      { label: "Mainland Visa", href: "#services" },
      { label: "Free Zone Visa", href: "#services" },
      { label: "Business Setup", href: "#services" },
      { label: "Real Estate", href: "#services" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "About", href: "#about" },
      { label: "Team", href: "#about" },
      { label: "Process", href: "#process" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Reach us",
    items: [
      {
        label: "nextstep247123@gmail.com",
        href: "mailto:nextstep247123@gmail.com",
      },
      { label: "+977 9864272741", href: "tel:+9779864272741" },
      {
        label: "www.nextstepconsultings.com",
        href: "https://www.nextstepconsultings.com",
      },
      { label: "Meydan FZ, Dubai", href: "#contact" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="text-white pt-14 pb-7"
      style={{ background: "var(--navy-deep)" }}
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12"
        >
          <div>
            <div className="flex items-center gap-2.5 mb-4 text-white">
              <BrandMark />
              <div className="text-[16px] font-medium">
                Next Step Consulting Group
              </div>
            </div>
            <p className="text-[14px] text-white/60 max-w-[360px] leading-[1.55]">
              Strategic guidance for future growth. Helping professionals and
              businesses unlock the UAE — visa to launch.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.heading}>
              <h5
                className="m-0 mb-4 font-mono text-[11px] tracking-[0.14em] uppercase font-medium"
                style={{ color: "var(--green)" }}
              >
                {col.heading}
              </h5>
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                {col.items.map((item) => (
                  <li
                    key={item.label}
                    className="text-[14px] text-white/75 hover:text-[var(--green)] transition-colors"
                  >
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
        <div className="border-t border-white/10 pt-6 flex justify-between flex-wrap gap-3 text-[12.5px] text-white/50">
          <div>© {year} Next Step Consulting Group LLC</div>
          <div>Strategic Guidance for Future Growth</div>
        </div>
      </div>
    </footer>
  );
}
