"use client";

import { motion, type Variants } from "framer-motion";

const yields = [
  {
    tag: "Residential rentals",
    big: "6 – 9%",
    sub: "Net rental yield / yr",
    note: "Strong cash flow in JVC, Dubailand, Damac Hills, Discovery Gardens.",
  },
  {
    tag: "Off-plan apartments",
    big: "20 – 35%",
    sub: "Capital appreciation",
    note: "Typical handover-to-resale gain across 2–3 years in growth corridors.",
  },
  {
    tag: "Short-term lets",
    big: "9 – 12%",
    sub: "Holiday-let yield",
    note: "Furnished units near Marina, Downtown, Palm — Airbnb / Booking.com.",
  },
  {
    tag: "Commercial space",
    big: "7 – 10%",
    sub: "Net commercial yield",
    note: "Office, retail, and warehouse leases in Business Bay & free zones.",
  },
];

const business = [
  {
    k: "Corporate tax",
    v: "9%",
    s: "Only on profits above AED 375,000. Below that — 0%.",
  },
  {
    k: "VAT",
    v: "5%",
    s: "Standard rate, refundable on most B2B transactions.",
  },
  {
    k: "Free-zone profit repatriation",
    v: "100%",
    s: "Send capital and profits home with zero restriction.",
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ROI() {
  return (
    <section
      id="roi"
      className="py-24 text-white"
      style={{ background: "var(--navy-deep)" }}
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 items-end mb-12"
        >
          <div>
            <div
              className="font-mono text-[11px] tracking-[0.14em] uppercase"
              style={{ color: "var(--green)" }}
            >
              Returns in Dubai
            </div>
            <h2 className="heading heading-lg text-white mt-3.5">
              How much can you{" "}
              <span className="font-serif-italic">earn</span> per year?
            </h2>
          </div>
          <p className="text-[17px] leading-[1.6] text-white/70 md:justify-self-end max-w-[540px]">
            Indicative annual returns from Dubai property, short-term rentals,
            and business operations. Actual numbers depend on asset, location,
            and management — but these are the ranges our clients consistently
            hit.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {yields.map((y) => (
            <motion.div
              key={y.tag}
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="rounded-[16px] p-7 flex flex-col"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <div
                className="font-mono text-[10.5px] tracking-[0.14em] uppercase"
                style={{ color: "var(--green)" }}
              >
                {y.tag}
              </div>
              <div
                className="text-[44px] font-medium tracking-[-0.025em] leading-none mt-6"
                style={{ color: "var(--green)" }}
              >
                {y.big}
              </div>
              <div className="text-[13px] text-white/80 mt-2.5">{y.sub}</div>
              <div className="text-[12.5px] text-white/55 mt-3 leading-[1.55]">
                {y.note}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 rounded-[16px]"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          {business.map((b, i) => (
            <div
              key={b.k}
              className={`p-7 ${
                i > 0
                  ? "md:border-l border-t md:border-t-0 border-white/10"
                  : ""
              }`}
            >
              <div
                className="font-mono text-[10.5px] tracking-[0.14em] uppercase"
                style={{ color: "var(--green)" }}
              >
                {b.k}
              </div>
              <div
                className="text-[36px] font-medium tracking-[-0.02em] leading-none mt-5"
                style={{ color: "#fff" }}
              >
                {b.v}
              </div>
              <div className="text-[13px] text-white/65 mt-3 leading-[1.55]">
                {b.s}
              </div>
            </div>
          ))}
        </motion.div>

        <p className="text-[12.5px] text-white/45 mt-6 max-w-[720px] leading-[1.55]">
          Figures based on 2024–2025 Dubai market data from DLD, REIDIN, and our
          own client portfolio. Indicative ranges only — not a guarantee of
          future returns.
        </p>
      </div>
    </section>
  );
}
