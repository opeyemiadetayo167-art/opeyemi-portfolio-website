import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen overflow-hidden bg-background"
    >
      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Grid */}
      <div className="absolute inset-0 subtle-grid opacity-100 pointer-events-none z-0" />

      {/* Shimmer */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 40% at 75% 45%, hsla(220,90%,38%,0.15) 0%, transparent 70%), radial-gradient(ellipse 40% 30% at 25% 65%, hsla(260,60%,38%,0.09) 0%, transparent 65%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Blue glow right */}
      <div
        className="absolute top-1/2 -translate-y-1/2 right-0 w-[700px] h-[700px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 80% 50%, hsla(220,100%,50%,0.3) 0%, hsla(220,90%,35%,0.08) 50%, transparent 70%)",
        }}
      />

      {/* Purple glow left */}
      <div
        className="absolute top-1/2 -translate-y-1/2 left-0 w-[550px] h-[550px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 15% 50%, hsla(270,75%,45%,0.18) 0%, hsla(240,60%,40%,0.04) 50%, transparent 65%)",
        }}
      />

      {/* Lens flare */}
      <div className="absolute top-[22%] left-[37%] pointer-events-none z-10">
        <motion.div
          animate={{ opacity: [0.3, 0.65, 0.3], scale: [1, 1.06, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            background:
              "conic-gradient(from 0deg, hsla(36,88%,75%,0.2) 0%, hsla(200,90%,75%,0.14) 25%, hsla(280,80%,75%,0.08) 55%, hsla(36,88%,75%,0.2) 100%)",
            filter: "blur(7px)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "hsla(36,88%,95%,0.45)",
            filter: "blur(2px)",
          }}
        />
      </div>

      {/* ── Main: 60/40 grid, full-height, vertically centred ── */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-[60fr_40fr] items-center min-h-screen">

          {/* ── LEFT: Text (60%) ── */}
          <div className="flex flex-col justify-center px-5 md:pl-20 lg:pl-24 md:pr-6 pt-28 pb-10 md:py-0 overflow-hidden">

            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 text-white/45 font-sans text-[10px] tracking-[0.18em] mb-8"
              style={{ background: "hsla(220,30%,13%,0.55)", backdropFilter: "blur(10px)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              AVAILABLE FOR PROJECTS
            </motion.div>

            {/* Headline — strictly inside left column */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {/* Line 1 */}
              <div
                className="font-display font-extrabold text-white leading-[0.9]"
                style={{ fontSize: "clamp(2rem, 8vw, 6.4rem)", letterSpacing: "-0.02em" }}
              >
                Frontend
              </div>

              {/* Line 2 — italic gold, slightly smaller */}
              <div
                className="serif-italic leading-[1.05]"
                style={{
                  fontSize: "clamp(1.7rem, 6.5vw, 5.2rem)",
                  letterSpacing: "-0.01em",
                  color: "hsl(36,88%,52%)",
                  textShadow: "0 0 60px hsla(36,88%,52%,0.28)",
                  background: "none",
                  WebkitTextFillColor: "hsl(36,88%,52%)",
                  marginTop: "0.06em",
                  marginBottom: "0.06em",
                }}
              >
                developer
              </div>

              {/* Line 3 */}
              <div
                className="font-display font-extrabold text-white leading-[0.9]"
                style={{ fontSize: "clamp(2rem, 8vw, 6.0rem)", letterSpacing: "-0.02em" }}
              >
                & AI Builder
              </div>
            </motion.div>

            {/* Gold divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.22 }}
              className="origin-left mt-8 mb-5 h-[2px] w-10"
              style={{ background: "hsl(36,88%,52%)" }}
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-sans font-medium leading-relaxed max-w-md"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)", color: "rgba(255,255,255,0.75)" }}
            >
              I craft high-converting websites and digital experiences
              for businesses and creators. Fast, modern, beautiful.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 mt-8"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-sans font-semibold text-sm tracking-wide transition-all duration-300"
                style={{
                  background: "#E8A020",
                  color: "hsl(222,38%,8%)",
                  boxShadow: "0 0 20px hsla(36,88%,52%,0.3)",
                }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 36px hsla(36,88%,52%,0.5)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 0 20px hsla(36,88%,52%,0.3)")}
              >
                View My Work <ArrowRight size={15} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-sans font-semibold text-sm tracking-wide text-white border border-white/20 hover:border-white/45 hover:bg-white/5 transition-all duration-300"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Info strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex flex-col gap-1 mt-10 items-center md:items-start"
            >
              <p className="font-sans text-white/25 text-[9px] tracking-[0.24em] uppercase">
                Frontend / AI Tools / SaaS
              </p>
              <p className="font-sans text-white/25 text-[9px] tracking-[0.24em] uppercase">
                Based in Lagos
              </p>
            </motion.div>
          </div>

          {/* ── RIGHT: Photo card (40%) — shown below text on mobile ── */}
          <div className="flex items-center justify-center py-8 md:py-20 md:pr-10 lg:pr-14">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
              className="relative w-full max-w-[280px] md:max-w-[380px]"
            >
              {/* Outer glow */}
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: "-20%",
                  borderRadius: "3rem",
                  background:
                    "radial-gradient(ellipse at 55% 45%, hsla(220,100%,55%,0.22) 0%, hsla(270,75%,45%,0.07) 55%, transparent 80%)",
                }}
              />

              {/* Photo frame */}
              <div
                className="relative w-full overflow-hidden"
                style={{
                  aspectRatio: "3/4.2",
                  borderRadius: "2rem",
                  border: "1px solid hsla(220,75%,65%,0.3)",
                  boxShadow:
                    "0 0 0 1px hsla(36,88%,52%,0.12), 0 30px 80px rgba(0,0,0,0.7), 0 0 55px hsla(220,80%,45%,0.2)",
                  background: "hsla(222,35%,8%,0.8)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <img
                  src="/opeyemi.png"
                  alt="Opeyemi Adetayo"
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: "center 5%",
                    filter: "contrast(1.03) brightness(0.97) saturate(0.9)",
                  }}
                />
                {/* Bottom fade */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[45%] pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, hsl(222,38%,8%) 0%, hsla(222,38%,8%,0.95) 18%, hsla(222,38%,8%,0.5) 45%, transparent 100%)",
                  }}
                />
                {/* Inner shimmer */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    borderRadius: "2rem",
                    background:
                      "linear-gradient(135deg, hsla(36,88%,52%,0.04) 0%, transparent 50%, hsla(220,80%,60%,0.04) 100%)",
                  }}
                />
              </div>

              {/* Open to Work badge — top-left */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
                className="absolute top-5 left-5 z-30 flex items-center gap-2 px-4 py-2 rounded-full font-sans text-xs font-bold tracking-wider text-white"
                style={{
                  background: "rgba(16,22,38,0.82)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 4px 18px rgba(0,0,0,0.4), 0 0 10px hsla(142,65%,50%,0.12)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open to Work
              </motion.div>

              {/* Lagos badge — bottom-right */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 0.7 }}
                className="absolute bottom-10 right-5 z-30 flex items-center gap-1.5 px-4 py-2 rounded-full font-sans text-xs font-bold tracking-wider text-white"
                style={{
                  background: "rgba(16,22,38,0.82)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 4px 18px rgba(0,0,0,0.4), 0 0 10px hsla(36,88%,52%,0.12)",
                }}
              >
                📍 Lagos, NG
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 right-8 md:right-14 z-20 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-white/22 text-[9px] tracking-[0.22em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, hsla(36,88%,52%,0.5), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
