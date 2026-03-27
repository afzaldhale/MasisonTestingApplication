import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import TrustIndicators from "@/components/home/TrustIndicators";
import IndustriesSection from "@/components/home/IndustriesSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import ProcessSection from "@/components/home/ProcessSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import WhyMasisonSection from "@/components/home/WhyMasisonSection";
import CTASection from "@/components/home/CTASection";

const Index = () => (
  <Layout>
    <HeroSection />
    <TrustIndicators />
    <IndustriesSection />
    <SolutionsSection />
    <ProcessSection />
    <ProjectsSection />
    <WhyMasisonSection />
    <CTASection />
  </Layout>
);

export default Index;
