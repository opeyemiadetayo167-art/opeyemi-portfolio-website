import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

// Project results written by me, not client quotes. Only add a quote here if a client actually said it.
const results = [
  {
    client: "BenFit International Gym",
    role: "Fitness · Lagos, Nigeria",
    result:
      "Built a full website showing their classes, training packages and memberships, with an enquiry flow that turns visitors into new members.",
  },
  {
    client: "The Oyster Society",
    role: "Luxury Events · London, UK",
    result:
      "Built a premium site that matches their high-end clientele, so event planners can browse services and send a booking enquiry in a few clicks.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" data-testid="testimonials-section" className="py-16 md:py-20 relative">
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
              08 — Results
            </span>
            <div className="h-px bg-white/8 flex-1" />
          </div>

          <h2 className="font-display font-bold tracking-tight text-3xl md:text-5xl text-white mb-4">
            What I've{" "}
            <span className="serif-italic font-normal" style={{ color: "hsl(36,88%,52%)" }}>
              delivered
            </span>
          </h2>
          <p className="font-sans text-white/45 text-lg mb-12 max-w-xl">
            Real websites for real businesses, from a Lagos fitness brand to a London luxury events company.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {results.map((item, index) => (
              <motion.div
                key={item.client}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl flex flex-col gap-4"
              >
                <CheckCircle2 size={20} style={{ color: "hsl(36,88%,52%)" }} className="opacity-70" />
                <div>
                  <p className="font-display font-bold text-white text-sm">{item.client}</p>
                  <p className="font-sans text-xs text-white/35 mt-1">{item.role}</p>
                </div>
                <p className="font-sans text-sm text-white/60 leading-relaxed flex-1">{item.result}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
