import { motion } from "framer-motion";
import { Code2, Smartphone, Zap, Globe, BadgeCheck } from "lucide-react";

const highlights = [
  { icon: Smartphone, title: "Never Miss a Customer", description: "Your site works perfectly on every phone, because that's where most people find you first." },
  { icon: Zap,         title: "Live in Days, Not Weeks", description: "Every day without a site is a customer lost to someone else. I move fast on purpose." },
  { icon: Globe,       title: "Built to Convert",        description: "Every page is designed to turn a visitor into a call, not just look nice." },
  { icon: Code2,       title: "You Own It",              description: "A real site with your name on it — not a rented Facebook page or a directory listing." },
];

const stats = [
  { emoji: "👀", title: "Most Local Businesses Are Invisible Online", description: "If you're not showing up on Google, you're losing customers to competitors who are." },
  { emoji: "📉", title: "Every Missed Call Is Lost Revenue",          description: "A slow, outdated, or missing website is costing you real jobs right now." },
  { emoji: "💰", title: "A Website Pays for Itself",                 description: "One extra job booked through your site often covers the entire cost of building it." },
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
                  I turn missed customers into{" "}
                  <span className="serif-italic font-normal" style={{ color: "hsl(36,88%,52%)" }}>
                    booked jobs
                  </span>
                </h2>
                <div className="space-y-4 font-sans text-white/55 leading-relaxed text-base">
                  <p>
                    Hey, I'm Opeyemi. Every day your business doesn't show up online, someone searching for exactly what you do finds a competitor instead — and they never even know you existed to compare. That's not a marketing problem, that's lost revenue, every single day.
                  </p>
                  <p>
                    I build websites that close that gap — fast, credible, and specifically designed so local businesses stop losing customers to whoever happens to rank first on Google. I use AI-assisted development to move quickly, which means you're not waiting weeks or paying agency prices to fix a problem that's costing you business right now.
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
                  <div
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border font-sans text-xs font-medium tracking-wide"
                    style={{
                      background: "hsla(36,88%,52%,0.10)",
                      borderColor: "hsla(36,88%,52%,0.35)",
                      color: "hsl(36,88%,72%)",
                    }}
                  >
                    <BadgeCheck size={14} style={{ color: "hsl(36,88%,52%)" }} />
                    Claude Certified Developer &amp; Claude Certified Architect (Anthropic)
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
