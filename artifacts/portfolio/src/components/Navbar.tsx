import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "WORK", href: "#projects" },
  { name: "ABOUT", href: "#about" },
  { name: "SKILLS", href: "#skills" },
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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-3 border-b border-white/5" : "py-4 md:py-6 bg-transparent"
        }`}
        style={isScrolled ? { background: "hsla(222, 38%, 8%, 0.85)", backdropFilter: "blur(20px)" } : {}}
      >
        <div className="container mx-auto px-5 md:px-12 flex items-center justify-between min-w-0">
          <a
            href="#hero"
            className="text-white font-display font-bold text-lg tracking-tight hover:text-[hsl(36,88%,52%)] transition-colors duration-300 min-h-11 inline-flex items-center"
          >
            Opeyemi
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-sans font-medium text-white/60 hover:text-white transition-colors duration-300 tracking-[0.18em] relative group py-2"
              >
                {link.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[hsl(36,88%,52%)] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="relative z-[60] flex md:hidden min-h-11 min-w-11 items-center justify-center rounded-lg text-white/70 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen((open) => !open)}
            data-testid="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center px-6"
            style={{ background: "hsla(222, 38%, 6%, 0.97)", backdropFilter: "blur(24px)" }}
          >
            <nav className="flex flex-col items-center gap-2" aria-label="Mobile">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                  className="font-display font-bold text-2xl sm:text-3xl text-white/80 hover:text-[hsl(36,88%,52%)] tracking-[0.1em] transition-colors duration-300 min-h-12 inline-flex items-center px-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
