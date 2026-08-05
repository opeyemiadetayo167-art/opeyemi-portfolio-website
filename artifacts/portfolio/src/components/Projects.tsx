import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, CheckCircle2 } from "lucide-react";

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
    title: "BenFit International Gym",
    shortDescription:
      "Luxury fitness website for one of Lagos's top fitness centres at UNILAG, Bariga.",
    overview:
      "Built a full, high-converting website for BenFit International Gym (BIGym), a leading premium fitness centre in Lagos. The website showcases their personal training packages, group fitness classes (HIIT, Yoga, Aerobics, Pilates), dynamic class schedules, and provides an integrated enquiry flow to convert digital visitors into active gym members.",
    image: "/projects/benfit.png",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Fitness & Wellness"],
    features: [
      "Responsive class schedules and booking enquiry flow",
      "Interactive personal training and membership options",
      "Modern, community-driven dark UI matching their luxury brand",
      "SEO-optimized layout targeting Lagos fitness search terms",
    ],
    problem:
      "BenFit Gym needed a professional, highly visible online portal that could showcase their extensive premium offerings and capture enquiries from prospective members near UNILAG, Bariga.",
    demo: "https://benfitgym.com",
    github: null,
  },
  {
    title: "The Oyster Society",
    shortDescription:
      "Luxury events catering website for London's premier mobile oyster, caviar & champagne brand — built to convert high-intent visitors into event bookings.",
    overview:
      "Built a clean, elegant website for The Oyster Society, London's premier luxury mobile catering brand specialising in oysters, caviar, and champagne experiences. The site showcases their full service offering with a polished visual identity that mirrors the premium, high-end nature of their clientele (Rolls Royce, Cartier, Sotheby's, National Portrait Gallery).",
    image:
      "https://static.wixstatic.com/media/6580d8_575cb7b7d4f94bfaab926838549c4db1~mv2.jpg",
    tags: ["Wix", "E-Commerce", "Event Booking", "Business Website"],
    features: [
      "Multi-service showcase covering oyster shucking, caviar belts, masterclasses & canapés",
      "Client testimonials highlighting premium brand partnerships",
      "Event enquiry form for high-intent booking conversions",
      "Integrated Instagram feed for social proof",
      "E-commerce shop for gifts and experiences",
    ],
    problem:
      "The Oyster Society required a site that felt as premium as their clientele — Rolls Royce, Cartier, Sotheby's — while making it effortless for event planners to enquire and book.",
    demo: "https://www.oystersociety.co.uk",
    github: null,
  },
  {
    title: "Portfolio Website",
    shortDescription:
      "A highly animated personal portfolio built with React, Vite, and AI-assisted development.",
    overview:
      "This very website — a production-grade personal portfolio built from the ground up using React, Tailwind CSS, and Framer Motion. Every section, animation, and interaction was crafted with the goal of converting visitors into freelance clients.",
    image: "/projects/project3.png",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    features: [
      "Scroll-triggered entrance animations on every section",
      "Mobile-first responsive design",
      "SEO-optimized with structured data",
      "Professional typography and color system",
      "Editorial dark luxury visual direction",
    ],
    problem:
      "Developers need a personal brand platform that not only showcases their skills but actively attracts freelance clients. This portfolio was built to do exactly that.",
    demo: "#hero",
    github: null,
  },
  {
    title: "Yuto.pro",
    shortDescription:
      "AI-powered YouTube research tool that helps professional creators cut research time to under 10 minutes using transcript and performance data analysis.",
    overview:
      "Yuto.pro is an AI-powered research platform built for professional YouTube creators. It analyses transcripts, performance data, and trends to surface actionable insights — cutting hours of manual research down to under 10 minutes per video.",
    image: "/projects/yuto.png",
    tags: ["React", "Tailwind CSS", "AI Integration"],
    features: [
      "Transcript analysis and summarisation powered by AI",
      "Performance data insights from YouTube metrics",
      "Research time reduced to under 10 minutes",
      "Built for professional content creators",
    ],
    problem:
      "YouTube creators waste hours manually researching topics and analysing competitor content. Yuto.pro automates this entire workflow with AI.",
    demo: "https://www.yuto.pro",
    github: null,
  },
  {
    title: "NickLaunches",
    shortDescription:
      "A product launch platform for indie builders and SaaS founders. Products stay visible for weeks with permanent indexed pages and free dofollow backlinks.",
    overview:
      "NickLaunches is a product launch directory for indie builders and SaaS founders. Unlike platforms where products disappear overnight, NickLaunches gives every submission a permanent indexed page with dofollow backlinks — helping founders get lasting SEO value alongside launch visibility.",
    image: "/projects/nicklaunches.png",
    tags: ["React", "Tailwind CSS", "Full-Stack"],
    features: [
      "Permanent indexed product pages for lasting SEO",
      "Free dofollow backlinks for every submission",
      "Extended visibility — products stay visible for weeks",
      "Built for indie hackers and SaaS founders",
    ],
    problem:
      "Most launch platforms bury products within 24 hours. NickLaunches solves this by giving every product a permanent, indexed home with SEO value.",
    demo: "https://nicklaunches.com",
    github: null,
  },
  {
    title: "Heddle",
    shortDescription:
      "Next-generation version control for AI agent workflows — tracks reasoning and failed attempts so future agents build on what previous ones already discovered.",
    overview:
      "Heddle is a developer tool that brings version control to AI agent workflows. It tracks not just outputs, but reasoning chains and failed attempts — so future agents can pick up exactly where previous ones left off without repeating the same mistakes.",
    image: "/projects/heddle.png",
    tags: ["React", "Tailwind CSS", "Developer Tools"],
    features: [
      "Version control for AI agent reasoning chains",
      "Tracks failed attempts to prevent repeated mistakes",
      "Enables agents to build on prior discoveries",
      "Designed for AI-native development workflows",
    ],
    problem:
      "AI agents constantly repeat research and mistakes because there's no persistent memory of what was already tried. Heddle solves this with structured version control for agent workflows.",
    demo: "https://heddle.sh",
    github: null,
  },
  {
    title: "CursorClip",
    shortDescription:
      "A modern screen recording platform built for developers and creators. Clean, minimal interface designed for effortless recording and sharing.",
    overview:
      "CursorClip is a screen recording platform designed with developers and creators in mind. It strips away the complexity of traditional recording tools and replaces them with a clean, minimal interface focused on one thing: recording and sharing effortlessly.",
    image: "/projects/cursorclip.png",
    tags: ["React", "Tailwind CSS", "SaaS"],
    features: [
      "Minimal, distraction-free recording interface",
      "Instant shareable links after recording",
      "Built specifically for developers and creators",
      "Clean UI with zero learning curve",
    ],
    problem:
      "Existing screen recording tools are bloated and complex. CursorClip is built to be the tool developers actually want to use — fast, clean, and shareable.",
    demo: null,
    github: null,
  },
  {
    title: "Nuglet",
    shortDescription:
      "A micro-learning app that replaces mindless scrolling with one useful idea a day. No feed, no backlog — just something worth remembering.",
    overview:
      "Nuglet is a micro-learning app built around a single philosophy: one idea a day, delivered with clarity. There's no infinite feed, no backlog to catch up on — just a single, carefully chosen insight every day designed to stick.",
    image: "/projects/nuglet.png",
    tags: ["React", "Tailwind CSS", "Mobile-First"],
    features: [
      "One curated idea delivered daily — no feed, no backlog",
      "Mobile-first design optimised for quick daily habit",
      "Intentionally minimal to reduce cognitive load",
      "Designed to replace mindless scroll time",
    ],
    problem:
      "People spend hours scrolling but retain almost nothing. Nuglet replaces that habit with one idea worth remembering — delivered daily, designed to stick.",
    demo: "https://nuglet.app",
    github: null,
  },
];

