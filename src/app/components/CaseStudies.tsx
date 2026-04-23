import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Users, Clock, Target, Award, ChevronLeft, ChevronRight, Gamepad2, Smartphone, Globe, Send, MessageCircle, Monitor } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useIsMobile } from "./ui/use-mobile";
import minerKombatImg from "../../assets/MK_main.png";
import mkPreview1 from "../../assets/MK_1.webp";
import mkPreview2 from "../../assets/MK_2.webp";
import starRiserImg from "../../assets/SR_main.png";
import srPreview1 from "../../assets/SR_1.jpg";
import srPreview2 from "../../assets/SR_2.png";
import srPreview3 from "../../assets/SR-3.png";
import stellarisImg from "../../assets/Tirstellar.png";
const WOLF = "https://images.unsplash.com/photo-1770223859882-636aa52f7612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb25hbCUyMGdhbWlmaWNhdGlvbiUyMHdvbGYlMjBjYXJlZXIlMjBwcm9ncmVzc2lvbnxlbnwxfHx8fDE3NzUxNjAyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

// Additional preview images
const PREVIEW_INTERFACE = "https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBnYW1lJTIwdGVsZWdyYW0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc1MTc2ODU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const PREVIEW_SPACE = "https://images.unsplash.com/photo-1633415560376-7068469d9d03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHN0cmF0ZWd5JTIwZ2FtZSUyMHJvZ3VlbGlrZXxlbnwxfHx8fDE3NzUxNzY4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const PREVIEW_ECONOMY = "https://images.unsplash.com/photo-1544819679-57b273c027a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZWNvbm9teSUyMHN5c3RlbSUyMGNoYXJ0fGVufDF8fHx8MTc3NTE3Njg1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const PREVIEW_PROGRESSION = "https://images.unsplash.com/photo-1573868056472-22834cad367c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGVzaWduJTIwcHJvZ3Jlc3Npb24lMjBkaWFncmFtfGVufDF8fHx8MTc3NTE3Njg2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const GRATIO_PLACEHOLDER = `data:image/svg+xml,${encodeURIComponent(`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">
  <rect width="1600" height="1000" fill="#000000"/>
  <text x="800" y="540" text-anchor="middle" dominant-baseline="middle" fill="#FF7A00"
        font-family="Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif"
        font-size="220" font-weight="800" letter-spacing="6">GRATIO</text>
</svg>`)}`

interface CaseStudy {
  id: number;
  tag: string;
  tagColor: string;
  title: string;
  subtitle: string;
  image: string;
  accent: string;
  accentBg: string;
  metrics: { icon: React.ReactNode; value: string; label: string }[];
  // Passport fields (right side in modal)
  role?: string;
  company?: string;
  platforms?: string;
  team?: string;
  deadline?: string;
  link?: string;
  // New Passport fields
  categories?: string[];
  genre?: string;
  status?: string;
  monetization?: string;
  availableOn?: ("apple" | "android" | "web" | "telegram" | "line" | "pc")[];
  developer?: string;
  // Legacy passport fields for backward compatibility
  platform?: string;
  stage?: string;
  projectLink?: string;
  focus?: string;
  result?: string;
  // Content sections
  about?: string;
  situation?: string;
  task?: string;
  actions?: string[];
  myRole?: string[];
  whatIDid?: {
    gameLoop?: string[];
    economy?: string[];
    progression?: string[];
    monetization?: string[];
    social?: string[];
    retention?: string[];
    testing?: string[];
  };
  outcome?: string[];
  mechanics?: string[];
  facts?: string[];
  materials?: string[];
  previewImages?: string[];
  videoUrl?: string;
  // Legacy
  challenge?: string;
  solution?: string;
  duration?: string;
}

