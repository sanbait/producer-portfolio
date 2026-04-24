import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Compass, Users, Coins, Rocket } from "lucide-react";

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.div>
  );
}

const areas = [
  {
    title: "ПРОДУКТОВАЯ СТРАТЕГИЯ",
    subtitle: "Roadmap, приоритеты, повороты стратегии, анализ рынка и конкурентов",
    icon: <Compass size={22} />,
    bullets: [
      "Управляю roadmap и приоритизацией на основе бизнес-целей и P&L",
      "Провожу стратегические пивоты жанра и рынка на основе анализа конкурентов",
      "Принимаю решения, опираясь на данные, экономику и долгосрочные цели продукта",
    ],
  },
  {
    title: "КОМАНДА И ПРОЦЕССЫ",
    subtitle: "Собираю команды с нуля, выстраиваю роли, ритм работы и синхронизацию функций",
    icon: <Users size={22} />,
    bullets: [
      "Строю отделы и кросс-функциональные команды с нуля",
      "Управлял командами численностью до 40 человек",
      "Выстраиваю производственные процессы для стабилизации сроков и ускорения вывода продукта",
    ],
  },
  {
    title: "ЭКОНОМИКА ПРОДУКТА",
    subtitle: "P&L, unit-экономика, бюджеты, монетизация, контроль расходов и точки роста",
    icon: <Coins size={22} />,
    bullets: [
      "Проектирую сложные экономические системы и монетизацию с ARPU $27+",
      "Обеспечиваю рост оборота через оптимизацию воронки продаж",
      "Сэкономил более $100,000 через аудит трафика и диагностику потерь",
    ],
  },
  {
    title: "ЗАПУСК И ОПЕРАЦИОННОЕ УПРАВЛЕНИЕ",
    subtitle: "Запуск продуктов от концепта до релиза, контроль исполнения, зависимости, антикризисные решения",
    icon: <Rocket size={22} />,
    bullets: [
      "Управляю полным циклом производства от 0 до релиза и выводом продуктов на рынок",
      "Работал с бюджетами до $10M в условиях высокой неопределенности",
      "Вытаскиваю проекты с падающими метриками и возвращаю их в рабочий контур",
    ],
  },
];

export function ResponsibilityAreas() {
  return (
    <section
      id="responsibilities"
      className="pt-10 pb-14 px-6"
      style={{ backgroundColor: "var(--accent-neon)" }}
    >
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <FadeInSection>
          <h2
            className="screen-title screen-title--black uppercase mb-8"
            style={{
              fontFamily: "var(--h3-font)",
              fontWeight: "850",
              fontSize: "clamp(1.15rem, 1.6vw, 1.4rem)",
              lineHeight: 1.15,
              letterSpacing: "0.08em",
              color: "#000000",
            }}
          >
            ЗОНЫ ОТВЕТСТВЕННОСТИ
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {areas.map((area, i) => (
            <FadeInSection key={area.title} delay={0.1 + i * 0.08}>
              <div
                className="module-card p-0 h-full"
                style={{
                  borderRadius: 0,
                  "--module-card-bg": "transparent",
                }}
              >
                <div className="p-7 h-full flex flex-col" style={{ border: "1px solid rgba(0, 0, 0, 0.20)" }}>
                  <div className="flex items-start justify-between gap-4">
                    <h3
                      style={{
                        fontFamily: "var(--h3-font)",
                        fontSize: "1.25rem",
                        fontWeight: "900",
                        letterSpacing: "0.02em",
                        lineHeight: 1.15,
                        color: "#000000",
                        textTransform: "uppercase",
                      }}
                    >
                      {area.title}
                    </h3>
                    <div className="shrink-0" style={{ color: "#000000", opacity: 0.9 }}>
                      {area.icon}
                    </div>
                  </div>
                  <div className="mt-4" style={{ height: 2, width: "100%", backgroundColor: "rgba(0, 0, 0, 0.75)" }} />
                  <p
                    className="mt-5"
                    style={{
                      fontFamily: "var(--body-font)",
                      fontSize: "var(--secondary-size)",
                      lineHeight: "var(--secondary-lh)",
                      color: "rgba(0, 0, 0, 0.78)",
                    }}
                  >
                    {area.subtitle}
                  </p>
                  <ul
                    className="mt-4 space-y-2"
                    style={{
                      fontFamily: "var(--body-font)",
                      fontSize: "var(--secondary-size)",
                      lineHeight: "var(--secondary-lh)",
                      color: "rgba(0, 0, 0, 0.78)",
                      paddingLeft: "1.1rem",
                      listStyleType: "disc",
                    }}
                  >
                    {area.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div className="module-footer mt-auto pt-7">
                    <span className="module-dot" />
                    <span className="module-line" />
                    <span className="module-label">ACTIVE MODULE</span>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
