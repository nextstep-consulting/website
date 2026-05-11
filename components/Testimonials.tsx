"use client";

import { motion, type Variants } from "framer-motion";

const quotes = [
  {
    text: "Next Step took the guesswork out of moving to Dubai. From the freelance visa to the bank account, they handled every step — I just showed up.",
    nm: "Anjali R.",
    ro: "Independent designer · Now based in Dubai",
  },
  {
    text: "Setting up my mainland company felt impossible from outside the UAE. Their team made it boringly simple. Six weeks, no surprises.",
    nm: "Pradeep S.",
    ro: "Founder, e-commerce · Mainland LLC",
  },
  {
    text: "Honest feedback, fast replies, and a real plan instead of a sales pitch. That's rare. We are signing up for the recruitment service next.",
    nm: "Karuna T.",
    ro: "Operations Lead · Hospitality group",
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Testimonials() {
  return (
    <section className="py-24" style={{ background: "var(--cream)" }}>
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="eyebrow">What clients say</div>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8"
        >
          {quotes.map((q) => (
            <motion.figure
              key={q.nm}
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="bg-white border border-[var(--line)] rounded-[14px] p-7 flex flex-col"
            >
              <div
                className="font-serif-italic text-[36px] leading-none mb-3"
                style={{ color: "var(--green)" }}
              >
                &ldquo;
              </div>
              <blockquote className="m-0 text-[16.5px] leading-[1.55] text-[var(--ink)] flex-1">
                {q.text}
              </blockquote>
              <figcaption className="mt-7 pt-[18px] border-t border-[var(--line)]">
                <div className="text-[14px] font-medium text-[var(--navy-deep)]">
                  {q.nm}
                </div>
                <div className="text-[13px] text-[var(--muted)] mt-0.5">
                  {q.ro}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
