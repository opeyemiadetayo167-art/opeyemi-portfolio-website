import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// ── Skill categories ──────────────────────────────────────────────────────────
const categories = [
  {
    label: "Solid Foundations, No Shortcuts",
    highlight: "JavaScript",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    label: "Fast, Smooth, No Lag",
    highlight: "React",
    skills: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Reliable and Built to Last",
    highlight: "Git & GitHub",
    skills: ["Git & GitHub", "Vite", "Supabase"],
  },
  {
    label: "Built to Get You Found and Booked",
    highlight: "AI-Assisted Development",
    skills: [
      "AI-Assisted Development",
      "UI/UX Design",
      "Landing Page Design",
      "Website Development",
      "Responsive Design",
    ],
  },
];

// ── Animated counter hook ─────────────────────────────────────────────────────
function useCounter(target: number, duration = 1800, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, started]);
  return count;
}

// ── Stat counter component ────────────────────────────────────────────────────
function StatCounter({
  value,
  suffix,
  label,
  delay,
  started,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
  started: boolean;
}) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (!started) return;
    const t = setTimeout(() => setActive(true), delay);
    return () => clearTimeout(t);
  }, [started, delay]);
  const count = useCounter(value, 1600, active);

  return (
    <div className="flex flex-col items-center text-center px-4 sm:px-6 md:px-8 min-w-0 flex-1">
      <span
        className="font-display font-extrabold leading-none"
        style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)", color: "#fff" }}
      >
        {count}
        <span style={{ color: "hsl(36,88%,52%)" }}>{suffix}</span>
      </span>
      <span
        className="font-sans text-[11px] tracking-[0.2em] uppercase mt-2"
        style={{ color: "rgba(255,255,255,0.38)" }}
      >
        {label}
      </span>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="py-16 md:py-[68px] relative overflow-hidden"
    >
      {/* ── Atmospheric background — stronger blue/indigo radial glow ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 50%, hsla(230,85%,42%,0.23) 0%, hsla(250,65%,35%,0.1) 55%, transparent 80%)",
        }}
      />
      {/* Subtle secondary glow top-right */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[500px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, hsla(220,90%,45%,0.14) 0%, transparent 65%)",
        }}
      />

      <div className="container mx-auto px-5 md:px-12 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >

          {/* ── Section label + heading ── */}
          <div className="mb-14">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="font-sans text-[10px] tracking-[0.28em] uppercase mb-3"
              style={{ color: "hsl(36,88%,52%)" }}
            >
              03 — SKILLS
            </motion.p>

            <div className="flex items-center gap-4 min-w-0">
              <h2 className="font-display font-bold tracking-tight text-[1.85rem] sm:text-3xl md:text-5xl text-white min-w-0">
                Built the Right Way
              </h2>
              <div
                className="hidden sm:block h-px flex-1 ml-2"
                style={{
                  background:
                    "linear-gradient(to right, hsla(36,88%,52%,0.35), transparent)",
                }}
              />
            </div>
          </div>

          {/* ── Animated stats row ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col sm:flex-row sm:items-center w-full mb-7 rounded-2xl py-6 px-4 sm:py-7 sm:px-6 gap-5 sm:gap-0"
            style={{
              background: "hsla(220,32%,10%,0.5)",
              border: "1px solid rgba(255,255,255,0.06)",
              backdropFilter: "blur(12px)",
            }}
          >
            <StatCounter value={15} suffix="+" label="Businesses Helped Get Found Online" delay={0} started={inView} />
            {/* Divider */}
            <div className="hidden sm:block w-px h-10 self-center justify-self-center" style={{ background: "rgba(255,255,255,0.1)" }} />
            <StatCounter value={3} suffix="+" label="Years Solving This Exact Problem" delay={200} started={inView} />
            {/* Divider */}
            <div className="hidden sm:block w-px h-10 self-center justify-self-center" style={{ background: "rgba(255,255,255,0.1)" }} />
            <StatCounter value={100} suffix="%" label="Client Satisfaction" delay={400} started={inView} />
          </motion.div>

          {/* ── Skills grid — 2 cols on md+, 1 col mobile ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat, catIdx) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: catIdx * 0.08 }}
                className="rounded-2xl p-5 sm:p-8 min-w-0"
                style={{
                  background: "hsla(220,28%,10%,0.55)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(10px)",
                }}
              >
                {/* Category label */}
                <p
                  className="font-sans text-[9px] tracking-[0.26em] uppercase font-semibold mb-4"
                  style={{ color: "hsl(36,88%,52%)" }}
                >
                  {cat.label}
                </p>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => {
                    const isHighlight = skill === cat.highlight;
                    return (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05, y: -1 }}
                        className="px-4 py-1.5 rounded-full font-sans text-sm font-medium cursor-default transition-colors duration-200"
                        style={
                          isHighlight
                            ? {
                                background: "hsla(36,88%,52%,0.1)",
                                border: "1px solid hsla(36,88%,52%,0.55)",
                                color: "hsl(36,88%,62%)",
                                boxShadow: "0 0 12px hsla(36,88%,52%,0.1)",
                              }
                            : {
                                background: "hsla(220,30%,16%,0.6)",
                                border: "1px solid rgba(255,255,255,0.09)",
                                color: "rgba(255,255,255,0.72)",
                              }
                        }
                      >
                        {skill}
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
