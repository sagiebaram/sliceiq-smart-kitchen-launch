import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Features from "@/components/Features";
import Positioning from "@/components/Positioning";
import Pricing from "@/components/Pricing";
import WaitlistCTA from "@/components/WaitlistCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <PainPoints />
      <Features />
      <Positioning />
      <Pricing />
      <WaitlistCTA />
      <Footer />
    </div>
  );
};

export default Index;
