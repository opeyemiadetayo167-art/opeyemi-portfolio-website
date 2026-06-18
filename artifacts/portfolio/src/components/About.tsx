import { motion } from "framer-motion";
import { Code2, Smartphone, Zap, Globe } from "lucide-react";

const highlights = [
  { icon: Code2,       title: "Clean Code",         description: "Maintainable React built with best practices." },
  { icon: Smartphone,  title: "Mobile-First",        description: "Perfect on every screen size." },
  { icon: Zap,         title: "AI-Accelerated",      description: "Faster delivery without cutting corners." },
  { icon: Globe,       title: "Built to Convert",    description: "Sites designed to attract leads and grow businesses." },
];

export function About() {
  return (
    <section id="about" data-testid="about-section" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsla(217,91%,60%,0.08) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-16">
            <span className="text-primary font-mono text-sm tracking-widest uppercase">01. About</span>
            <div className="h-px bg-border flex-1" />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* ── Left: photo ─────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex justify-center"
            >
              {/* Outer glow ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-full"
                  style={{ background: "radial-gradient(circle, hsla(217,91%,60%,0.2) 0%, transparent 70%)" }} />
              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 w-64 h-64 md:w-72 md:h-72">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary rounded-bl-lg" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary rounded-br-lg" />
              </div>

              {/* Photo */}
              <div className="relative z-10 w-60 h-60 md:w-72 md:h-72 rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 0 0 1px hsla(217,91%,60%,0.3), 0 0 40px hsla(217,91%,60%,0.2), 0 20px 60px rgba(0,0,0,0.4)" }}>
                <img
                  src="/opeyemi.jpeg"
                  alt="Opeyemi Adetayo"
                  className="w-full h-full object-cover object-top"
                  style={{ filter: "contrast(1.05) saturate(0.95)" }}
                />
                {/* Subtle blue overlay blend */}
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(135deg, hsla(217,91%,60%,0.08) 0%, transparent 60%, hsla(217,91%,60%,0.05) 100%)" }} />
              </div>

              {/* Floating badge — experience */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute bottom-4 right-4 md:right-0 z-20 px-4 py-2 rounded-xl bg-card border border-primary/30 text-xs font-semibold text-primary"
                style={{ boxShadow: "0 0 14px hsla(217,91%,60%,0.25)" }}
              >
                🚀 19 y/o &amp; Building
              </motion.div>

              {/* Floating badge — available */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-4 right-4 md:right-0 z-20 px-4 py-2 rounded-xl bg-card border border-green-400/30 text-xs font-semibold text-green-400"
                style={{ boxShadow: "0 0 14px hsla(145,60%,55%,0.2)" }}
              >
                ✅ Open to Work
              </motion.div>
            </motion.div>

            {/* ── Right: text + highlights ─────────────────── */}
            <div className="space-y-8">
              <div className="space-y-5">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                  I turn ideas into{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                    high-performing
                  </span>{" "}
                  websites
                </h2>
                <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                  <p>
                    Hey, I'm <strong className="text-foreground">Opeyemi Adetayo</strong> — a 19-year-old Frontend Developer and AI Website Builder. I specialize in building responsive websites, high-converting landing pages, and modern UI experiences that help businesses grow online.
                  </p>
                  <p>
                    What sets me apart is my ability to leverage AI-assisted development tools to deliver professional, production-ready websites faster than traditional workflows — without sacrificing quality or attention to detail.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {["React", "Tailwind CSS", "Framer Motion", "AI Tools", "Figma"].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group p-5 rounded-2xl bg-card border border-card-border hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                      <item.icon size={18} />
                    </div>
                    <h3 className="font-bold text-foreground mb-1 text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
