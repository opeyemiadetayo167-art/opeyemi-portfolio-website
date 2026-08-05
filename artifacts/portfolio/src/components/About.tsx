import { motion } from "framer-motion";
import { Code2, Smartphone, Zap, Globe } from "lucide-react";

const highlights = [
  { icon: Code2,       title: "Clean Code",         description: "Maintainable React built with best practices." },
  { icon: Smartphone,  title: "Mobile-First",        description: "Perfect on every screen size." },
  { icon: Zap,         title: "AI-Accelerated",      description: "Faster delivery without cutting corners." },
  { icon: Globe,       title: "Built to Convert",    description: "Sites designed to attract leads and grow businesses." },
];

const stats = [
  {
    emoji: "🚀",
    title: "5+ Live Products",
    description: "SaaS tools with real paying users",
  },
  {
    emoji: "🌍",
    title: "International Clients",
    description: "UK, South Africa, USA & Nigeria",
  },
  {
    emoji: "⚡",
    title: "AI-Powered Workflow",
    description: "Ship faster without sacrificing quality",
  },
];

const techStack = ["React", "TypeScript", "Node.js", "Tailwind CSS", "Supabase", "Framer Motion", "Git", "Figma"];

export function About() {
  return (
    <section id="about" data-testid="about-section" className="py-16 md:py-20 relative overflow-hidden">
      {/* Faint blue radial glow centered in section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, hsla(220,80%,45%,0.09) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section label */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-sans text-[hsl(36,88%,52%)] text-[10px] tracking-[0.25em] uppercase">01 — About</span>
            <div className="h-px bg-white/8 flex-1" />
          </div>

          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

            {/* ── Left column (50%) ── */}
            <div className="w-full lg:w-1/2 space-y-8">
              {/* Headline + subtext */}
              <div className="space-y-5">
                <h2 className="font-display font-bold tracking-tight leading-tight text-3xl md:text-5xl text-white">
                  I turn ideas into{" "}
                  <span className="serif-italic font-normal" style={{ color: "hsl(36,88%,52%)" }}>
                    high-performing
                  </span>{" "}
                  websites
                </h2>
                <div className="space-y-4 font-sans text-white/55 leading-relaxed text-base">
                  <p>
                    Hey, I'm <strong className="text-white">Opeyemi Adetayo</strong> — a Full Stack Web Developer and AI Builder. I specialize in building responsive websites, web apps, and high-converting digital experiences from frontend to backend.
                  </p>
                  <p>
                    I leverage AI-assisted development tools to deliver professional, production-ready websites faster — without sacrificing quality or attention to detail.
                  </p>
                </div>

                {/* Tech stack pills with gold label */}
                <div className="pt-1">
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[hsl(36,88%,52%)] mb-3">
                    Built With:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 rounded-full font-sans text-sm font-medium border"
                        style={{
                          background: "hsla(36,88%,52%,0.08)",
                          borderColor: "hsla(36,88%,52%,0.2)",
                          color: "hsl(36,88%,52%)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 2×2 highlights grid */}
              <div className="grid grid-cols-2 gap-3">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group p-5 rounded-2xl glass-card transition-all duration-300"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
                      style={{ background: "hsla(36,88%,52%,0.12)", color: "hsl(36,88%,52%)" }}
                    >
                      <item.icon size={18} />
                    </div>
                    <h3 className="font-display font-bold text-white text-sm mb-1">{item.title}</h3>
                    <p className="font-sans text-xs text-white/45 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── Right column (50%) — stat cards ── */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.12 }}
                  className="about-stat-card group flex items-start gap-4 p-5 rounded-2xl transition-all duration-300"
                >
                  {/* Emoji in gold-tinted container */}
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-lg transition-all duration-300 group-hover:scale-110"
                    style={{ background: "rgba(232,160,32,0.10)" }}
                  >
                    {stat.emoji}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-base leading-tight mb-1">
                      {stat.title}
                    </h3>
                    <p className="font-sans text-sm text-white/45 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
