import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import imgPlant from "@/assets/project-refrigeration-plant.jpg";
import imgPharma from "@/assets/project-pharma-cold.jpg";
import imgDairy from "@/assets/project-dairy.jpg";
import imgFood from "@/assets/project-food-processing.jpg";

const projects = [
  { img: imgPlant, type: "Cold Storage Installation", industry: "Agriculture", desc: "5,000 MT integrated cold storage facility with multi-temperature zones.", outcome: "40% reduction in post-harvest losses" },
  { img: imgPharma, type: "Pharmaceutical Cold Storage", industry: "Pharma", desc: "GDP-compliant cold chain for vaccine distribution center.", outcome: "99.9% temperature compliance" },
  { img: imgDairy, type: "Milk Processing Plant", industry: "Dairy", desc: "50,000 LPD milk chilling and processing refrigeration system.", outcome: "30% energy savings achieved" },
  { img: imgFood, type: "Food Processing Facility", industry: "Food", desc: "Blast freezing and cold storage for seafood export plant.", outcome: "FSSAI and export compliance met" },
];

const ProjectsSection = () => (
  <section className="section-padding bg-surface-subtle">
    <div className="container-wide">
      <SectionHeading
        label="Featured Projects"
        title="Proven Engineering Excellence"
        description="Explore our portfolio of successfully delivered refrigeration infrastructure projects."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.type}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="card-industrial overflow-hidden group"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={proj.img}
                alt={proj.type}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            <div className="p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-accent">{proj.industry}</span>
                <span className="text-muted-foreground/40">·</span>
                <span className="text-xs text-muted-foreground">{proj.type}</span>
              </div>
              <p className="text-sm text-foreground leading-relaxed">{proj.desc}</p>
              <p className="mt-3 text-sm font-semibold text-accent">{proj.outcome}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
          View All Projects <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default ProjectsSection;
