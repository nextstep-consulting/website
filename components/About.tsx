"use client";

import { motion, type Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
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

  return (
    <section
      id="about"
      className="py-24 bg-white relative overflow-hidden"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#0A2463] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#7EB23F] rounded-full blur-3xl"></div>
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
            <span className="bg-linear-to-r from-[#0A2463] to-[#06B6D4] text-white px-3 py-1 md:px-4 rounded-full text-xs md:text-sm font-semibold">
              About Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A2463] mb-4">
            Your Trusted Partner in Global Opportunities
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-[#7EB23F] to-[#06B6D4] mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
          {/* Intro */}
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            <p className="text-base md:text-xl text-gray-700 leading-relaxed">
              At Next Step Consulting Group, we specialize in providing seamless
              freelance visa solutions for professionals looking to broaden
              their horizons and tap into global opportunities. With a
              commitment to simplifying the visa application process, we empower
              freelancers to pursue their passions and enhance their careers in
              dynamic markets around the world.
            </p>
          </motion.div>

          {/* Who We Are */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <div className="order-2 md:order-1">
              <div className="bg-linear-to-br from-[#0A2463]/5 via-[#06B6D4]/5 to-transparent p-6 md:p-10 rounded-2xl md:rounded-3xl border border-[#0A2463]/10">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-linear-to-br from-[#7EB23F] to-[#A8D47E] rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0A2463] mb-3 md:mb-4">
                  Who We Are
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Founded by a team of experienced immigration consultants and
                  industry experts, we understand the unique challenges
                  freelancers face when navigating visa requirements. Our
                  mission is to provide personalized support and guidance,
                  ensuring that your journey to obtaining a two-year freelance
                  visa is as smooth and efficient as possible.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="bg-linear-to-br from-[#0A2463] to-[#1E3A8A] p-4 md:p-6 rounded-xl md:rounded-2xl text-white transform hover:scale-105 transition-transform">
                  <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">
                    2+
                  </div>
                  <div className="text-xs md:text-sm text-blue-200">
                    Years of Excellence
                  </div>
                </div>
                <div className="bg-linear-to-br from-[#7EB23F] to-[#A8D47E] p-4 md:p-6 rounded-xl md:rounded-2xl text-white transform hover:scale-105 transition-transform">
                  <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">
                    100+
                  </div>
                  <div className="text-xs md:text-sm opacity-90">
                    Happy Clients
                  </div>
                </div>
                <div className="bg-linear-to-br from-[#06B6D4] to-[#0EA5E9] p-4 md:p-6 rounded-xl md:rounded-2xl text-white transform hover:scale-105 transition-transform">
                  <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">
                    24/7
                  </div>
                  <div className="text-xs md:text-sm text-cyan-100">
                    Support Available
                  </div>
                </div>
                <div className="bg-linear-to-br from-[#1E3A8A] to-[#0A2463] p-4 md:p-6 rounded-xl md:rounded-2xl text-white transform hover:scale-105 transition-transform">
                  <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">
                    100%
                  </div>
                  <div className="text-xs md:text-sm text-blue-200">
                    Success Rate
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* What We Offer */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#0A2463] mb-6 md:mb-10 text-center">
              What We Offer
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                  title: "Expert Guidance",
                  description:
                    "Up-to-date immigration regulations and reliable advice tailored to your needs",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  ),
                  color: "from-[#0A2463] to-[#1E3A8A]",
                },
                {
                  title: "Streamlined Process",
                  description:
                    "User-friendly application process designed to save time and reduce stress",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  ),
                  color: "from-[#7EB23F] to-[#A8D47E]",
                },
                {
                  title: "Global Opportunities",
                  description:
                    "Extensive network helping you explore opportunities across industries",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  ),
                  color: "from-[#06B6D4] to-[#0EA5E9]",
                },
                {
                  title: "Ongoing Support",
                  description:
                    "From consultation to post-visa support, we're here every step of the way",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  ),
                  color: "from-[#1E3A8A] to-[#0A2463]",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="group premium-card bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg border border-gray-100 hover:border-[#7EB23F]"
                >
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 bg-linear-to-br ${service.color} rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <svg
                      className="w-6 h-6 md:w-7 md:h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {service.icon}
                    </svg>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Global Talent Partnership */}
          <motion.div
            className="bg-linear-to-br from-[#0A2463] via-[#1E3A8A] to-[#0A2463] p-6 md:p-12 rounded-2xl md:rounded-3xl text-white relative overflow-hidden"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7EB23F]/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                Our Global Talent Partnership
              </h3>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base text-blue-100 leading-relaxed">
                <p>
                  Next Step Consulting Group specializes in connecting
                  world-class organizations with top-tier talent from across the
                  globe. We excel in building diverse, high-performing teams by
                  sourcing and placing highly skilled professionals of various
                  nationalities into a wide spectrum of roles.
                </p>
                <p>
                  Our end-to-end recruitment services are designed to meet the
                  unique needs of each client, providing tailored employment
                  offers for positions ranging from specialized technical
                  experts and mid-level managers to senior leadership. We manage
                  the entire international hiring lifecycle, including
                  immigration, compliance, and seamless onboarding.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
