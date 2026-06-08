import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { createContext, useContext, useRef, useState, type ReactNode } from "react";
import {
  Leaf,
  Recycle,
  MapPin,
  Factory,
  Sprout,
  Wind,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Sparkles,
  ShoppingBag,
  Croissant,
  Palette,
} from "lucide-react";
import { Counter } from "@/components/Counter";

import heroImg from "@/assets/hero.jpg";
import wasteImg from "@/assets/waste.jpg";
import bagImg from "@/assets/product-bag.jpg";
import boxImg from "@/assets/product-box.jpg";
import futureImg from "@/assets/future.jpg";
import logoAsset from "@/assets/logo.png.asset.json";
const logoImg = logoAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AQCHA — Tomorrow's Packaging Starts With Yesterday's Waste" },
      {
        name: "description",
        content:
          "AQCHA transforms Moroccan fruit and vegetable waste into 100% biodegradable, plastic-free packaging.",
      },
      { property: "og:title", content: "AQCHA — The Future of Packaging" },
      {
        property: "og:description",
        content:
          "From organic waste to high-performance biodegradable packaging. Join the movement.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

/* ============================================================
   i18n
============================================================ */

type Lang = "en" | "fr";

const dict = {
  en: {
    nav: {
      crisis: "Crisis",
      revolution: "Revolution",
      why: "Why Us",
      products: "Products",
      impact: "Impact",
      cta: "Join the Movement",
    },
    hero: {
      tagline:
        "A Moroccan climate-tech startup turning fruit & vegetable waste into 100% biodegradable, plastic-free packaging.",
      badge: "Made in Morocco · For the Planet",
      title1: "Tomorrow's Packaging Starts With",
      title2: "Yesterday's Waste.",
      sub: "AQCHA transforms local fruit and vegetable waste into high-performance biodegradable packaging — creating a world without plastic pollution.",
      cta1: "Discover the Innovation",
      cta2: "Join the Movement",
      scroll: "scroll",
    },
    marquee: [
      "100% Plastic-Free",
      "Made From Fruit Waste",
      "Industrially Compostable",
      "Circular By Design",
      "Born in Morocco",
      "Climate-Tech",
    ],
    crisis: {
      kicker: "01 — The Plastic Crisis",
      title1: "Every minute, a truckload of plastic",
      title2: " ends up in our ocean.",
      sub: "Meanwhile, one-third of all food produced rots in landfills — releasing methane and wasting the raw material of a circular future. Two crises. One solution.",
      stats: [
        "tons of plastic produced every year",
        "tons of plastic enter our oceans annually",
        "tons of food wasted globally each year",
        "years for a single plastic bag to decompose",
      ],
    },
    revolution: {
      kicker: "02 — The AQCHA Revolution",
      title1: "One material.",
      title2: "Infinite loops.",
      sub: "Watch waste become wonder. Each stage is engineered to be regenerative — from the orchard, through your hands, back to the earth.",
      stages: [
        { t: "Organic Waste", d: "Fruit & vegetable peels rescued from markets." },
        { t: "Bio-Material", d: "Transformed in our Moroccan lab into a resilient bio-polymer." },
        { t: "Packaging", d: "Crafted into premium, high-performance packaging." },
        { t: "Compost", d: "Returns to the soil in weeks — not centuries." },
        { t: "New Life", d: "Feeds the next harvest. The loop closes." },
      ],
    },
    why: {
      kicker: "03 — Why AQCHA Is Different",
      title1: "Engineered with",
      title2: "conscience.",
      features: [
        { t: "100% Plastic Free", d: "Zero petroleum. Zero microplastics. Ever." },
        { t: "100% Biodegradable", d: "Decomposes in weeks — leaving no trace behind." },
        { t: "Zero Waste Production", d: "Closed-loop process. Every byproduct returns to use." },
        { t: "Locally Sourced", d: "Powered by Morocco's farms and food markets." },
        { t: "Circular Economy", d: "Waste in. Packaging out. Compost back. Repeat." },
        { t: "Low Carbon Footprint", d: "Up to 80% lower CO₂ than conventional plastic." },
      ],
    },
    products: {
      kicker: "04 — Our Products",
      title1: "Crafted in Morocco.",
      title2: "Returnable to earth.",
      sub: "Handmade pieces inspired by our markets and medinas — each one a tribute to zellij craftsmanship and zero-waste design.",
      sample: "Request a sample",
      from: "from",
      order: "Order",
      items: [
        {
          tag: "Bestseller",
          title: "Cabas de Marché",
          desc: "The classic Moroccan market bag — sturdy, supple and carries up to 8 kg of fresh produce.",
          price: "30 DH",
        },
        {
          tag: "Natural",
          title: "Sac à Pain Naturel",
          desc: "A breathable bread pouch made from wheat & fruit fibers. Keeps your khobz fresh, the natural way.",
          price: "45 DH",
        },
        {
          tag: "Artisan",
          title: "Cabas Artisanal",
          desc: "Handcrafted with zellij-inspired patterns by Moroccan artisans. A piece of heritage, plastic-free.",
          price: "100 DH",
        },
      ],
    },
    impact: {
      kicker: "05 — Environmental Impact",
      title1: "Measured in",
      title2: "tons,",
      title3: " felt for generations.",
      sub: "Live impact, audited and verifiable. Every package we ship is a unit of progress for the planet.",
      live: "Live Impact Dashboard · Updated continuously",
      since: "Since 2024",
      metrics: [
        "Plastic saved from landfills",
        "Organic waste recovered",
        "CO₂ emissions reduced",
        "Compost generated",
      ],
    },
    future: {
      kicker: "06 — The Future We Are Building",
      title1: "From Waste to a",
      title2: "Cleaner Planet.",
      sub: "Cities, businesses and people — connected by one circular material that gives back more than it takes.",
    },
    contact: {
      kicker: "07 — Partners, Investors & Contact",
      title1: "Let's build the post-plastic world,",
      title2: " together.",
      sub: "Whether you're a brand, investor or institution — we want to hear from you. AQCHA is currently raising its Seed round.",
      name: "Your name",
      email: "Email",
      message: "Tell us about your project, brand or interest…",
      send: "Get in touch",
      trusted: "Trusted & Backed By",
    },
    footer: "Designed in Morocco for the planet.",
  },
  fr: {
    nav: {
      crisis: "La Crise",
      revolution: "Révolution",
      why: "Pourquoi Nous",
      products: "Produits",
      impact: "Impact",
      cta: "Rejoindre le Mouvement",
    },
    hero: {
      tagline:
        "Une startup climate-tech marocaine qui transforme les déchets de fruits et légumes en emballages 100% biodégradables et sans plastique.",
      badge: "Fait au Maroc · Pour la Planète",
      title1: "L'emballage de demain commence par",
      title2: "les déchets d'hier.",
      sub: "AQCHA transforme les déchets de fruits et légumes locaux en emballages biodégradables haute performance — pour un monde sans pollution plastique.",
      cta1: "Découvrir l'Innovation",
      cta2: "Rejoindre le Mouvement",
      scroll: "défiler",
    },
    marquee: [
      "100% Sans Plastique",
      "Fait de Déchets de Fruits",
      "Compostable Industriellement",
      "Circulaire par Conception",
      "Né au Maroc",
      "Climate-Tech",
    ],
    crisis: {
      kicker: "01 — La Crise du Plastique",
      title1: "Chaque minute, un camion de plastique",
      title2: " finit dans nos océans.",
      sub: "Pendant ce temps, un tiers de la nourriture produite pourrit dans les décharges — libérant du méthane et gaspillant la matière première d'un futur circulaire. Deux crises. Une solution.",
      stats: [
        "tonnes de plastique produites chaque année",
        "tonnes de plastique dans les océans par an",
        "tonnes de nourriture gaspillées chaque année",
        "ans pour qu'un sac plastique se décompose",
      ],
    },
    revolution: {
      kicker: "02 — La Révolution AQCHA",
      title1: "Un matériau.",
      title2: "Des boucles infinies.",
      sub: "Voyez le déchet devenir merveille. Chaque étape est régénérative — du verger, à vos mains, et retour à la terre.",
      stages: [
        { t: "Déchet Organique", d: "Pelures de fruits et légumes sauvées des marchés." },
        { t: "Bio-Matériau", d: "Transformé dans notre labo marocain en bio-polymère résistant." },
        { t: "Emballage", d: "Conçu en emballages premium et haute performance." },
        { t: "Compost", d: "Retourne à la terre en quelques semaines — pas des siècles." },
        { t: "Nouvelle Vie", d: "Nourrit la prochaine récolte. La boucle se ferme." },
      ],
    },
    why: {
      kicker: "03 — Pourquoi AQCHA est Différent",
      title1: "Conçu avec",
      title2: "conscience.",
      features: [
        { t: "100% Sans Plastique", d: "Zéro pétrole. Zéro microplastique. Jamais." },
        { t: "100% Biodégradable", d: "Se décompose en quelques semaines — sans laisser de trace." },
        { t: "Production Zéro Déchet", d: "Boucle fermée. Chaque sous-produit est réutilisé." },
        { t: "Sourcé Localement", d: "Alimenté par les fermes et marchés du Maroc." },
        { t: "Économie Circulaire", d: "Déchet → emballage → compost. On recommence." },
        { t: "Faible Empreinte Carbone", d: "Jusqu'à 80% de CO₂ en moins que le plastique." },
      ],
    },
    products: {
      kicker: "04 — Nos Produits",
      title1: "Fabriqué au Maroc.",
      title2: "Retournable à la terre.",
      sub: "Pièces artisanales inspirées de nos marchés et médinas — chacune un hommage au zellij et au zéro déchet.",
      sample: "Demander un échantillon",
      from: "à partir de",
      order: "Commander",
      items: [
        {
          tag: "Best-seller",
          title: "Cabas de Marché",
          desc: "Le sac marocain classique — robuste, souple, porte jusqu'à 8 kg de produits frais.",
          price: "30 DH",
        },
        {
          tag: "Naturel",
          title: "Sac à Pain Naturel",
          desc: "Une pochette respirante en fibres de blé et de fruits. Garde votre khobz frais, naturellement.",
          price: "45 DH",
        },
        {
          tag: "Artisanal",
          title: "Cabas Artisanal",
          desc: "Fait main avec des motifs zellij par des artisans marocains. Un morceau d'héritage, sans plastique.",
          price: "100 DH",
        },
      ],
    },
    impact: {
      kicker: "05 — Impact Environnemental",
      title1: "Mesuré en",
      title2: "tonnes,",
      title3: " ressenti pour des générations.",
      sub: "Impact en direct, audité et vérifiable. Chaque emballage expédié est une unité de progrès pour la planète.",
      live: "Tableau de Bord en Direct · Mis à jour en continu",
      since: "Depuis 2024",
      metrics: [
        "Plastique évité aux décharges",
        "Déchets organiques récupérés",
        "Émissions de CO₂ évitées",
        "Compost généré",
      ],
    },
    future: {
      kicker: "06 — Le Futur que Nous Construisons",
      title1: "Du déchet vers une",
      title2: "planète plus propre.",
      sub: "Villes, entreprises et citoyens — reliés par un matériau circulaire qui rend plus qu'il ne prend.",
    },
    contact: {
      kicker: "07 — Partenaires, Investisseurs & Contact",
      title1: "Construisons le monde post-plastique,",
      title2: " ensemble.",
      sub: "Marque, investisseur ou institution — nous voulons vous entendre. AQCHA lève actuellement son tour d'amorçage.",
      name: "Votre nom",
      email: "Email",
      message: "Parlez-nous de votre projet, marque ou intérêt…",
      send: "Nous contacter",
      trusted: "Soutenus & Approuvés Par",
    },
    footer: "Conçu au Maroc pour la planète.",
  },
};

type Dict = typeof dict.en;

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict }>({
  lang: "en",
  setLang: () => {},
  t: dict.en,
});
const useT = () => useContext(LangCtx);

