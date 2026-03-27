import { motion } from "framer-motion";
import { Shield, Settings, Zap, CheckCircle, Wrench, HeartHandshake } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";

const advantages = [
  { icon: Shield, title: "Engineering Expertise", desc: "Decades of industrial refrigeration engineering knowledge." },
  { icon: Settings, title: "Customized Solutions", desc: "Tailored infrastructure designed for your specific requirements." },
  { icon: Zap, title: "Energy-Efficient Systems", desc: "Advanced cooling technology that minimizes energy consumption." },
  { icon: CheckCircle, title: "Industrial-Grade Reliability", desc: "Built to perform under the most demanding conditions." },
  { icon: Wrench, title: "End-to-End Delivery", desc: "From consultation to commissioning, we handle everything." },
  { icon: HeartHandshake, title: "Long-Term Support", desc: "Proactive maintenance and operational support programs." },
];

const WhyMasisonSection = () => (
  <section className="section-padding">
    <div className="container-wide">
      <SectionHeading
        label="Why Masison"
        title="The Masison Advantage"
        description="Trusted by India's leading industries for reliable, efficient, and scalable refrigeration infrastructure."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {advantages.map((adv, i) => (
          <motion.div
            key={adv.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex gap-4 p-6"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
              <adv.icon className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="text-base font-heading font-bold text-foreground">{adv.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{adv.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyMasisonSection;
