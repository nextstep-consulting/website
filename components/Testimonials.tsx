"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Al Mansoori",
      role: "Business Owner",
      company: "Al Mansoori Trading LLC",
      image: "/testimonial-1.jpg",
      rating: 5,
      text: "Next Step Consulting Group made our business setup in Dubai incredibly smooth. Their expertise in freezone company formation saved us time and money. Highly professional team!",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Expat Professional",
      company: "Marketing Consultant",
      image: "/testimonial-2.jpg",
      rating: 5,
      text: "I needed a visit visa for my family, and they processed everything within days. The team was responsive, knowledgeable, and made the whole process stress-free. Excellent service!",
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      role: "Entrepreneur",
      company: "Tech Startup Founder",
      image: "/testimonial-3.jpg",
      rating: 5,
      text: "Their HR solutions helped us build a strong team from scratch. From recruitment to visa processing, they handled everything professionally. Best consulting group in UAE!",
    },
    {
      id: 4,
      name: "Emma Williams",
      role: "Property Investor",
      company: "Real Estate Portfolio",
      image: "/testimonial-4.jpg",
      rating: 5,
      text: "Invested in Dubai properties through their real estate consultancy. Their market analysis and guidance were invaluable. Made excellent returns on my investment!",
    },
    {
      id: 5,
      name: "Mohammed Hassan",
      role: "Corporate Manager",
      company: "Hassan Group",
      image: "/testimonial-5.jpg",
      rating: 5,
      text: "We've been working with Next Step for over 2 years for our PRO services. They handle all our licensing and compliance needs efficiently. Truly a reliable partner!",
    },
    {
      id: 6,
      name: "Lisa Chen",
      role: "Freelancer",
      company: "Graphic Designer",
      image: "/testimonial-6.jpg",
      rating: 5,
      text: "Got my freelance visa processed quickly and professionally. The team explained every step clearly and made the entire process easy to understand. Thank you!",
    },
  ];

  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="py-24 bg-linear-to-br from-gray-50 to-white relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7EB23F]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#06B6D4]/5 rounded-full blur-3xl"></div>

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
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied
            clients who have experienced our exceptional service
          </p>
        </motion.div>

        {/* Horizontal Sliding Testimonials */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -100 * testimonials.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="bg-white rounded-2xl p-8 border border-gray-100 shrink-0 w-[400px]  duration-300"
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#7EB23F]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="shrink-0 w-14 h-14 bg-linear-to-br from-[#0A2463] to-[#1E3A8A] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A2463]">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <p className="text-sm text-gray-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "1000+", label: "Visas Processed" },
            { number: "200+", label: "Businesses Setup" },
            { number: "4.9/5", label: "Client Rating" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
