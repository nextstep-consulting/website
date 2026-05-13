"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "UAE Freelance Visa",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const loadingToast = toast.loading("Sending your message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success("Thanks — we'll be in touch within two business days.", {
          id: loadingToast,
        });
        setSuccess(true);
      } else {
        toast.error(data.error || "Something went wrong. Please try again.", {
          id: loadingToast,
        });
      }
    } catch {
      toast.error("Failed to send message. Please try again later.", {
        id: loadingToast,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 border-t border-[var(--line)]"
      style={{ background: "#fff" }}
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="eyebrow">Contact</div>
            <h2
              className="heading mt-3.5 mb-6"
              style={{ fontSize: "clamp(36px, 4.5vw, 60px)" }}
            >
              Let&apos;s design
              <br />
              <span className="font-serif-italic">your next step.</span>
            </h2>
            <p className="text-[17px] leading-[1.55] text-[var(--muted)] max-w-[460px] mb-9">
              Tell us where you are and where you want to be. We&apos;ll send a
              free, written plan within two business days.
            </p>
            <div className="text-sm space-y-6">
              <div>
                <span className="block font-mono text-[12px] tracking-[0.06em] uppercase text-[var(--muted)] mb-1.5">
                  Headquarters
                </span>
                <div className="font-medium text-[var(--ink)]">
                  Meydan Free Zone
                </div>
                <div className="text-[var(--muted)]">Dubai · UAE</div>
              </div>
              <div>
                <span className="block font-mono text-[12px] tracking-[0.06em] uppercase text-[var(--muted)] mb-1.5">
                  Satellite
                </span>
                <div className="font-medium text-[var(--ink)]">
                  Sanepa, Lalitpur
                </div>
                <div className="text-[var(--muted)]">Nepal</div>
              </div>
              <div>
                <span className="block font-mono text-[12px] tracking-[0.06em] uppercase text-[var(--muted)] mb-1.5">
                  Reach us
                </span>
                <a
                  href="mailto:nextstep247123@gmail.com"
                  className="block font-medium text-[var(--ink)] hover:text-[var(--green-deep)] transition-colors"
                >
                  nextstep247123@gmail.com
                </a>
                <div className="text-[var(--muted)]">
                  +977 9864272741 , +971 507375742
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-[16px] p-8 border border-[var(--line)]"
            style={{ background: "var(--cream)" }}
          >
            {!success ? (
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-[18px]">
                  <div>
                    <label className="block font-mono text-[12px] tracking-[0.06em] uppercase text-[var(--muted)] mb-2">
                      Full name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Anjali Rana"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3.5 border border-[var(--line)] rounded-[10px] text-[15px] bg-white text-[var(--ink)] focus:border-[var(--navy)] focus:ring-2 focus:ring-[#0a2540]/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[12px] tracking-[0.06em] uppercase text-[var(--muted)] mb-2">
                      Work email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3.5 border border-[var(--line)] rounded-[10px] text-[15px] bg-white text-[var(--ink)] focus:border-[var(--navy)] focus:ring-2 focus:ring-[#0a2540]/10 transition-all"
                    />
                  </div>
                </div>
                <div className="mb-[18px]">
                  <label className="block font-mono text-[12px] tracking-[0.06em] uppercase text-[var(--muted)] mb-2">
                    What can we help with?
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-3.5 border border-[var(--line)] rounded-[10px] text-[15px] bg-white text-[var(--ink)] focus:border-[var(--navy)] focus:ring-2 focus:ring-[#0a2540]/10 transition-all appearance-none"
                  >
                    <option>UAE Freelance Visa</option>
                    <option>Mainland Visa</option>
                    <option>Free Zone Visa</option>
                    <option>Business Setup</option>
                    <option>Real Estate Advisory</option>
                    <option>International Recruitment</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className="mb-[18px]">
                  <label className="block font-mono text-[12px] tracking-[0.06em] uppercase text-[var(--muted)] mb-2">
                    Tell us about your goal
                  </label>
                  <textarea
                    required
                    placeholder="I'm a designer based in Kathmandu — I'd like to relocate to Dubai on a freelance visa within the next 3 months..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3.5 border border-[var(--line)] rounded-[10px] text-[15px] bg-white text-[var(--ink)] focus:border-[var(--navy)] focus:ring-2 focus:ring-[#0a2540]/10 transition-all min-h-[140px] resize-y"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white px-4 py-4 rounded-[10px] text-[15px] font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--navy-deep)]"
                  style={{ background: "var(--navy)" }}
                >
                  {isSubmitting ? "Sending..." : "Send my plan request →"}
                </button>
                <div className="text-[12px] text-[var(--muted)] text-center mt-3.5">
                  No spam. We reply within two business days.
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center text-center min-h-[360px]"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-[24px] mb-5"
                  style={{
                    background: "var(--green)",
                    color: "var(--navy-deep)",
                  }}
                >
                  ✓
                </div>
                <h3 className="text-[24px] m-0 mb-2 text-[var(--navy-deep)] font-medium">
                  Thanks, friend.
                </h3>
                <p className="text-[var(--muted)] m-0 max-w-[360px]">
                  We&apos;ve got your details. Sneha or Ronish will be in touch
                  within two business days.
                </p>
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
