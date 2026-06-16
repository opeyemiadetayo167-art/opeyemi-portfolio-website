import { motion } from "framer-motion";
import { Code2, Smartphone, Zap, Globe } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean & Modern Code",
    description: "Maintainable React code built with best practices and clean architecture.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Every pixel is crafted to look perfect on phones, tablets, and desktops.",
  },
  {
    icon: Zap,
    title: "AI-Accelerated Builds",
    description: "AI-assisted workflows mean faster delivery without cutting corners on quality.",
  },
  {
    icon: Globe,
    title: "Built for Conversion",
    description: "Landing pages and business sites designed to attract leads and drive results.",
  },
];

export function About() {
  return (
    <section id="about" data-testid="about-section" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-16">
            <span className="text-primary font-mono text-sm tracking-widest uppercase">01. About</span>
            <div className="h-px bg-border flex-1" />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                I turn ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-400">high-performing</span> websites
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Hey, I'm <strong className="text-foreground">Opeyemi Adetayo</strong> — a 19-year-old Frontend Developer and AI Website Builder. I specialize in building responsive websites, high-converting landing pages, and modern UI experiences that help businesses grow online.
                </p>
                <p>
                  What sets me apart is my ability to leverage AI-assisted development tools to deliver professional, production-ready websites faster than traditional workflows — without sacrificing quality or attention to detail.
                </p>
                <p>
                  Whether you need a business website, a stunning portfolio, or a landing page that converts visitors into customers, I bring both technical skill and creative vision to every project.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
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

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group p-6 rounded-2xl bg-card border border-card-border hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                    <item.icon size={22} />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-sm md:text-base">{item.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
