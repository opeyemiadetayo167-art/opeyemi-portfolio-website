import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const contacts = [
  {
    name: "Email",
    value: "adetayo@email.com",
    icon: Mail,
    href: "mailto:adetayo@email.com",
    color: "group-hover:text-red-400 group-hover:bg-red-400/10",
  },
  {
    name: "LinkedIn",
    value: "Connect professionally",
    icon: Linkedin,
    href: "https://linkedin.com",
    color: "group-hover:text-blue-500 group-hover:bg-blue-500/10",
  },
  {
    name: "WhatsApp",
    value: "Chat directly",
    icon: MessageCircle,
    href: "https://wa.me/1234567890",
    color: "group-hover:text-green-500 group-hover:bg-green-500/10",
  },
  {
    name: "Fiverr",
    value: "Hire me",
    icon: Twitter, // placeholder for fiverr
    href: "https://fiverr.com",
    color: "group-hover:text-green-400 group-hover:bg-green-400/10",
  }
];

export function Contact() {
  return (
    <section id="contact" data-testid="contact-section" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-primary font-mono text-sm mb-4 tracking-wider uppercase">What's Next?</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Get In Touch</h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.name}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-card-border hover:border-border transition-all flex flex-col items-center justify-center gap-4 hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-muted text-muted-foreground transition-colors ${contact.color}`}>
                  <contact.icon size={20} />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-foreground">{contact.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1 truncate max-w-[120px]">{contact.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <Button size="lg" className="h-14 px-8 text-base" asChild>
            <a href="mailto:adetayo@email.com">Say Hello</a>
          </Button>

        </motion.div>
      </div>
    </section>
  );
}
