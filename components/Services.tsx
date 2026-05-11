"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Service = {
  num: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  icon: ReactNode;
};

const PassportIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="6"
      y="4"
      width="18"
      height="24"
      rx="2"
      stroke="#122657"
      strokeWidth="1.6"
      className="svg-stroke"
    />
    <circle
      cx="15"
      cy="13"
      r="3.5"
      stroke="#122657"
      strokeWidth="1.6"
      className="svg-stroke"
    />
    <path
      d="M10 20h10"
      stroke="#7fbf3f"
      strokeWidth="1.6"
      strokeLinecap="round"
      className="svg-accent"
    />
    <path
      d="M12 23h6"
      stroke="#7fbf3f"
      strokeWidth="1.6"
      strokeLinecap="round"
      className="svg-accent"
    />
  </svg>
);

const BriefcaseIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="4"
      y="10"
      width="24"
      height="16"
      rx="2"
      stroke="#122657"
      strokeWidth="1.6"
      className="svg-stroke"
    />
    <path
      d="M12 10V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3"
      stroke="#122657"
      strokeWidth="1.6"
      className="svg-stroke"
    />
    <line
      x1="4"
      y1="17"
      x2="28"
      y2="17"
      stroke="#7fbf3f"
      strokeWidth="1.6"
      className="svg-accent"
    />
    <rect
      x="14.5"
      y="15.5"
      width="3"
      height="3"
      fill="#122657"
      className="svg-fill"
    />
  </svg>
);

const HouseIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 14l11-9 11 9v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V14z"
      stroke="#122657"
      strokeWidth="1.6"
      strokeLinejoin="round"
      className="svg-stroke"
    />
    <path
      d="M13 28v-7h6v7"
      stroke="#7fbf3f"
      strokeWidth="1.6"
      strokeLinejoin="round"
      className="svg-accent"
    />
  </svg>
);

const PeopleIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="11"
      r="4"
      stroke="#122657"
      strokeWidth="1.6"
      className="svg-stroke"
    />
    <path
      d="M4 26c1.5-4.5 4.5-7 8-7s6.5 2.5 8 7"
      stroke="#122657"
      strokeWidth="1.6"
      strokeLinecap="round"
      className="svg-stroke"
    />
    <circle
      cx="22"
      cy="9"
      r="3"
      stroke="#7fbf3f"
      strokeWidth="1.6"
      className="svg-accent"
    />
    <path
      d="M21 15c4 0 6.5 3 7 8"
      stroke="#7fbf3f"
      strokeWidth="1.6"
      strokeLinecap="round"
      className="svg-accent"
    />
  </svg>
);

const PlaneIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 6l4 4-12 8 1 8-3 0-3-7-7-3 0-3 8 1 8-12 4 4z"
      stroke="#122657"
      strokeWidth="1.6"
      strokeLinejoin="round"
      className="svg-stroke"
    />
    <path
      d="M5 27l4-4"
      stroke="#7fbf3f"
      strokeWidth="1.6"
      strokeLinecap="round"
      className="svg-accent"
    />
  </svg>
);

const GlobeIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="16"
      cy="16"
      r="11"
      stroke="#122657"
      strokeWidth="1.6"
      className="svg-stroke"
    />
    <path
      d="M5 16h22"
      stroke="#122657"
      strokeWidth="1.6"
      className="svg-stroke"
    />
    <path
      d="M16 5c3 3 5 7 5 11s-2 8-5 11c-3-3-5-7-5-11s2-8 5-11z"
      stroke="#7fbf3f"
      strokeWidth="1.6"
      className="svg-accent"
    />
  </svg>
);

