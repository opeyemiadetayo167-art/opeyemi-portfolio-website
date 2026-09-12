import { motion } from "framer-motion";

export function Proof() {
  return (
    <section id="proof" data-testid="proof-section" className="py-16 md:py-20 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(ellipse, hsla(36,88%,52%,0.07) 0%, transparent 70%)" }}
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
              05 — Proof
            </span>
            <div className="h-px bg-white/8 flex-1" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="glass-card p-8 md:p-10 rounded-2xl"
          >
            <h2 className="font-display font-bold tracking-tight text-3xl md:text-5xl text-white mb-6 leading-tight">
              I Know Exactly Where You&apos;re{" "}
              <span className="serif-italic font-normal" style={{ color: "hsl(36,88%,52%)" }}>
                Starting From
              </span>
            </h2>
            <p className="font-sans text-white/55 text-base md:text-lg leading-relaxed max-w-3xl">
              Most small businesses I talk to don&apos;t have a website at all — they&apos;re running entirely on Facebook and word of mouth. That&apos;s exactly the gap I fix: a simple site that shows your real work, lets people find you on Google, and gives you a direct way for customers to reach you — without the agency price tag.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
