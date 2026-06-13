import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Personal Development App",
    description: "A comprehensive web app designed to track personal growth goals, habits, and daily achievements. Features a sleek dark mode dashboard.",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind CSS", "Recharts", "Framer Motion"],
    demo: "#",
    github: "#"
  },
  {
    title: "Furniture Store App",
    description: "A modern, elegant e-commerce UI for a high-end furniture brand. Includes product listings, a dynamic cart, and seamless checkout flow.",
    image: "/projects/project2.png",
    tags: ["React", "Commerce.js", "Zustand", "Stripe"],
    demo: "#",
    github: "#"
  },
  {
    title: "Portfolio Website",
    description: "A sleek, highly animated personal portfolio demonstrating advanced frontend skills, precision layout, and AI-assisted development workflow.",
    image: "/projects/project3.png",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    demo: "#",
    github: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
            <div className="h-px bg-border flex-1 ml-4" />
          </div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                data-testid={`project-card-${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center group`}
              >
                {/* Image */}
                <div className="w-full md:w-3/5 overflow-hidden rounded-2xl border border-card-border shadow-2xl relative aspect-[16/10] md:aspect-[4/3] bg-muted group-hover:border-primary/30 transition-colors">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className={`w-full md:w-2/5 flex flex-col justify-center ${index % 2 !== 0 ? 'md:items-start' : 'md:items-end md:text-right'}`}>
                  <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">{project.title}</h3>
                  
                  <div className={`p-6 rounded-2xl bg-card border border-card-border shadow-lg relative z-20 mb-6 w-[110%] ${index % 2 !== 0 ? 'ml-0' : '-ml-[10%]'}`}>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <ul className={`flex flex-wrap gap-3 mb-8 text-sm font-mono text-muted-foreground ${index % 2 !== 0 ? 'justify-start' : 'justify-start md:justify-end'}`}>
                    {project.tags.map(tag => (
                      <li key={tag} className="bg-muted/50 px-3 py-1 rounded-md">{tag}</li>
                    ))}
                  </ul>

                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    </Button>
                    <Button size="sm" className="gap-2" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