const cases: CaseStudy[] = [
  {
    id: 1,
    tag: "Telegram Mini App",
    tagColor: "text-cyan-300 bg-cyan-500/15 border-cyan-500/30",
    title: "Miner Kombat — Пивот проекта",
    subtitle:
      "Мидкорный TMA-кликер. Добыча ресурсов, ресурсная прогрессия, токеномика.",
    image: minerKombatImg,
    accent: "from-cyan-600 to-cyan-400",
    accentBg: "border-cyan-500/20",
    metrics: [
      { icon: <Award size={14} />, value: "Lead Producer / Product Lead", label: "Роль" },
      { icon: <Target size={14} />, value: "TMA", label: "Платформы" },
      { icon: <Clock size={14} />, value: "3,5 месяца", label: "Срок" },
      { icon: <Users size={14} />, value: "4 человека", label: "Команда" },
    ],
    // Passport fields (right side in modal)
    role: "Game Producer\\HoO",
    company: "MK",
    platforms: "Telegram",
    team: "5 человек",
    deadline: "1,5 г / 3,5 мес",
    link: "@MinerKombat2bot",
    // New Passport fields
    categories: ["Mobile", "TMA", "P2E"],
    genre: "P2E мидкорный кликер + айдлер",
    status: "In Development",
    monetization: "F2P / IAP / подписка",
    availableOn: ["telegram"],
    developer: "Prom x HWC Studio",
    // Legacy fields for backward compatibility
    platform: "Telegram Mini App",
    stage: "Релизная версия",
    focus: "Экономика, прогрессия, монетизация",
    result: "Рабочая релизная версия",
    about:
      "Miner Kombat - мидкорная idle-игра в формате Telegram Mini App. Проект строится вокруг добычи ресурсов, мета-прогрессии и социального взаимодействия.",
    situation:
      "Проект находился около года в затяжной разработке. Техническая команда не справлялась — процесс затягивался, качество решений падало. На продукте при этом уже сидело 100k+ юзеров, собранных на виралке и органике, но аудитория медленно таяла из-за решений тех. команды.\n\nРыночный контекст ухудшался параллельно: жанр кликеров умирал вслед за Hamster Kombat. Продолжать в той же концепции — значит гарантированно проиграть рынку.",
    task:
      "Вытащить проект из затяжного кризиса разработки. Провести аудит состояния и команды, принять стратегическое решение (чиним или пересобираем), сделать пивот под новые реалии рынка и привести продукт к релизной готовности с новой командой.",
    actions: [
      "Технический аудит: Провёл технический аудит проекта. Нанял внешних тех-экспертов для независимой оценки легаси. Вывод: пересобрать с нуля дешевле и быстрее, чем чинить существующий код.",
      "Перехват управления: Согласовал с инвестором передачу производственного управления. С пакетом выводов аудита получил контроль над пивотом и условиями его реализации.",
      "Реструктуризация команды: Провёл аудит команды и реструктурировал штат. Сократил с 12 человек до 4 ключевых. Заменил всех, кроме СММ. Нанял 1 фулстак-разработчика вместо 3 прежних, 1 дизайнера вместо 2, 1 артиста — команда стала в 2,5 раза компактнее при сохранении производительности.",
      "Пивот и план: Утвердил новое направление продукта и перевёл его в производственный план. В концепцию добавили интеграцию бизнес-платформы для рекламодателей — второй контур монетизации поверх игрового. Подготовил ТЗ на разработку.",
      "Пайплайн: Пересобрал производственный пайплайн с нуля под новый стек и новые задачи.",
      "Операционное управление: Взял на себя постановку задач, ведение беклога и ежедневный контроль команды. Никаких промежуточных звеньев.",
      "Data-driven процесс: Внедрил data-driven подход и аналитику в производственный процесс — каждое продуктовое решение проверяется данными перед отправкой в разработку.",
    ],
    outcome: [
      "За 3,5 месяца компактной командой полностью пересобрали проект, добавили новые фичи и обновили арт-направление.",
      "Выкатили админку с партнёрскими ЛК и дашбордами — управление продуктом без участия разработки.",
      "Внедрили A/B-тесты в пайплайн, провели десяток тестов, отобрали лучшие варианты по отдаче.",
      "Провели закрытый тест на чистом трафике, собрали первичные метрики: ARPPU $27.80, stickiness 47%.",
      "Нашёл и подписал партнёрские контракты на старт.",
      "ARPPU — $27.80",
      "Stickiness — 47%",
      "Оптимизация издержек — 60%",
      "Полный пивот проекта — 3,5 мес",
    ],
    previewImages: [minerKombatImg, mkPreview1, mkPreview2],
  },
  {
    id: 2,
    tag: "TMA / LINE",
    tagColor: "text-purple-300 bg-purple-500/15 border-purple-500/30",
    title: "Star Riser — антикризисное управление и выход на азиатский рынок",
    subtitle: "3D Action в жанре аркадного шутера (Archero-like).",
    image: starRiserImg,
    accent: "from-purple-600 to-cyan-400",
    accentBg: "border-purple-500/20",
    metrics: [
      { icon: <Award size={14} />, value: "Антикризисный продюсер", label: "Роль" },
      { icon: <Target size={14} />, value: "Telegram / LINE", label: "Платформы" },
      { icon: <Clock size={14} />, value: "4,5 мес", label: "Срок" },
      { icon: <Users size={14} />, value: "17 человек", label: "Команда" },
    ],
    // Passport fields (right side in modal)
    role: "Антикризисный продюсер",
    company: "Star Riser",
    platforms: "Telegram / LINE",
    team: "17 человек",
    deadline: "4,5 месяца",
    link: "по запросу",
    // New Passport fields
    categories: ["Mobile", "TMA", "LINE"],
    genre: "3D Action / Arcade Shooter (Archero-like)",
    status: "Live",
    monetization: "F2P / IAP",
    availableOn: ["telegram", "line"],
    developer: "Star Riser",
    // Legacy fields for backward compatibility
    platform: "Telegram / LINE",
    stage: "Живой продукт",
    focus: "Антикризис, аудит, операционные процессы, выход на LINE",
    result: "Остановлено бюджетное кровотечение, выстроены процессы, выполнен выход на LINE",
    about:
      "Star Riser — 3D Action в жанре аркадного шутера (Archero-like). Работающий продукт с большой аудиторией и падающими метриками, требующий антикризисной пересборки и выхода на LINE.",
    situation:
      "Работающий продукт с падающими метриками. На проекте — 700к MAU, однако бизнес-метрики не двигались. Команда демотивирована, беклог хаотичный, без приоритетов — разработка распылялась по задачам без чёткого направления. Параллельно горели дедлайны. Скрытая бюджетная дыра: значительная часть оплаченного трафика не верифицировалась — подозрения на фрод существовали, но подтверждений не было.",
    task:
      "Провести комплексный аудит продукта и производственного пайплайна. Оптимизировать работу команды и процессов, выстроить операционные процессы в команде. Масштабировать проект на новый рынок.",
    actions: [
      "Углублённый аудит проекта: Поднял историю метрик за полгода, провёл когортный анализ, выявил паттерны и закономерности в поведении трафика.",
      "Оптимизация производственного пайплайна: Изучил текущие процессы, изменил подход к разработке, внедрил практики процессного управления.",
      "Усиление команды: Нанял проджект-менеджера и распределил зоны ответственности внутри команды.",
      "Годовой роадмап и стратплан: Построил, просчитал и защитил план развития на год. Закрыл критические пробелы в core- и мета-циклах, а также в монетизации.",
      "Выход на LINE: Организовал перенос проекта на новый рынок. Подготовил P&L и юнит-экономику, распараллелил задачи без расширения команды.",
    ],
    outcome: [
      "Своевременное выявление некачественных источников трафика и отказ от сотрудничества сэкономили более $150k",
      "Оптимизация пайплайна восстановила ритм разработки: спринты стабилизировались, дедлайны перестали срываться, все процессы формализованы и задокументированы",
      "Подготовлены матсермайнд-документы годового развития проекта — роадмап, стратплан, инструкции и регламенты",
      "Игра успешно вышла на LINE и заняла 86-е место в топ-100 платформы",
      "Топ-100 LINE — #86",
      "Сохранённый бюджет — $150 000",
      "Выявлено и отсечено — 70% фрода",
      "Сокращение срывов дедлайнов — −85%",
    ],
    previewImages: [starRiserImg, srPreview1, srPreview2, srPreview3],
  },
  {
    id: 3,
    tag: "PC / WEB3",
    tagColor: "text-yellow-300 bg-yellow-500/15 border-yellow-500/30",
    title: "Stellaris — управление отделом в условиях быстрой масштабируемости",
    subtitle: "Масштабная космическая MMORPG с WEB3-экономикой в духе EVE Online.",
    image: stellarisImg,
    accent: "from-yellow-500 to-orange-400",
    accentBg: "border-yellow-500/20",
    metrics: [
      { icon: <Target size={14} />, value: "3 проекта", label: "Под управлением одновременно" },
      { icon: <Users size={14} />, value: "7 человек", label: "GD-отдел построен с нуля" },
      { icon: <Users size={14} />, value: "46 человек", label: "Масштаб студии в пике" },
      { icon: <Clock size={14} />, value: "Демо в срок", label: "Плейтесты пройдены, концепция защищена" },
    ],
    // Passport fields (right side in modal)
    role: "Head of Game Design",
    company: "HWC STUDIO",
    platforms: "PC / Mobile / Web",
    team: "7 в прямом подчинении / 46 в косвенном",
    deadline: "1 год",
    link: "по запросу",
    // New Passport fields
    categories: ["PC", "MMORPG", "WEB3", "Economy"],
    genre: "Space MMORPG (EVE-like) + Web3-экономика",
    status: "Demo",
    monetization: "WEB3-экономика",
    availableOn: ["apple", "android", "web", "pc"],
    developer: "HWC STUDIO",
    // Legacy fields for backward compatibility
    platform: "PC / Mobile / Web",
    stage: "Препрод → демо",
    focus: "Product Vision, Team Building, процессы GD, координация, защита концепции",
    result: "Играбельное демо + плейтесты + защита концепции",
    about:
      "Stellaris — масштабная космическая MMORPG с WEB3-экономикой. За год выстроил GD-направление с нуля, масштабировал его вместе со студией и довёл продукт до играбельного демо и серии плейтестов.",
    situation:
      "Масштабное космическое ММОРПГ с WEB3-экономикой в духе EVE Online. Бюджет $2–3M, студия в стадии активного роста — к пику разработки 46 человек. Задача: за год выпустить играбельное демо и провести серию плейтестов для защиты концепции перед заказчиком.\n\nGD-направления как структуры на старте не существовало — его предстояло выстраивать параллельно с препродом и масштабировать вместе с ростом студии.",
    task:
      "За 1 год выпустить играбельное демо и провести серию плейтестов для защиты концепции перед заказчиком и инвесторами, параллельно выстроив и масштабировав GD-направление под рост студии.",
    actions: [
      "Product Vision: Работал в связке с CEO и CTO над концепциями, питчами и продажей видения инвесторам. На старте вёл продуктовое направление единолично.",
      "Team Building: Построил GD-команду с нуля, нанимал под конкретные зоны ответственности, распределял блоки работы без пересечений и взаимных блокировок. Выстроил процессы внутри отдела: критерии приёмки, регулярные ревью, прозрачная эскалация.",
      "Scaling Ownership: Последовательно расширял периметр управления вместе с ростом студии: GD → лид GD-команды → Head of GD на три параллельных проекта студии одновременно.",
      "Cross-team Coordination: Отвечал за верхнеуровневое планирование отдела и координацию с арт, тех и продюсерским направлениями. Синхронизировал дорожные карты, снимал конфликты приоритетов.",
      "Stakeholder Management: Защищал концепцию и P&L продукта перед руководством студии и инвесторами на всём протяжении препрода и производства.",
    ],
    outcome: [
      "GD-направление выстроено и масштабировано — до управления тремя параллельными проектами одновременно.",
      "Играбельное демо сдано в срок в рамках согласованного с заказчиком плана.",
      "Плейтесты на живой аудитории проведены, концепция защищена перед заказчиком и инвесторами.",
    ],
    previewImages: [stellarisImg, PREVIEW_SPACE, PREVIEW_ECONOMY, PREVIEW_INTERFACE],
  },
  {
    id: 4,
    tag: "B2B / SaaS",
    tagColor: "text-orange-300 bg-orange-500/15 border-orange-500/30",
    title: "Gratio — Управление портфелем B2B-геймификации",
    subtitle: "Студия продуктовой разработки и геймификации.",
    image: GRATIO_PLACEHOLDER,
    accent: "from-orange-500 to-amber-400",
    accentBg: "border-orange-500/20",
    metrics: [
      { icon: <Award size={14} />, value: "Head of Product Direction", label: "Роль" },
      { icon: <Target size={14} />, value: "Web / TMA / iOS / Android / SaaS", label: "Платформы" },
      { icon: <Clock size={14} />, value: "2 года", label: "Период" },
      { icon: <Users size={14} />, value: "30 человек", label: "Команда" },
    ],
    // Passport fields (right side in modal)
    role: "Head of Product Direction",
    company: "Gratio",
    platforms: "Web / TMA / iOS / Android / SaaS",
    team: "30 человек",
    deadline: "2 года",
    link: "по запросу",
    // New Passport fields
    categories: ["Corporate", "B2B", "Gamification", "SaaS"],
    genre: "B2B-геймификация / Product Development Studio",
    status: "Portfolio Management",
    availableOn: ["web", "apple", "android"],
    developer: "Gratio",
    // Legacy fields for backward compatibility
    platform: "Web / TMA / iOS / Android / SaaS",
    stage: "Параллельное управление портфелем",
    focus: "Концепции с нуля, защита у C-level, производство, scope management",
    result: "3 из 4 проектов доведены до MVP/релиза без критических срывов",
    about:
      "Gratio — студия продуктовой разработки и геймификации. Управлял портфелем B2B-продуктов: от концепций «с нуля» под каждого корпоративного заказчика до производства и результата, удерживая рамки скопа и фокус на бизнес-эффекте.",
    situation:
      "Gratio работала в нише B2B-геймификации: игровые механики на службе корпоративных задач — мотивация персонала, обучение, воронки конверсии. Направление требовало руководителя, который одновременно понимает и продуктовую логику, и корпоративную специфику.\n\nСпецифика ниши жёсткая: заказчики мыслят в терминах KPI и бизнес-эффекта, не игрового опыта. У них нет понимания разработки, зато есть корпоративная бюрократия, NDA, постоянно меняющиеся приоритеты и поток новых «хотелок» прямо в производственный процесс. Главный риск на каждом проекте — не техника, а бесконтрольный рост скопа и размытие фокуса.",
    task:
      "Взять под управление портфель B2B-продуктов. Под каждого клиента — разработать концепцию «с нуля» на стыке игровой логики и бизнес-задачи, защитить её перед топ-менеджментом заказчика, выстроить производственный процесс и довести до результата. Параллельно удерживать скоп на всех проектах — без срывов и разбухания объёма.",
    actions: [
      "Единый подход через 4 проекта: Использовал повторяемую рамку постановки задачи, упаковки концепции и управления производством.",
      "Концепции с нуля: Анализировал бизнес-задачу клиента, переводил её в игровую механику, проектировал user journey, экономику и монетизацию; оформлял в GDD и ТЗ для команды разработки.",
      "Защита у C-level: Презентовал концепции и бюджеты директорам и собственникам на языке KPI, конверсии, LTV и unit-экономики.",
      "Управление производством: Ставил задачи, контролировал исполнение, проводил ревью дизайн-решений, координировал арт и тех без потери темпа.",
      "Scope management: Каждую новую хотелку классифицировал — в backlog апдейтов, в следующий этап или отклонял как ломающую core-логику; фиксировал рамки без конфликта с заказчиком.",
      "Аудиты действующих продуктов: Для Alfa Bank провёл разбор работающего TMA с низкими метриками (дизайн, геймплей, логика, экономика) и собрал приоритизированный план роста.",
      "Тестирование MVP в полях: Для NDA-клиента провёл серию пилотных тестов в магазинах бренда, собрал первичный фидбэк и скорректировал план доработок на основе данных.",
    ],
    outcome: [
      "Компании клиенты РФ — ТОП 5",
      "Портфель проектов — 20+",
      "В одновременном управлении — 4 проекта",
      "Рост выручки компании на геймификации — +57%",
      "Параллельно вёл 4 направления: HR-tech, FinTech, PropTech, Retail; у каждого — своя команда, заказчик и продуктовая логика.",
      "3 из 4 доведены до MVP или релиза без критических срывов по срокам и без потери качества концепции.",
      "NDA-клиент уровня топ-3 техно-корпораций РФ: концепция и MVP прошли защиту перед директорами и полевые тесты в точках продаж.",
      "Выработан повторяемый подход к упаковке B2B-геймификации: от бизнес-задачи клиента до защищённой концепции и работающего продукта.",
      "Scope management без единого критического разбухания: при потоке «хотелок» ни один проект не вышел за производственные рамки.",
    ],
    previewImages: [GRATIO_PLACEHOLDER],
  },
];

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

