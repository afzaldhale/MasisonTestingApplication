import { motion } from "framer-motion";
import { Building2, Users, Award, Zap } from "lucide-react";

const stats = [
  { icon: Building2, value: "50+", label: "Industrial Installations" },
  { icon: Users, value: "10+", label: "Industries Served" },
  { icon: Award, value: "18+", label: "Years of Experience" },
  { icon: Zap, value: "100+", label: "Engineering Specialists" },
];

const TrustIndicators = () => (
  <section className="relative -mt-16 z-20">
    <div className="container-wide">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-lg p-6 lg:p-8 text-center border border-border"
            style={{ boxShadow: "var(--shadow-industrial)" }}
          >
            <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
            <div className="text-3xl lg:text-4xl font-heading font-extrabold text-foreground">{stat.value}</div>
            <div className="mt-1 text-sm text-muted-foreground font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustIndicators;
