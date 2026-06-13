import { motion } from "framer-motion";
import { Monitor, Rocket, User, RefreshCw, BrainCircuit } from "lucide-react";

const services = [
  {
    title: "Business Websites",
    description:
      "Professional, fast-loading websites that establish your brand online and build trust with potential customers.",
    icon: Monitor,
    highlight: false,
  },
  {
    title: "Landing Pages",
    description:
      "High-converting landing pages engineered to capture leads, drive sign-ups, and maximize your marketing ROI.",
    icon: Rocket,
    highlight: true,
  },
  {
    title: "Portfolio Websites",
    description:
      "Stunning personal portfolios that showcase your work, tell your story, and attract the clients you want.",
    icon: User,
    highlight: false,
  },
  {
    title: "Website Redesigns",
    description:
      "Breathing new life into outdated websites with modern UI, improved performance, and better user experience.",
    icon: RefreshCw,
    highlight: false,
  },
  {
    title: "AI-Assisted Development",
    description:
      "Combining AI-powered tools with expert frontend skills to deliver high-quality websites in record time — at competitive rates.",
    icon: BrainCircuit,
    highlight: true,
  },
];

export function Services() {
  return (
    <section id="services" data-testid="services-section" className="py-24 md:py-32 relative bg-muted/20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 bottom-0 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-primary font-mono text-sm tracking-widest uppercase">05. Services</span>
            <div className="h-px bg-border flex-1" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">What I Offer</h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-xl">
            End-to-end web development services tailored to help your business stand out and grow online.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`group relative p-8 rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  service.highlight
                    ? "bg-primary/5 border-primary/30 hover:border-primary/60 hover:shadow-primary/10"
                    : "bg-card border-card-border hover:border-primary/40 hover:shadow-primary/5"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  {service.highlight && (
                    <span className="absolute top-0 right-6 -translate-y-3 text-xs font-mono bg-primary text-primary-foreground px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                      service.highlight
                        ? "bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                        : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                    }`}
                  >
                    <service.icon size={26} />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 p-8 rounded-2xl bg-card border border-card-border text-center"
          >
            <p className="text-muted-foreground mb-2">Not sure what you need?</p>
            <p className="text-foreground font-medium">
              Let's talk — I'll help you figure out the best solution for your project.{" "}
              <a href="#contact" className="text-primary hover:underline underline-offset-4">
                Get in touch
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
