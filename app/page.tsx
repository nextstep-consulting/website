import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import About from "../components/About";
import Chairman from "../components/Chairman";
import Features from "../components/Features";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <About />
        <Chairman />
        <Features />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
