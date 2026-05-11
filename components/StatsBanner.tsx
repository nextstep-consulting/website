"use client";

import { motion, type Variants } from "framer-motion";

const stats = [
  { big: "100+", lab: "Visas issued" },
  { big: "12", lab: "Years combined experience" },
  { big: "100%", lab: "Application success rate" },
  { big: "7", lab: "Countries served" },
];

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function StatsBanner() {
  return (
    <section
      className="py-20 text-white"
      style={{ background: "var(--navy-deep)" }}
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-[1.2fr_2fr] gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="font-mono text-[11px] tracking-[0.14em] uppercase"
              style={{ color: "var(--green)" }}
            >
              By the numbers
            </div>
            <h2 className="heading heading-lg text-white mt-3.5">
              Outcomes,
              <br />
              <span className="font-serif-italic">not output.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-y-8"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.big}
                variants={item}
                className={`px-6 ${
                  i > 0 ? "lg:border-l border-white/15" : ""
                } ${i % 2 === 1 ? "max-lg:border-l max-lg:border-white/15" : ""}`}
              >
                <div
                  className="text-[52px] font-normal tracking-[-0.03em] leading-none"
                  style={{ color: "var(--green)" }}
                >
                  {s.big}
                </div>
                <div className="text-[13.5px] text-white/70 mt-3.5">
                  {s.lab}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
