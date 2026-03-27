import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="section-padding gradient-primary">
    <div className="container-wide text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary-foreground leading-tight">
          Build Reliable Cold Chain<br />Infrastructure for Your Business
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
          Partner with Masison to design and deploy world-class refrigeration systems tailored to your industry.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold rounded-md gradient-accent text-accent-foreground hover:opacity-90 transition-all"
          >
            Request Project Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold rounded-md border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all"
          >
            Get a Quote
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
