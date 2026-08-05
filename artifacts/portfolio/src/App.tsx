import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Journey } from "@/components/Journey";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import { Services } from "@/components/Services";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ShootingStarsBackground } from "@/components/ui/shooting-stars-background";
import { SITE } from "@/lib/site";

export default function App() {
  return (
    <div className="relative min-h-screen text-foreground selection:bg-primary/30">
      <ShootingStarsBackground interactive starCount={56} shootingStarCount={8} />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Journey />
          <Skills />
          <Projects />
          <Testimonials />
          <Services />
          <CTA />
          <Contact />
        </main>
        <Footer />
      </div>

      <a
        href={`https://wa.me/${SITE.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
        style={{ backgroundColor: "#25D366" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          className="w-8 h-8"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.476 2.027 7.782L0 32l8.456-2.008A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.766-1.847l-.485-.288-5.02 1.193 1.218-4.887-.317-.502A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.87c-.398-.2-2.355-1.162-2.72-1.295-.366-.133-.632-.2-.898.2-.266.398-1.031 1.295-1.264 1.561-.233.266-.465.3-.863.1-.398-.2-1.681-.619-3.203-1.977-1.184-1.057-1.984-2.362-2.217-2.76-.233-.398-.025-.613.175-.812.18-.18.398-.465.597-.698.2-.233.266-.398.398-.664.133-.266.067-.498-.033-.698-.1-.2-.898-2.163-1.231-2.96-.324-.778-.652-.672-.898-.685l-.765-.013c-.266 0-.698.1-1.064.498-.366.398-1.397 1.365-1.397 3.328s1.43 3.86 1.63 4.126c.2.266 2.815 4.298 6.82 6.027.953.412 1.697.657 2.277.841.957.305 1.828.262 2.516.159.767-.114 2.355-.963 2.688-1.893.333-.93.333-1.727.233-1.893-.1-.166-.366-.266-.764-.465z" />
        </svg>
      </a>
    </div>
  );
}
