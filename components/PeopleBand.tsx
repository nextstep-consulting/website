"use client";

import { motion } from "framer-motion";
import { Group1, Group2 } from "../assets/images";

export default function PeopleBand() {
  return (
    <section
      className="py-24 border-y border-[var(--line)]"
      style={{ background: "#fff" }}
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="eyebrow">Inside Next Step</div>
            <h2 className="heading heading-lg mt-3.5">
              Real people.
              <br />
              <span className="font-serif-italic">Real plans.</span>
            </h2>
            <p className="text-[17px] leading-[1.6] text-[var(--muted)] max-w-[480px] mt-5">
              No call centres. No outsourced agents. Every plan is drafted at
              our desks in Lalitpur and Meydan, then walked through with you —
              line by line, until it makes sense.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-10 pt-7 border-t border-[var(--line)]">
              <div>
                <div
                  className="font-serif-italic text-[48px] leading-none tracking-[-0.03em] text-[var(--navy-deep)]"
                >
                  2
                </div>
                <div className="font-mono text-[13px] tracking-[0.06em] uppercase text-[var(--muted)] mt-2">
                  Offices
                </div>
                <div className="text-[14px] text-[var(--ink)] mt-1.5">
                  Sanepa, Lalitpur · Meydan FZ, Dubai
                </div>
              </div>
              <div>
                <div
                  className="font-serif-italic text-[48px] leading-none tracking-[-0.03em] text-[var(--navy-deep)]"
                >
                  48h
                </div>
                <div className="font-mono text-[13px] tracking-[0.06em] uppercase text-[var(--muted)] mt-2">
                  Reply window
                </div>
                <div className="text-[14px] text-[var(--ink)] mt-1.5">
                  Written plan within two business days
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative aspect-[5/4] hidden lg:block"
          >
            <div
              className="absolute rounded-[16px]"
              style={{
                inset: "0 8% 12% 0",
                backgroundImage: `url(${Group1.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0 24px 48px -24px rgba(10,16,40,0.3)",
              }}
            />
            <div
              className="absolute rounded-[16px]"
              style={{
                inset: "22% 0 0 38%",
                backgroundImage: `url(${Group2.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "6px solid #fff",
                boxShadow: "0 24px 48px -24px rgba(10,16,40,0.3)",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:hidden aspect-[4/3] rounded-[16px] bg-[var(--navy-deep)]"
            style={{
              backgroundImage: `url(${Group1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
    </section>
  );
}
