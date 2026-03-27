import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Solutions",
    path: "/solutions",
    children: [
      { label: "Industrial Refrigeration", path: "/solutions/industrial-refrigeration" },
      { label: "Cold Storage Infrastructure", path: "/solutions/cold-storage" },
      { label: "Clean Room Engineering", path: "/solutions/clean-room" },
      { label: "Food Processing Cooling", path: "/solutions/food-processing" },
      { label: "Dairy Refrigeration", path: "/solutions/dairy-refrigeration" },
    ],
  },
  {
    label: "Industries",
    path: "/industries",
    children: [
      { label: "Agriculture", path: "/industries/agriculture" },
      { label: "Pharmaceuticals", path: "/industries/pharmaceuticals" },
      { label: "Food Processing", path: "/industries/food-processing" },
      { label: "Dairy Processing", path: "/industries/dairy" },
      { label: "Cold Storage", path: "/industries/cold-storage" },
      { label: "Sericulture", path: "/industries/sericulture" },
    ],
  },
  { label: "Projects", path: "/projects" },
  { label: "Insights", path: "/insights" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container-wide flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded gradient-accent" />
          <span className="text-xl font-heading font-extrabold text-primary tracking-tight">
            MASISON
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.path}
              className="relative"
              onMouseEnter={() => link.children && setHoveredDropdown(link.label)}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <Link
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
                {link.children && <ChevronDown className="w-3.5 h-3.5" />}
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {link.children && hoveredDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-56 bg-card rounded-lg border border-border shadow-lg py-2"
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-accent hover:bg-muted transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden lg:inline-flex px-5 py-2.5 text-sm font-semibold rounded-md gradient-accent text-accent-foreground transition-all hover:opacity-90"
          >
            Request Consultation
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="container-wide py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-foreground/80 hover:text-accent rounded-md"
                  >
                    {link.label}
                  </Link>
                  {link.children?.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      onClick={() => setMobileOpen(false)}
                      className="block pl-8 pr-4 py-2 text-sm text-muted-foreground hover:text-accent"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block mx-4 mt-4 text-center px-5 py-3 text-sm font-semibold rounded-md gradient-accent text-accent-foreground"
              >
                Request Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
