import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import portrait from "../../assets/AVA.webp";

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

export function AboutMe() {
  return (
    <section
      id="about"
      className="pt-24 pb-10 px-6"
      style={{ backgroundColor: "var(--accent-neon)" }}
    >
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-14 items-start">
          <div className="flex-1 lg:order-1">
            <FadeInSection delay={0.1}>
              <h2 className="screen-title screen-title--black" style={{ color: "#000000", marginBottom: "var(--heading-gap)" }}>
                ОБО МНЕ
              </h2>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div
                className="space-y-5"
                style={{
                  fontFamily: "var(--body-font)",
                  fontSize: "var(--body-size)",
                  lineHeight: "var(--body-lh)",
                  color: "rgba(0, 0, 0, 0.82)",
                  fontWeight: 850,
                }}
              >
                <p>
                  12 лет опыта в геймдеве и геймификации. Запускаю продукты, пересобираю команды и процессы, нахожу системные ошибки, которые тормозят рост и съедают бюджет.
                </p>
                <p>
                  Мой бэкграунд в геймдизайне, продукте и операционном управлении помогает видеть проект целиком: экономика, производство, приоритеты, метрики и точки роста.
                </p>
                <p>
                  Подключаюсь в моменты, когда продукту нужен запуск, аудит или поворот стратегии. Собираю рабочую систему и довожу решения до результата.
                </p>
              </div>
            </FadeInSection>
          </div>

          <div className="w-full lg:order-2">
            <FadeInSection>
              <div className="mx-auto lg:mx-0 w-full max-w-[240px] sm:max-w-[300px] lg:max-w-[340px]">
                <div className="relative w-full aspect-[4/5]">
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ border: "1px solid rgba(0, 0, 0, 0.25)", backgroundColor: "rgba(0, 0, 0, 0.04)" }}
                  >
                    <ImageWithFallback
                      src={portrait}
                      alt="Александр Батурин"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center 20%" }}
                    />
                  </div>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ backgroundColor: "#000000" }}
                  />
                  <div
                    className="absolute top-0 left-0 w-1 h-20"
                    style={{ backgroundColor: "#000000" }}
                  />
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>

        <FadeInSection delay={0.3}>
          <div className="mt-10 pt-8" style={{ borderTop: "1px solid rgba(0, 0, 0, 0.25)" }}>
            <h3
              className="screen-title screen-title--black uppercase mb-6"
              style={{
                fontFamily: "var(--h3-font)",
                fontWeight: "850",
                fontSize: "clamp(1.15rem, 1.6vw, 1.4rem)",
                lineHeight: 1.15,
                letterSpacing: "0.08em",
                color: "#000000",
              }}
            >
              МАСШТАБ ОПЫТА
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-stretch">
              {[
                { value: "10+", label: "лет в менеджменте" },
                { value: "40", label: "человек в команде" },
                { value: "10 млн", label: "макс бюджет проекта" },
                { value: "15+", label: "проектов" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="module-card p-0 h-full"
                  style={{
                    borderRadius: 0,
                    "--module-card-bg": "transparent",
                    minHeight: "112px",
                  }}
                >
                  <div className="p-6 h-full flex flex-col justify-center items-center text-center" style={{ border: "1px solid rgba(0, 0, 0, 0.20)" }}>
                    <div
                      style={{
                        fontFamily: "var(--h3-font)",
                        fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)",
                        fontWeight: "900",
                        letterSpacing: "0.02em",
                        lineHeight: 1.05,
                        color: "#000000",
                      }}
                    >
                      {item.value}
                    </div>
                    <div
                      className="mt-2"
                      style={{
                        fontFamily: "var(--body-font)",
                        fontSize: "var(--secondary-size)",
                        lineHeight: "var(--secondary-lh)",
                        color: "rgba(0, 0, 0, 0.68)",
                      }}
                    >
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3
              className="screen-title screen-title--black uppercase mb-6 mt-12"
              style={{
                fontFamily: "var(--h3-font)",
                fontWeight: "850",
                fontSize: "clamp(1.15rem, 1.6vw, 1.4rem)",
                lineHeight: 1.15,
                letterSpacing: "0.08em",
                color: "#000000",
              }}
            >
              С ЧЕМ КО МНЕ ПРИХОДЯТ
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-stretch">
              <div
                className="module-card p-0 h-full"
                style={{
                  borderRadius: 0,
                  "--module-card-bg": "transparent",
                  minHeight: "168px",
                }}
              >
                <div className="p-7 h-full flex flex-col" style={{ border: "1px solid rgba(0, 0, 0, 0.20)" }}>
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
                    Запуск 0-1
                  </h3>
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
                    Запустил не MVP, а MVP и проект в сжатые сроки.
                  </p>
                </div>
              </div>

              <div
                className="module-card p-0 h-full"
                style={{
                  borderRadius: 0,
                  "--module-card-bg": "transparent",
                  minHeight: "168px",
                }}
              >
                <div className="p-7 h-full flex flex-col" style={{ border: "1px solid rgba(0, 0, 0, 0.20)" }}>
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
                    Аудит
                  </h3>
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
                    Найти причину просадки в продукте, маркетинге или исполнении. Провести глубокую диагностику операционных и продуктовых дыр.
                  </p>
                </div>
              </div>

              <div
                className="module-card p-0 h-full"
                style={{
                  borderRadius: 0,
                  "--module-card-bg": "transparent",
                  minHeight: "168px",
                }}
              >
                <div className="p-7 h-full flex flex-col" style={{ border: "1px solid rgba(0, 0, 0, 0.20)" }}>
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
                    Пивот
                  </h3>
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
                    Пересобрать стратегию, сохранить бюджет и темп команды при смене курса.
                  </p>
                </div>
              </div>

              <div
                className="module-card p-0 h-full"
                style={{
                  borderRadius: 0,
                  "--module-card-bg": "transparent",
                  minHeight: "168px",
                }}
              >
                <div className="p-7 h-full flex flex-col" style={{ border: "1px solid rgba(0, 0, 0, 0.20)" }}>
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
                    РОСТ И РАЗВИТИЕ
                  </h3>
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
                    Подключиться к работающему продукту, найти точки роста и выстроить систему масштабирования.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
