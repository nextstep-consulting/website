"use client";

import { motion, type Variants } from "framer-motion";
import { Ronish, Sneha } from "../assets/images";

const team = [
  {
    image: Ronish.src,
    nm: "Ronish Shrestha",
    ro: "Founder & Chairman",
    bio: "Sets the strategic direction at Next Step Consulting Group. Believes growth happens by design, not accident — and that every client deserves a plan they can read in one sitting.",
  },
  {
    image: Sneha.src,
    nm: "Sneha Dangol",
    ro: "Customer Rep · Strategic Planner",
    bio: "Front-line partner to every client. Translates ambition into a practical, step-by-step path — from first discovery call to bank account live in Dubai.",
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

export default function Team() {
  return (
    <section
      className="py-24"
      style={{ background: "var(--cream)" }}
      id="about"
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-[1fr_1.5fr] gap-6 md:gap-14 mb-12"
        >
          <div>
            <div className="eyebrow">About · The team</div>
            <h2 className="heading heading-lg mt-3.5">
              Two people who answer the phone.
            </h2>
          </div>
          <p className="text-[17px] leading-[1.6] text-[var(--muted)] max-w-[560px]">
            True growth doesn&apos;t happen by accident — it happens by design.
            We bring deep expertise, honest feedback, and relentless execution
            to every engagement, because your next step defines your destiny.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[920px]"
        >
          {team.map((p) => (
            <motion.div
              key={p.nm}
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
            >
              <div
                className="aspect-[3/4] rounded-[12px] overflow-hidden mb-[18px] bg-[var(--navy-deep)]"
                style={{
                  backgroundImage: `url(${p.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="text-[18px] font-medium text-[var(--navy-deep)] tracking-[-0.01em]">
                {p.nm}
              </div>
              <div
                className="text-[12.5px] mt-1 font-mono tracking-[0.04em] uppercase"
                style={{ color: "var(--green-deep)" }}
              >
                {p.ro}
              </div>
              <p className="text-[14px] leading-[1.55] text-[var(--muted)] mt-3">
                {p.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
