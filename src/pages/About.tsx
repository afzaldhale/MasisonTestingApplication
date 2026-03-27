import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import { motion } from "framer-motion";
import { Target, Eye, Shield, Award, Users, Zap } from "lucide-react";

const values = [
  { icon: Shield, title: "Engineering Integrity", desc: "Every system we build meets the highest standards of safety and reliability." },
  { icon: Award, title: "Technical Excellence", desc: "Continuous innovation in refrigeration technology and methodology." },
  { icon: Users, title: "Client Partnership", desc: "We work as an extension of your team, ensuring project success." },
  { icon: Zap, title: "Sustainable Innovation", desc: "Energy-efficient solutions that reduce environmental impact." },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="section-padding gradient-primary">
      <div className="container-wide">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-accent">About Masison</span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight">
            Building India's Cold Chain Infrastructure
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed">
            Masison is an engineering company that designs, builds, and deploys advanced refrigeration and cold-chain infrastructure for India's most critical industries.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding">
      <div className="container-wide grid md:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 rounded-lg border border-border">
          <Target className="w-10 h-10 text-accent mb-4" />
          <h3 className="text-2xl font-heading font-bold text-foreground">Our Mission</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            To enable businesses across India to maintain product quality and safety through precision-engineered temperature-controlled environments, supporting the nation's agricultural, pharmaceutical, and food processing sectors.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-8 rounded-lg border border-border">
          <Eye className="w-10 h-10 text-accent mb-4" />
          <h3 className="text-2xl font-heading font-bold text-foreground">Our Vision</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            To become India's most trusted engineering partner for refrigeration infrastructure, setting global benchmarks in cold chain technology, energy efficiency, and industrial reliability.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-surface-subtle">
      <div className="container-wide">
        <SectionHeading label="Our Values" title="What Drives Us" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-industrial p-8 text-center">
              <v.icon className="w-10 h-10 text-accent mx-auto mb-4" />
              <h4 className="font-heading font-bold text-foreground">{v.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Company Summary */}
    <section className="section-padding">
      <div className="container-wide max-w-3xl mx-auto text-center">
        <SectionHeading label="Our Approach" title="End-to-End Engineering" description="Masison delivers complete solutions — from consultation and engineering design to infrastructure installation, testing, commissioning, and long-term maintenance support." />
      </div>
    </section>
  </Layout>
);

export default About;
