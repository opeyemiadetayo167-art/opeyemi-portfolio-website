import { motion } from "framer-motion";
import { Code2, User, Terminal, Laptop } from "lucide-react";

export function About() {
  return (
    <section id="about" data-testid="about-section" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">About Me</h2>
            <div className="h-px bg-border flex-1 ml-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hey! I'm <strong className="text-foreground">Adetayo Opeyemi</strong>, a 19-year-old passionate frontend developer based in the digital world. I specialize in building stunning, high-performance web applications that don't just look good, but feel incredible to use.
              </p>
              <p>
                I thrive at the intersection of design and engineering. Lately, I've been super excited about leveraging AI-assisted development tools to rapidly prototype and scale robust digital experiences. Freelancing has given me the opportunity to solve real-world problems for businesses and creators.
              </p>
              <p>
                When I'm not coding, I'm probably exploring new design trends, tinkering with modern UI frameworks, or learning about the next big thing in web technology.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-card border border-card-border shadow-sm flex flex-col items-start gap-4 hover:border-primary/50 transition-colors group">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Code2 size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Clean Code</h3>
                  <p className="text-sm text-muted-foreground mt-1">Maintainable and scalable</p>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-card-border shadow-sm flex flex-col items-start gap-4 hover:border-primary/50 transition-colors group">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Laptop size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Responsive</h3>
                  <p className="text-sm text-muted-foreground mt-1">Perfect on any device</p>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-card-border shadow-sm flex flex-col items-start gap-4 hover:border-primary/50 transition-colors group">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Terminal size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Fast Dev</h3>
                  <p className="text-sm text-muted-foreground mt-1">AI-assisted workflows</p>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-card-border shadow-sm flex flex-col items-start gap-4 hover:border-primary/50 transition-colors group">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <User size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Freelance</h3>
                  <p className="text-sm text-muted-foreground mt-1">Open for new projects</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
