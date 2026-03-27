import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

const SectionHeading = ({ label, title, description, align = "center", light = false }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5 }}
    className={`mb-12 lg:mb-16 ${align === "center" ? "text-center max-w-3xl mx-auto" : ""}`}
  >
    {label && (
      <span className={`text-xs font-heading font-bold uppercase tracking-[0.2em] ${light ? "text-accent" : "text-accent"}`}>
        {label}
      </span>
    )}
    <h2 className={`mt-3 text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold leading-tight ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    {description && (
      <p className={`mt-4 text-base lg:text-lg leading-relaxed ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
