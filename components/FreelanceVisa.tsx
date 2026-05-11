"use client";

import { motion, type Variants } from "framer-motion";

const Check = () => (
  <span
    className="shrink-0 inline-flex items-center justify-center w-[22px] h-[22px] rounded-full mt-0.5"
    style={{ background: "var(--cream)" }}
    aria-hidden
  >
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
      <path
        d="M3 7.5l3 3 5-6"
        stroke="#a07d2e"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const advantages = [
  {
    t: "2-year UAE residency",
    d: "Renewable. Live in Dubai, exit/re-enter freely, sponsor dependents.",
  },
  {
    t: "Work with multiple clients",
    d: "No single employer. Bill clients globally in any currency.",
  },
  {
    t: "Emirates ID + bank account",
    d: "Full resident status — open business and personal accounts in days.",
  },
  {
    t: "0% personal income tax",
    d: "Keep 100% of your freelance income. No tax on global earnings.",
  },
  {
    t: "Low cost vs. mainland LLC",
    d: "Far cheaper than a full company setup, with most of the same benefits.",
  },
  {
    t: "Optional family sponsorship",
    d: "Bring your spouse, kids, and parents on dependent visas.",
  },
];

const facts = [
  { k: "Setup time", v: "3 weeks", s: "Average from kickoff to ID" },
  { k: "Validity", v: "2 yrs", s: "Renewable freelance permit" },
  { k: "Approval rate", v: "100%", s: "On qualified applications" },
];

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function FreelanceVisa() {
  return (
    <section className="py-24" id="freelance-visa">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="eyebrow">What it is</div>
            <h2 className="heading heading-lg mt-3.5">
              The UAE{" "}
              <span className="font-serif-italic">Freelance Visa</span>,
              explained.
            </h2>
            <p className="text-[17px] leading-[1.6] text-[var(--muted)] mt-5">
              The Freelance Visa is a 2-year UAE residency that lets you live in
              Dubai and work as an independent professional — without being tied
              to a single employer. Issued through a free-zone freelance
              permit, it&apos;s the fastest, cheapest legal route for designers,
              developers, consultants, marketers, and creators to base
              themselves in the UAE.
            </p>
            <p className="text-[17px] leading-[1.6] text-[var(--muted)] mt-4">
              You keep 100% of your earnings, invoice clients anywhere in the
              world, and gain full resident status — Emirates ID, bank account,
              dependent sponsorship, and access to the UAE&apos;s tax-free
              ecosystem.
            </p>

            <div
              className="mt-8 rounded-[14px] border border-[var(--line)] grid grid-cols-3"
              style={{ background: "#fff" }}
            >
              {facts.map((f, i) => (
                <div
                  key={f.k}
                  className={`p-5 ${
                    i > 0 ? "border-l border-[var(--line)]" : ""
                  }`}
                >
                  <div className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-[var(--muted)]">
                    {f.k}
                  </div>
                  <div className="text-[22px] font-medium text-[var(--navy-deep)] tracking-[-0.02em] mt-2 leading-none">
                    {f.v}
                  </div>
                  <div className="text-[12px] text-[var(--muted)] mt-2 leading-snug">
                    {f.s}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="rounded-[16px] border border-[var(--line)] p-7 md:p-9"
            style={{ background: "#fff" }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="eyebrow">Key advantages</div>
              <span
                className="font-mono text-[10.5px] tracking-[0.06em] uppercase px-2.5 py-1 rounded-full"
                style={{
                  background: "var(--cream)",
                  color: "var(--green-deep)",
                }}
              >
                6 reasons
              </span>
            </div>
            <ul className="list-none p-0 m-0 flex flex-col gap-4">
              {advantages.map((a) => (
                <motion.li
                  key={a.t}
                  variants={item}
                  className="flex items-start gap-3.5 pb-4 border-b border-[var(--line)] last:border-b-0 last:pb-0"
                >
                  <Check />
                  <div>
                    <div className="text-[15.5px] font-medium text-[var(--navy-deep)]">
                      {a.t}
                    </div>
                    <div className="text-[13.5px] leading-[1.55] text-[var(--muted)] mt-0.5">
                      {a.d}
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