function getSituationText(c: CaseStudy) {
  return c.situation || c.challenge || "";
}

function getRoleText(c: CaseStudy) {
  if (c.role) return c.role;
  if (c.myRole?.length) return c.myRole.join(" / ");
  return "";
}

function splitHeadline(title: string) {
  const delimiters = [" — ", " – ", " - "];
  for (const d of delimiters) {
    const idx = title.indexOf(d);
    if (idx > 0) return [title.slice(0, idx).trim(), title.slice(idx + d.length).trim()] as const;
  }
  return null;
}

function getProjectName(c: CaseStudy) {
  const split = splitHeadline(c.title);
  return split ? split[0] : c.title;
}

function renderPlatformValue(c: CaseStudy) {
  const text = c.platform || c.platforms || c.tag || "—";
  const platforms = c.availableOn ?? [];
  if (!platforms.length) return text;

  const hasMobile = platforms.includes("apple") || platforms.includes("android");
  const keys = [
    ...(platforms.includes("pc") ? (["pc"] as const) : []),
    ...(hasMobile ? (["mobile"] as const) : []),
    ...(platforms.includes("web") ? (["web"] as const) : []),
    ...(platforms.includes("telegram") ? (["telegram"] as const) : []),
    ...(platforms.includes("line") ? (["line"] as const) : []),
  ] as const;

  const orderFromText = (() => {
    const raw = (text || "").toLowerCase();
    const out: ("pc" | "mobile" | "web" | "telegram" | "line")[] = [];
    if (/\bpc\b/.test(raw)) out.push("pc");
    if (/\bmobile\b/.test(raw)) out.push("mobile");
    if (/\bweb\b/.test(raw)) out.push("web");
    if (/telegram/.test(raw)) out.push("telegram");
    if (/\bline\b/.test(raw)) out.push("line");
    return out;
  })();

  const keySet = new Set(keys);
  const orderedKeys: ("pc" | "mobile" | "web" | "telegram" | "line")[] = [
    ...orderFromText.filter((k) => keySet.has(k)),
    ...(["pc", "mobile", "web", "telegram", "line"] as const).filter((k) => keySet.has(k) && !orderFromText.includes(k)),
  ];

  const iconByKey: Record<"pc" | "mobile" | "web" | "telegram" | "line", React.ReactNode> = {
    mobile: <Smartphone size={16} />,
    pc: <Monitor size={16} />,
    web: <Globe size={16} />,
    telegram: <Send size={16} className="translate-y-[1px]" />,
    line: <MessageCircle size={16} className="text-[#06C755]" />,
  };

  const labelByKey: Record<"pc" | "mobile" | "web" | "telegram" | "line", string> = {
    mobile: "Mobile",
    pc: "PC",
    web: "Web",
    telegram: "Telegram",
    line: "LINE",
  };

  return (
    <span style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap", rowGap: 8, columnGap: 10 }}>
      {orderedKeys.map((k, idx) => (
        <span key={k} style={{ display: "inline-flex", alignItems: "center", gap: 8, whiteSpace: "nowrap" }}>
          <span style={{ display: "inline-flex", alignItems: "center" }}>{iconByKey[k]}</span>
          <span>{labelByKey[k]}</span>
          {idx < orderedKeys.length - 1 ? <span style={{ opacity: 0.7, marginLeft: 10 }}>/</span> : null}
        </span>
      ))}
    </span>
  );
}

