import Layout from "@/components/layout/Layout";
import CTASection from "@/components/home/CTASection";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";

const industryData: Record<string, { title: string; description: string; challenges: string[]; solutions: string[]; benefits: string[]; useCases: string[] }> = {
  agriculture: {
    title: "Agricultural Refrigeration",
    description: "Masison engineers cold chain infrastructure that protects India's agricultural produce from farm to market, reducing post-harvest losses and enabling export-grade storage.",
    challenges: ["High post-harvest losses due to inadequate cold chain", "Temperature variations during transport and storage", "Lack of rural cold storage infrastructure", "Compliance with export quality standards"],
    solutions: ["Pre-cooling systems for rapid field heat removal", "Controlled atmosphere storage for extended shelf life", "Ripening chambers with ethylene management", "Multi-commodity cold storage facilities"],
    benefits: ["Up to 40% reduction in post-harvest losses", "Extended produce shelf life by 2-5x", "Export quality compliance", "Energy-efficient operations"],
    useCases: ["Fruit cold storage facilities", "Vegetable pre-cooling centers", "Seed storage infrastructure", "Export logistics cold chain"],
  },
  pharmaceuticals: {
    title: "Pharmaceutical Cold Storage",
    description: "Masison delivers GDP-compliant cold chain infrastructure for the pharmaceutical industry, ensuring product integrity from manufacturing to distribution.",
    challenges: ["Strict temperature compliance requirements (2-8°C)", "WHO/GDP regulatory compliance", "Cold chain integrity during distribution", "Clean room environmental control"],
    solutions: ["Precision temperature-controlled storage rooms", "Real-time monitoring and alert systems", "Clean room integration with HVAC", "Validated cold chain logistics infrastructure"],
    benefits: ["99.9% temperature compliance achievement", "Full regulatory compliance", "Reduced product wastage", "Automated documentation and reporting"],
    useCases: ["Vaccine storage and distribution", "Medicine warehousing", "Biotech cold storage", "Laboratory cold rooms"],
  },
  "food-processing": {
    title: "Food Processing Cooling Systems",
    description: "Masison engineers industrial cooling systems for food processing operations, ensuring food safety compliance and operational efficiency.",
    challenges: ["FSSAI and international food safety compliance", "Rapid cooling requirements for perishable products", "Energy-intensive cooling operations", "Hygiene-grade infrastructure standards"],
    solutions: ["Blast freezing and IQF systems", "Process cooling integration", "Cold storage for raw materials and finished goods", "Ammonia and CO2 refrigeration systems"],
    benefits: ["Full FSSAI compliance", "Reduced energy consumption by 25-30%", "Extended product shelf life", "Consistent product quality"],
    useCases: ["Frozen food manufacturing", "Meat and poultry processing", "Seafood cold storage", "Food packaging cold chain"],
  },
  dairy: {
    title: "Dairy Refrigeration Systems",
    description: "Masison builds complete dairy refrigeration infrastructure from milk collection chilling to processing plant cooling and cold storage.",
    challenges: ["Rapid milk chilling within 3 hours of collection", "High energy costs in dairy processing", "Maintaining cold chain from farm to consumer", "Scaling capacity with seasonal variations"],
    solutions: ["Bulk milk chilling systems (2,000-50,000 LPD)", "Plate and tubular heat exchangers", "Glycol-based cooling systems", "Ice bank systems for peak load management"],
    benefits: ["30% energy savings through heat recovery", "Extended raw milk shelf life", "Consistent product quality", "Scalable infrastructure"],
    useCases: ["Milk chilling centers", "Dairy processing plants", "Ice cream manufacturing", "Cheese and yogurt production"],
  },
  "cold-storage": {
    title: "Cold Storage Warehousing",
    description: "Masison designs and builds large-scale cold storage warehousing facilities with multi-temperature zones and advanced monitoring.",
    challenges: ["Multi-commodity storage requirements", "High energy consumption", "Temperature zone management", "Capacity optimization"],
    solutions: ["Multi-temperature zone design", "Energy-efficient insulation systems", "IoT-based monitoring platforms", "Automated inventory management"],
    benefits: ["Optimal space utilization", "40% energy savings", "Real-time temperature monitoring", "Scalable capacity"],
    useCases: ["Multi-commodity cold storage", "Distribution hub cold rooms", "Frozen storage warehouses", "Temperature-controlled logistics"],
  },
  sericulture: {
    title: "Sericulture Environmental Systems",
    description: "Masison provides precision environmental control systems for silkworm rearing houses and cocoon storage facilities.",
    challenges: ["Precise temperature and humidity control", "Seasonal environmental variations", "Ventilation and air quality management", "Energy efficiency in rural areas"],
    solutions: ["Climate-controlled rearing houses", "Cocoon cold storage systems", "Automated ventilation systems", "Solar-powered cooling solutions"],
    benefits: ["Improved cocoon quality", "Year-round production capability", "Reduced mortality rates", "Energy-efficient operations"],
    useCases: ["Silkworm rearing houses", "Cocoon cold storage", "Reeling unit cooling", "Seed production facilities"],
  },
};

const IndustryDetail = () => {
  const { slug } = useParams();
  const data = industryData[slug || ""] || industryData.agriculture;

  return (
    <Layout>
      <section className="section-padding gradient-primary">
        <div className="container-wide">
          <Link to="/industries" className="inline-flex items-center gap-2 text-sm text-accent mb-6 hover:underline">
            <ArrowLeft className="w-4 h-4" /> All Industries
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight">{data.title}</h1>
            <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed">{data.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Industry Challenges</h2>
            <div className="space-y-3">
              {data.challenges.map((c) => (
                <div key={c} className="flex items-start gap-3 p-4 rounded-lg bg-destructive/5 border border-destructive/10">
                  <span className="w-2 h-2 rounded-full bg-destructive mt-2 shrink-0" />
                  <span className="text-sm text-foreground">{c}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Masison Solutions</h2>
            <div className="space-y-3">
              {data.solutions.map((s) => (
                <div key={s} className="flex items-start gap-3 p-4 rounded-lg bg-accent/5 border border-accent/10">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-subtle">
        <div className="container-wide">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.benefits.map((b, i) => (
              <motion.div key={b} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-industrial p-6 text-center">
                <p className="text-sm font-semibold text-foreground">{b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-3xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">Use Cases</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.useCases.map((u) => (
              <div key={u} className="flex items-center gap-3 p-4 rounded-lg border border-border">
                <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">{u}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default IndustryDetail;