/* ── Modal (unchanged logic, refreshed styles) ── */
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: "rgba(10,12,20,0.85)", backdropFilter: "blur(12px)" }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl glass-card shadow-2xl"
          style={{ boxShadow: "0 0 80px rgba(0,0,0,0.6), 0 0 40px hsla(36,88%,52%,0.05)" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-t-3xl bg-black/40">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-90"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              style={{ background: "rgba(0,0,0,0.5)", color: "white", backdropFilter: "blur(8px)" }}
              data-testid="modal-close"
            >
              <X size={16} />
            </button>
          </div>

          <div className="p-8 space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span
                  className="font-sans text-xs tracking-[0.12em] uppercase px-2.5 py-1 rounded-full"
                  style={{
                    background: "hsla(36,88%,52%,0.1)",
                    color: "hsl(36,88%,52%)",
                    border: "1px solid hsla(36,88%,52%,0.2)",
                  }}
                >
                  Featured Project
                </span>
              </div>
              <h3 className="font-display font-bold text-white text-2xl md:text-3xl mb-3">
                {project.title}
              </h3>
              <p className="font-sans text-white/50 leading-relaxed">{project.overview}</p>
            </div>

            <div>
              <h4 className="font-display font-semibold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 size={16} style={{ color: "hsl(36,88%,52%)" }} />
                Key Features
              </h4>
              <ul className="space-y-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 font-sans text-sm text-white/45">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                      style={{ background: "hsl(36,88%,52%)" }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="p-4 rounded-xl border"
              style={{
                background: "hsla(220,30%,10%,0.5)",
                borderColor: "hsla(210,30%,96%,0.06)",
              }}
            >
              <h4 className="font-display font-semibold text-white mb-2 text-sm">Problem Solved</h4>
              <p className="font-sans text-sm text-white/45 leading-relaxed">{project.problem}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md font-sans text-xs glass-card text-white/45"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3 pt-2">
              {project.demo && project.demo.startsWith("http") && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-sans font-semibold text-sm transition-all duration-300"
                  style={{
                    background: "hsl(36,88%,52%)",
                    color: "hsl(222,38%,8%)",
                    boxShadow: "0 0 20px hsla(36,88%,52%,0.3)",
                  }}
                >
                  <ExternalLink size={14} />
                  Live Site
                </a>
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
    <section id="projects" data-testid="projects-section" className="py-16 md:py-20 relative">
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      {/* Faint purple radial glow */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full blur-[160px]"
          style={{
            background:
              "radial-gradient(ellipse, hsla(270,70%,50%,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-6">
            <span className="font-sans text-[hsl(36,88%,52%)] text-[10px] tracking-[0.25em] uppercase">
              04 — Work
            </span>
            <div className="h-px bg-white/8 flex-1" />
          </div>

          <h2 className="font-display font-bold tracking-tight text-3xl md:text-5xl text-white mb-4">
            Featured Projects
          </h2>
          <p className="font-sans text-white/45 text-lg mb-12 max-w-xl">
            A selection of projects that showcase my frontend skills, design sensibility, and problem-solving approach.
          </p>

          {/* Project cards — consistent image-left / info-right layout */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                data-testid={`project-card-${index}`}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="project-card group flex flex-col md:flex-row gap-0 overflow-hidden"
                style={{ borderRadius: "20px" }}
              >
                {/* ── Image (55%) ── */}
                <div
                  className="w-full md:w-[55%] flex-shrink-0 overflow-hidden project-img-container"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                {/* ── Project info (45%) ── */}
                <div className="w-full md:w-[45%] flex flex-col justify-center p-5 md:p-8">
                  {/* FEATURED PROJECT label */}
                  <p
                    className="font-sans text-[10px] tracking-[0.22em] uppercase mb-3"
                    style={{ color: "hsl(36,88%,52%)" }}
                  >
                    Featured Project
                  </p>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-3 leading-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-white/45 text-sm leading-relaxed mb-5">
                    {project.shortDescription}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="font-sans text-xs px-3 py-1 rounded-full"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.10)",
                          color: "rgba(255,255,255,0.55)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA button — consistent single style */}
                  {project.demo && project.demo.startsWith("http") ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn-primary inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-full font-sans font-semibold text-sm transition-all duration-300"
                    >
                      <ExternalLink size={14} />
                      Live Site →
                    </a>
                  ) : (
                    <button
                      data-testid={`view-details-${index}`}
                      onClick={() => setSelectedProject(project)}
                      className="project-btn-outline inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-full font-sans font-semibold text-sm transition-all duration-300"
                    >
                      <ExternalLink size={14} />
                      View Details →
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
