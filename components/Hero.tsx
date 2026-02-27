"use client";

import { motion, type Variants } from "framer-motion";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const statsVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0A2463] via-[#1E3A8A] to-[#0A2463]">
        {/* Animated Circles */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#06B6D4] rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-[#7EB23F] rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-20 w-72 h-72 bg-[#06B6D4] rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            y: [0, -15, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8"
          >
            <motion.span
              className="w-2 h-2 bg-[#7EB23F] rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <span className="text-white/90 text-sm font-medium">
              Your Global Talent Partner
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Welcome to{" "}
            <span className="block mt-2 bg-gradient-to-r from-[#7EB23F] via-[#A8D47E] to-[#06B6D4] bg-clip-text text-transparent">
              Next Step Consulting Group
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-blue-100 mb-6 max-w-3xl mx-auto"
          >
            Seamless Freelance Visa Solutions & International Recruitment
            Excellence
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-blue-200/90 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            We specialize in connecting world-class organizations with top-tier
            talent from across the globe, while empowering freelancers to pursue
            their passions in dynamic international markets.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center w-full max-w-2xl mx-auto"
          >
            <motion.a
              href="#services"
              className="group relative flex items-center justify-center gap-2 bg-linear-to-r from-[#7EB23F] to-[#A8D47E] text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-[#7EB23F]/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore Services</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
            <motion.a
              href="#contact"
              className="group flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Contact Us</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto"
          >
            {[
              { value: "2+", label: "Years Experience" },
              { value: "100%", label: "Success Rate" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className={`text-center ${
                  index === 1 ? "border-x border-white/20" : ""
                }`}
                variants={statsVariants}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-[#7EB23F] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
