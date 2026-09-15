import { Linkedin } from "lucide-react";
import { SiUpwork } from "react-icons/si";
import { SITE } from "@/lib/site";

const footerLinks = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { href: SITE.upwork, label: "Upwork", Icon: SiUpwork },
    { href: SITE.linkedin, label: "LinkedIn", Icon: Linkedin },
  ];

  return (
    <footer data-testid="footer" className="py-10 border-t" style={{ borderColor: "hsla(210,30%,96%,0.06)" }}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="font-display font-bold text-white text-sm">{SITE.name}</p>
            <p className="font-sans text-xs text-white/35">{SITE.shortTitle} · {SITE.location}</p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-xs text-white/40 hover:text-[hsl(36,88%,52%)] tracking-[0.12em] uppercase transition-colors min-h-11 inline-flex items-center px-3"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/30 hover:text-[hsl(36,88%,52%)] transition-colors min-h-11 min-w-11 inline-flex items-center justify-center rounded-lg hover:bg-white/5"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6 border-t border-white/5">
          <p className="font-sans text-sm text-white/30">
            © {currentYear} {SITE.name}. All rights reserved.
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="font-sans text-sm text-white/35 hover:text-[hsl(36,88%,52%)] transition-colors"
          >
            {SITE.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
