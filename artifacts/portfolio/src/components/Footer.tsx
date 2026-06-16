import { Github, Linkedin, Twitter } from "lucide-react";
import { SiFiverr } from "react-icons/si";


export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer data-testid="footer" className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Opeyemi Adetayo. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Designed & built with React, Tailwind CSS & AI tools.
          </p>
        </div>

        <div className="flex items-center gap-1">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-primary transition-colors p-2.5 rounded-lg hover:bg-muted"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary transition-colors p-2.5 rounded-lg hover:bg-muted"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter/X"
            className="text-muted-foreground hover:text-primary transition-colors p-2.5 rounded-lg hover:bg-muted"
          >
            <Twitter size={18} />
          </a>
          <a
            href="https://fiverr.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fiverr"
            className="text-muted-foreground hover:text-primary transition-colors p-2.5 rounded-lg hover:bg-muted"
          >
            <SiFiverr size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
