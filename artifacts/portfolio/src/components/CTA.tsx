import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";

export function CTA() {
  return (
    <section data-testid="cta-section" className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div
          className="w-[800px] h-[400px] rounded-full blur-[120px]"
          style={{ background: "hsla(36,88%,52%,0.07)" }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border font-sans text-xs tracking-[0.15em] mb-8"
            style={{
              background: "hsla(36,88%,52%,0.08)",
              borderColor: "hsla(36,88%,52%,0.2)",
              color: "hsl(36,88%,52%)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            BASED IN LAGOS · WORKING GLOBALLY
          </motion.div>

          <h2 className="font-display font-bold tracking-tight text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Let's Build Something{" "}
            <span
              className="serif-italic font-normal"
              style={{ color: "hsl(36,88%,52%)", textShadow: "0 0 40px hsla(36,88%,52%,0.3)" }}
            >
              Great Together
            </span>
          </h2>

          <p className="font-sans text-white/45 text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
            Whether you're starting from scratch or need to level up an existing site, I'd love to hear about your project.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${SITE.email}`}
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-sans font-semibold text-sm tracking-wide transition-all duration-300"
              style={{
                background: "hsl(36,88%,52%)",
                color: "hsl(222,38%,8%)",
                boxShadow: "0 0 30px hsla(36,88%,52%,0.35)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 55px hsla(36,88%,52%,0.55)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 30px hsla(36,88%,52%,0.35)")}
            >
              Start a Project
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-sans font-semibold text-sm tracking-wide text-white/70 border border-white/10 hover:border-white/25 hover:text-white transition-all duration-300 glass-card"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 font-sans text-sm text-white/35">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Fast turnaround
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "hsl(36,88%,52%)" }} />
              Mobile-responsive
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              AI-accelerated builds
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
