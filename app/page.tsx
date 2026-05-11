import Header from "../components/Header";
import Hero from "../components/Hero";
import Clients from "../components/Clients";
import Services from "../components/Services";
import WhyDubai from "../components/WhyDubai";
import FreelanceVisa from "../components/FreelanceVisa";
import ROI from "../components/ROI";
import Process from "../components/Process";
import StatsBanner from "../components/StatsBanner";
import PeopleBand from "../components/PeopleBand";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Clients />
        <Services />
        <WhyDubai />
        <FreelanceVisa />
        <ROI />
        <Process />
        <StatsBanner />
        <PeopleBand />
        <Testimonials />
        <Pricing />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
