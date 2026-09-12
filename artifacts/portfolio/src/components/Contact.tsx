import { motion } from "framer-motion";
import { Mail, MessageCircle, Linkedin, Phone } from "lucide-react";
import { SiUpwork } from "react-icons/si";
import { ContactForm } from "./ContactForm";
import { SITE } from "@/lib/site";

const contacts = [
  {
    name: "Email",
    value: SITE.email,
    subtext: "Best for project inquiries",
    Icon: Mail,
    href: `mailto:${SITE.email}`,
    iconColor: "hsl(36,88%,52%)",
    hoverBg: "rgba(232,160,32,0.08)",
    hoverBorder: "rgba(232,160,32,0.3)",
  },
  {
    name: "WhatsApp",
    value: "+234 816 365 7206",
    subtext: "Quick responses",
    Icon: MessageCircle,
    href: `https://wa.me/${SITE.whatsapp}`,
    iconColor: "hsl(36,88%,52%)",
    hoverBg: "rgba(232,160,32,0.08)",
    hoverBorder: "rgba(232,160,32,0.3)",
  },
  {
    name: "Call or Text",
    value: "+234 816 365 7206",
    subtext: "+234 816 365 7206",
    Icon: Phone,
    href: `tel:+${SITE.whatsapp}`,
    iconColor: "hsl(36,88%,52%)",
    hoverBg: "rgba(232,160,32,0.08)",
    hoverBorder: "rgba(232,160,32,0.3)",
  },
  {
    name: "Upwork",
    value: "Hire me on Upwork",
    subtext: "Verified freelancer",
    Icon: SiUpwork,
    href: SITE.upwork,
    iconColor: "hsl(36,88%,52%)",
    hoverBg: "rgba(232,160,32,0.08)",
    hoverBorder: "rgba(232,160,32,0.3)",
  },
  {
    name: "LinkedIn",
    value: "Connect with me",
    subtext: "Professional network",
    Icon: Linkedin,
    href: SITE.linkedin,
    iconColor: "hsl(36,88%,52%)",
    hoverBg: "rgba(232,160,32,0.08)",
    hoverBorder: "rgba(232,160,32,0.3)",
  },
];

export function Contact() {
  return (
    <section id="contact" data-testid="contact-section" className="pt-16 md:pt-20 pb-8 md:pb-10 relative">
      {/* Deep purple/violet radial glow — distinct from other sections */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full blur-[160px]"
          style={{
            background:
              "radial-gradient(ellipse, hsla(270,70%,50%,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

            {/* ── Left column (55%) ── */}
            <div className="w-full lg:w-[55%] self-start">
              {/* Section label */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-sans text-[hsl(36,88%,52%)] text-[10px] tracking-[0.25em] uppercase">
                  07 — Contact
                </span>
                <div className="h-px bg-white/8 flex-1" />
              </div>

              <h2 className="font-display font-bold tracking-tight text-3xl md:text-5xl text-white mb-4">
                Get In Touch
              </h2>
              <p className="font-sans text-white/45 text-base leading-relaxed mb-10 max-w-md">
                Have a project in mind or just want to chat? I'm always open to discussing new opportunities and how I can help bring your vision to life.
              </p>

              {/* 2×2 contact card grid */}
              <div className="grid grid-cols-2 gap-3">
                {contacts.map((contact, index) => {
                  const IconComponent = contact.Icon;
                  return (
                    <motion.a
                      key={contact.name}
                      href={contact.href}
                      target={contact.href.startsWith("http") ? "_blank" : "_self"}
                      rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      data-testid={`contact-${contact.name.toLowerCase()}`}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.08 }}
                      whileHover={{ y: -3 }}
                      className="contact-card group flex items-center gap-3 p-4 rounded-2xl transition-all duration-300"
                    >
                      {/* Gold icon container */}
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: "rgba(232,160,32,0.10)",
                          color: "hsl(36,88%,52%)",
                        }}
                      >
                        <IconComponent size={18} />
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-display font-bold text-white text-sm leading-tight">
                          {contact.name}
                        </h3>
                        <p className="font-sans text-xs text-white/35 mt-0.5 truncate">
                          {contact.subtext}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* ── Right column (45%) ── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="w-full lg:w-[45%]"
            >
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