function InfoRow({ label, value, showTopBorder }: { label: string; value: React.ReactNode; showTopBorder?: boolean }) {
  return (
    <div className={`case-info-row${showTopBorder ? " case-info-row--border" : ""}`}>
      <div
        className="case-info-label uppercase"
      >
        {label}
      </div>
      <div
        className="case-info-value"
      >
        {value}
      </div>
    </div>
  );
}

function splitOnFirst(text: string, delimiter: string) {
  const idx = text.indexOf(delimiter);
  if (idx < 0) return null;
  return [text.slice(0, idx).trim(), text.slice(idx + delimiter.length).trim()] as const;
}

function getKeyDecisions(c: CaseStudy) {
  const raw = c.actions?.length ? c.actions : c.solution ? [c.solution] : [];
  return raw.map((line, idx) => {
    const split = splitOnFirst(line, ":");
    if (split) return { title: split[0], body: split[1] };
    return { title: `Решение ${idx + 1}`, body: line };
  });
}

function parseOutcomeMetrics(c: CaseStudy) {
  const lines = c.outcome ?? [];
  const metrics: { label: string; value: string }[] = [];
  const separators = [" — ", " – ", " - "];

  for (const line of lines) {
    if (!/[0-9$%~]/.test(line)) continue;
    let parsed: readonly [string, string] | null = null;
    for (const sep of separators) {
      const split = splitOnFirst(line, sep);
      if (split) {
        parsed = split;
        break;
      }
    }
    if (!parsed) continue;
    const [label, value] = parsed;
    if (!label || !value) continue;
    metrics.push({ label, value });
    if (metrics.length >= 4) break;
  }

  if (metrics.length) return metrics;
  return (c.metrics ?? []).slice(0, 4).map((m) => ({ label: m.label, value: m.value }));
}

