import { motion } from "motion/react";

export function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#cases")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const marqueeItems = [
    "Operations",
    "Product",
    "P&L",
    "Crisis Management",
    "Team Building",
    "Strategic Pivots",
    "Unit Economics",
    "Monetization",
    "Gamification",
    "Operational Audit",
    "Monetization",
    "gamification",
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-20" style={{ backgroundColor: "var(--bg-primary)" }}>
      {/* Abstract gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 1200px 900px at 85% 15%, rgba(204, 255, 0, 0.12), transparent 60%),
            radial-gradient(ellipse 800px 600px at 15% 85%, rgba(204, 255, 0, 0.08), transparent 55%)
          `,
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(204,255,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(204,255,0,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content - centered */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-[var(--container-px)] py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-8"
          >
            <p
              className="uppercase"
              style={{
                fontFamily: "var(--label-font)",
                fontWeight: "800",
                fontSize: "clamp(20px, 2.4vw, 32px)",
                lineHeight: "1.2",
                letterSpacing: "0.14em",
                color: "var(--accent-neon)",
              }}
            >
              Game Producer · Head of Operations
            </p>
          </motion.div>

          {/* Giant name - centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1
              className="mb-24 text-[clamp(36px,6.2vw,110px)] sm:whitespace-nowrap"
              style={{
                color: "var(--text-primary)",
                fontFamily: "var(--h1-font)",
                fontWeight: "var(--h1-weight)",
                lineHeight: "1.02",
                letterSpacing: "0",
              }}
            >
              АЛЕКСАНДР<span className="hidden sm:inline"> </span><span className="block sm:inline">БАТУРИН</span>
            </h1>
          </motion.div>

          {/* CTA buttons - centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            <motion.button
              onClick={scrollToAbout}
              whileHover={{ backgroundColor: "var(--accent-neon)", color: "#000000" }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer font-bold uppercase tracking-widest"
              style={{
                width: "min(280px, 100%)",
                padding: "22px 44px",
                backgroundColor: "transparent",
                color: "#FFFFFF",
                borderRadius: "0",
                border: "2px solid var(--accent-neon)",
                fontSize: "18px",
                transition: "none"
              }}
              transition={{ duration: 0 }}
            >
              Кейсы
            </motion.button>
            <motion.button
              onClick={scrollToContact}
              whileHover={{ backgroundColor: "var(--accent-neon)", color: "#000000" }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer font-bold uppercase tracking-widest"
              style={{
                width: "min(280px, 100%)",
                padding: "22px 44px",
                backgroundColor: "transparent",
                color: "#FFFFFF",
                borderRadius: "0",
                border: "2px solid var(--accent-neon)",
                fontSize: "18px",
                transition: "none"
              }}
              transition={{ duration: 0 }}
            >
              Контакты
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Running line at BOTTOM */}
      <div
        className="relative overflow-hidden mt-auto"
        style={{
          borderTop: "1px solid rgba(204, 255, 0, 0.2)",
          height: "56px",
          backgroundColor: "transparent",
        }}
      >
        <div className="flex w-fit items-center h-full">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 135, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 whitespace-nowrap items-center px-4"
            style={{
              fontFamily: "var(--marquee-font)",
              fontWeight: "var(--marquee-weight)",
              fontSize: "calc(var(--marquee-size) * 1.3)",
              letterSpacing: "var(--marquee-ls)",
            }}
          >
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="flex items-center gap-8" style={{ color: "var(--accent-neon)" }}>
                {item} <span>·</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
