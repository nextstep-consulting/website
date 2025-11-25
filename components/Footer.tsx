import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-b from-[#0A2463] via-[#1E3A8A] to-[#0A2463] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#7EB23F] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#06B6D4] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 py-16 border-b border-white/10">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 relative bg-white rounded-lg p-2">
                <Image
                  src="/logo.png"
                  alt="Next Step Consulting Group Logo"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Next Step</h3>
                <p className="text-sm text-blue-200">Consulting Group</p>
              </div>
            </div>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Your Global Talent Partner for seamless freelance visa solutions
              and international recruitment services. Empowering professionals
              to achieve their dreams worldwide.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                {
                  name: "Facebook",
                  icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
                },
                {
                  name: "LinkedIn",
                  icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
                },
                {
                  name: "Twitter",
                  icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-linear-to-br hover:from-[#7EB23F] hover:to-[#A8D47E] hover:text-[#0A2463] transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
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
                      d={social.icon}
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#7EB23F]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["About Us", "Pricing", "Why Choose Us", "Contact"].map(
                (link, index) => (
                  <li key={index}>
                    <a
                      href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                      className="text-blue-200 hover:text-[#7EB23F] transition-colors flex items-center group"
                    >
                      <svg
                        className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#7EB23F]">
              Our Services
            </h4>
            <ul className="space-y-3 text-blue-200">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 text-[#06B6D4] shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Freelance Visa Solutions</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 text-[#06B6D4] shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>International Recruitment</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 text-[#06B6D4] shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Immigration Consulting</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 text-[#06B6D4] shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Global Talent Partnership</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-200 text-sm">
              © {currentYear} Next Step Consulting Group. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-blue-200 hover:text-[#7EB23F] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-[#7EB23F] transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-[#7EB23F] transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
