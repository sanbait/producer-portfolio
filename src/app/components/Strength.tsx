import { useRef } from "react";
import { motion, useInView } from "motion/react";

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Strength() {
  const content = [
    {
      title: "ЦЕЛОСТНЫЙ ВЗГЛЯД НА ПРОДУКТ",
      description:
        "Вижу продукт как одну систему: экономика, игровой цикл, производство, метрики, команда и приоритеты. Понимаю, как решение в одной части влияет на всё остальное. Это помогает собирать рабочую модель, а не набор разрозненных фич.",
    },
    {
      title: "ПОИСК УЯЗВИМОСТЕЙ",
      description:
        "Быстро нахожу, где продукт теряет темп, деньги или рост: в механиках, воронке, процессах, трафике, структуре команды или приоритетах. Не просто диагностирую проблему, а довожу её до исправления и возврата в рабочий ритм.",
    },
    {
      title: "ПОИСК ТОЧЕК РОСТА",
      description:
        "Нахожу, за счёт чего продукт может расти кратно: монетизация, удержание, прогрессия, переработка цикла, новый рынок, новый вектор развития. Превращаю эти точки в понятный план действий с измеримым эффектом для продукта и бизнеса.",
    },
  ];

  const row1 = [
    "SYSTEMS & ECONOMY",
    "SYSTEM PRODUCTION",
    "GAME ECONOMY",
    "MATH MODELING",
    "TOKENOMICS",
    "CORE LOOP",
    "META LOOP",
    "PROGRESSION",
    "SOCIAL SYSTEMS",
    "PLAYER-DRIVEN ECONOMY",
    "F2P / IAP BALANCE",
  ];

  const row2 = [
    "PRODUCT & LIVEOPS",
    "PRODUCT THINKING",
    "RETENTION",
    "MONETIZATION",
    "LIVEOPS",
    "A/B TESTING",
    "COHORT ANALYSIS",
    "BEHAVIORAL ANALYTICS",
    "ARPU / LTV",
    "PRODUCT METRICS",
    "CRISIS PIVOTS",
  ];

  const row3 = [
    "TOOLS & EXECUTION",
    "AI",
    "VIBE CODING",
    "LLM",
    "UNREAL ENGINE 5",
    "BLUEPRINTS",
    "MACHINATIONS",
    "EXCEL",
    "GOOGLE SHEETS",
    "AMPLITUDE",
    "TABLEAU",
    "FIGMA",
    "MIRO",
    "JIRA",
    "NOTION",
  ];

  return (
    <section 
      id="strength" 
      className="pt-16 pb-0 px-6 md:px-12" 
      style={{ backgroundColor: "var(--accent-neon)" }}
    >
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <FadeInSection>
          <div className="mb-12">
            <h2
              className="screen-title screen-title--black"
              style={{
                fontFamily: "var(--h2-font)",
                fontWeight: "900",
                fontSize: "clamp(2.1rem, 7vw, 5.8rem)",
                lineHeight: "0.9",
                color: "#000000",
                letterSpacing: "-0.04em",
                textTransform: "uppercase"
              }}
            >
              МОЯ ЭКСПЕРТИЗА
            </h2>
            <p
              className="mt-6"
              style={{
                color: "#000000",
                fontFamily: "var(--body-font)",
                fontSize: "1.35rem",
                lineHeight: "1.55",
                fontWeight: 750,
                maxWidth: "none"
              }}
            >
              Вижу продукт целиком, быстро нахожу узкие места и превращаю точки роста в измеримый результат.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {content.map((item, i) => (
              <FadeInSection key={i} delay={0.1 + i * 0.1}>
                <div
                  className="module-card flex flex-col h-full p-7"
                >
                  <h3 
                    className="mb-3 font-black" 
                    style={{ 
                      color: "#000000",
                      fontSize: "1.35rem",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase"
                    }}
                  >
                    {item.title}
                  </h3>
                  <div 
                    className="w-full h-[2px] mb-6" 
                    style={{ backgroundColor: "#000000" }} 
                  />
                  <p
                    style={{
                      fontFamily: "var(--body-font)",
                      fontSize: "1.15rem",
                      lineHeight: "1.5",
                      color: "#000000",
                      fontWeight: "500",
                      flex: 1
                    }}
                  >
                    {item.description}
                  </p>
                  <div className="module-footer mt-6">
                    <span className="module-dot" />
                    <span className="module-line" />
                    <span className="module-label">ACTIVE MODULE</span>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <div
            className="mt-12 overflow-hidden"
            style={{
              width: "100vw",
              marginLeft: "calc(50% - 50vw)",
              marginRight: "calc(50% - 50vw)",
              borderTop: "1px solid rgba(204, 255, 0, 0.2)",
              borderBottom: "1px solid rgba(204, 255, 0, 0.2)",
              backgroundColor: "rgba(2, 3, 0, 0.985)",
              backgroundImage:
                "radial-gradient(ellipse 1100px 320px at 18% 50%, rgba(204,255,0,0.028), transparent 70%), radial-gradient(ellipse 1100px 320px at 82% 50%, rgba(204,255,0,0.022), transparent 70%), linear-gradient(rgba(204,255,0,0.016) 1px, transparent 1px), linear-gradient(90deg, rgba(204,255,0,0.016) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          >
            {[
              { items: row1, direction: "left", topBorder: false },
              { items: row2, direction: "right", topBorder: true },
              { items: row3, direction: "left", topBorder: true },
            ].map((row, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden"
                style={{
                  height: "56px",
                  borderTop: row.topBorder ? "1px solid rgba(204, 255, 0, 0.2)" : "none",
                }}
              >
                <div className="flex w-fit items-center h-full">
                  <motion.div
                    animate={{ x: row.direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
                    transition={{ duration: 135, repeat: Infinity, ease: "linear" }}
                    className="flex gap-8 whitespace-nowrap items-center px-4"
                    style={{
                      fontFamily: "var(--marquee-font)",
                      fontWeight: "var(--marquee-weight)",
                      fontSize: "var(--marquee-size)",
                      letterSpacing: "var(--marquee-ls)",
                    }}
                  >
                    {[...row.items, ...row.items, ...row.items, ...row.items].map((item, i) => (
                      <span key={`${idx}-${i}`} className="flex items-center gap-8" style={{ color: "var(--accent-neon)" }}>
                        {item} <span aria-hidden="true">•</span>
                      </span>
                    ))}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
