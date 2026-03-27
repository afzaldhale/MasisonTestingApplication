import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Wheat, Pill, UtensilsCrossed, Milk, Warehouse, Bug } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";

const industries = [
  { icon: Wheat, title: "Agriculture", desc: "Cold storage for fruits, vegetables, seeds, and export logistics.", path: "/industries/agriculture" },
  { icon: Pill, title: "Pharmaceuticals", desc: "Precision temperature control for vaccines, medicines, and biotech.", path: "/industries/pharmaceuticals" },
  { icon: UtensilsCrossed, title: "Food Processing", desc: "Industrial cooling for frozen food, meat, and seafood processing.", path: "/industries/food-processing" },
  { icon: Milk, title: "Dairy Processing", desc: "Milk chilling plants, processing facilities, and storage systems.", path: "/industries/dairy" },
  { icon: Warehouse, title: "Cold Storage", desc: "Large-scale warehousing with advanced refrigeration infrastructure.", path: "/industries/cold-storage" },
  { icon: Bug, title: "Sericulture", desc: "Environmental control systems for silk production facilities.", path: "/industries/sericulture" },
];

const IndustriesSection = () => (
  <section className="section-padding bg-surface-subtle">
    <div className="container-wide">
      <SectionHeading
        label="Industries We Serve"
        title="Specialized Refrigeration Across Industries"
        description="Every industry demands unique engineering solutions. Masison delivers precision-engineered infrastructure tailored to your sector."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Link to={ind.path} className="block card-industrial p-8 group h-full">
              <ind.icon className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-heading font-bold text-foreground group-hover:text-accent transition-colors">{ind.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
              <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-accent">
                Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
