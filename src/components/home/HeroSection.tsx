import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-cold-storage.jpg";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Industrial cold storage facility" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
    </div>

    <div className="container-wide relative z-10 py-20 lg:py-0">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-[0.15em] gradient-accent text-accent-foreground mb-6">
            Engineering Excellence Since 2005
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold text-primary-foreground leading-[1.1]"
        >
          Engineering Reliable Refrigeration &{" "}
          <span className="text-gradient-accent">Cold Chain Infrastructure</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 text-lg lg:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed"
        >
          Masison designs and builds advanced temperature-controlled environments for agriculture, pharmaceuticals, dairy production, and food processing industries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold rounded-md gradient-accent text-accent-foreground hover:opacity-90 transition-all"
          >
            Request Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/solutions"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold rounded-md border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all"
          >
            Explore Solutions
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
