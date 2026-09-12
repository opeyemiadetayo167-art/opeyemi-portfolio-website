import { motion } from "framer-motion";
import { Phone, Hammer, KeyRound } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Quick call",
    description: "Tell me about your business, no pressure.",
  },
  {
    icon: Hammer,
    title: "I build it",
    description: "Fast turnaround, you review along the way.",
  },
  {
    icon: KeyRound,
    title: "You own it",
    description: "A real site with your name on it, not a rented platform.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" data-testid="how-it-works-section" className="py-16 md:py-20 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(ellipse, hsla(220,80%,45%,0.08) 0%, transparent 70%)" }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-sans text-[hsl(36,88%,52%)] text-[10px] tracking-[0.25em] uppercase">
              07 — How It Works
            </span>
            <div className="h-px bg-white/8 flex-1" />
          </div>

          <h2 className="font-display font-bold tracking-tight text-3xl md:text-5xl text-white mb-12">
            How it{" "}
            <span className="serif-italic font-normal" style={{ color: "hsl(36,88%,52%)" }}>
              works
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-6 rounded-2xl glass-card transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "hsla(36,88%,52%,0.12)", color: "hsl(36,88%,52%)" }}
                >
                  <step.icon size={18} />
                </div>
                <p
                  className="font-sans text-[10px] tracking-[0.22em] uppercase mb-2"
                  style={{ color: "hsl(36,88%,52%)" }}
                >
                  Step {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display font-bold text-white text-lg mb-2">{step.title}</h3>
                <p className="font-sans text-sm text-white/45 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
