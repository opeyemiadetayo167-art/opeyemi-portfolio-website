import { motion } from "framer-motion";
import { Monitor, Rocket, RefreshCw, Code2, MapPin, Wrench } from "lucide-react";

const services = [
  {
    title: "Websites for Local Service Businesses",
    description:
      "For cleaners, lawn care, pressure washing, handymen, painters and other trades: your services, service area, real reviews and a big \"Call now\" button, so people who hear your name can find you and call.",
    icon: Wrench,
    highlight: true,
  },
  {
    title: "Google Business Profile & Local SEO",
    description:
      "I set up and optimize your Google Business Profile and website so people searching for your service in your area actually find you — not just your competitors.",
    icon: MapPin,
    highlight: true,
  },
  {
    title: "Business Websites",
    description:
      "Professional, fast-loading websites that establish your brand online and build trust with potential customers.",
    icon: Monitor,
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
    title: "Landing Pages",
    description:
      "Focused pages built to capture leads and quote requests for one service, offer or season.",
    icon: Rocket,
    highlight: false,
  },
  {
    title: "Full-Stack Web Apps",
    description:
      "End-to-end web apps built with React, Node.js, and Supabase. From idea to deployed product.",
    icon: Code2,
    highlight: false,
  },
];

export function Services() {
  return (
    <section id="services" data-testid="services-section" className="py-16 md:py-20 relative">
      {/* Warm amber/gold radial background glow — distinct from Skills blue glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full blur-[160px]"
          style={{ background: "radial-gradient(ellipse, hsla(36,88%,52%,0.09) 0%, transparent 70%)" }}
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
          {/* Section label */}
          <div className="flex items-center gap-4 mb-6">
            <span className="font-sans text-[hsl(36,88%,52%)] text-[10px] tracking-[0.25em] uppercase">
              06 — Services
            </span>
            <div className="h-px bg-white/8 flex-1" />
          </div>

          <h2 className="font-display font-bold tracking-tight text-3xl md:text-5xl text-white mb-4">
            What I Offer
          </h2>
          <p className="font-sans text-white/45 text-lg mb-16 max-w-xl">
            Websites and Google visibility for small businesses that run on Facebook and word of mouth, and want more customers to find them and call.
          </p>

          {/* 3 + 3 card grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="services-card group relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ padding: "32px", borderRadius: "16px" }}
              >
                {/* Popular badge */}
                {service.highlight && (
                  <span
                    className="absolute top-4 right-4 font-sans text-[10px] font-semibold tracking-[0.12em] uppercase px-3 py-1 rounded-full"
                    style={{
                      background: "hsl(36,88%,52%)",
                      color: "#0d0d0d",
                    }}
                  >
                    Popular
                  </span>
                )}

                {/* Gold top-border accent — animates in on hover via CSS */}
                <div className="services-card__top-border" />

                <div className="relative z-10">
                  {/* Icon container with gold tint */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{ background: "rgba(232,160,32,0.10)", color: "hsl(36,88%,52%)" }}
                  >
                    <service.icon size={22} />
                  </div>

                  <h3 className="font-display font-bold text-white text-lg mb-3">{service.title}</h3>
                  <p className="font-sans text-white/45 leading-relaxed text-sm">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-12 flex items-center justify-center gap-5 flex-wrap"
          >
            <p className="font-sans text-white/60 text-base text-center">
              Not sure yet? I'll build a free homepage preview for your business. No cost, no obligation.
            </p>
            <a
              href="#contact"
              className="font-sans font-semibold text-sm tracking-wide transition-all duration-300 services-cta-btn"
            >
              Get My Free Preview
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
