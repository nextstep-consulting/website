"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : isMobileMenuOpen
            ? "bg-[#0A2463]/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center space-x-3 group"
            aria-label="Next Step Consulting Group - Go to homepage"
          >
            <div className="w-16 h-16 relative bg-white rounded-lg p-2">
              <Image
                src="/just-logo.png"
                alt="Next Step Consulting Group Logo"
                width={64}
                height={64}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span
                className={`text-xl font-bold transition-colors block ${
                  isScrolled
                    ? "text-[#0A2463] group-hover:text-[#7EB23F]"
                    : "text-white group-hover:text-[#7EB23F]"
                }`}
              >
                Next Step
              </span>
              <p
                className={`text-xs transition-colors ${
                  isScrolled ? "text-gray-600" : "text-blue-200"
                }`}
              >
                Consulting Group
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-[#0A2463]"
                  : "text-white hover:text-[#7EB23F]"
              }`}
            >
              Services
            </a>
            <a
              href="#about"
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-[#0A2463]"
                  : "text-white hover:text-[#7EB23F]"
              }`}
            >
              About
            </a>
            <a
              href="#pricing"
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-[#0A2463]"
                  : "text-white hover:text-[#7EB23F]"
              }`}
            >
              Pricing
            </a>
            <a
              href="#features"
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-[#0A2463]"
                  : "text-white hover:text-[#7EB23F]"
              }`}
            >
              Features
            </a>
            <a
              href="#testimonials"
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-[#0A2463]"
                  : "text-white hover:text-[#7EB23F]"
              }`}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="bg-linear-to-r from-[#7EB23F] to-[#A8D47E] text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 animate-fadeInDown ">
            <nav className="flex flex-col space-y-4">
              <a
                href="#services"
                className={`font-medium transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#0A2463]"
                    : "text-white hover:text-[#7EB23F]"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className={`font-medium transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#0A2463]"
                    : "text-white hover:text-[#7EB23F]"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#pricing"
                className={`font-medium transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#0A2463]"
                    : "text-white hover:text-[#7EB23F]"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#features"
                className={`font-medium transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#0A2463]"
                    : "text-white hover:text-[#7EB23F]"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#testimonials"
                className={`font-medium transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#0A2463]"
                    : "text-white hover:text-[#7EB23F]"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#why-choose-us"
                className={`font-medium transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#0A2463]"
                    : "text-white hover:text-[#7EB23F]"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Why Us
              </a>
              <a
                href="#contact"
                className="bg-linear-to-r from-[#7EB23F] to-[#A8D47E] text-white px-6 py-2.5 rounded-lg font-semibold text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
