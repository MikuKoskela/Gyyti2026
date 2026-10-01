import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Building2,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Dumbbell,
  GraduationCap,
  ImageIcon,
  Leaf,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  RouteIcon,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FinlandRoadMap } from "@/components/FinlandRoadMap";
import { detectLang, storeUrl, translations, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gyyti — Kyydinjakopalvelu" },
      {
        name: "description",
        content: "Gyyti yhdistää matkat älykkäällä reittioptimoinnilla ja kutsuohjatulla liikenteellä.",
      },
      { property: "og:title", content: "Gyyti — Kyydinjakopalvelu" },
      { property: "og:description", content: "Älykkäämpi tapa yhdistää työmatkat, tapahtumat ja yhteisöt." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const useCaseIcons: LucideIcon[] = [CalendarDays, Building2, Dumbbell, GraduationCap, Users];
const featureIcons: LucideIcon[] = [Sparkles, RouteIcon, MessageCircle, Check, Users, Clock3, ShieldCheck, Leaf];

function BrandMark() {
  return (
    <a className="brand-mark-link" href="/" aria-label="Gyyti">
      <img className="brand-logo" src="/Gyyti-light.png" alt="Gyyti" />
    </a>
  );
}

function RoadNetwork({ dense = false }: { dense?: boolean }) {
  return (
    <svg className="road-network" viewBox="0 0 1440 900" aria-hidden="true">
      <g className="roads-static">
        <path d="M-60 690 C190 640 282 365 500 402 S790 720 1510 460" />
        <path d="M110 960 C230 680 430 620 566 334 S810 120 940 -40" />
        <path d="M-20 250 C240 180 430 250 610 188 S910 230 1460 78" />
        <path d="M1040 940 C970 700 1090 590 1010 410 S810 260 730 -30" />
        {dense && <path d="M-40 520 C240 470 350 760 680 648 S1090 550 1490 720" />}
      </g>
      <g className="roads-pulse">
        <path d="M-60 690 C190 640 282 365 500 402 S790 720 1510 460" />
        <path d="M110 960 C230 680 430 620 566 334 S810 120 940 -40" />
        <path d="M-20 250 C240 180 430 250 610 188 S910 230 1460 78" />
      </g>
      <g className="route-points">
        <circle cx="500" cy="402" r="5" />
        <circle cx="1010" cy="410" r="5" />
        <circle cx="610" cy="188" r="5" />
      </g>
    </svg>
  );
}

function VisualPlaceholder({ label, suffix }: { label: string; suffix: string }) {
  return (
    <div className="visual-placeholder" role="img" aria-label={`${label} — ${suffix}`}>
      <RoadNetwork dense />
      <div className="visual-grid" />
      <div className="relative z-10 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
        <span className="status-dot" /> {label}
      </div>
    </div>
  );
}

function Index() {
  const [lang, setLang] = useState<Lang>("fi");
  const [autonomous, setAutonomous] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => { setLang(detectLang()); }, []);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  const changeLang = (next: Lang) => {
    setLang(next);
    try { localStorage.setItem("gyyti-lang", next); } catch {}
  };

  const logAction = (action: string) => console.log(`[Gyyti] ${action}`);
  const openStore = () => {
    const url = storeUrl();
    logAction(`Avaa sovelluskauppa: ${url}`);
    window.open(url, "_blank", "noopener");
  };

  const LangSwitch = (
    <div className="lang-switch" role="group" aria-label={t.langLabel}>
      {(["fi", "en"] as const).map((l) => (
        <button key={l} type="button" aria-pressed={lang === l} onClick={() => changeLang(l)}>{l.toUpperCase()}</button>
      ))}
    </div>
  );

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="glass-nav">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <BrandMark />
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
            <a href="#ominaisuudet">{t.nav.service}</a>
            <a href="#optimointi">{t.nav.tech}</a>
            <a href="#kayttokohteet">{t.nav.useCases}</a>
            <a href="#yhteiso">{t.nav.community}</a>
          </nav>
          <div className="flex items-center gap-3">
            {LangSwitch}
            <div className="hidden md:block">
              <Button onClick={openStore}>{t.download} <ArrowRight size={16} /></Button>
            </div>
            <Button
              variant="ghost"
              className="size-11 px-0 md:hidden"
              aria-label={menuOpen ? t.menuClose : t.menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <nav className="mobile-menu" aria-label="Mobile">
            <a href="#ominaisuudet" onClick={() => setMenuOpen(false)}>{t.nav.service}</a>
            <a href="#optimointi" onClick={() => setMenuOpen(false)}>{t.nav.tech}</a>
            <a href="#kayttokohteet" onClick={() => setMenuOpen(false)}>{t.nav.useCases}</a>
            <a href="#yhteiso" onClick={() => setMenuOpen(false)}>{t.nav.community}</a>
          </nav>
        )}
      </header>

      <section className="hero-stage hero-finfinder">
        <FinlandRoadMap />
        <div className="map-grid" />
        <div className="hero-vignette" />
        <div key={autonomous ? "b" : "a"} className="hero-copy animate-stage-in">
          {autonomous ? (
            <>
              <p className="eyebrow">{t.hero2.eyebrow}</p>
              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] sm:text-7xl">
                {t.hero2.title1} <span className="text-accent">{t.hero2.title2}</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{t.hero2.text}</p>
              <div className="hero-metrics"><span><b>94%</b>{t.hero2.fill}</span><span><b>-31%</b>km</span><span><b>08:42</b>ETA</span></div>
            </>
          ) : (
            <>
              <p className="eyebrow">{t.hero.eyebrow}</p>
              <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.95] sm:text-7xl lg:text-8xl">
                {t.hero.title1}<br /><span className="text-accent">{t.hero.title2}</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{t.hero.text}</p>
            </>
          )}
          <button
            type="button"
            className="hero-toggle mt-10"
            aria-pressed={autonomous}
            onClick={() => { logAction("Hero-tila vaihdettu"); setAutonomous((v) => !v); }}
          >
            <span className="toggle-dot" /> {autonomous ? t.hero.toggleOff : t.hero.toggleOn} <ArrowRight size={15} />
          </button>
          <Button className="mt-4" onClick={openStore}>{t.hero.cta} <ArrowRight size={16} /></Button>
        </div>
        <div className="hero-status" aria-hidden="true">
          <span>60.1699° N</span><span>{t.hero.country}</span><span>24.9384° E</span>
        </div>
      </section>

      <section className="partner-strip" aria-label={t.partners.title}>
        <p>{t.partners.title}</p>
        <div className="partner-marquee">
          <div className="partner-floats">
            {[0, 1].map((copy) => (
              <div className="partner-logo-group" key={copy} aria-hidden={copy === 1}>
                {Array.from({ length: 5 }, (_, index) => (
                  <div className="partner-float" key={index} role="img" aria-label={t.partners.slot}>
                    <span className="partner-logo-icon"><ImageIcon size={25} strokeWidth={1.6} /></span>
                    <span className="partner-logo-caption">{t.partners.slot}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ominaisuudet" className="content-section">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="section-heading">
            <div><p className="eyebrow">{t.features.eyebrow}</p><h2>{t.features.title}</h2></div>
            <p>{t.features.text}</p>
          </div>
          <div className="feature-grid">
            {t.features.items.map(([title, text], index) => {
              const Icon = featureIcons[index] ?? Sparkles;
              return (
                <article className="feature-item" key={title}>
                  <span className="feature-index">{String(index + 1).padStart(2, "0")}</span>
                  <Icon size={22} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="optimointi" className="content-section bg-secondary">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <VisualPlaceholder label={t.optim.visual} suffix={t.placeholder} />
          <div>
            <p className="eyebrow">{t.optim.eyebrow}</p>
            <h2>{t.optim.title}</h2>
            <p className="section-copy">{t.optim.text}</p>
            <div className="metric-row"><span><b>01</b> {t.optim.m1}</span><span><b>02</b> {t.optim.m2}</span></div>
          </div>
        </div>
      </section>

      <section id="kayttokohteet" className="content-section">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="section-heading"><div><p className="eyebrow">{t.useCases.eyebrow}</p><h2>{t.useCases.title}</h2></div></div>
          <div className="use-case-list">
            {t.useCases.items.map((label, index) => {
              const Icon = useCaseIcons[index] ?? Users;
              return (
                <button type="button" key={label} onClick={() => logAction(label)}>
                  <span>{String(index + 1).padStart(2, "0")}</span><Icon size={24} /><strong>{label}</strong><ChevronRight size={20} />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="content-section bg-secondary">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Scope 1–3</p>
            <h2>{t.scope.title}</h2>
            <p className="section-copy">{t.scope.text}</p>
            <Button variant="outline" className="mt-8" onClick={() => logAction("Pyydä raportoinnin esittely")}>{t.scope.cta} <ArrowRight size={16} /></Button>
          </div>
          <VisualPlaceholder label={t.scope.visual} suffix={t.placeholder} />
        </div>
      </section>

      <section id="yhteiso" className="community-section">
        <RoadNetwork />
        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
          <p className="eyebrow text-primary-foreground/70">{t.community.eyebrow}</p>
          <h2>{t.community.title}</h2>
          <p>{t.community.text}</p>
          <a className="community-link" href="https://chat.whatsapp.com/LW6NozXnVJZ65P5m5cbIGP" target="_blank" rel="noreferrer" onClick={() => logAction("Liity WhatsApp-yhteisöön")}>
            <MessageCircle size={19} /> {t.community.cta} <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.6fr_repeat(3,1fr)]">
          <div><BrandMark /><p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">{t.footer.text}</p></div>
          <div><h3>{t.download}</h3><button onClick={openStore}>App Store</button><button onClick={openStore}>Google Play</button></div>
          <div><h3>{t.footer.contact}</h3><button onClick={() => logAction("Yhteydenottolomake")}>{t.footer.form}</button><a href="mailto:hello@gyyti.fi"><Mail size={14} /> hello@gyyti.fi</a></div>
          <div><h3>{t.footer.follow}</h3><button onClick={() => logAction("LinkedIn")}>LinkedIn</button><button onClick={() => logAction("Instagram")}>Instagram</button><button onClick={() => logAction("Navigointi")}>{t.footer.navigation}</button></div>
        </div>
        <div className="footer-base"><span>© 2026 Gyyti</span><span>{t.footer.made}</span></div>
      </footer>
    </main>
  );
}
