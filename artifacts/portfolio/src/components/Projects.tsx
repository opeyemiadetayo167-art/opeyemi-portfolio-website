import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  shortDescription: string;
  overview: string;
  image: string;
  tags: string[];
  features: string[];
  problem: string;
  demo: string | null;
  github: string | null;
}

const projects: Project[] = [
  {
    title: "The Oyster Society",
    shortDescription:
      "Luxury events catering website for London's premier mobile oyster, caviar & champagne brand — built to convert high-intent visitors into event bookings.",
    overview:
      "Built a clean, elegant website for The Oyster Society, London's premier luxury mobile catering brand specialising in oysters, caviar, and champagne experiences. The site showcases their full service offering — from live oyster shucking and roaming caviar belts to masterclasses and canapés — with a polished visual identity that mirrors the premium, high-end nature of their clientele (Rolls Royce, Cartier, Sotheby's, National Portrait Gallery).",
    image:
      "https://static.wixstatic.com/media/6580d8_575cb7b7d4f94bfaab926838549c4db1~mv2.jpg",
    tags: ["Wix", "E-Commerce", "Event Booking", "Business Website"],
    features: [
      "Multi-service showcase covering oyster shucking, caviar belts, masterclasses & canapés",
      "Client testimonials section highlighting premium brand partnerships",
      "Event enquiry form for high-intent booking conversions",
      "Integrated Instagram feed for social proof",
      "E-commerce shop for gifts and experiences",
    ],
    problem:
      "Luxury catering brands need an online presence that matches the prestige of their service. The Oyster Society required a site that felt as premium as their clientele — Rolls Royce, Cartier, Sotheby's — while making it effortless for event planners to enquire and book.",
    demo: "https://www.oystersociety.co.uk",
    github: null,
  },
  {
    title: "Personal Development App",
    shortDescription: "A comprehensive web app for tracking personal growth goals, habits, and daily achievements.",
    overview:
      "A sleek, data-driven web application designed to help individuals take control of their personal growth. Built with a focus on clarity and motivation, the app helps users set goals, track habits, and visualize progress through beautiful charts and dashboards.",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind CSS", "Recharts", "Framer Motion", "LocalStorage"],
    features: [
      "Goal-setting dashboard with progress tracking",
      "Daily habit streaks and completion rings",
      "Visual analytics with interactive charts",
      "Dark mode UI with smooth animations",
      "Fully responsive mobile layout",
    ],
    problem:
      "Most people struggle to stay consistent with personal goals because they lack a simple, visual system to track progress. This app solves that by making self-improvement tangible and motivating.",
    demo: null,
    github: null,
  },
  {
    title: "Furniture Store App",
    shortDescription: "A modern e-commerce UI for a premium furniture brand with product listings and cart.",
    overview:
      "An elegant, high-converting e-commerce frontend for a luxury furniture brand. Designed to match the premium feel of high-end furniture products, featuring smooth product browsing, a dynamic cart, and a polished checkout flow.",
    image: "/projects/project2.png",
    tags: ["React", "Zustand", "Tailwind CSS", "Framer Motion"],
    features: [
      "Product catalog with category filtering",
      "Dynamic shopping cart with quantity management",
      "Smooth add-to-cart micro-animations",
      "Product detail pages with image galleries",
      "Fully responsive grid layout",
    ],
    problem:
      "Furniture brands often have beautiful products but poor digital presence. This project demonstrates how a premium online store UI can elevate perceived brand value and drive more sales.",
    demo: null,
    github: null,
  },
  {
    title: "Portfolio Website",
    shortDescription: "A highly animated personal portfolio built with React, Vite, and AI-assisted development.",
    overview:
      "This very website — a production-grade personal portfolio built from the ground up using React, Tailwind CSS, and Framer Motion. Every section, animation, and interaction was crafted with the goal of converting visitors into freelance clients.",
    image: "/projects/project3.png",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "next-themes"],
    features: [
      "Dark/light mode with smooth transitions",
      "Scroll-triggered entrance animations on every section",
      "Mobile-first responsive design",
      "SEO-optimized with structured data",
      "Professional typography and color system",
    ],
    problem:
      "Developers need a personal brand platform that not only showcases their skills but actively attracts freelance clients. This portfolio was built to do exactly that.",
    demo: "#hero",
    github: null,
  },
];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card border border-card-border rounded-3xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-t-3xl bg-muted">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors backdrop-blur-sm"
              data-testid="modal-close"
            >
              <X size={16} />
            </button>
          </div>

          <div className="p-8 space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-xs font-mono text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
                  Featured Project
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-primary" />
                Key Features
              </h4>
              <ul className="space-y-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-muted/50 border border-border">
              <h4 className="font-semibold text-foreground mb-2 text-sm">Problem Solved</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-secondary text-secondary-foreground border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3 pt-2">
              {project.github ? (
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={15} />
                    Source Code
                  </a>
                </Button>
              ) : (
                <Button variant="outline" size="sm" className="gap-2 opacity-60 cursor-not-allowed" disabled>
                  <Clock size={15} />
                  Source — Coming Soon
                </Button>
              )}
              {project.demo ? (
                <Button size="sm" className="gap-2" asChild>
                  <a
                    href={project.demo}
                    target={project.demo.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={15} />
                    Live Site
                  </a>
                </Button>
              ) : (
                <Button size="sm" className="gap-2 opacity-60 cursor-not-allowed" disabled>
                  <Clock size={15} />
                  Demo — Coming Soon
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" data-testid="projects-section" className="py-24 md:py-32 relative">
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-primary font-mono text-sm tracking-widest uppercase">04. Projects</span>
            <div className="h-px bg-border flex-1" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-xl">
            A selection of projects that showcase my frontend skills, design sensibility, and problem-solving approach.
          </p>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                data-testid={`project-card-${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
                } gap-8 md:gap-12 items-center group`}
              >
                <div
                  className="w-full md:w-3/5 overflow-hidden rounded-2xl border border-card-border shadow-2xl relative aspect-[16/10] bg-muted group-hover:border-primary/30 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <span className="bg-background/90 backdrop-blur-sm text-foreground text-sm font-medium px-4 py-2 rounded-full border border-border">
                      View Details
                    </span>
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div
                  className={`w-full md:w-2/5 flex flex-col justify-center ${
                    index % 2 !== 0 ? "md:items-start" : "md:items-end md:text-right"
                  }`}
                >
                  <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{project.title}</h3>

                  <div
                    className={`p-6 rounded-2xl bg-card border border-card-border shadow-lg relative z-20 mb-5 w-full md:w-[115%] ${
                      index % 2 !== 0 ? "ml-0" : "md:-ml-[15%]"
                    }`}
                  >
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.shortDescription}</p>
                  </div>

                  <ul
                    className={`flex flex-wrap gap-2 mb-6 text-xs font-mono text-muted-foreground ${
                      index % 2 !== 0 ? "justify-start" : "justify-start md:justify-end"
                    }`}
                  >
                    {project.tags.slice(0, 4).map((tag) => (
                      <li key={tag} className="bg-muted/60 px-3 py-1 rounded-md border border-border/50">
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className={`flex gap-3 ${index % 2 !== 0 ? "justify-start" : "justify-start md:justify-end"}`}>
                    {project.github ? (
                      <Button variant="outline" size="sm" className="gap-2 h-9" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={14} />
                          Source
                        </a>
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" className="gap-2 h-9 opacity-60" disabled>
                        <Clock size={14} />
                        Coming Soon
                      </Button>
                    )}
                    {project.demo && project.demo.startsWith("http") ? (
                      <Button size="sm" className="gap-2 h-9" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={14} />
                          Live Site
                        </a>
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        className="gap-2 h-9"
                        onClick={() => setSelectedProject(project)}
                        data-testid={`view-details-${index}`}
                      >
                        <ExternalLink size={14} />
                        View Details
                      </Button>
                    )}
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
