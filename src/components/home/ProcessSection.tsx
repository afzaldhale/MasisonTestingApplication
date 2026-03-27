import { motion } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";

const steps = [
  { num: "01", title: "Consultation", desc: "Understanding your project requirements and objectives." },
  { num: "02", title: "Site Evaluation", desc: "Technical inspection and environmental analysis." },
  { num: "03", title: "Engineering Design", desc: "Customized refrigeration system planning and blueprinting." },
  { num: "04", title: "Infrastructure Installation", desc: "Construction and system deployment by expert teams." },
  { num: "05", title: "Testing & Commissioning", desc: "Performance validation and quality control protocols." },
  { num: "06", title: "Maintenance & Support", desc: "Long-term operational reliability and service." },
];

const ProcessSection = () => (
  <section className="section-padding gradient-primary">
    <div className="container-wide">
      <SectionHeading
        label="Our Process"
        title="Engineering Process"
        description="A systematic approach to delivering world-class refrigeration infrastructure."
        light
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative p-8 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm"
          >
            <span className="text-5xl font-heading font-extrabold text-accent/20">{step.num}</span>
            <h3 className="mt-2 text-lg font-heading font-bold text-primary-foreground">{step.title}</h3>
            <p className="mt-2 text-sm text-primary-foreground/60 leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
