import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "WORK", href: "#projects" },
  { name: "ABOUT", href: "#about" },
  { name: "SERVICES", href: "#services" },
  { name: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 border-b border-white/5"
          : "py-6 bg-transparent"
      }`}
      style={isScrolled ? { background: "hsla(222, 38%, 8%, 0.85)", backdropFilter: "blur(20px)" } : {}}
    >
      <div className="container mx-auto px-5 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-white font-display font-bold text-lg tracking-tight hover:text-[hsl(36,88%,52%)] transition-colors duration-300"
        >
          Opeyemi
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-sans font-medium text-white/60 hover:text-white transition-colors duration-300 tracking-[0.18em] relative group"
            >
              {link.name}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[hsl(36,88%,52%)] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden text-white/70 hover:text-white p-2 transition-colors z-[60]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Full-screen mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 z-50 flex flex-col items-center justify-center"
            style={{ background: "hsla(222, 38%, 6%, 0.97)", backdropFilter: "blur(24px)" }}
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  className="font-display font-bold text-3xl text-white/80 hover:text-[hsl(36,88%,52%)] tracking-[0.1em] transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