const services: Service[] = [
  {
    num: "Service 01",
    title: "Visit Visa",
    description:
      "Secure your UAE visit visa hassle-free. We handle all documentation and processing for tourist, family, and business visas with quick turnaround.",
    bullets: [
      "Tourist & family visit visas",
      "Business visit visas",
      "Fast processing times",
      "Complete documentation support",
    ],
    image:
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80",
    icon: <PassportIcon />,
  },
  {
    num: "Service 02",
    title: "Business Setup in UAE",
    description:
      "Complete company formation — mainland, freezone, and offshore. Legal documentation, licensing, and office space, all under one roof.",
    bullets: [
      "Mainland company formation",
      "Freezone business setup",
      "Offshore company registration",
      "License & PRO services",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    icon: <BriefcaseIcon />,
  },
  {
    num: "Service 03",
    title: "Real Estate",
    description:
      "Expert real estate consultancy for buying, selling, and leasing in the UAE — with market analysis, valuations, and negotiation support.",
    bullets: [
      "Residential properties",
      "Commercial investments",
      "Property management",
      "Market analysis & valuation",
    ],
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    icon: <HouseIcon />,
  },
  {
    num: "Service 04",
    title: "Human Resource",
    description:
      "Comprehensive HR solutions — recruitment, payroll, employee visas, and compliance. We handle the people layer so you can grow.",
    bullets: [
      "Talent recruitment",
      "Payroll management",
      "Employee visa processing",
      "HR compliance & consulting",
    ],
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    icon: <PeopleIcon />,
  },
  {
    num: "Service 05",
    title: "Freelance Visa Solutions",
    description:
      "Live and work in the UAE as an independent professional. Built for digital workers, creatives, and consultants who want flexibility.",
    bullets: [
      "2-year freelance residency",
      "Emirates ID with NOC",
      "Job assistance network",
      "Bank account assistance",
    ],
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80",
    icon: <PlaneIcon />,
  },
  {
    num: "Service 06",
    title: "International Recruitment",
    description:
      "Connecting world-class organizations with top-tier talent. End-to-end international hiring — immigration, compliance, and onboarding.",
    bullets: [
      "Verified candidate sourcing",
      "End-to-end placement",
      "Immigration & compliance",
      "Onboarding support",
    ],
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    icon: <GlobeIcon />,
  },
];

const grid: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section className="py-24" id="services">
      <style>{`
        .service-card { transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease; }
        .service-card:hover {
          transform: translateY(-4px);
          border-color: rgba(18,38,87,0.2);
          box-shadow: 0 16px 40px -20px rgba(10,16,40,0.18), 0 2px 6px rgba(10,16,40,0.04);
        }
        .service-card .svc-icon { transition: background 0.25s ease, transform 0.25s ease; }
        .service-card:hover .svc-icon { background: var(--navy); transform: rotate(-4deg); }
        .service-card:hover .svg-stroke { stroke: #fff; }
        .service-card:hover .svg-accent { stroke: var(--green); }
        .service-card:hover .svg-fill { fill: var(--green); }
        .service-card .svc-arr { transition: all 0.2s ease; }
        .service-card:hover .svc-arr { background: var(--navy); color: #fff; transform: translateX(3px); }
      `}</style>

      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 items-end mb-12"
        >
          <div>
            <div className="eyebrow">Our Services</div>
            <h2 className="heading heading-lg mt-3.5">
              Comprehensive solutions
              <br />
              for your <span className="font-serif-italic">success.</span>
            </h2>
          </div>
          <p className="text-[17px] leading-[1.55] text-[var(--muted)] max-w-[540px]">
            From visa processing to business setup, we provide end-to-end
            services to help you thrive in the UAE — expertly handled,
            transparently priced.
          </p>
        </motion.div>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={card}
              className="service-card bg-white border border-[var(--line)] rounded-[16px] overflow-hidden flex flex-col"
            >
              <div
                className="relative aspect-[16/10] bg-[#0a1538]"
                style={{
                  backgroundImage: `url(${s.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(18,38,87,0.08) 0%, rgba(18,38,87,0.55) 100%)",
                  }}
                />
                <span
                  className="absolute top-4 left-4 z-[2] font-mono text-[11px] tracking-[0.14em] uppercase text-white/85 px-2.5 py-1 rounded-full"
                  style={{
                    background: "rgba(10,16,40,0.35)",
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                  }}
                >
                  {s.num}
                </span>
                <span
                  className="svc-icon absolute -bottom-7 right-6 z-[3] w-16 h-16 rounded-[16px] bg-white border border-[var(--line)] inline-flex items-center justify-center"
                  style={{
                    boxShadow: "0 8px 24px -8px rgba(10,16,40,0.25)",
                  }}
                >
                  {s.icon}
                </span>
              </div>

              <div className="px-7 pt-[38px] pb-7 flex flex-col flex-1">
                <h3 className="heading heading-md mb-2.5">{s.title}</h3>
                <p className="text-[14.5px] leading-[1.55] text-[var(--muted)] mb-5 flex-1">
                  {s.description}
                </p>
                <ul className="list-none p-0 m-0 mb-5 flex flex-col gap-2">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2.5 text-[13.5px] text-[var(--ink)]"
                    >
                      <span className="shrink-0 w-3.5 h-px bg-[var(--green)] inline-block"></span>
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="flex items-center justify-between pt-[18px] border-t border-[var(--line)] text-[13.5px] font-medium text-[var(--navy-deep)]"
                >
                  Learn more
                  <span
                    className="svc-arr w-7 h-7 rounded-full bg-[var(--cream)] inline-flex items-center justify-center text-[var(--navy)] text-[13px]"
                  >
                    →
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-8 rounded-[16px] border border-[var(--line)] p-8 md:px-9 flex items-center justify-between gap-6 flex-wrap"
          style={{ background: "var(--cream)" }}
        >
          <div>
            <h3 className="heading text-[22px] m-0 mb-1.5">
              Need a custom solution?
            </h3>
            <p className="m-0 text-[14.5px] text-[var(--muted)]">
              We&apos;re here to help you with tailored services that meet
              your unique needs.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary">
            Contact us today <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
