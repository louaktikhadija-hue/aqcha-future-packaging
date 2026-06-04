import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef, useState } from "react";
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
} from "lucide-react";
import { Counter } from "@/components/Counter";

import heroImg from "@/assets/hero.jpg";
import wasteImg from "@/assets/waste.jpg";
import bagImg from "@/assets/product-bag.jpg";
import boxImg from "@/assets/product-box.jpg";
import futureProductImg from "@/assets/product-future.jpg";
import futureImg from "@/assets/future.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AQCHA — Tomorrow's Packaging Starts With Yesterday's Waste" },
      {
        name: "description",
        content:
          "AQCHA transforms Moroccan fruit and vegetable waste into 100% biodegradable, plastic-free packaging. The future of sustainable packaging starts here.",
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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "AQCHA",
          description:
            "Moroccan climate-tech company transforming fruit and vegetable organic waste into 100% biodegradable, plastic-free packaging.",
          url: "/",
          foundingLocation: "Morocco",
        }),
      },
    ],
  }),
  component: Home,
});

/* -------------------------------------------------- */

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4">
      <nav className="glass rounded-full px-2 py-2 flex items-center gap-1 text-[var(--cream)] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.35)]">
        <a href="#top" className="pl-4 pr-6 font-display text-xl tracking-tight">
          aqcha<span className="text-[var(--amber)]">.</span>
        </a>
        <div className="hidden md:flex items-center gap-1 text-sm">
          {[
            ["Crisis", "#crisis"],
            ["Revolution", "#revolution"],
            ["Why Us", "#why"],
            ["Products", "#products"],
            ["Impact", "#impact"],
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
        <a
          href="#contact"
          className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-[var(--amber)] text-[var(--forest-deep)] pl-5 pr-4 py-2 text-sm font-medium hover:scale-[1.03] transition"
        >
          Join the Movement <ArrowUpRight className="w-4 h-4" />
        </a>
      </nav>
    </header>
  );
}

/* -------------------------------------------------- */

function Hero() {
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

      {/* Floating yellow orb */}
      <div className="absolute top-1/4 right-[10%] w-72 h-72 rounded-full bg-[var(--amber)]/20 blur-3xl animate-float-slow pointer-events-none" />

      <motion.div
        style={{ opacity }}
        className="relative h-full container mx-auto px-6 flex flex-col justify-end pb-20 md:pb-28 max-w-7xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 self-start glass rounded-full pl-2 pr-4 py-1.5 text-xs uppercase tracking-[0.18em] mb-8"
        >
          <span className="w-6 h-6 rounded-full bg-[var(--amber)] grid place-items-center">
            <Sparkles className="w-3 h-3 text-[var(--forest-deep)]" />
          </span>
          Made in Morocco · For the Planet
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="display text-[clamp(2.75rem,7vw,6.5rem)] max-w-5xl text-balance"
        >
          Tomorrow's Packaging Starts With{" "}
          <span className="italic text-[var(--amber)]">Yesterday's Waste.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 max-w-xl text-base md:text-lg text-[var(--cream)]/75 leading-relaxed"
        >
          AQCHA transforms local fruit and vegetable waste into high-performance
          biodegradable packaging — creating a world without plastic pollution.
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
            Discover the Innovation
            <span className="w-7 h-7 rounded-full bg-[var(--forest-deep)] text-[var(--amber)] grid place-items-center group-hover:rotate-45 transition-transform">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 glass rounded-full pl-6 pr-5 py-3.5 font-medium hover:bg-white/15 transition"
          >
            Join the Movement <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-[var(--cream)]/60">
        <div className="w-px h-10 bg-gradient-to-b from-[var(--amber)] to-transparent" />
        scroll
      </div>
    </section>
  );
}

/* -------------------------------------------------- */

