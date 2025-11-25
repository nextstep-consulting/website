import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0A2463] via-[#1E3A8A] to-[#0A2463]">
        {/* Animated Circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#06B6D4] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-[#7EB23F] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute -bottom-8 left-20 w-72 h-72 bg-[#06B6D4] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Grid Pattern Overlay */}
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div> */}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8 animate-fadeInDown animate-delay-100">
            <span className="w-2 h-2 bg-[#7EB23F] rounded-full animate-pulse"></span>
            <span className="text-white/90 text-sm font-medium">
              Your Global Talent Partner
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fadeInUp animate-delay-200">
            Welcome to{" "}
            <span className="block mt-2 bg-gradient-to-r from-[#7EB23F] via-[#A8D47E] to-[#06B6D4] bg-clip-text text-transparent">
              Next Step Consulting Group
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 mb-6 max-w-3xl mx-auto animate-fadeInUp animate-delay-300">
            Seamless Freelance Visa Solutions & International Recruitment
            Excellence
          </p>

          {/* Description */}
          <p className="text-lg text-blue-200/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animate-delay-400">
            We specialize in connecting world-class organizations with top-tier
            talent from across the globe, while empowering freelancers to pursue
            their passions in dynamic international markets.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center animate-fadeInUp animate-delay-500 w-full max-w-2xl mx-auto">
            <a
              href="#services"
              className="group relative flex items-center justify-center gap-2 bg-linear-to-r from-[#7EB23F] to-[#A8D47E] text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-[#7EB23F]/50 transition-all duration-300 hover:scale-105"
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
            </a>
            <a
              href="#contact"
              className="group flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105"
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
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto animate-fadeInUp animate-delay-400">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#7EB23F] mb-2">
                2+
              </div>
              <div className="text-sm text-blue-200">Years Experience</div>
            </div>
            <div className="text-center border-x border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-[#7EB23F] mb-2">
                100%
              </div>
              <div className="text-sm text-blue-200">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#7EB23F] mb-2">
                24/7
              </div>
              <div className="text-sm text-blue-200">Support</div>
            </div>
          </div>
        </div>
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
