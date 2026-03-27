import { motion } from "framer-motion";
import { Thermometer, Snowflake, Wind, ChefHat, Factory, Sprout } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";

const solutions = [
  { icon: Thermometer, title: "Industrial Refrigeration Engineering", desc: "Complete refrigeration system design and deployment for large-scale industrial operations." },
  { icon: Snowflake, title: "Cold Storage Infrastructure", desc: "Walk-in coolers, blast freezers, and warehouse-scale cold storage facilities." },
  { icon: Wind, title: "Clean Room Engineering", desc: "Controlled environments with precision air filtration, temperature, and humidity management." },
  { icon: ChefHat, title: "Food Processing Cooling", desc: "Cooling systems for frozen food manufacturing, meat processing, and packaging plants." },
  { icon: Factory, title: "Dairy Refrigeration Plants", desc: "Milk chilling, pasteurization cooling, and dairy product storage infrastructure." },
  { icon: Sprout, title: "Agricultural Storage Refrigeration", desc: "Post-harvest cooling, ripening chambers, and export-grade cold chain solutions." },
];

const SolutionsSection = () => (
  <section className="section-padding">
    <div className="container-wide">
      <SectionHeading
        label="Engineering Solutions"
        title="End-to-End Refrigeration Capabilities"
        description="From initial consultation to long-term maintenance, Masison delivers comprehensive cold chain engineering solutions."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((sol, i) => (
          <motion.div
            key={sol.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="card-industrial p-8 group"
          >
            <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-5">
              <sol.icon className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="text-lg font-heading font-bold text-foreground">{sol.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{sol.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsSection;