function isOutcomeMetricLine(line: string) {
  if (!/[0-9$%~]/.test(line)) return false;
  const separators = [" — ", " – ", " - "];
  for (const sep of separators) {
    const split = splitOnFirst(line, sep);
    if (!split) continue;
    const [label, value] = split;
    if (!label || !value) continue;
    return true;
  }
  return false;
}

function getResultLines(c: CaseStudy) {
  const lines = c.outcome ?? [];
  if (lines.length) return lines.filter((l) => !isOutcomeMetricLine(l));
  return c.result ? [c.result] : [];
}

function renderResultLine(line: string) {
  const emphasisStyle: React.CSSProperties = {
    color: "var(--text-primary)",
    fontWeight: 900,
    fontSize: 18,
    lineHeight: 1.35,
  };

  const startMatch = line.match(/^(За\s+[0-9]+(?:[.,][0-9]+)?\s*(?:месяца|месяц|мес))/i);
  if (startMatch) {
    const head = startMatch[1];
    const tail = line.slice(head.length);
    return (
      <>
        <span style={emphasisStyle}>{head}</span>
        {tail}
      </>
    );
  }

  const dashSplit = splitOnFirst(line, " — ");
  if (dashSplit && /^Выкатили\s/i.test(dashSplit[0])) {
    const prefix = "Выкатили ";
    const left = dashSplit[0].slice(prefix.length);
    return (
      <>
        {prefix}
        <span style={emphasisStyle}>{left}</span>
        {" — "}
        {dashSplit[1]}
      </>
    );
  }

  const parts: React.ReactNode[] = [];
  const patterns: Array<[RegExp, (m: RegExpMatchArray) => React.ReactNode]> = [
    [
      /A\/B-тест[аы]?/gi,
      (m) => (
        <span key={`ab-${m.index}`} style={emphasisStyle}>
          {m[0]}
        </span>
      ),
    ],
    [
      /\bARPPU\s*\$?\d+(?:[.,]\d+)?/gi,
      (m) => (
        <span key={`arppu-${m.index}`} style={emphasisStyle}>
          {m[0]}
        </span>
      ),
    ],
    [
      /\b\d{1,3}%/g,
      (m) => (
        <span key={`pct-${m.index}`} style={emphasisStyle}>
          {m[0]}
        </span>
      ),
    ],
    [
      /\b\d\+\b/g,
      (m) => (
        <span key={`plus-${m.index}`} style={emphasisStyle}>
          {m[0]}
        </span>
      ),
    ],
    [
      /партнёрские контракты/gi,
      (m) => (
        <span key={`partners-${m.index}`} style={emphasisStyle}>
          {m[0]}
        </span>
      ),
    ],
    [
      /сэкономили более\s*\$?\s*150k/gi,
      (m) => (
        <span key={`saved-${m.index}`} style={emphasisStyle}>
          {m[0]}
        </span>
      ),
    ],
    [
      /Оптимизация пайплайна/gi,
      (m) => (
        <span key={`pipeline-${m.index}`} style={emphasisStyle}>
          {m[0]}
        </span>
      ),
    ],
    [
      /матсермайнд(?:-документы)?/gi,
      (m) => (
        <span key={`mastermind-${m.index}`} style={emphasisStyle}>
          {m[0]}
        </span>
      ),
    ],
    [
      /\bLINE\b/g,
      (m) => (
        <span key={`line-${m.index}`} style={emphasisStyle}>
          {m[0]}
        </span>
      ),
    ],
    [
      /\b86(?:-е)?\b/gi,
      (m) => (
        <span key={`rank-${m.index}`} style={emphasisStyle}>
          {m[0]}
        </span>
      ),
    ],
  ];

  let cursor = 0;
  while (cursor < line.length) {
    let best: { start: number; end: number; node: React.ReactNode } | null = null;
    for (const [re, toNode] of patterns) {
      const sub = line.slice(cursor);
      const match = sub.match(re);
      if (!match) continue;
      const idx = sub.search(re);
      if (idx < 0) continue;
      const absStart = cursor + idx;
      const absEnd = absStart + match[0].length;
      if (!best || absStart < best.start) {
        const m: RegExpMatchArray = Object.assign([...match], { index: absStart }) as unknown as RegExpMatchArray;
        best = { start: absStart, end: absEnd, node: toNode(m) };
      }
    }
    if (!best) break;
    if (best.start > cursor) parts.push(line.slice(cursor, best.start));
    parts.push(best.node);
    cursor = best.end;
  }
  if (!parts.length) return line;
  if (cursor < line.length) parts.push(line.slice(cursor));
  return <>{parts}</>;
}

