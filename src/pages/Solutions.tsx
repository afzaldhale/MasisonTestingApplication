import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/home/CTASection";
import { motion } from "framer-motion";
import { Thermometer, Snowflake, Wind, ChefHat, Factory, Sprout, CheckCircle } from "lucide-react";

const solutions = [
  {
    icon: Thermometer,
    title: "Industrial Refrigeration Engineering",
    desc: "Complete refrigeration system design and deployment for large-scale industrial operations, including compressor systems, evaporators, and automated controls.",
    benefits: ["Custom system design", "Energy-efficient compressors", "Automated monitoring", "24/7 reliability"],
    industries: ["Manufacturing", "Warehousing", "Processing Plants"],
  },
  {
    icon: Snowflake,
    title: "Cold Storage Infrastructure",
    desc: "Walk-in coolers, blast freezers, and warehouse-scale cold storage facilities engineered for maximum capacity and efficiency.",
    benefits: ["Multi-temperature zones", "Blast freezing capability", "Scalable architecture", "IoT monitoring"],
    industries: ["Agriculture", "Food Distribution", "Logistics"],
  },
  {
    icon: Wind,
    title: "Clean Room Engineering",
    desc: "Controlled environments with precision air filtration, temperature, and humidity management for sensitive applications.",
    benefits: ["ISO-classified environments", "HEPA filtration", "Humidity control", "Positive pressure systems"],
    industries: ["Pharmaceuticals", "Biotechnology", "Electronics"],
  },
  {
    icon: ChefHat,
    title: "Food Processing Cooling Systems",
    desc: "Cooling systems designed for frozen food manufacturing, meat processing, seafood storage, and food packaging operations.",
    benefits: ["FSSAI compliance", "Rapid cooling", "Hygiene-grade materials", "Process integration"],
    industries: ["Frozen Foods", "Meat Processing", "Seafood"],
  },
  {
    icon: Factory,
    title: "Dairy Refrigeration Plants",
    desc: "Milk chilling, pasteurization cooling, and dairy product storage infrastructure for modern dairy operations.",
    benefits: ["Rapid milk chilling", "Energy recovery systems", "CIP-compatible design", "Scalable capacity"],
    industries: ["Dairy Farms", "Processing Plants", "Distribution"],
  },
  {
    icon: Sprout,
    title: "Agricultural Storage Refrigeration",
    desc: "Post-harvest cooling, ripening chambers, and export-grade cold chain solutions for agricultural products.",
    benefits: ["Controlled atmosphere", "Ethylene management", "Pre-cooling systems", "Export compliance"],
    industries: ["Fruit Farms", "Vegetable Markets", "Export Houses"],
  },
];

const Solutions = () => (
  <Layout>
    <section className="section-padding gradient-primary">
      <div className="container-wide">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-accent">Our Solutions</span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight">
            Comprehensive Refrigeration Engineering Solutions
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/70">
            End-to-end cold chain infrastructure designed, built, and maintained by engineering experts.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide space-y-16">
        {solutions.map((sol, i) => (
          <motion.div
            key={sol.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
          >
            <div>
              <div className="w-14 h-14 rounded-lg gradient-accent flex items-center justify-center mb-6">
                <sol.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground">{sol.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{sol.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {sol.industries.map((ind) => (
                  <span key={ind} className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-medium">{ind}</span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              {sol.benefits.map((b) => (
                <div key={b} className="flex items-center gap-3 p-4 rounded-lg bg-surface-subtle">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-sm font-medium text-foreground">{b}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default Solutions;
