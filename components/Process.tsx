"use client";

import { motion, type Variants } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery call",
    desc: "A 30-minute consult to understand your goals, situation, and timeline. No commitment.",
    arr: true,
  },
  {
    num: "02",
    title: "Tailored plan",
    desc: "We map the right visa, structure, or property route to your goals — with transparent fees.",
    arr: true,
  },
  {
    num: "03",
    title: "Document prep",
    desc: "We handle the paperwork. You sign and submit — we coordinate with UAE authorities directly.",
    arr: true,
  },
  {
    num: "04",
    title: "Approval & arrival",
    desc: "Visa approval, Emirates ID, optional pickup, accommodation, and bank assistance on landing.",
    arr: true,
  },
  {
    num: "05",
    title: "Ongoing support",
    desc: "Post-arrival assistance for renewals, dependents, and growth — long after your first stamp.",
    arr: false,
  },
];

const grid: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const cell: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Process() {
  return (
    <section
      id="process"
      className="py-24 border-y border-[var(--line)]"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-[760px]"
        >
          <div className="eyebrow">How we work</div>
          <h2 className="heading heading-lg mt-3.5 mb-4">
            A process, not a promise.
          </h2>
          <p className="text-[17px] leading-[1.55] text-[var(--muted)]">
            Five stages. Clear deliverables at each. You&apos;ll always know
            what&apos;s next, who owns it, and when it lands.
          </p>
        </motion.div>

        <motion.ol
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 list-none p-0 m-0"
        >
          {steps.map((s) => (
            <motion.li
              key={s.num}
              variants={cell}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-[var(--line)] rounded-[12px] p-[22px] flex flex-col min-h-[220px]"
            >
              <div className="flex justify-between items-center mb-7">
                <span className="text-[var(--green-deep)] font-mono text-[11px] tracking-[0.14em]">
                  {s.num}
                </span>
                {s.arr && (
                  <span className="text-[var(--line)] text-[18px]">→</span>
                )}
              </div>
              <h4 className="text-[17px] font-medium text-[var(--navy-deep)] tracking-[-0.01em] mb-2">
                {s.title}
              </h4>
              <p className="text-[13.5px] leading-[1.5] text-[var(--muted)]">
                {s.desc}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
