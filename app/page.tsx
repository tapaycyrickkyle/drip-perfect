import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Booking from "@/components/Booking";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";

export default function Home() {
  return (
    <main>
      <div className="bg-linear-to-br from-blush to-hero-end">
        <Header />
        <Hero />
      </div>
      <TrustBar />
      <Services />
      <HowItWorks />
      <About />
      <Testimonials />
      <Faq />
      <Booking />
      <MapSection />
      <Footer />
      <FloatingChat />
    </main>
  );
}
