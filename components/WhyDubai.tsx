"use client";

import { motion, type Variants } from "framer-motion";

const TaxIcon = () => (
  <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
    <path
      d="M16 4v24M9 9h11a3 3 0 0 1 0 6H12a3 3 0 0 0 0 6h11"
      stroke="#0a2540"
      strokeWidth="1.6"
      strokeLinecap="round"
      className="svg-stroke"
    />
    <circle
      cx="16"
      cy="16"
      r="13"
      stroke="#c9a14a"
      strokeWidth="1.6"
      className="svg-accent"
      strokeDasharray="2 3"
    />
  </svg>
);

const HubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
    <circle
      cx="16"
      cy="16"
      r="11"
      stroke="#0a2540"
      strokeWidth="1.6"
      className="svg-stroke"
    />
    <path
      d="M5 16h22M16 5c3 3 5 7 5 11s-2 8-5 11c-3-3-5-7-5-11s2-8 5-11z"
      stroke="#c9a14a"
      strokeWidth="1.6"
      className="svg-accent"
    />
  </svg>
);

const OwnershipIcon = () => (
  <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
    <path
      d="M5 14l11-9 11 9v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V14z"
      stroke="#0a2540"
      strokeWidth="1.6"
      strokeLinejoin="round"
      className="svg-stroke"
    />
    <path
      d="M13 28v-9h6v9"
      stroke="#c9a14a"
      strokeWidth="1.6"
      strokeLinejoin="round"
      className="svg-accent"
    />
  </svg>
);

const BankIcon = () => (
  <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
    <path
      d="M4 13L16 5l12 8M6 13v13M26 13v13M11 16v8M16 16v8M21 16v8M3 28h26"
      stroke="#0a2540"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="svg-stroke"
    />
    <path
      d="M14 9h4"
      stroke="#c9a14a"
      strokeWidth="1.6"
      strokeLinecap="round"
      className="svg-accent"
    />
  </svg>
);

const SafetyIcon = () => (
  <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
    <path
      d="M16 4l11 4v8c0 7-5 11-11 12-6-1-11-5-11-12V8l11-4z"
      stroke="#0a2540"
      strokeWidth="1.6"
      strokeLinejoin="round"
      className="svg-stroke"
    />
    <path
      d="M11 16l3.5 3.5L21 13"
      stroke="#c9a14a"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="svg-accent"
    />
  </svg>
);

const TalentIcon = () => (
  <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
    <circle
      cx="12"
      cy="11"
      r="4"
      stroke="#0a2540"
      strokeWidth="1.6"
      className="svg-stroke"
    />
    <path
      d="M4 26c1.5-4.5 4.5-7 8-7s6.5 2.5 8 7"
      stroke="#0a2540"
      strokeWidth="1.6"
      strokeLinecap="round"
      className="svg-stroke"
    />
    <circle
      cx="22"
      cy="9"
      r="3"
      stroke="#c9a14a"
      strokeWidth="1.6"
      className="svg-accent"
    />
    <path
      d="M21 15c4 0 6.5 3 7 8"
      stroke="#c9a14a"
      strokeWidth="1.6"
      strokeLinecap="round"
      className="svg-accent"
    />
  </svg>
);

type Item = {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const items: Item[] = [
  {
    num: "01",
    title: "0% personal income tax",
    desc: "Keep what you earn. No tax on personal income; only a 9% corporate tax on profits above AED 375,000.",
    icon: <TaxIcon />,
  },
  {
    num: "02",
    title: "100% foreign ownership",
    desc: "Own your company outright in free zones and across most mainland activities — no local partner required.",
    icon: <OwnershipIcon />,
  },
  {
    num: "03",
    title: "Strategic global hub",
    desc: "Reach 2.5 billion consumers within a four-hour flight. East–West gateway with world-class logistics.",
    icon: <HubIcon />,
  },
  {
    num: "04",
    title: "Banking & capital",
    desc: "Open multi-currency business and personal accounts. Deep capital markets, AED pegged to USD.",
    icon: <BankIcon />,
  },
  {
    num: "05",
    title: "Safe, stable, livable",
    desc: "One of the safest cities in the world. Modern infrastructure, healthcare, and schooling — built for families.",
    icon: <SafetyIcon />,
  },
  {
    num: "06",
    title: "Global talent pool",
    desc: "Long-term residency visas attract top professionals from 200+ nationalities. Hire — or get hired — quickly.",
    icon: <TalentIcon />,
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WhyDubai() {
  return (
    <section
      id="why-dubai"
      className="py-24 border-y border-[var(--line)]"
      style={{ background: "var(--cream)" }}
    >
      <style>{`
        .why-card { transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease; }
        .why-card:hover {
          transform: translateY(-3px);
          border-color: rgba(10,37,64,0.2);
          box-shadow: 0 16px 36px -20px rgba(10,16,40,0.18), 0 2px 6px rgba(10,16,40,0.04);
        }
        .why-card .why-icon { transition: background 0.25s ease, border-color 0.25s ease; }
        .why-card:hover .why-icon { background: var(--navy); border-color: var(--navy); }
        .why-card:hover .svg-stroke { stroke: #fff; }
        .why-card:hover .svg-accent { stroke: var(--green); }
      `}</style>

      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 items-end mb-12"
        >
          <div>
            <div className="eyebrow">Why Dubai</div>
            <h2 className="heading heading-lg mt-3.5">
              The case for{" "}
              <span className="font-serif-italic">doing business</span>
              <br />
              in Dubai.
            </h2>
          </div>
          <p className="text-[17px] leading-[1.55] text-[var(--muted)] max-w-[540px] md:justify-self-end">
            Tax-friendly, globally connected, and built for founders. Here&apos;s
            why thousands of professionals and companies choose Dubai as their
            next step every year.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {items.map((it) => (
            <motion.div
              key={it.num}
              variants={card}
              className="why-card bg-white border border-[var(--line)] rounded-[16px] p-7 flex flex-col"
            >
              <div className="flex items-center justify-between mb-7">
                <span
                  className="why-icon w-[52px] h-[52px] rounded-[12px] border border-[var(--line)] inline-flex items-center justify-center"
                  style={{ background: "var(--cream)" }}
                  aria-hidden
                >
                  {it.icon}
                </span>
                <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--muted)]">
                  {it.num}
                </span>
              </div>
              <h3 className="heading text-[20px] tracking-[-0.015em] mb-2">
                {it.title}
              </h3>
              <p className="text-[14.5px] leading-[1.55] text-[var(--muted)] m-0">
                {it.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-8 rounded-[16px] border border-[var(--line)] p-8 md:px-9 flex items-center justify-between gap-6 flex-wrap"
          style={{ background: "var(--cream)" }}
        >
          <div>
            <h3 className="heading text-[22px] m-0 mb-1.5">
              Ready to make the move?
            </h3>
            <p className="m-0 text-[14.5px] text-[var(--muted)]">
              Book a free 30-minute consult — we&apos;ll map the right route for
              your goals.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary">
            Book a discovery call <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
