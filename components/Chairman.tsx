"use client";

import { motion, type Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Chairman() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
    margin: "0px 0px -100px 0px",
  });

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="chairman"
      className="py-24 bg-linear-to-br from-[#0A2463] via-[#1E3A8A] to-[#0A2463] relative overflow-hidden"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-80 h-80 bg-[#06B6D4] rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#7EB23F] rounded-full blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/2 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="inline-block mb-3 md:mb-4">
            <span className="bg-linear-to-r from-[#7EB23F] to-[#06B6D4] text-white px-3 py-1 md:px-4 rounded-full text-xs md:text-sm font-semibold">
              Leadership
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Message from the Chairman
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-[#7EB23F] to-[#06B6D4] mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
            {/* Chairman Image */}
            <motion.div
              className="md:col-span-2 flex justify-center"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInLeft}
              transition={{ delay: 0.2 }}
            >
              <div className="relative">
                {/* Decorative border ring */}
                <div className="absolute -inset-3 bg-linear-to-br from-[#7EB23F] via-[#06B6D4] to-[#7EB23F] rounded-2xl md:rounded-3xl opacity-30 blur-sm"></div>
                <div className="relative bg-linear-to-br from-[#0A2463]/50 to-[#1E3A8A]/50 p-1.5 rounded-2xl md:rounded-3xl backdrop-blur-sm border border-white/10">
                  <div className="relative w-64 h-80 sm:w-72 sm:h-88 md:w-80 md:h-104 rounded-xl md:rounded-2xl overflow-hidden">
                    <Image
                      src="/chairman.jpeg"
                      alt="Ronish Shrestha - Chairman & Founder"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 256px, 320px"
                    />
                  </div>
                  {/* Name badge */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-[#0A2463] to-[#1E3A8A] border border-white/20 rounded-xl px-5 py-2.5 text-center shadow-xl backdrop-blur-sm">
                    <p className="text-white font-bold text-sm md:text-base text-nowrap">
                      Ronish Shrestha
                    </p>
                    <p className="text-[#06B6D4] text-xs md:text-sm font-medium text-nowrap">
                      Chairman (Founder)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Message Content */}
            <motion.div
              className="md:col-span-3 mt-8 md:mt-0"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInRight}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-white/6 backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-10 relative">
                {/* Quote icon */}
                <div className="absolute -top-4 -left-2 md:-top-5 md:-left-3">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-linear-to-br from-[#7EB23F] to-[#A8D47E] rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-5 h-5 md:w-7 md:h-7 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                    </svg>
                  </div>
                </div>

                <div className="space-y-4 md:space-y-5 pt-4 md:pt-6">
                  <p className="text-white/90 text-base md:text-lg leading-relaxed italic font-light">
                    True growth doesn&apos;t happen by accident—it happens by
                    design.
                  </p>
                  <p className="text-white/75 text-sm md:text-base leading-relaxed">
                    At Next Step Consulting Group, we help leaders design their
                    future. We cut through the noise to find the signal, turning
                    complex challenges into clear, strategic advantages.
                  </p>
                  <p className="text-white/75 text-sm md:text-base leading-relaxed">
                    Our promise to you is simple: We will bring deep expertise,
                    honest feedback, and relentless execution to every
                    engagement. Because your next step defines your destiny.
                    Let&apos;s make it count.
                  </p>
                </div>

                {/* Signature */}
                <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-0.5 bg-linear-to-r from-[#7EB23F] to-[#06B6D4] rounded-full"></div>
                    <div>
                      <p className="text-white font-bold text-base md:text-lg">
                        Ronish Shrestha
                      </p>
                      <p className="text-[#06B6D4] text-xs md:text-sm font-medium">
                        Chairman, Next Step Consulting Group
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