function Marquee() {
  const items = [
    "100% Plastic-Free",
    "Made From Fruit Waste",
    "Industrially Compostable",
    "Circular By Design",
    "Born in Morocco",
    "Climate-Tech",
  ];
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

/* -------------------------------------------------- */

function Crisis() {
  const stats = [
    { value: 400, suffix: "M", label: "tons of plastic produced every year", color: "text-[var(--amber)]" },
    { value: 11, suffix: "M", label: "tons of plastic enter our oceans annually" },
    { value: 1.3, suffix: "B", decimals: 1, label: "tons of food wasted globally each year" },
    { value: 500, suffix: "+", label: "years for a single plastic bag to decompose" },
  ];
  return (
    <section id="crisis" className="relative bg-[var(--forest-deep)] text-[var(--cream)] py-28 md:py-40">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-12 gap-12 items-end mb-20">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--amber)] mb-6">
              01 — The Plastic Crisis
            </p>
            <h2 className="display text-[clamp(2.25rem,5vw,4.5rem)] text-balance">
              Every minute, a truckload of plastic
              <span className="italic text-[var(--amber)]"> ends up in our ocean.</span>
            </h2>
          </div>
          <p className="md:col-span-5 text-[var(--cream)]/70 text-lg leading-relaxed">
            Meanwhile, one-third of all food produced rots in landfills — releasing
            methane and wasting the raw material of a circular future. Two crises.
            One solution.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden">
          {stats.map((s, i) => (
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
              <p className="mt-4 text-sm text-[var(--cream)]/60 leading-snug">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------- */

function Revolution() {
  const stages = [
    { title: "Organic Waste", desc: "Fruit & vegetable peels rescued from markets.", img: wasteImg },
    { title: "Bio-Material", desc: "Transformed in our Moroccan lab into a resilient bio-polymer.", img: bagImg },
    { title: "Packaging", desc: "Crafted into premium, high-performance packaging.", img: boxImg },
    { title: "Compost", desc: "Returns to the soil in weeks — not centuries.", img: wasteImg },
    { title: "New Life", desc: "Feeds the next harvest. The loop closes.", img: futureImg },
  ];
  return (
    <section id="revolution" className="relative bg-[var(--cream)] py-28 md:py-40 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--forest)] mb-6">
            02 — The AQCHA Revolution
          </p>
          <h2 className="display text-[clamp(2.25rem,5vw,4.5rem)] text-balance text-[var(--forest-deep)]">
            One material. <span className="italic">Infinite loops.</span>
          </h2>
          <p className="mt-6 text-lg text-[var(--forest)]/70 leading-relaxed">
            Watch waste become wonder. Each stage is engineered to be regenerative —
            from the orchard, through your hands, back to the earth.
          </p>
        </div>

        <div className="relative">
          {/* connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--forest)]/20 to-transparent" />
          <div className="grid md:grid-cols-5 gap-6">
            {stages.map((s, i) => (
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
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest-deep)]/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-[var(--amber)] text-[var(--forest-deep)] grid place-items-center text-xs font-medium">
                    0{i + 1}
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-5 text-[var(--cream)]">
                    <h3 className="display text-2xl">{s.title}</h3>
                    <p className="text-xs text-[var(--cream)]/75 mt-1.5 leading-snug">
                      {s.desc}
                    </p>
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

/* -------------------------------------------------- */

function WhyAqcha() {
  const features = [
    { icon: Leaf, title: "100% Plastic Free", desc: "Zero petroleum. Zero microplastics. Ever." },
    { icon: Sprout, title: "100% Biodegradable", desc: "Decomposes in weeks — leaving no trace behind." },
    { icon: Factory, title: "Zero Waste Production", desc: "Closed-loop process. Every byproduct returns to use." },
    { icon: MapPin, title: "Locally Sourced", desc: "Powered by Morocco's farms and food markets." },
    { icon: Recycle, title: "Circular Economy", desc: "Waste in. Packaging out. Compost back. Repeat." },
    { icon: Wind, title: "Low Carbon Footprint", desc: "Up to 80% lower CO₂ than conventional plastic." },
  ];
  const [active, setActive] = useState(0);
  return (
    <section id="why" className="bg-[var(--bone)] py-28 md:py-40">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--forest)] mb-6">
            03 — Why AQCHA Is Different
          </p>
          <h2 className="display text-[clamp(2.25rem,5vw,4.5rem)] text-balance text-[var(--forest-deep)]">
            Engineered with <span className="italic">conscience.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
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
                <div className="display text-3xl md:text-4xl mb-3">{f.title}</div>
                <p
                  className={`text-sm leading-relaxed ${
                    isActive ? "text-[var(--cream)]/70" : "text-[var(--forest)]/60"
                  }`}
                >
                  {f.desc}
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

/* -------------------------------------------------- */

function Products() {
  const products = [
    {
      tag: "Available",
      title: "Biodegradable Shopping Bags",
      desc: "Strong, supple, and made entirely from fruit fibers. Carries up to 8kg.",
      img: bagImg,
    },
    {
      tag: "Available",
      title: "Eco Packaging for Dry Food",
      desc: "Premium boxes for grains, nuts and pantry essentials. Compostable in 12 weeks.",
      img: boxImg,
    },
    {
      tag: "Coming 2026",
      title: "Future Packaging Solutions",
      desc: "Sculptural bio-containers for cosmetics, e-commerce and the new luxury.",
      img: futureProductImg,
    },
  ];
  return (
    <section id="products" className="bg-[var(--cream)] py-28 md:py-40">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--forest)] mb-6">
              04 — Our Products
            </p>
            <h2 className="display text-[clamp(2.25rem,5vw,4.5rem)] text-balance text-[var(--forest-deep)]">
              Beautiful. Strong. <span className="italic">Returnable to earth.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[var(--forest-deep)] font-medium border-b border-[var(--forest-deep)] pb-1 hover:gap-3 transition-all"
          >
            Request a sample <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative rounded-3xl bg-white overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[var(--bone)]">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--forest)]/50 mb-3">
                  {p.tag}
                </span>
                <h3 className="display text-2xl md:text-3xl text-[var(--forest-deep)]">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--forest)]/65 leading-relaxed flex-1">
                  {p.desc}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--forest-deep)]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--amber)]" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[var(--forest-deep)] group-hover:rotate-45 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------- */

function Impact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const metrics = [
    { value: 2.4, suffix: "M kg", label: "Plastic saved from landfills", decimals: 1 },
    { value: 3.8, suffix: "M kg", label: "Organic waste recovered", decimals: 1 },
    { value: 6200, suffix: " t", label: "CO₂ emissions reduced" },
    { value: 1.1, suffix: "M kg", label: "Compost generated", decimals: 1 },
  ];

  return (
    <section
      id="impact"
      ref={ref}
      className="relative bg-[var(--forest-deep)] text-[var(--cream)] py-28 md:py-40 overflow-hidden"
    >
      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[var(--amber)]/10 blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-6 max-w-7xl relative">
        <div className="grid md:grid-cols-12 gap-12 items-end mb-16">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--amber)] mb-6">
              05 — Environmental Impact
            </p>
            <h2 className="display text-[clamp(2.25rem,5vw,4.5rem)] text-balance">
              Measured in <span className="italic text-[var(--amber)]">tons,</span> felt for generations.
            </h2>
          </div>
          <p className="md:col-span-5 text-[var(--cream)]/70 text-lg leading-relaxed">
            Live impact, audited and verifiable. Every package we ship is a unit
            of progress for the planet.
          </p>
        </div>

        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <span className="relative w-3 h-3">
                <span className="absolute inset-0 rounded-full bg-[var(--amber)] animate-pulse-ring" />
                <span className="absolute inset-0 rounded-full bg-[var(--amber)]" />
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-[var(--cream)]/70">
                Live Impact Dashboard · Updated continuously
              </span>
            </div>
            <span className="text-xs text-[var(--cream)]/50 hidden md:block">
              Since 2024
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((m, i) => (
              <div key={i}>
                <div className="display text-4xl md:text-6xl text-[var(--amber)]">
                  {inView && (
                    <Counter to={m.value} suffix={m.suffix} decimals={m.decimals ?? 0} />
                  )}
                </div>
                <p className="mt-3 text-sm text-[var(--cream)]/70">{m.label}</p>
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

/* -------------------------------------------------- */

function Future() {
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
          06 — The Future We Are Building
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="display text-[clamp(2.75rem,8vw,7.5rem)] max-w-5xl text-balance"
        >
          From Waste to a <span className="italic text-[var(--amber)]">Cleaner Planet.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 max-w-xl text-lg text-[var(--cream)]/75 leading-relaxed"
        >
          Cities, businesses and people — connected by one circular material that
          gives back more than it takes.
        </motion.p>
      </div>
    </section>
  );
}

/* -------------------------------------------------- */

function Contact() {
  const partners = ["Maroc PME", "GIZ", "UM6P", "Climate-KIC", "Impact Lab", "Bpifrance"];
  return (
    <section id="contact" className="bg-[var(--cream)] py-28 md:py-40">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--forest)] mb-6">
              07 — Partners, Investors & Contact
            </p>
            <h2 className="display text-[clamp(2.25rem,5vw,4.5rem)] text-balance text-[var(--forest-deep)]">
              Let's build the post-plastic world,
              <span className="italic"> together.</span>
            </h2>
            <p className="mt-6 text-lg text-[var(--forest)]/65 max-w-xl leading-relaxed">
              Whether you're a brand, investor or institution — we want to hear
              from you. AQCHA is currently raising its Seed round.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl"
            >
              <input
                placeholder="Your name"
                className="bg-white border border-[var(--forest)]/10 rounded-2xl px-5 py-4 text-sm placeholder:text-[var(--forest)]/40 focus:outline-none focus:border-[var(--forest-deep)]"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-white border border-[var(--forest)]/10 rounded-2xl px-5 py-4 text-sm placeholder:text-[var(--forest)]/40 focus:outline-none focus:border-[var(--forest-deep)]"
              />
              <textarea
                placeholder="Tell us about your project, brand or interest…"
                rows={4}
                className="sm:col-span-2 bg-white border border-[var(--forest)]/10 rounded-2xl px-5 py-4 text-sm placeholder:text-[var(--forest)]/40 focus:outline-none focus:border-[var(--forest-deep)] resize-none"
              />
              <button
                type="submit"
                className="sm:col-span-2 group inline-flex items-center justify-center gap-2 bg-[var(--forest-deep)] text-[var(--cream)] rounded-2xl px-6 py-4 font-medium hover:bg-[var(--forest)] transition"
              >
                <Mail className="w-4 h-4" />
                Get in touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          <aside className="md:col-span-5">
            <div className="rounded-3xl bg-[var(--forest-deep)] text-[var(--cream)] p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--amber)]">
                Trusted & Backed By
              </p>
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

/* -------------------------------------------------- */

function Footer() {
  return (
    <footer className="bg-[var(--forest-deep)] text-[var(--cream)]/70 py-12">
      <div className="container mx-auto px-6 max-w-7xl flex flex-wrap items-center justify-between gap-4 text-sm">
        <div className="font-display text-2xl text-[var(--cream)]">
          aqcha<span className="text-[var(--amber)]">.</span>
        </div>
        <p className="text-xs text-[var(--cream)]/50">
          © {new Date().getFullYear()} AQCHA · Designed in Morocco for the planet.
        </p>
        <div className="flex gap-5 text-xs uppercase tracking-[0.2em]">
          <a href="#" className="hover:text-[var(--amber)] transition">Instagram</a>
          <a href="#" className="hover:text-[var(--amber)] transition">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------- */

function Home() {
  return (
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
  );
}
