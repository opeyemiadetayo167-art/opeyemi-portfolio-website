import { motion } from "framer-motion";
import { Monitor, Rocket, PenTool, Layout } from "lucide-react";

const services = [
  {
    title: "Business Websites",
    description: "Professional, fast, and secure websites tailored to elevate your business online.",
    icon: Monitor,
  },
  {
    title: "Landing Pages",
    description: "High-converting landing pages designed to capture leads and drive sales.",
    icon: Rocket,
  },
  {
    title: "Portfolio Websites",
    description: "Stunning personal portfolios that showcase your work and personal brand.",
    icon: Layout,
  },
  {
    title: "Website Redesigns",
    description: "Modernizing outdated websites with fresh UI/UX and improved performance.",
    icon: PenTool,
  }
];

export function Services() {
  return (
    <section id="services" data-testid="services-section" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Services</h2>
            <div className="h-px bg-border flex-1 ml-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-card border border-card-border overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <service.icon size={28} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
