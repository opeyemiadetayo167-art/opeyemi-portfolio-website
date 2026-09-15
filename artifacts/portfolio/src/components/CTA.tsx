import { Mail, MessageCircle } from "lucide-react";
import { CTASection } from "@/components/ui/cta-with-rectangle";
import { SITE } from "@/lib/site";

const TRUST_POINTS = [
  { label: "Fast turnaround", color: "bg-emerald-400" },
  { label: "Mobile-responsive", color: "bg-primary" },
  { label: "AI-accelerated builds", color: "bg-blue-400" },
] as const;

export function CTA() {
  return (
    <section data-testid="cta-section" className="relative py-16 md:py-24">
      <div className="container mx-auto px-5 md:px-12">
        <div className="cta-panel relative overflow-hidden rounded-3xl">
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(ellipse 70% 55% at 50% 0%, hsla(36, 88%, 52%, 0.14) 0%, transparent 65%)",
            }}
          />

          <CTASection
            badge={{ text: "Based in Lagos · Working globally" }}
            title={
              <>
                Let&apos;s Build Something{" "}
                <span
                  className="serif-italic font-normal gold-text-glow"
                  style={{ color: "hsl(36,88%,52%)" }}
                >
                  Great Together
                </span>
              </>
            }
            description={
              <>
                <p>
                  Whether you&apos;re starting from scratch or need to level up an existing site, I&apos;d love to hear about your project.
                </p>
                <p>
                  Not sure it&apos;s worth it? I&apos;ll take a free look at what you currently have and tell you honestly whether a new site would help — no obligation.
                </p>
              </>
            }
            action={{
              text: "Contact Me Now",
              href: "#contact",
              variant: "glow",
            }}
            className="relative z-10"
          >
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 opacity-0 animate-fade-in-up delay-500 w-full sm:w-auto">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center justify-center gap-2 min-h-11 rounded-full border border-white/12 bg-white/5 px-5 py-2.5 text-sm text-white/70 transition-colors hover:border-white/25 hover:text-white"
              >
                <Mail size={15} />
                Email
              </a>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-11 rounded-full border border-white/12 bg-white/5 px-5 py-2.5 text-sm text-white/70 transition-colors hover:border-white/25 hover:text-white"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 font-sans text-sm text-white/35 opacity-0 animate-fade-in-up delay-700">
              {TRUST_POINTS.map((point) => (
                <div key={point.label} className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${point.color}`} />
                  {point.label}
                </div>
              ))}
            </div>
          </CTASection>
        </div>
      </div>
    </section>
  );
}
