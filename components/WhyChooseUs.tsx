export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Transparency",
      description:
        "We pride ourselves on open communication and transparency, ensuring you are informed throughout the entire process.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      ),
      gradient: "from-[#0A2463] to-[#1E3A8A]",
    },
    {
      title: "Tailored Solutions",
      description:
        "Every freelancer is unique, and we take the time to understand your individual goals and aspirations, crafting solutions that align with your vision.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      ),
      gradient: "from-[#7EB23F] to-[#A8D47E]",
    },
    {
      title: "Success Stories",
      description:
        "Join countless satisfied clients who have successfully obtained their freelance visas and embarked on exciting new journeys with our support.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      ),
      gradient: "from-[#06B6D4] to-[#0EA5E9]",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-24 bg-linear-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#06B6D4] rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 right-10 w-72 h-72 bg-[#7EB23F] rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block mb-4">
            <span className="bg-linear-to-r from-[#0A2463] to-[#06B6D4] text-white px-4 py-1 rounded-full text-sm font-semibold">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-4">
            Your Partners in Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are more than just a visa service; we are your partners in
            achieving your freelance dreams
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group premium-card bg-white p-8 rounded-3xl shadow-xl border-2 border-gray-100 hover:border-[#7EB23F] relative overflow-hidden animate-fadeInUp animate-delay-${
                (index + 1) * 100
              }`}
            >
              {/* Hover Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10">
                <div
                  className={`w-16 h-16 bg-linear-to-br ${reason.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {reason.icon}
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#0A2463] transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
