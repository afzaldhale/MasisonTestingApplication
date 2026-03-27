import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/home/CTASection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Wheat, Pill, UtensilsCrossed, Milk, Warehouse, Bug } from "lucide-react";
import imgAgriculture from "@/assets/industry-agriculture.jpg";

const industries = [
  { icon: Wheat, title: "Agriculture", desc: "Cold storage for fruits, vegetables, seeds, and export logistics. Reducing post-harvest losses through precision cooling.", path: "/industries/agriculture", img: imgAgriculture },
  { icon: Pill, title: "Pharmaceuticals", desc: "GDP-compliant cold chain for vaccines, medicines, and biotechnology storage with precision temperature control.", path: "/industries/pharmaceuticals", img: imgAgriculture },
  { icon: UtensilsCrossed, title: "Food Processing", desc: "Industrial cooling for frozen food manufacturing, meat processing, and seafood packaging operations.", path: "/industries/food-processing", img: imgAgriculture },
  { icon: Milk, title: "Dairy Processing", desc: "Milk chilling plants, pasteurization cooling, and dairy product storage infrastructure.", path: "/industries/dairy", img: imgAgriculture },
  { icon: Warehouse, title: "Cold Storage Warehousing", desc: "Large-scale warehousing with multi-temperature zones and advanced monitoring systems.", path: "/industries/cold-storage", img: imgAgriculture },
  { icon: Bug, title: "Sericulture", desc: "Environmental control systems for silk worm rearing and cocoon storage facilities.", path: "/industries/sericulture", img: imgAgriculture },
];

const Industries = () => (
  <Layout>
    <section className="section-padding gradient-primary">
      <div className="container-wide">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-accent">Industries</span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight">
            Refrigeration Solutions Across Industries
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/70">
            Every industry demands unique engineering expertise. Masison delivers specialized cold chain infrastructure tailored to sector-specific requirements.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide space-y-8">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Link to={ind.path} className="card-industrial flex flex-col md:flex-row overflow-hidden group">
              <div className="md:w-1/3 aspect-[4/3] md:aspect-auto overflow-hidden">
                <img src={ind.img} alt={ind.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={800} height={600} />
              </div>
              <div className="p-8 md:flex-1 flex flex-col justify-center">
                <ind.icon className="w-10 h-10 text-accent mb-3" />
                <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-accent transition-colors">{ind.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{ind.desc}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-accent">
                  Explore Solutions <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default Industries;
