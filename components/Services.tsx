"use client";

import { motion, type Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
    margin: "0px 0px -100px 0px",
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const services = [
    {
      id: 1,
      title: "Visit Visa",
      description:
        "Secure your UAE visit visa hassle-free. We handle all documentation and processing for tourist, family, and business visit visas with quick turnaround times. Our expert team ensures a smooth application process, from initial consultation to visa approval, making your travel plans stress-free and efficient.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      ),
      image: "/visit-visa.png",
      gradient: "from-[#0A2463] to-[#1E3A8A]",
      features: [
        "Tourist & Family Visit Visas",
        "Business Visit Visas",
        "Fast Processing Times",
        "Complete Documentation Support",
      ],
    },
    {
      id: 2,
      title: "Business Setup in UAE",
      description:
        "Complete business setup solutions in UAE. From company registration to licensing, we guide you through mainland, freezone, and offshore company formation. Our comprehensive services cover everything from legal documentation to office space solutions, ensuring your business gets off to the perfect start.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      ),
      image: "/business-setup.png",
      gradient: "from-[#7EB23F] to-[#A8D47E]",
      features: [
        "Mainland Company Formation",
        "Freezone Business Setup",
        "Offshore Company Registration",
        "License & PRO Services",
      ],
    },
    {
      id: 3,
      title: "Real Estate",
      description:
        "Expert real estate consultancy for buying, selling, and leasing properties in UAE. We help you find the perfect residential or commercial property investment. Our team of experienced consultants provides comprehensive market analysis, property valuations, and negotiation support to ensure you make informed decisions.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      ),
      image: "/real-estate.png",
      gradient: "from-[#06B6D4] to-[#0EA5E9]",
      features: [
        "Residential Properties",
        "Commercial Investments",
        "Property Management",
        "Market Analysis & Valuation",
      ],
    },
    {
      id: 4,
      title: "Human Resource",
      description:
        "Comprehensive HR solutions including recruitment, payroll management, employee visa processing, and compliance. Building strong teams for your business success. We handle all aspects of human resource management, allowing you to focus on growing your business while we take care of your most valuable asset - your people.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
      image: "/human-resource.png",
      gradient: "from-[#1E3A8A] to-[#0A2463]",
      features: [
        "Talent Recruitment",
        "Payroll Management",
        "Employee Visa Processing",
        "HR Compliance & Consulting",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-white relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#7EB23F] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#06B6D4] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <span className="bg-linear-to-r from-[#0A2463] to-[#06B6D4] text-white px-4 py-1 rounded-full text-sm font-semibold">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-4">
            Comprehensive Solutions for Your Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From visa processing to business setup, we provide end-to-end
            services to help you thrive in the UAE
          </p>
        </motion.div>

        {/* Services List */}
        <motion.div
          className="max-w-7xl mx-auto space-y-16 md:space-y-24"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center`}
              variants={itemVariants}
            >
              {/* Image - Left for even, Right for odd */}
              <div
                className={`relative ${
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl group">
                  {/* Image */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/5 to-transparent"></div>

                  {/* Icon Badge */}
                  <div
                    className={`absolute top-4 left-4 md:top-6 md:left-6 w-12 h-12 md:w-16 md:h-16 bg-linear-to-br ${service.gradient} backdrop-blur-md rounded-xl md:rounded-2xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {service.icon}
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content - Right for even, Left for odd */}
              <div
                className={`${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}
              >
                <div className="mb-4 md:mb-6">
                  <span
                    className={`inline-block px-3 py-1 md:px-4 rounded-full text-xs md:text-sm font-semibold bg-linear-to-r ${service.gradient} text-white mb-3 md:mb-4`}
                  >
                    Service {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A2463] mb-3 md:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div
                        className={`shrink-0 w-6 h-6 bg-linear-to-br ${service.gradient} rounded-full flex items-center justify-center`}
                      >
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-sm md:text-base text-gray-700 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 text-[#0A2463] font-semibold hover:gap-3 transition-all duration-300"
                  aria-label={`Learn more about ${service.title} services`}
                >
                  <span className="border-b-2 border-[#0A2463]">
                    Learn More
                  </span>
                  <svg
                    className="w-5 h-5"
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
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <div className="text-center mt-24 animate-fadeInUp animate-delay-500">
          <div className="bg-linear-to-br from-[#0A2463] via-[#1E3A8A] to-[#0A2463] rounded-3xl p-12 max-w-full mx-auto shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              We&apos;re here to help you with tailored services that meet your
              unique needs
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-linear-to-r from-[#7EB23F] to-[#A8D47E] text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-[#7EB23F]/50 hover:scale-105 transition-all duration-300"
            >
              <span>Contact Us Today</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
