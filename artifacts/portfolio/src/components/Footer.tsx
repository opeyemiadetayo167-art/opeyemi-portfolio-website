import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer data-testid="footer" className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2025 Adetayo Opeyemi. All rights reserved.
        </p>
        
        <div className="flex items-center gap-4">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
            <Github size={18} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
            <Linkedin size={18} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
            <Twitter size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
