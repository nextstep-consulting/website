"use client";

import { motion, type Variants } from "framer-motion";

const packages = [
  {
    label: "Essential",
    note: "Starter freelance visa · all-in",
    features: ["2-year freelance visa", "Job assistance", "Emirates ID"],
    cta: "Choose Essential",
    hl: false,
  },
  {
    label: "Standard",
    badge: "Most popular",
    note: "Most chosen path · all-in",
    features: [
      "2-year freelance visa",
      "Job assistance",
      "Air ticket",
      "Emirates ID",
    ],
    cta: "Choose Standard",
    hl: true,
  },
  {
    label: "All-Inclusive",
    note: "Soft landing in UAE · all-in",
    features: [
      "2-year freelance visa",
      "Job assistance",
      "Air ticket",
      "1 month accommodation + meals",
      "2-year health insurance",
      "Emirates ID",
      "Bank account assistance",
    ],
    cta: "Choose All-Inclusive",
    hl: false,
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Pricing() {
  return (
    <section className="py-24" id="pricing">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 items-end mb-12"
        >
          <div>
            <div className="eyebrow">Freelance visa packages</div>
            <h2 className="heading heading-lg mt-3.5">
              Transparent pricing.
              <br />
              No surprises.
            </h2>
          </div>
          <p className="text-[17px] leading-[1.55] text-[var(--muted)] md:justify-self-end max-w-[540px]">
            All packages include the 2-year UAE Freelance Visa, Emirates ID,
            and our active job-assistance network. Pick the level of landing
            support you need.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        >
          {packages.map((p) => (
            <motion.div
              key={p.label}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className={`relative rounded-[16px] p-8 flex flex-col ${
                p.hl ? "text-white" : "bg-white border border-[var(--line)]"
              }`}
              style={
                p.hl
                  ? {
                      background: "var(--navy-deep)",
                      borderColor: "var(--navy-deep)",
                    }
                  : {}
              }
            >
              {p.badge && (
                <div
                  className="absolute font-mono text-[11px] font-semibold tracking-[0.06em] uppercase px-2.5 py-1 rounded-full"
                  style={{
                    background: "var(--green)",
                    color: "var(--navy-deep)",
                    top: "18px",
                    right: "18px",
                  }}
                >
                  {p.badge}
                </div>
              )}

              <div
                className="font-mono text-[13px] tracking-[0.06em] uppercase mb-[18px]"
                style={{ color: p.hl ? "var(--green)" : "var(--muted)" }}
              >
                {p.label}
              </div>

              <div
                className={`text-[15px] mb-7 ${
                  p.hl ? "text-white/75" : "text-[var(--muted)]"
                }`}
              >
                {p.note}
              </div>

              <ul className="list-none p-0 m-0 mb-7 flex-1 flex flex-col gap-2.5">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-3 text-[14px] leading-[1.4] ${
                      p.hl ? "text-white/90" : "text-[var(--ink)]"
                    }`}
                  >
                    <span
                      className="shrink-0 inline-flex items-center justify-center w-[18px] h-[18px] rounded-full mt-0.5"
                      style={{
                        background: p.hl
                          ? "rgba(201,161,74,0.18)"
                          : "var(--cream)",
                      }}
                      aria-hidden
                    >
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M3 7.5l3 3 5-6"
                          stroke={p.hl ? "#c9a14a" : "#a07d2e"}
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="block text-center px-4 py-3.5 rounded-[10px] text-[14px] font-semibold transition-colors"
                style={
                  p.hl
                    ? { background: "var(--green)", color: "var(--navy-deep)" }
                    : { background: "var(--navy)", color: "#fff" }
                }
              >
                {p.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
