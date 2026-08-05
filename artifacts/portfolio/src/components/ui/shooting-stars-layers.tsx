import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type ShootingStarsSpeed = "slow" | "normal" | "fast" | number;

export type StaticStar = {
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
};

export type ShootingStar = {
  axis: "horizontal" | "vertical";
  line: number;
  start: string;
  end: string;
  length: number;
  delay: number;
  duration: number;
  repeatDelay: number;
  direction: 1 | -1;
};

const SPEED_SCALE: Record<Exclude<ShootingStarsSpeed, number>, number> = {
  slow: 1.25,
  normal: 1,
  fast: 0.72,
};

export function seeded(index: number, salt: number) {
  const value = Math.sin(index * 91.73 + salt * 37.11) * 10000;
  return value - Math.floor(value);
}

export function createStaticStars(count: number): StaticStar[] {
  return Array.from({ length: count }, (_, index) => ({
    x: seeded(index, 1) * 100,
    y: seeded(index, 2) * 100,
    size: 1 + seeded(index, 3) * 2.4,
    opacity: 0.16 + seeded(index, 4) * 0.44,
    delay: seeded(index, 5) * 4,
    duration: 2.4 + seeded(index, 6) * 3.2,
  }));
}

export function createShootingStars(count: number): ShootingStar[] {
  const horizontalLines = [3, 5, 7, 9, 11, 13, 16, 19];
  const verticalLines = [2, 4, 6, 8, 11, 14, 17, 20, 23];

  return Array.from({ length: count }, (_, index) => {
    const axis = index % 3 === 1 ? "vertical" : "horizontal";
    const direction = index % 2 === 0 ? 1 : -1;
    const lanes = axis === "horizontal" ? horizontalLines : verticalLines;

    return {
      axis,
      line: lanes[index % lanes.length],
      start: direction === 1 ? "-18%" : "112%",
      end: direction === 1 ? "112%" : "-18%",
      length: 86 + seeded(index, 15) * 132,
      delay: seeded(index, 16) * 7 + index * 0.65,
      duration: 1.65 + seeded(index, 17) * 1.6,
      repeatDelay: 4.8 + seeded(index, 18) * 6.2,
      direction,
    };
  });
}

export function getSpeedScale(speed: ShootingStarsSpeed) {
  return typeof speed === "number" ? Math.max(0.35, speed) : SPEED_SCALE[speed];
}

function GridRunner({
  runner,
  index,
  shouldAnimate,
  speedScale,
}: {
  runner: ShootingStar;
  index: number;
  shouldAnimate: boolean;
  speedScale: number;
}) {
  const isHorizontal = runner.axis === "horizontal";
  const linePosition = `calc(var(--shooting-stars-grid-size) * ${runner.line})`;
  const gradientDirection = isHorizontal
    ? runner.direction === 1
      ? "90deg"
      : "270deg"
    : runner.direction === 1
      ? "180deg"
      : "0deg";

  return (
    <motion.span
      className={cn("absolute rounded-full", index > 4 && "max-sm:hidden")}
      style={{
        left: isHorizontal ? runner.start : linePosition,
        top: isHorizontal ? linePosition : runner.start,
        width: isHorizontal ? runner.length : 1,
        height: isHorizontal ? 1 : runner.length,
        background: `linear-gradient(${gradientDirection}, transparent 0%, rgba(8,145,178,0.14) 18%, rgba(103,232,249,0.92) 52%, rgba(255,255,255,0.96) 58%, transparent 100%)`,
        boxShadow: "0 0 16px rgba(6,182,212,0.46), 0 0 28px rgba(148,163,184,0.18)",
      }}
      initial={{ opacity: 0, scaleX: isHorizontal ? 0.35 : 1, scaleY: isHorizontal ? 1 : 0.35 }}
      animate={
        shouldAnimate
          ? {
              left: isHorizontal ? [runner.start, runner.end] : linePosition,
              top: isHorizontal ? linePosition : [runner.start, runner.end],
              opacity: [0, 1, 1, 0],
              scaleX: isHorizontal ? [0.35, 1, 1.08, 0.8] : 1,
              scaleY: isHorizontal ? 1 : [0.35, 1, 1.08, 0.8],
            }
          : { opacity: 0 }
      }
      transition={{
        duration: runner.duration * speedScale,
        delay: runner.delay,
        repeat: Infinity,
        repeatDelay: runner.repeatDelay * speedScale,
        ease: "easeOut",
      }}
    />
  );
}

export type ShootingStarsLayersProps = {
  gridSize: number;
  starCount: number;
  shootingStarCount: number;
  speed: ShootingStarsSpeed;
  glow: boolean;
  showGrid: boolean;
  showStaticStars: boolean;
  shouldAnimate: boolean;
  className?: string;
};

export function ShootingStarsLayers({
  gridSize,
  starCount,
  shootingStarCount,
  speed,
  glow,
  showGrid,
  showStaticStars,
  shouldAnimate,
  className,
}: ShootingStarsLayersProps) {
  const staticStars = React.useMemo(
    () => createStaticStars(Math.max(0, Math.min(starCount, 90))),
    [starCount],
  );
  const shootingStars = React.useMemo(
    () => createShootingStars(Math.max(0, Math.min(shootingStarCount, 10))),
    [shootingStarCount],
  );
  const speedScale = getSpeedScale(speed);

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", className)}
      style={
        {
          "--shooting-stars-grid-size": `${gridSize}px`,
        } as React.CSSProperties
      }
    >
      {showGrid && (
        <div
          className={cn(
            "absolute inset-0 opacity-60",
            "[background-image:linear-gradient(to_right,rgba(255,255,255,0.075)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.075)_1px,transparent_1px)]",
            "[background-size:var(--shooting-stars-grid-size)_var(--shooting-stars-grid-size)]",
          )}
        />
      )}

      <div className="absolute inset-0 bg-[linear-gradient(180deg,#07090f_0%,#0b1020_55%,#07090f_100%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,9,15,0.22)_52%,rgba(7,9,15,0.96)_100%)]" />

      {glow && (
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--shooting-stars-glow-x)_var(--shooting-stars-glow-y),rgba(34,211,238,0.22),transparent_34%),radial-gradient(circle_at_72%_72%,rgba(168,85,247,0.16),transparent_30%)]"
          animate={shouldAnimate ? { opacity: [0.72, 1, 0.78], scale: [1, 1.03, 1] } : undefined}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {showStaticStars && (
        <div className="absolute inset-0">
          {staticStars.map((star, index) => (
            <motion.span
              key={index}
              className={cn(
                "absolute rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.55)]",
                index > 34 && "max-sm:hidden",
              )}
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: star.size,
                height: star.size,
                opacity: star.opacity,
              }}
              animate={
                shouldAnimate
                  ? { opacity: [star.opacity * 0.5, star.opacity, star.opacity * 0.55], scale: [0.85, 1.16, 0.9] }
                  : undefined
              }
              transition={{
                duration: star.duration,
                delay: star.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      <div className="absolute inset-0">
        {shootingStars.map((star, index) => (
          <GridRunner
            key={index}
            runner={star}
            index={index}
            shouldAnimate={shouldAnimate}
            speedScale={speedScale}
          />
        ))}
      </div>
    </div>
  );
}
