import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    title: "Cold Chain Infrastructure: Transforming India's Agricultural Supply Chain",
    excerpt: "How modern refrigeration technology is reducing post-harvest losses and enabling Indian farmers to access global markets.",
    date: "March 15, 2026",
    category: "Agriculture",
  },
  {
    title: "The Critical Role of Refrigeration in Pharmaceutical Storage",
    excerpt: "Understanding GDP compliance, temperature mapping, and cold chain validation for pharmaceutical products.",
    date: "March 8, 2026",
    category: "Pharmaceuticals",
  },
  {
    title: "Energy-Efficient Refrigeration: Technologies Reshaping the Industry",
    excerpt: "From variable speed drives to natural refrigerants, explore the innovations cutting energy costs by up to 40%.",
    date: "February 28, 2026",
    category: "Technology",
  },
  {
    title: "Cold Storage Solutions for India's Food Processing Industry",
    excerpt: "How integrated cold chain infrastructure is enabling food processors to meet FSSAI standards and scale operations.",
    date: "February 20, 2026",
    category: "Food Processing",
  },
  {
    title: "Clean Room Engineering: Standards and Best Practices",
    excerpt: "An overview of ISO classification, air handling requirements, and contamination control in controlled environments.",
    date: "February 12, 2026",
    category: "Clean Rooms",
  },
  {
    title: "Dairy Cold Chain: From Farm to Consumer",
    excerpt: "Engineering reliable milk chilling and processing infrastructure for India's growing dairy sector.",
    date: "February 5, 2026",
    category: "Dairy",
  },
];

const Insights = () => (
  <Layout>
    <section className="section-padding gradient-primary">
      <div className="container-wide">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-accent">Insights</span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight">
            Engineering Knowledge & Industry Insights
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/70">
            Expert perspectives on refrigeration technology, cold chain infrastructure, and industry trends.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-industrial p-8 flex flex-col group cursor-pointer"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-accent">{post.category}</span>
              <h3 className="mt-3 text-lg font-heading font-bold text-foreground group-hover:text-accent transition-colors leading-snug">{post.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{post.excerpt}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" /> {post.date}
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  Read <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Insights;
