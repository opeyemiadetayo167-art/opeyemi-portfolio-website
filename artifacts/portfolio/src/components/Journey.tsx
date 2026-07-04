import { motion } from "framer-motion";

const milestones = [
  {
    year: "2023",
    title: "The Spark",
    description:
      "Opened a blank code editor for the first time and typed my first lines of HTML and CSS. That moment of seeing a webpage appear from nothing was all it took — I was hooked immediately.",
    tag: "The Beginning",
  },
  {
    year: "2023",
    title: "Going Deeper",
    description:
      "Pushed past the basics into JavaScript, then React. Began building real interactive UIs — the kind that felt alive. Each project was harder than the last, and that's exactly how I liked it.",
    tag: "Leveling Up",
  },
  {
    year: "2024",
    title: "AI Changes Everything",
    description:
      "Discovered AI-assisted development tools and the pace of my work transformed overnight. Projects that once took weeks now took days. I learned to work smarter — using AI as a co-pilot while staying in full creative control.",
    tag: "Game Changer",
  },
  {
    year: "2024",
    title: "First Freelance Client",
    description:
      "Delivered my first paid web project — a professional business website for a real client. Seeing my work live on the internet and knowing someone trusted me to represent their brand was a defining moment.",
    tag: "Going Pro",
  },
  {
    year: "2025",
    title: "Building for Businesses",
    description:
      "Today I offer frontend development, landing pages, and AI-assisted web builds to businesses and creators worldwide. Every project is an opportunity to sharpen my craft and deliver something I'm genuinely proud of.",
    tag: "Now",
  },
];

export function Journey() {
  return (
    <section id="journey" data-testid="journey-section" className="py-16 md:py-20 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-0 top-1/3 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: "hsla(220,80%,40%,0.07)" }} />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-sans text-[hsl(36,88%,52%)] text-[10px] tracking-[0.25em] uppercase">02 — Journey</span>
            <div className="h-px bg-white/8 flex-1" />
          </div>

          <h2 className="font-display font-bold tracking-tight text-3xl md:text-5xl text-white mb-4">My Story</h2>
          <p className="font-sans text-white/45 text-base md:text-lg mb-8 md:mb-16 max-w-2xl">
            From a curious teenager with a blank code editor to a freelance frontend developer building for real businesses — here's how it happened.
          </p>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, hsla(36,88%,52%,0.4), hsla(36,88%,52%,0.1), transparent)" }} />

            <div className="space-y-3">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 items-start md:items-center`}
                >
                  <div
                    className={`w-full md:w-[calc(50%-2rem)] pl-16 md:pl-0 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="inline-block py-5 px-6 rounded-2xl glass-card transition-all duration-300 w-full"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="font-sans text-[10px] tracking-[0.12em] uppercase px-3 py-1 rounded-full"
                          style={{
                            background: "hsla(36,88%,52%,0.1)",
                            color: "hsl(36,88%,52%)",
                            border: "1px solid hsla(36,88%,52%,0.2)",
                          }}
                        >
                          {milestone.tag}
                        </span>
                        <span className="font-sans text-xs text-white/30">{milestone.year}</span>
                      </div>
                      <h3 className="font-display font-bold text-white text-xl mb-2">{milestone.title}</h3>
                      <p className="font-sans text-white/45 text-sm leading-relaxed">{milestone.description}</p>
                    </motion.div>
                  </div>

                  {/* Node */}
                  <div
                    className="absolute left-0 md:relative md:left-auto flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center z-10"
                    style={{
                      background: "hsl(222,38%,8%)",
                      border: "2px solid hsl(36,88%,52%)",
                      boxShadow: "0 0 20px hsla(36,88%,52%,0.25)",
                    }}
                  >
                    <span className="font-display font-bold text-sm" style={{ color: "hsl(36,88%,52%)" }}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
