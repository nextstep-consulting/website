"use client";

import { motion } from "framer-motion";

const zones = [
  "Meydan FZ",
  "IFZA",
  "DMCC",
  "DAFZA",
  "JAFZA",
  "Sharjah Media City",
  "RAKEZ",
  "Ajman FZ",
];

export default function Clients() {
  return (
    <section className="border-y border-[var(--line)] py-8 pb-12">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <div className="flex items-center gap-6 mb-5">
          <span
            className="eyebrow"
            style={{ color: "var(--muted)" }}
          >
            Trusted across UAE free zones
          </span>
          <div className="flex-1 h-px bg-[var(--line)]"></div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-4 md:grid-cols-8 gap-x-6 gap-y-4 items-center"
        >
          {zones.map((zone, i) => (
            <motion.div
              key={zone}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 0.8, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`text-[14px] font-medium text-[var(--muted)] text-center ${
                i % 2 === 1 ? "font-serif-italic font-normal" : ""
              }`}
            >
              {zone}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
