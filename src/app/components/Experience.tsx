import { useRef } from "react";
import { motion, useInView } from "motion/react";

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

const experiences = [
  {
    company: "Gratio",
    role: "Head of Product",
    period: "июль 2024 — настоящее время",
  },
  {
    company: "Decartel",
    role: "Associate Producer",
    period: "ноябрь 2022 — июнь 2024",
  },
  {
    company: "HWC-Studio",
    role: "Head of Game Design",
    period: "январь 2022 — ноябрь 2022",
  },
  {
    company: "",
    role: "Game designer → Lead game designer",
    period: "2018 — 2022",
  },
  {
    company: "",
    role: "Директор по развитию бизнеса",
    period: "2012 — 2017",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <FadeInSection>
          <h2 className="screen-title" style={{ color: "var(--text-primary)", marginBottom: "var(--content-gap)" }}>
            КАРЬЕРНЫЙ ПУТЬ
          </h2>
        </FadeInSection>

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <FadeInSection key={`${exp.period}-${i}`} delay={i * 0.08}>
              <div
                className="p-6"
                style={{
                  border: "1px solid var(--border-default)",
                  borderRadius: "var(--radius-card-sm)",
                  backgroundColor: "rgba(10, 10, 10, 0.72)",
                }}
              >
                <div className="flex flex-col gap-2">
                  <div
                    className="uppercase"
                    style={{
                      fontFamily: "var(--label-font)",
                      fontWeight: "var(--label-weight)",
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                      color: "var(--accent-neon)",
                      opacity: 0.85,
                    }}
                  >
                    {exp.period}
                  </div>
                  <div style={{ color: "var(--text-primary)", fontFamily: "var(--h3-font)", fontWeight: 800, fontSize: 18, lineHeight: 1.2 }}>
                    {exp.role}
                  </div>
                  {exp.company ? (
                    <div
                      className="uppercase"
                      style={{
                        fontFamily: "var(--label-font)",
                        fontWeight: 700,
                        fontSize: 12,
                        letterSpacing: "0.06em",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {exp.company}
                    </div>
                  ) : null}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
