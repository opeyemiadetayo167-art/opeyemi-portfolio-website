import { Linkedin } from "lucide-react";
import { SiUpwork } from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      href: "https://www.upwork.com/freelancers/~0126213fc8bb196fc4?companyReference=2046389435861582425&mp_source=share",
      label: "Upwork",
      Icon: SiUpwork,
    },
    {
      href: "https://linkedin.com",
      label: "LinkedIn",
      Icon: Linkedin,
    },
  ];

  return (
    <footer data-testid="footer" className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Opeyemi Adetayo. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Designed &amp; built with React, Tailwind CSS &amp; AI tools.
          </p>
        </div>

        <div className="flex items-center gap-1">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-primary transition-colors p-2.5 rounded-lg hover:bg-muted"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
