import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-primary text-primary-foreground">
      <div className="container-wide py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded gradient-accent" />
              <span className="text-xl font-heading font-extrabold tracking-tight">MASISON</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Engineering reliable refrigeration and cold chain infrastructure for India's critical industries.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-heading font-bold uppercase tracking-wider mb-4 text-accent">Solutions</h4>
            <ul className="space-y-2.5">
              {["Industrial Refrigeration", "Cold Storage Infrastructure", "Clean Room Engineering", "Food Processing Cooling", "Dairy Refrigeration"].map((s) => (
                <li key={s}>
                  <Link to="/solutions" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-sm font-heading font-bold uppercase tracking-wider mb-4 text-accent">Industries</h4>
            <ul className="space-y-2.5">
              {["Agriculture", "Pharmaceuticals", "Food Processing", "Dairy Processing", "Cold Storage", "Sericulture"].map((s) => (
                <li key={s}>
                  <Link to="/industries" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-heading font-bold uppercase tracking-wider mb-4 text-accent">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/60">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                Bangalore, Karnataka, India
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                +91 80 1234 5678
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                info@masison.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Masison Engineering. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/about" className="text-xs text-primary-foreground/40 hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/about" className="text-xs text-primary-foreground/40 hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