function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  return (
    <LangCtx.Provider value={{ lang, setLang, t: dict[lang] }}>{children}</LangCtx.Provider>
  );
}

function LangToggle({ dark = true }: { dark?: boolean }) {
  const { lang, setLang } = useT();
  const base = dark ? "text-[var(--cream)]" : "text-[var(--forest-deep)]";
  return (
    <div className={`flex items-center gap-1 text-[11px] font-medium ${base}`}>
      {(["fr", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2.5 py-1 rounded-full uppercase tracking-wider transition ${
            lang === l
              ? "bg-[var(--amber)] text-[var(--forest-deep)]"
              : "opacity-60 hover:opacity-100"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

/* ============================================================
   Zellige SVG pattern (Moroccan touch)
============================================================ */
const zelligeBg =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><g fill='none' stroke='%230C342C' stroke-width='1' opacity='0.18'><path d='M40 0 L80 40 L40 80 L0 40 Z'/><path d='M40 14 L66 40 L40 66 L14 40 Z'/><circle cx='40' cy='40' r='8'/><path d='M0 0 L20 20 M80 0 L60 20 M0 80 L20 60 M80 80 L60 60'/></g></svg>\")";

/* ============================================================
   Nav
============================================================ */

function Nav() {
  const { t } = useT();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4">
      <nav className="glass rounded-full px-2 py-2 flex items-center gap-1 text-[var(--cream)] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.35)]">
        <a href="#top" className="pl-3 pr-5 flex items-center gap-2 font-display text-xl tracking-tight">
          <img src={logoImg} alt="AQCHA" width={28} height={28} className="w-7 h-7 object-contain" />
          aqcha<span className="text-[var(--amber)]">.</span>
        </a>
        <div className="hidden md:flex items-center gap-1 text-sm">
          {[
            [t.nav.crisis, "#crisis"],
            [t.nav.revolution, "#revolution"],
            [t.nav.why, "#why"],
            [t.nav.products, "#products"],
            [t.nav.impact, "#impact"],
          ].map(([l, h]) => (
            <a
              key={h}
              href={h}
              className="px-4 py-2 rounded-full opacity-80 hover:opacity-100 hover:bg-white/10 transition"
            >
              {l}
            </a>
          ))}
        </div>
        <div className="mx-1 pl-2 border-l border-white/15">
          <LangToggle />
        </div>
        <a
          href="#contact"
          className="ml-1 hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[var(--amber)] text-[var(--forest-deep)] pl-4 pr-3 py-2 text-sm font-medium hover:scale-[1.03] transition"
        >
          {t.nav.cta} <ArrowUpRight className="w-4 h-4" />
        </a>
      </nav>
    </header>
  );
}

/* ============================================================
   Hero
============================================================ */

function Hero() {
  const { t } = useT();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[100svh] min-h-[720px] w-full overflow-hidden bg-[var(--forest-deep)] text-[var(--cream)]"
    >
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Organic fruit waste transforming into biodegradable packaging"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--forest-deep)]/30 via-transparent to-[var(--forest-deep)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--forest-deep)] via-[var(--forest-deep)]/40 to-transparent" />
      </motion.div>

      <div className="absolute top-1/4 right-[10%] w-72 h-72 rounded-full bg-[var(--amber)]/20 blur-3xl animate-float-slow pointer-events-none" />

      <motion.div
        style={{ opacity }}
        className="relative h-full container mx-auto px-6 flex flex-col justify-end pb-20 md:pb-28 max-w-7xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="self-start mb-10"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl glass grid place-items-center p-2.5">
              <img src={logoImg} alt="AQCHA logo" width={512} height={512} className="w-full h-full object-contain" />
            </div>
            <div className="display text-4xl md:text-5xl tracking-tight text-[var(--cream)]">
              AQCHA<span className="text-[var(--amber)]">.</span>
            </div>
          </div>
          <p className="mt-3 max-w-sm text-sm md:text-[0.95rem] text-[var(--cream)]/70 leading-relaxed">
            {t.hero.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="inline-flex items-center gap-2 self-start glass rounded-full pl-2 pr-4 py-1.5 text-xs uppercase tracking-[0.18em] mb-8"
        >
          <span className="w-6 h-6 rounded-full bg-[var(--amber)] grid place-items-center">
            <Sparkles className="w-3 h-3 text-[var(--forest-deep)]" />
          </span>
          {t.hero.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="display text-[clamp(2.75rem,7vw,6.5rem)] max-w-5xl text-balance"
        >
          {t.hero.title1}{" "}
          <span className="italic text-[var(--amber)]">{t.hero.title2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 max-w-xl text-base md:text-lg text-[var(--cream)]/75 leading-relaxed"
        >
          {t.hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#revolution"
            className="group inline-flex items-center gap-2 bg-[var(--amber)] text-[var(--forest-deep)] rounded-full pl-6 pr-5 py-3.5 font-medium hover:scale-[1.03] transition"
          >
            {t.hero.cta1}
            <span className="w-7 h-7 rounded-full bg-[var(--forest-deep)] text-[var(--amber)] grid place-items-center group-hover:rotate-45 transition-transform">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 glass rounded-full pl-6 pr-5 py-3.5 font-medium hover:bg-white/15 transition"
          >
            {t.hero.cta2} <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-[var(--cream)]/60">
        <div className="w-px h-10 bg-gradient-to-b from-[var(--amber)] to-transparent" />
        {t.hero.scroll}
      </div>
    </section>
  );
}

/* ============================================================
   Marquee
============================================================ */

function Marquee() {
  const { t } = useT();
  const items = t.marquee;
  return (
    <div className="bg-[var(--forest-deep)] text-[var(--amber)] py-5 border-y border-white/5 overflow-hidden">
      <div className="flex gap-12 animate-marquee whitespace-nowrap font-display text-2xl md:text-3xl italic">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="flex items-center gap-12">
            {it} <span className="text-[var(--cream)]/30">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   Crisis
============================================================ */

function Crisis() {
  const { t } = useT();
  const values = [
    { value: 400, suffix: "M", color: "text-[var(--amber)]" },
    { value: 11, suffix: "M" },
    { value: 1.3, suffix: "B", decimals: 1 },
    { value: 500, suffix: "+" },
  ];
  return (
    <section id="crisis" className="relative bg-[var(--forest-deep)] text-[var(--cream)] py-28 md:py-40">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-12 gap-12 items-end mb-20">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--amber)] mb-6">{t.crisis.kicker}</p>
            <h2 className="display text-[clamp(2.25rem,5vw,4.5rem)] text-balance">
              {t.crisis.title1}
              <span className="italic text-[var(--amber)]">{t.crisis.title2}</span>
            </h2>
          </div>
          <p className="md:col-span-5 text-[var(--cream)]/70 text-lg leading-relaxed">{t.crisis.sub}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden">
          {values.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[var(--forest-deep)] p-8 md:p-10"
            >
              <div className={`display text-5xl md:text-7xl ${s.color ?? "text-[var(--cream)]"}`}>
                <Counter to={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </div>
              <p className="mt-4 text-sm text-[var(--cream)]/60 leading-snug">{t.crisis.stats[i]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Revolution
============================================================ */

function Revolution() {
  const { t } = useT();
  const imgs = [wasteImg, bagImg, boxImg, wasteImg, futureImg];
  return (
    <section id="revolution" className="relative bg-[var(--cream)] py-28 md:py-40 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--forest)] mb-6">{t.revolution.kicker}</p>
          <h2 className="display text-[clamp(2.25rem,5vw,4.5rem)] text-balance text-[var(--forest-deep)]">
            {t.revolution.title1} <span className="italic">{t.revolution.title2}</span>
          </h2>
          <p className="mt-6 text-lg text-[var(--forest)]/70 leading-relaxed">{t.revolution.sub}</p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--forest)]/20 to-transparent" />
          <div className="grid md:grid-cols-5 gap-6">
            {t.revolution.stages.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="relative group"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[var(--forest-deep)]">
                  <img
                    src={imgs[i]}
                    alt={s.t}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest-deep)]/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-[var(--amber)] text-[var(--forest-deep)] grid place-items-center text-xs font-medium">
                    0{i + 1}
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-5 text-[var(--cream)]">
                    <h3 className="display text-2xl">{s.t}</h3>
                    <p className="text-xs text-[var(--cream)]/75 mt-1.5 leading-snug">{s.d}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Why
============================================================ */

function WhyAqcha() {
  const { t } = useT();
  const icons = [Leaf, Sprout, Factory, MapPin, Recycle, Wind];
  const [active, setActive] = useState(0);
  return (
    <section id="why" className="bg-[var(--bone)] py-28 md:py-40">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--forest)] mb-6">{t.why.kicker}</p>
          <h2 className="display text-[clamp(2.25rem,5vw,4.5rem)] text-balance text-[var(--forest-deep)]">
            {t.why.title1} <span className="italic">{t.why.title2}</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {t.why.features.map((f, i) => {
            const Icon = icons[i];
            const isActive = active === i;
            return (
              <motion.button
                key={i}
                onMouseEnter={() => setActive(i)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`text-left group relative rounded-3xl p-8 md:p-10 transition-all duration-500 overflow-hidden ${
                  isActive
                    ? "bg-[var(--forest-deep)] text-[var(--cream)]"
                    : "bg-white text-[var(--forest-deep)] hover:bg-[var(--forest-deep)]/[.03]"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl grid place-items-center mb-8 transition-colors ${
                    isActive
                      ? "bg-[var(--amber)] text-[var(--forest-deep)]"
                      : "bg-[var(--forest-deep)]/5 text-[var(--forest-deep)]"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="display text-3xl md:text-4xl mb-3">{f.t}</div>
                <p
                  className={`text-sm leading-relaxed ${
                    isActive ? "text-[var(--cream)]/70" : "text-[var(--forest)]/60"
                  }`}
                >
                  {f.d}
                </p>
                <ArrowUpRight
                  className={`absolute top-8 right-8 w-5 h-5 transition-all ${
                    isActive ? "text-[var(--amber)] rotate-0" : "text-[var(--forest)]/30 -rotate-45"
                  }`}
                />
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Products — Moroccan touch with zellige
============================================================ */

function Products() {
  const { t } = useT();
  const meta = [
    { icon: ShoppingBag, img: bagImg, accent: "from-[#C75B3C] to-[#E89A4D]" },
    { icon: Croissant, img: boxImg, accent: "from-[#D9A441] to-[#F2C94C]" },
    { icon: Palette, img: wasteImg, accent: "from-[#1F6F5C] to-[#3FAE8E]" },
  ];
  return (
    <section id="products" className="relative bg-[var(--cream)] py-28 md:py-40 overflow-hidden">
      {/* Zellige pattern band */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.55] pointer-events-none"
        style={{ backgroundImage: zelligeBg, backgroundSize: "80px 80px" }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[var(--cream)] to-transparent pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--cream)] to-transparent pointer-events-none"
      />

      <div className="relative container mx-auto px-6 max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <span
                className="w-10 h-10 rounded-md rotate-45 border border-[var(--forest-deep)]/30"
                style={{
                  background:
                    "conic-gradient(from 45deg, var(--amber) 0 25%, #C75B3C 0 50%, var(--forest-deep) 0 75%, #1F6F5C 0)",
                }}
              />
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--forest)]">
                {t.products.kicker}
              </p>
            </div>
            <h2 className="display text-[clamp(2.25rem,5vw,4.5rem)] text-balance text-[var(--forest-deep)]">
              {t.products.title1} <span className="italic">{t.products.title2}</span>
            </h2>
            <p className="mt-5 text-base md:text-lg text-[var(--forest)]/70 leading-relaxed max-w-xl">
              {t.products.sub}
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[var(--forest-deep)] font-medium border-b border-[var(--forest-deep)] pb-1 hover:gap-3 transition-all"
          >
            {t.products.sample} <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.products.items.map((p, i) => {
            const Icon = meta[i].icon;
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group relative rounded-3xl bg-white overflow-hidden flex flex-col shadow-[0_30px_60px_-30px_rgba(12,52,44,0.25)]"
              >
                {/* zellij top stripe */}
                <div
                  className="h-2 w-full"
                  style={{
                    background:
                      "repeating-linear-gradient(135deg, var(--amber) 0 14px, var(--forest-deep) 14px 28px, #C75B3C 28px 42px)",
                  }}
                />
                <div className="relative aspect-[4/5] overflow-hidden bg-[var(--bone)]">
                  <img
                    src={meta[i].img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-25 mix-blend-multiply pointer-events-none"
                    style={{ backgroundImage: zelligeBg, backgroundSize: "60px 60px" }}
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-[var(--cream)]/95 backdrop-blur rounded-full pl-2 pr-3 py-1.5">
                    <span className={`w-6 h-6 rounded-full grid place-items-center bg-gradient-to-br ${meta[i].accent} text-white`}>
                      <Icon className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--forest-deep)]">
                      {p.tag}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-[var(--forest-deep)] text-[var(--amber)] rounded-full px-3 py-1.5 text-xs font-medium shadow-lg">
                    <span className="opacity-60 mr-1">{t.products.from}</span>
                    {p.price}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="display text-2xl md:text-3xl text-[var(--forest-deep)]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-[var(--forest)]/65 leading-relaxed flex-1">
                    {p.desc}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="display text-2xl text-[var(--forest-deep)]">
                      {p.price}
                    </div>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 bg-[var(--forest-deep)] text-[var(--cream)] rounded-full pl-4 pr-3 py-2 text-sm font-medium hover:bg-[var(--forest)] transition group/btn"
                    >
                      {t.products.order}
                      <span className="w-5 h-5 rounded-full bg-[var(--amber)] text-[var(--forest-deep)] grid place-items-center group-hover/btn:rotate-45 transition-transform">
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Impact
============================================================ */

function Impact() {
  const { t } = useT();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const values = [
    { value: 2.4, suffix: "M kg", decimals: 1 },
    { value: 3.8, suffix: "M kg", decimals: 1 },
    { value: 6200, suffix: " t" },
    { value: 1.1, suffix: "M kg", decimals: 1 },
  ];

  return (
    <section
      id="impact"
      ref={ref}
      className="relative bg-[var(--forest-deep)] text-[var(--cream)] py-28 md:py-40 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[var(--amber)]/10 blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-6 max-w-7xl relative">
        <div className="grid md:grid-cols-12 gap-12 items-end mb-16">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--amber)] mb-6">{t.impact.kicker}</p>
            <h2 className="display text-[clamp(2.25rem,5vw,4.5rem)] text-balance">
              {t.impact.title1} <span className="italic text-[var(--amber)]">{t.impact.title2}</span>
              {t.impact.title3}
            </h2>
          </div>
          <p className="md:col-span-5 text-[var(--cream)]/70 text-lg leading-relaxed">{t.impact.sub}</p>
        </div>

        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <span className="relative w-3 h-3">
                <span className="absolute inset-0 rounded-full bg-[var(--amber)] animate-pulse-ring" />
                <span className="absolute inset-0 rounded-full bg-[var(--amber)]" />
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-[var(--cream)]/70">
                {t.impact.live}
              </span>
            </div>
            <span className="text-xs text-[var(--cream)]/50 hidden md:block">{t.impact.since}</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {values.map((m, i) => (
              <div key={i}>
                <div className="display text-4xl md:text-6xl text-[var(--amber)]">
                  {inView && <Counter to={m.value} suffix={m.suffix} decimals={m.decimals ?? 0} />}
                </div>
                <p className="mt-3 text-sm text-[var(--cream)]/70">{t.impact.metrics[i]}</p>
                <div className="mt-4 h-1 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${60 + i * 10}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[var(--amber)] to-[var(--amber-soft)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Future
============================================================ */

function Future() {
  const { t } = useT();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[var(--forest-deep)] text-[var(--cream)]"
    >
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <img
          src={futureImg}
          alt="A future city using AQCHA biodegradable packaging"
          width={1920}
          height={1080}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--forest-deep)]/70 via-[var(--forest-deep)]/40 to-[var(--forest-deep)]" />
      </motion.div>

      <div className="relative h-full container mx-auto px-6 max-w-7xl flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-xs uppercase tracking-[0.3em] text-[var(--amber)] mb-6"
        >
          {t.future.kicker}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="display text-[clamp(2.75rem,8vw,7.5rem)] max-w-5xl text-balance"
        >
          {t.future.title1} <span className="italic text-[var(--amber)]">{t.future.title2}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 max-w-xl text-lg text-[var(--cream)]/75 leading-relaxed"
        >
          {t.future.sub}
        </motion.p>
      </div>
    </section>
  );
}

/* ============================================================
   Contact
============================================================ */

function Contact() {
  const { t } = useT();
  const partners = ["Maroc PME", "GIZ", "UM6P", "Climate-KIC", "Impact Lab", "Bpifrance"];
  return (
    <section id="contact" className="bg-[var(--cream)] py-28 md:py-40">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--forest)] mb-6">{t.contact.kicker}</p>
            <h2 className="display text-[clamp(2.25rem,5vw,4.5rem)] text-balance text-[var(--forest-deep)]">
              {t.contact.title1}
              <span className="italic">{t.contact.title2}</span>
            </h2>
            <p className="mt-6 text-lg text-[var(--forest)]/65 max-w-xl leading-relaxed">{t.contact.sub}</p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl"
            >
              <input
                placeholder={t.contact.name}
                className="bg-white border border-[var(--forest)]/10 rounded-2xl px-5 py-4 text-sm placeholder:text-[var(--forest)]/40 focus:outline-none focus:border-[var(--forest-deep)]"
              />
              <input
                type="email"
                placeholder={t.contact.email}
                className="bg-white border border-[var(--forest)]/10 rounded-2xl px-5 py-4 text-sm placeholder:text-[var(--forest)]/40 focus:outline-none focus:border-[var(--forest-deep)]"
              />
              <textarea
                placeholder={t.contact.message}
                rows={4}
                className="sm:col-span-2 bg-white border border-[var(--forest)]/10 rounded-2xl px-5 py-4 text-sm placeholder:text-[var(--forest)]/40 focus:outline-none focus:border-[var(--forest-deep)] resize-none"
              />
              <button
                type="submit"
                className="sm:col-span-2 group inline-flex items-center justify-center gap-2 bg-[var(--forest-deep)] text-[var(--cream)] rounded-2xl px-6 py-4 font-medium hover:bg-[var(--forest)] transition"
              >
                <Mail className="w-4 h-4" />
                {t.contact.send}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          <aside className="md:col-span-5">
            <div className="rounded-3xl bg-[var(--forest-deep)] text-[var(--cream)] p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--amber)]">{t.contact.trusted}</p>
              <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6">
                {partners.map((p, i) => (
                  <div key={i} className="flex items-center gap-3 text-[var(--cream)]/85">
                    <span className="w-6 h-6 rounded-full border border-[var(--cream)]/30 grid place-items-center text-[10px]">
                      ★
                    </span>
                    <span className="text-sm">{p}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12 pt-8 border-t border-white/10 text-sm text-[var(--cream)]/70 space-y-1.5">
                <p>AQCHA SAS</p>
                <p>Casablanca · Morocco</p>
                <a href="mailto:hello@aqcha.eco" className="text-[var(--amber)] hover:underline">
                  hello@aqcha.eco
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Footer
============================================================ */

function Footer() {
  const { t } = useT();
  return (
    <footer className="bg-[var(--forest-deep)] text-[var(--cream)]/70 py-12">
      <div className="container mx-auto px-6 max-w-7xl flex flex-wrap items-center justify-between gap-4 text-sm">
        <div className="font-display text-2xl text-[var(--cream)]">
          aqcha<span className="text-[var(--amber)]">.</span>
        </div>
        <p className="text-xs text-[var(--cream)]/50">
          © {new Date().getFullYear()} AQCHA · {t.footer}
        </p>
        <div className="flex gap-5 text-xs uppercase tracking-[0.2em]">
          <a href="#" className="hover:text-[var(--amber)] transition">Instagram</a>
          <a href="#" className="hover:text-[var(--amber)] transition">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   Home
============================================================ */

function Home() {
  return (
    <LangProvider>
      <main className="bg-[var(--cream)] text-[var(--forest-deep)]">
        <Nav />
        <Hero />
        <Marquee />
        <Crisis />
        <Revolution />
        <WhyAqcha />
        <Products />
        <Impact />
        <Future />
        <Contact />
        <Footer />
      </main>
    </LangProvider>
  );
}
