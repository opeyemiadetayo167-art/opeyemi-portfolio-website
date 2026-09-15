import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface CTAProps {
  badge?: {
    text: string
  }
  title: ReactNode
  description?: ReactNode
  action: {
    text: string
    href: string
    variant?: "default" | "glow"
  }
  withGlow?: boolean
  className?: string
  children?: ReactNode
}

export function CTASection({
  badge,
  title,
  description,
  action,
  withGlow = true,
  className,
  children,
}: CTAProps) {
  return (
    <section className={cn("overflow-hidden pt-0 md:pt-0", className)}>
      <div className="relative mx-auto flex max-w-container flex-col items-center gap-6 px-5 py-10 text-center sm:gap-8 sm:px-8 md:py-20 lg:py-24">
        {badge && (
          <Badge
            variant="outline"
            className="opacity-0 animate-fade-in-up delay-100 border-primary/25 bg-primary/10 px-4 py-1.5 text-[10px] tracking-[0.18em] uppercase"
          >
            <span className="flex items-center gap-2 text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {badge.text}
            </span>
          </Badge>
        )}

        <h2 className="font-display text-[1.85rem] font-bold tracking-tight text-white sm:text-4xl md:text-5xl opacity-0 animate-fade-in-up delay-200 leading-tight">
          {title}
        </h2>

        {description && (
          <div className="max-w-xl space-y-4 text-base text-muted-foreground md:text-lg opacity-0 animate-fade-in-up delay-300 leading-relaxed">
            {description}
          </div>
        )}

        <Button
          variant={action.variant || "default"}
          size="lg"
          className="opacity-0 animate-fade-in-up delay-500 rounded-full min-h-11 px-8"
          asChild
        >
          <a href={action.href}>{action.text}</a>
        </Button>

        {children}

        {withGlow && (
          <div className="fade-top-lg pointer-events-none absolute inset-0 rounded-2xl shadow-glow opacity-0 animate-scale-in delay-700" />
        )}
      </div>
    </section>
  )
}
