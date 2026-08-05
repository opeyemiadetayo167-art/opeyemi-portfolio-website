import * as React from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ShootingStarsLayers, type ShootingStarsSpeed } from "@/components/ui/shooting-stars-layers";

export type ShootingStarsBackgroundProps = {
  starCount?: number;
  shootingStarCount?: number;
  gridSize?: number;
  speed?: ShootingStarsSpeed;
  glow?: boolean;
  showGrid?: boolean;
  showStaticStars?: boolean;
  reducedMotionFallback?: boolean;
  interactive?: boolean;
  className?: string;
};

export function ShootingStarsBackground({
  starCount = 56,
  shootingStarCount = 8,
  gridSize = 44,
  speed = "normal",
  glow = true,
  showGrid = true,
  showStaticStars = true,
  reducedMotionFallback = true,
  interactive = true,
  className,
}: ShootingStarsBackgroundProps) {
  const reduceMotion = useReducedMotion() === true;
  const rootRef = React.useRef<HTMLDivElement>(null);
  const shouldAnimate = !reduceMotion || !reducedMotionFallback;

  React.useEffect(() => {
    if (!interactive || reduceMotion) return;

    const handler = (event: PointerEvent) => {
      const node = rootRef.current;
      if (!node) return;
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      node.style.setProperty("--shooting-stars-glow-x", `${x}%`);
      node.style.setProperty("--shooting-stars-glow-y", `${y}%`);
    };

    window.addEventListener("pointermove", handler);
    return () => window.removeEventListener("pointermove", handler);
  }, [interactive, reduceMotion]);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className={cn("fixed inset-0 z-0 overflow-hidden", className)}
      style={
        {
          "--shooting-stars-glow-x": "50%",
          "--shooting-stars-glow-y": "30%",
        } as React.CSSProperties
      }
    >
      <ShootingStarsLayers
        gridSize={gridSize}
        starCount={starCount}
        shootingStarCount={shootingStarCount}
        speed={speed}
        glow={glow}
        showGrid={showGrid}
        showStaticStars={showStaticStars}
        shouldAnimate={shouldAnimate}
      />
    </div>
  );
}

export default ShootingStarsBackground;
