import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      <section className="section-padding gradient-primary">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-accent">Contact Us</span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight">
              Let's Build Your Cold Chain Infrastructure
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70">
              Ready to discuss your refrigeration project? Our engineering team is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-6">Get In Touch</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Office Address</p>
                      <p className="text-sm text-muted-foreground mt-0.5">Bangalore, Karnataka, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground mt-0.5">+91 80 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground mt-0.5">info@masison.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Working Hours</p>
                      <p className="text-sm text-muted-foreground mt-0.5">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="card-industrial p-12 text-center">
                  <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground">Thank You!</h3>
                  <p className="mt-2 text-muted-foreground">Our engineering team will contact you within 24 hours.</p>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="card-industrial p-8 lg:p-10 space-y-6"
                >
                  <h3 className="text-xl font-heading font-bold text-foreground">Request a Consultation</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-md border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Company *</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-md border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Company name" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                      <input type="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="email@company.com" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Phone *</label>
                      <input type="tel" required className="w-full px-4 py-3 rounded-md border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Industry</label>
                    <select className="w-full px-4 py-3 rounded-md border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                      <option>Select Industry</option>
                      <option>Agriculture</option>
                      <option>Pharmaceuticals</option>
                      <option>Food Processing</option>
                      <option>Dairy Processing</option>
                      <option>Cold Storage</option>
                      <option>Sericulture</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Project Details</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-md border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Tell us about your refrigeration project requirements..." />
                  </div>
                  <button type="submit" className="w-full px-8 py-4 text-sm font-semibold rounded-md gradient-accent text-accent-foreground hover:opacity-90 transition-all">
                    Submit Consultation Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
