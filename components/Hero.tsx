"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stats = [
  {
    num: "100+",
    lab: "Visas issued",
    sub: "Across 7 countries of origin",
  },
  {
    num: "3 weeks",
    lab: "Avg. setup time",
    sub: "From kickoff to Emirates ID",
  },
  {
    num: "100%",
    lab: "Approval rate",
    sub: "On qualified applications",
  },
  {
    num: "4.9 / 5",
    lab: "Client rating",
    sub: "150+ verified reviews",
  },
];

export default function Hero() {
  return (
    <section className="relative pt-16 pb-24 overflow-hidden" id="top">
      <div
        className="absolute inset-x-0 top-0 h-[540px] pointer-events-none"
        style={{
          background:
            "radial-gradient(800px 380px at 90% 0%, rgba(201,161,74,0.12), transparent 60%), radial-gradient(700px 420px at 10% 0%, rgba(10,37,64,0.06), transparent 60%)",
        }}
      />

      <div className="max-w-[1240px] mx-auto px-6 md:px-8 relative z-10">
        <motion.div variants={container} initial="hidden" animate="visible">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center mb-16 lg:mb-20">
            {/* LEFT — copy + CTAs */}
            <div>
              <motion.div
                variants={item}
                className="inline-flex items-center gap-2.5 pl-1.5 pr-3.5 py-1.5 bg-white border border-[var(--line)] rounded-full text-[12.5px] text-[var(--muted)] mb-7"
                style={{ boxShadow: "0 1px 0 rgba(10,16,40,0.02)" }}
              >
                <span
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-[0.04em]"
                  style={{
                    background: "var(--green)",
                    color: "var(--navy-deep)",
                  }}
                >
                  UAE FREELANCE VISA
                </span>
                2-year residency · 100% approval
                <span className="opacity-50">→</span>
              </motion.div>

              <motion.h1 variants={item} className="heading heading-xl">
                Live and work in Dubai
                <br />
                as a <span className="font-serif-italic">freelancer.</span>
              </motion.h1>

              <motion.p
                variants={item}
                className="text-[18px] leading-[1.55] text-[var(--muted)] max-w-[480px] mt-6"
              >
                Get your UAE Freelance Visa with end-to-end support — Emirates
                ID, bank account, and an active job-assistance network, in as
                little as 3 weeks.
              </motion.p>

              <motion.div
                variants={item}
                className="mt-7 flex gap-3 flex-wrap items-center"
              >
                <a href="#contact" className="btn btn-primary">
                  Book a discovery call <span>→</span>
                </a>
                <a href="#pricing" className="btn btn-secondary">
                  See packages
                </a>
              </motion.div>

              <motion.div
                variants={item}
                className="mt-8 flex items-center gap-4 text-[13.5px] text-[var(--muted)] flex-wrap"
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-[var(--green-deep)] text-[15px]">★</span>
                  <span className="font-semibold text-[var(--green-deep)]">
                    4.9
                  </span>
                  <span>client rating</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-[var(--line)]" />
                <span>100+ visas issued</span>
                <span className="w-1 h-1 rounded-full bg-[var(--line)]" />
                <span>HQ · Meydan FZ, Dubai</span>
              </motion.div>
            </div>

            {/* RIGHT — overlapping photo composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="relative aspect-[5/4] hidden md:block"
            >
              {/* Big back photo — Dubai skyline */}
              <motion.div
                initial={{ rotate: 2 }}
                animate={{ rotate: 2 }}
                whileHover={{ rotate: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute rounded-[18px] overflow-hidden bg-[var(--navy-deep)]"
                style={{
                  inset: "0 0 18% 22%",
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "0 30px 60px -30px rgba(10,16,40,0.45)",
                }}
              />

              {/* Small front photo — freelancer with laptop */}
              <motion.div
                initial={{ rotate: -3 }}
                animate={{ rotate: -3 }}
                whileHover={{ rotate: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute rounded-[18px] overflow-hidden bg-[var(--navy-deep)]"
                style={{
                  inset: "32% 28% 0 0",
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border: "6px solid #fff",
                  boxShadow: "0 30px 60px -30px rgba(10,16,40,0.45)",
                }}
              />

              {/* Floating circular tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
                className="absolute z-10 rounded-full flex flex-col items-center justify-center text-center"
                style={{
                  width: "112px",
                  height: "112px",
                  right: "-6px",
                  bottom: "6%",
                  background: "var(--green)",
                  color: "var(--navy-deep)",
                  boxShadow: "0 18px 36px -18px rgba(10,16,40,0.45)",
                }}
              >
                <span
                  className="font-serif-italic"
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.15,
                  }}
                >
                  Your next step
                </span>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase mt-1 opacity-80">
                  Dubai · UAE
                </span>
              </motion.div>

              {/* Floating credential pill */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute z-10 flex items-center gap-2.5 bg-white border border-[var(--line)] rounded-full pl-2 pr-3.5 py-1.5"
                style={{
                  top: "8%",
                  left: "-6px",
                  boxShadow: "0 14px 28px -14px rgba(10,16,40,0.30)",
                }}
              >
                <span
                  className="w-7 h-7 rounded-full inline-flex items-center justify-center"
                  style={{ background: "var(--green)" }}
                >
                  <span className="text-[var(--navy-deep)] text-[13px]">★</span>
                </span>
                <div className="leading-tight">
                  <div className="text-[12.5px] font-semibold text-[var(--navy-deep)]">
                    4.9 / 5
                  </div>
                  <div className="text-[10px] font-mono tracking-[0.06em] uppercase text-[var(--muted)]">
                    100+ approved
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Mobile fallback — single image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:hidden aspect-[4/3] rounded-[18px] overflow-hidden bg-[var(--navy-deep)]"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(10,16,40,0.05) 0%, rgba(10,16,40,0.45) 100%), url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>

          <motion.div
            variants={item}
            className="flex items-center gap-3.5 mb-5"
          >
            <span className="eyebrow">By the numbers</span>
            <div className="flex-1 h-px bg-[var(--line)]" />
            <span className="eyebrow" style={{ color: "var(--muted)" }}>
              Last 24 months
            </span>
          </motion.div>

          <motion.div
            variants={item}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {stats.map((s) => (
              <motion.div
                key={s.num}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-[var(--line)] rounded-[16px] p-7 flex flex-col"
              >
                <div className="text-[40px] font-medium tracking-[-0.025em] text-[var(--navy-deep)] leading-none">
                  {s.num}
                </div>
                <div className="mt-5 pt-4 border-t border-[var(--line)]">
                  <div className="text-[14.5px] font-medium text-[var(--ink)]">
                    {s.lab}
                  </div>
                  <div className="text-[12.5px] text-[var(--muted)] mt-1 leading-[1.5]">
                    {s.sub}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
