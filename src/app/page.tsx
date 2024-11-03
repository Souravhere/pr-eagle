import AboutEagles from "@/components/AboutEagles";
import ContractAddress from "@/components/ContractAddress";
import CtaSection from "@/components/Ctasectionl";
import { TimelineDemo } from "@/components/Eagletilmline";
import { FeaturesSection } from "@/components/FeaturesSection";
import LearnMoreEagles from "@/components/LearnMoreEagles";
import { MissionVisionSection } from "@/components/Meteors";
import EnhancedHeroSection from "@/components/Newhero";
import { NumberTickerCounter } from "@/components/NumberTickerComp";
import { Powredby } from "@/components/Powredby";
import HowToBuyEagles from "@/components/StepCard";
import { TextRevealDemo } from "@/components/TextReveal";

export default function Home() {
  return (
    <div>
      <EnhancedHeroSection/>
      <TextRevealDemo/>
      <NumberTickerCounter/>
      <AboutEagles/>
      <LearnMoreEagles/>
      <MissionVisionSection/>
      <FeaturesSection/>
      <Powredby/>
      <TimelineDemo/>
      <HowToBuyEagles/>
      <ContractAddress/>
      <CtaSection/>
    </div>
  );
}
