import { AnimatedGrid } from "@/components/ui/AnimatedGrid";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { PainSection } from "@/components/home/PainSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ProofSection } from "@/components/home/ProofSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <AnimatedGrid />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <PainSection />
        <ServicesSection />
        <ProcessSection />
        <ProofSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
