import { motion } from "framer-motion";
import { Mail, MessageCircle, Linkedin } from "lucide-react";
import { SiFiverr } from "react-icons/si";
import { Button } from "@/components/ui/button";

const contacts = [
  {
    name: "Email",
    value: "adetayo@email.com",
    subtext: "Best for project inquiries",
    Icon: Mail,
    href: "mailto:adetayo@email.com",
    colorClasses: "group-hover:text-rose-400 group-hover:border-rose-400/30 group-hover:bg-rose-400/5",
  },
  {
    name: "WhatsApp",
    value: "+234 XXX XXX XXXX",
    subtext: "Quick responses",
    Icon: MessageCircle,
    href: "https://wa.me/2341234567890",
    colorClasses: "group-hover:text-green-400 group-hover:border-green-400/30 group-hover:bg-green-400/5",
  },
  {
    name: "Fiverr",
    value: "fiverr.com/adetayo",
    subtext: "Hire me on Fiverr",
    Icon: SiFiverr,
    href: "https://fiverr.com",
    colorClasses: "group-hover:text-emerald-400 group-hover:border-emerald-400/30 group-hover:bg-emerald-400/5",
  },
  {
    name: "LinkedIn",
    value: "Connect with me",
    subtext: "Professional network",
    Icon: Linkedin,
    href: "https://linkedin.com",
    colorClasses: "group-hover:text-blue-400 group-hover:border-blue-400/30 group-hover:bg-blue-400/5",
  },
];

export function Contact() {
  return (
    <section id="contact" data-testid="contact-section" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[700px] h-[300px] bg-primary/8 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-primary font-mono text-sm tracking-widest uppercase">06. Contact</span>
            <div className="h-px bg-border flex-1" />
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or just want to chat? I'm always open to discussing new opportunities, interesting ideas, and how I can help bring your vision to life.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {contacts.map((contact, index) => {
              const IconComponent = contact.Icon;
              return (
                <motion.a
                  key={contact.name}
                  href={contact.href}
                  target={contact.href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  data-testid={`contact-${contact.name.toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className={`group p-6 rounded-2xl bg-card border border-card-border transition-all duration-300 flex flex-col items-center gap-4 text-center shadow-sm hover:shadow-lg ${contact.colorClasses}`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-muted text-muted-foreground flex items-center justify-center transition-all duration-300 group-hover:scale-110 border border-transparent group-hover:border-current">
                    <IconComponent size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm">{contact.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate max-w-[130px]">{contact.value}</p>
                    <p className="text-xs text-muted-foreground/60 mt-1">{contact.subtext}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6 text-sm">Prefer a direct message?</p>
            <Button size="lg" className="h-14 px-10 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow" asChild>
              <a href="mailto:adetayo@email.com">
                <Mail className="mr-2 w-4 h-4" />
                Send Me an Email
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