export function CaseStudies() {
  const [index, setIndex] = useState(0);
  const isMobile = useIsMobile();
  const caseTopRef = useRef<HTMLDivElement | null>(null);
  const caseCardInViewRef = useRef<HTMLDivElement | null>(null);
  const swipeStartRef = useRef<{ x: number; y: number; pointerId: number } | null>(null);
  const pendingScrollRef = useRef(false);
  const current = cases[index] ?? cases[0];
  const decisions = current ? getKeyDecisions(current) : [];
  const resultMetrics = current ? parseOutcomeMetrics(current) : [];
  const isCaseCardInView = useInView(caseCardInViewRef, { margin: "0px 0px -60% 0px" });
  const scrollToElement = (el: HTMLElement, behavior: ScrollBehavior = "smooth") => {
    const nav = document.querySelector("nav");
    const navHeight = nav instanceof HTMLElement ? nav.getBoundingClientRect().height : 0;
    const top = window.scrollY + el.getBoundingClientRect().top - navHeight - 12;
    window.scrollTo({ top: Math.max(0, top), behavior });
  };
  const scrollToCurrentTarget = (behavior: ScrollBehavior = "smooth") => {
    const target = caseTopRef.current;
    if (!target) return;
    scrollToElement(target, behavior);
  };
  const goPrev = () => {
    pendingScrollRef.current = true;
    setIndex((v) => (v - 1 < 0 ? cases.length - 1 : v - 1));
  };
  const goNext = () => {
    pendingScrollRef.current = true;
    setIndex((v) => (v + 1 >= cases.length ? 0 : v + 1));
  };
  const shouldHandleSwipe = (e: React.PointerEvent) => !isMobile && e.pointerType === "touch";
  const isInteractiveTarget = (target: EventTarget | null) => {
    const el = target as HTMLElement | null;
    if (!el) return false;
    return !!el.closest("button,a,input,textarea,select,summary,[role='button'],[data-swipe-ignore='true']");
  };

  useEffect(() => {
    if (!pendingScrollRef.current) return;
    pendingScrollRef.current = false;
    requestAnimationFrame(() => scrollToCurrentTarget("smooth"));
  }, [index]);

  return (
    <section id="cases" className="relative py-24 px-0 sm:px-6 min-h-screen overflow-hidden" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 1200px 900px at 85% 15%, rgba(204, 255, 0, 0.12), transparent 60%),
            radial-gradient(ellipse 800px 600px at 15% 85%, rgba(204, 255, 0, 0.08), transparent 55%)
          `,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(204,255,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(204,255,0,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative" style={{ maxWidth: isMobile ? "100%" : "var(--container-max)", margin: isMobile ? 0 : "0 auto" }}>
        <FadeInSection>
          <h2 className="screen-title" style={{ color: "var(--text-primary)", marginBottom: "var(--content-gap)", padding: isMobile ? "0 24px" : undefined }}>
            КЛЮЧЕВЫЕ КЕЙСЫ
          </h2>
        </FadeInSection>

        {isCaseCardInView ? (
          <div className="case-fixed-nav">
            <button type="button" className="case-fixed-arrow case-fixed-arrow--left" onClick={goPrev} aria-label="Предыдущий кейс">
              <ChevronLeft size={isMobile ? 20 : 28} />
            </button>
            <button type="button" className="case-fixed-arrow case-fixed-arrow--right" onClick={goNext} aria-label="Следующий кейс">
              <ChevronRight size={isMobile ? 20 : 28} />
            </button>
          </div>
        ) : null}

        <FadeInSection delay={0.05}>
          <div
            className="w-full foil-card foil-card--strong case-swipe-area"
            style={{
              backgroundColor: "rgba(10, 10, 10, 0.62)",
              border: "2px solid var(--border-default)",
              borderRadius: 0,
              padding: "clamp(18px, 2.4vw, 40px)",
              minHeight: "calc(100vh - 260px)",
            }}
            ref={(el) => {
              caseTopRef.current = el;
              caseCardInViewRef.current = el;
            }}
            onPointerDown={(e) => {
              if (!shouldHandleSwipe(e)) return;
              if (isInteractiveTarget(e.target)) return;
              swipeStartRef.current = { x: e.clientX, y: e.clientY, pointerId: e.pointerId };
              try {
                (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
              } catch {
              }
            }}
            onPointerUp={(e) => {
              if (!shouldHandleSwipe(e)) return;
              const start = swipeStartRef.current;
              swipeStartRef.current = null;
              if (!start) return;
              const dx = e.clientX - start.x;
              const dy = e.clientY - start.y;
              const absX = Math.abs(dx);
              const absY = Math.abs(dy);
              if (absX < 60) return;
              if (absY > 40 && absX < absY * 1.6) return;
              if (dx > 0) goPrev();
              else goNext();
            }}
            onPointerCancel={() => {
              swipeStartRef.current = null;
            }}
          >
            <div style={{ color: "var(--text-primary)", fontFamily: "var(--h2-font)", fontWeight: 800, fontSize: "clamp(28px, 3.3vw, 44px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              {splitHeadline(current.title) ? (
                <>
                  <span style={{ color: "var(--accent-neon)" }}>{splitHeadline(current.title)![0]}</span>
                  {" — "}
                  {splitHeadline(current.title)![1]}
                </>
              ) : (
                current.title
              )}
            </div>
            <div className="mt-2" style={{ color: "var(--text-secondary)" }}>
              {current.subtitle}
            </div>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-5">
              <div className="foil-panel" style={{ border: "1px solid var(--border-default)", backgroundColor: "rgba(10, 10, 10, 0.72)" }}>
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  {current.image ? (
                    <ImageWithFallback src={current.image} alt={current.title} className="w-full h-full object-cover opacity-90" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Gamepad2 size={44} style={{ color: "var(--text-tertiary)" }} />
                    </div>
                  )}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(10, 10, 10, 0.75), rgba(10, 10, 10, 0.10), transparent)",
                    }}
                  />
                </div>
              </div>

              <div
                className="overflow-hidden"
                style={{
                  border: "1px solid var(--border-default)",
                  borderRadius: "var(--radius-card-sm)",
                  backgroundColor: "rgba(10, 10, 10, 0.72)",
                }}
              >
                <InfoRow label="КОМПАНИЯ" value={current.company || getProjectName(current)} />
                <InfoRow label="РОЛЬ" value={getRoleText(current) || "—"} showTopBorder />
                <InfoRow label="ПЕРИОД" value={current.deadline || current.duration || "—"} showTopBorder />
                <InfoRow label="КОМАНДА" value={current.team || "—"} showTopBorder />
                <InfoRow label="ПЛАТФОРМА" value={renderPlatformValue(current)} showTopBorder />
              </div>
            </div>

            {resultMetrics.length ? (
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                {resultMetrics.map((m, idx) => (
                  <div
                    key={`${current.id}-metric-top-${idx}`}
                    className="p-4"
                    style={{
                      backgroundColor: "rgba(204, 255, 0, 0.12)",
                      border: "1px solid rgba(204, 255, 0, 0.28)",
                      boxShadow: "0 0 0 1px rgba(204, 255, 0, 0.06), 0 18px 40px rgba(0, 0, 0, 0.35)",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--h3-font)",
                        fontWeight: 900,
                        fontSize: "clamp(18px, 2vw, 22px)",
                        lineHeight: 1.15,
                        color: "var(--accent-neon)",
                        overflowWrap: "anywhere",
                      }}
                    >
                      {m.value}
                    </div>
                    <div className="mt-2" style={{ color: "rgba(204, 255, 0, 0.78)", fontSize: 12, lineHeight: 1.25, overflowWrap: "anywhere" }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}

            <div className="mt-6">
              <div className="case-section-title">Ситуация</div>
              <div className="mt-3 foil-panel p-5" style={{ border: "none", backgroundColor: "rgba(10, 10, 10, 0.72)" }}>
                <div style={{ color: "var(--text-secondary)", whiteSpace: "pre-line" }}>{getSituationText(current) || "—"}</div>
              </div>
            </div>

            {current.task ? (
              <div className="mt-6">
                <div className="case-section-title">Задачи</div>
                <div className="mt-3 foil-panel p-5" style={{ border: "none", backgroundColor: "rgba(10, 10, 10, 0.72)" }}>
                  <div style={{ color: "var(--text-secondary)", whiteSpace: "pre-line" }}>{current.task}</div>
                </div>
              </div>
            ) : null}

            <div className="mt-10" style={{ borderTop: "1px solid var(--border-default)" }} />
            <div className="mt-5 case-section-title">Ключевые решения</div>
            <div className="mt-4 flex flex-col gap-4 md:pl-4">
              {decisions.map((d, idx) => (
                <div key={`${current.id}-decision-${idx}`} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span
                    aria-hidden="true"
                    style={{
                      marginTop: 7,
                      width: 8,
                      height: 8,
                      borderRadius: 999,
                      backgroundColor: "var(--accent-neon)",
                      boxShadow: "0 0 0 3px rgba(204, 255, 0, 0.10)",
                      flex: "0 0 auto",
                    }}
                  />
                  <div style={{ minWidth: 0 }}>
                    <div style={{ color: "var(--text-primary)", fontFamily: "var(--h3-font)", fontWeight: 800, fontSize: 16, lineHeight: 1.2 }}>
                      {d.title}
                    </div>
                    <div className="mt-2" style={{ color: "var(--text-secondary)" }}>
                      {d.body}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10" style={{ borderTop: "1px solid var(--border-default)" }} />
            <div className="mt-5 case-section-title">Результаты</div>
            {getResultLines(current).length ? (
              <div className="mt-4 flex flex-col gap-2" style={{ color: "var(--text-secondary)" }}>
                {getResultLines(current).map((line, idx) => (
                  <div key={`${current.id}-result-bullet-${idx}`} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: "var(--accent-neon)", lineHeight: 1.6, fontWeight: 900 }}>—</span>
                    <span style={{ lineHeight: 1.6 }}>{renderResultLine(line)}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </FadeInSection>

      </div>
    </section>
  );
}
