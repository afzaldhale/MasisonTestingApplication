import Layout from "@/components/layout/Layout";
import CTASection from "@/components/home/CTASection";
import { motion } from "framer-motion";
import imgPlant from "@/assets/project-refrigeration-plant.jpg";
import imgPharma from "@/assets/project-pharma-cold.jpg";
import imgDairy from "@/assets/project-dairy.jpg";
import imgFood from "@/assets/project-food-processing.jpg";

const projects = [
  {
    img: imgPlant, industry: "Agriculture", title: "5,000 MT Cold Storage Facility",
    challenge: "Client required multi-commodity storage with variable temperature zones for fruits and vegetables.",
    solution: "Designed and installed a 5,000 MT capacity cold storage with 4 independent temperature zones, IoT monitoring, and solar-assisted cooling.",
    result: "40% reduction in post-harvest losses, 30% energy savings vs. conventional systems.",
  },
  {
    img: imgPharma, industry: "Pharmaceutical", title: "GDP-Compliant Vaccine Storage Center",
    challenge: "Required 2-8°C precision storage with full regulatory compliance and 24/7 monitoring.",
    solution: "Engineered a validated cold chain facility with redundant refrigeration, real-time monitoring, and automated documentation.",
    result: "99.9% temperature compliance, WHO-GDP certification achieved.",
  },
  {
    img: imgDairy, industry: "Dairy", title: "50,000 LPD Milk Chilling Plant",
    challenge: "Rapid chilling of 50,000 liters per day within 3 hours of collection at a cooperative dairy.",
    solution: "Installed plate heat exchangers with glycol-based chilling system and heat recovery for hot water generation.",
    result: "30% energy savings through heat recovery, consistent milk quality maintained.",
  },
  {
    img: imgFood, industry: "Food Processing", title: "Seafood Export Cold Chain Facility",
    challenge: "FSSAI and international export compliance for seafood processing and blast freezing.",
    solution: "Built integrated blast freezing tunnels, cold storage rooms, and pre-processing cooling systems.",
    result: "Full FSSAI and EU export compliance, 25% throughput increase.",
  },
];

const Projects = () => (
  <Layout>
    <section className="section-padding gradient-primary">
      <div className="container-wide">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-accent">Our Projects</span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight">
            Engineering Excellence in Action
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/70">
            Real projects. Real results. Explore our portfolio of successfully delivered refrigeration infrastructure.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide space-y-16">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-industrial overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img src={proj.img} alt={proj.title} className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-wider text-accent">{proj.industry}</span>
                <h3 className="mt-2 text-2xl font-heading font-bold text-foreground">{proj.title}</h3>
                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="text-sm font-heading font-bold text-foreground mb-1">Challenge</h4>
                    <p className="text-sm text-muted-foreground">{proj.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-bold text-foreground mb-1">Solution</h4>
                    <p className="text-sm text-muted-foreground">{proj.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-bold text-accent mb-1">Result</h4>
                    <p className="text-sm font-semibold text-foreground">{proj.result}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default Projects;
