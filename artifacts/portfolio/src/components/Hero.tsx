import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Neo grid */}
      <div className="absolute inset-0 neo-grid opacity-60 dark:opacity-100" />

      {/* Radial glow blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsla(195,100%,55%,0.18) 0%, transparent 70%)" }} />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsla(220,100%,60%,0.12) 0%, transparent 70%)" }} />
      <div className="absolute top-20 left-10 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsla(195,100%,55%,0.08) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-8 border border-primary/30 dark:border-primary/40 dark:shadow-[0_0_12px_hsla(195,100%,55%,0.3)]"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse dark:[box-shadow:0_0_6px_hsl(195,100%,55%)]" />
            Available for freelance work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-primary to-blue-500 dark:from-cyan-300 dark:via-sky-400 dark:to-blue-400 dark:[filter:drop-shadow(0_0_20px_hsla(195,100%,55%,0.6))]">
              Opeyemi
            </span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl text-muted-foreground mt-2 block leading-tight">
              Frontend Developer &amp; AI Website Builder
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            I build modern websites and digital experiences for businesses and creators.
            Precision-crafted, fast, and beautiful.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto h-14 px-8 text-base group btn-neon dark:[box-shadow:0_0_16px_hsla(195,100%,55%,0.45)] dark:hover:[box-shadow:0_0_30px_hsla(195,100%,55%,0.7)]"
              asChild
            >
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-14 px-8 text-base group dark:border-primary/50 dark:text-primary dark:[box-shadow:0_0_10px_hsla(195,100%,55%,0.2)] dark:hover:[box-shadow:0_0_20px_hsla(195,100%,55%,0.4)] dark:hover:border-primary"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 w-4 h-4" />
                Contact Me
              </a>
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-px h-8 bg-gradient-to-b from-primary to-transparent"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
