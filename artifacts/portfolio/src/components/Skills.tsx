import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Responsive Design",
  "AI-Assisted Development",
  "Landing Page Design",
  "Website Development",
  "Tailwind CSS",
  "Framer Motion",
  "UI/UX Design",
  "Git & GitHub"
];

export function Skills() {
  return (
    <section id="skills" data-testid="skills-section" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Skills & Stack</h2>
            <div className="h-px bg-border flex-1 ml-4" />
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-6 py-3 rounded-full bg-background border border-border text-foreground font-medium shadow-sm hover:border-primary/50 hover:shadow-primary/20 hover:text-primary transition-all cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
