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
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FinlandRoadMap } from "@/components/FinlandRoadMap";
import { detectLang, storeUrl, translations, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gyyti — Kyydinjakopalvelu" },
      {
        name: "description",
        content: "Gyyti on kyydinjakopalvelu, joka yhdistää samaan suuntaan kulkevat ihmiset työmatkoille, tapahtumiin ja yhteisöihin.",
      },
      { property: "og:title", content: "Gyyti — Kyydinjakopalvelu" },
      {
        property: "og:description",
        content: "Gyyti yhdistää samaan suuntaan kulkevat ihmiset työmatkoille, tapahtumiin ja yhteisöihin.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const useCaseIcons: LucideIcon[] = [CalendarDays, Building2, Dumbbell, GraduationCap, Users];
const useCaseImages = [
  "/use-case-events.webp",
  "/use-case-commuting.webp",
  "/use-case-workouts.webp",
  "/use-case-universities.webp",
  "/use-case-housing.webp",
];
const useCasePhotoUrls = [
  "https://unsplash.com/photos/people-gathering-on-concert-during-daytime-eiQqGBAMgIE",
  "https://unsplash.com/photos/a-group-of-people-walking-down-a-street-next-to-tall-buildings-DanOxaF3CsY",
  "https://unsplash.com/photos/men-and-women-running-on-sea-shore-c59hEeerAaI",
  "https://unsplash.com/photos/students-talking-and-laughing-in-a-lecture-hall-TB5HpfJf7mA",
  "https://unsplash.com/photos/a-group-of-people-sitting-on-a-couch-in-a-living-room-W5phBffrIH4",
];
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

function RoutePreview({ label }: { label: string }) {
  return (
    <div className="visual-panel visual-panel-routes" role="img" aria-label={label}>
      <RoadNetwork dense />
      <div className="visual-grid" />
      <div className="visual-panel-heading"><span className="status-dot" />{label}</div>
    </div>
  );
}

function ScopeImpactIllustration({ title }: { title: string }) {
  return (
    <svg
      className="scope-impact-illustration"
      viewBox="0 0 560 390"
      role="img"
      aria-labelledby="scope-illustration-title scope-illustration-description"
    >
      <title id="scope-illustration-title">{title}</title>
      <desc id="scope-illustration-description">{title}</desc>
      <defs>
        <linearGradient id="scope-card-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#17344d" />
          <stop offset="100%" stopColor="#0c1b2a" />
        </linearGradient>
        <linearGradient id="scope-route-stroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#548fe3" stopOpacity=".2" />
          <stop offset="50%" stopColor="#8bdcff" />
          <stop offset="100%" stopColor="#548fe3" stopOpacity=".25" />
        </linearGradient>
        <radialGradient id="scope-glow">
          <stop offset="0%" stopColor="#68caff" stopOpacity=".2" />
          <stop offset="100%" stopColor="#68caff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="1" y="1" width="558" height="388" rx="26" fill="url(#scope-card-fill)" stroke="#8bdcff" strokeOpacity=".2" />
      <circle cx="468" cy="88" r="142" fill="url(#scope-glow)" />
      <path d="M32 280H528M32 310H528M32 340H528M80 250V360M160 250V360M240 250V360M320 250V360M400 250V360M480 250V360" stroke="#8bdcff" strokeOpacity=".055" />
      <text x="36" y="47" fill="#91a9bf" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="600" letterSpacing="2.2">{title.toLocaleUpperCase()}</text>
      <path d="M91 164C144 164 159 137 214 137s75 53 131 53 73-26 124-26" fill="none" stroke="#14304a" strokeWidth="13" strokeLinecap="round" />
      <path d="M91 164C144 164 159 137 214 137s75 53 131 53 73-26 124-26" fill="none" stroke="url(#scope-route-stroke)" strokeWidth="2.5" strokeLinecap="round" />
      {[91, 214, 345, 469].map((x, index) => (
        <circle key={x} cx={x} cy={[164, 137, 190, 164][index]} r={index === 1 || index === 2 ? 4 : 3} fill="#9be2ff" />
      ))}
      {["01", "02", "03"].map((number, index) => (
        <g key={number} transform={`translate(${[20, 209, 398][index]} 222)`}>
          <rect width="142" height="96" rx="15" fill="#081522" fillOpacity=".72" stroke="#8bdcff" strokeOpacity=".19" />
          <text x="16" y="38" fill={index === 1 ? "#9be2ff" : "#6e9ed5"} fontFamily="Space Grotesk, sans-serif" fontSize="12" fontWeight="700" letterSpacing="1.5">{`SCOPE ${number}`}</text>
          <path d="M16 67H126" stroke="#8bdcff" strokeOpacity=".18" />
          <circle cx="120" cy="67" r="3" fill="#8bdcff" fillOpacity=".7" />
        </g>
      ))}
    </svg>
  );
}

function Index() {
  const [lang, setLang] = useState<Lang>("fi");
  const [autonomous, setAutonomous] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [openUseCases, setOpenUseCases] = useState<number[]>([]);
  const t = translations[lang];

  useEffect(() => { setLang(detectLang()); }, []);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  useEffect(() => {
    const widgetScriptSrc = "https://tally.so/widgets/embed.js";
    const loadEmbeds = () => {
      const tally = (window as Window & { Tally?: { loadEmbeds: () => void } }).Tally;
      if (tally) {
        tally.loadEmbeds();
        return;
      }

      document.querySelectorAll<HTMLIFrameElement>("iframe[data-tally-src]:not([src])").forEach((iframe) => {
        iframe.src = iframe.dataset.tallySrc ?? "";
      });
    };

    const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${widgetScriptSrc}"]`);
    if (existingScript) {
      if ((window as Window & { Tally?: { loadEmbeds: () => void } }).Tally) {
        loadEmbeds();
      } else {
        existingScript.addEventListener("load", loadEmbeds, { once: true });
        existingScript.addEventListener("error", loadEmbeds, { once: true });
      }
      return;
    }

    const script = document.createElement("script");
    script.src = widgetScriptSrc;
    script.addEventListener("load", loadEmbeds, { once: true });
    script.addEventListener("error", loadEmbeds, { once: true });
    document.body.appendChild(script);
  }, [lang]);

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

      <section id="contact" className="content-section contact-section bg-secondary">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t.footer.contact}</p>
              <h2>{t.footer.formTitle}</h2>
            </div>
          </div>
          <iframe
            key={lang}
            className="contact-form-embed mx-auto w-full border-0"
            data-tally-src={`https://tally.so/embed/${lang === "fi" ? "Z9jvrv" : "jeaYL9"}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
            title={t.footer.formTitle}
            height="200"
            loading="lazy"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
          />
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
          <RoutePreview label={t.optim.visual} />
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
          <div className="section-heading">
            <div><p className="eyebrow">{t.useCases.eyebrow}</p><h2>{t.useCases.title}</h2></div>
            <p>{t.useCases.intro}</p>
          </div>
          <div className="use-case-list">
            {t.useCases.items.map((item, index) => {
              const Icon = useCaseIcons[index] ?? Users;
              const isOpen = openUseCases.includes(index);
              const triggerId = `use-case-trigger-${index}`;
              const panelId = `use-case-panel-${index}`;
              return (
                <article className={`use-case-entry${isOpen ? " is-open" : ""}`} key={item.title}>
                  <button
                    id={triggerId}
                    type="button"
                    className="use-case-trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenUseCases((open) => (
                      open.includes(index) ? open.filter((itemIndex) => itemIndex !== index) : [...open, index]
                    ))}
                  >
                    <span className="use-case-number">{String(index + 1).padStart(2, "0")}</span>
                    <Icon size={23} aria-hidden="true" />
                    <strong>{item.title}</strong>
                    <span className="use-case-toggle-label">{isOpen ? t.useCases.close : t.useCases.open}</span>
                    <ChevronRight className="use-case-chevron" size={20} aria-hidden="true" />
                  </button>
                  <div id={panelId} className="use-case-panel" role="region" aria-labelledby={triggerId} hidden={!isOpen}>
                    <div className="use-case-photo">
                      <img src={useCaseImages[index]} alt={item.imageAlt} loading="lazy" />
                      <a href={useCasePhotoUrls[index]} target="_blank" rel="noreferrer">{t.useCases.photoCredit}</a>
                    </div>
                    <div className="use-case-copy">
                      <p className="use-case-badge"><span />{t.useCases.sharedRide}</p>
                      <h3>{item.lead}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="content-section bg-secondary">
        <div className="scope-content mx-auto max-w-7xl px-5 sm:px-8">
          <div className="scope-copy">
            <p className="eyebrow">Scope 1–3</p>
            <h2>{t.scope.title}</h2>
            <p className="section-copy">{t.scope.text}</p>
          </div>
          <div className="scope-visual">
            <ScopeImpactIllustration title={t.scope.illustrationTitle} />
          </div>
        </div>
        <div className="scope-details mx-auto max-w-7xl px-5 sm:px-8">
          {t.scope.items.map((item, index) => (
            <article className="scope-detail" key={item.name}>
              <p className="scope-detail-label"><span>{`0${index + 1}`}</span>{item.name}</p>
              <p className="scope-detail-title">{item.category}</p>
              <p className="scope-detail-description">{item.description}</p>
              <p className={`scope-influence scope-influence-${index + 1}`}><span />{item.influence}</p>
            </article>
          ))}
        </div>
        <div className="scope-actions mx-auto mt-8 flex max-w-7xl flex-wrap gap-3 px-5 sm:px-8">
          <Button variant="outline" onClick={() => logAction("Pyydä raportoinnin esittely")}>{t.scope.cta} <ArrowRight size={16} /></Button>
          <Button onClick={() => setReportOpen(true)}>{t.scope.report} <ArrowRight size={16} /></Button>
        </div>
      </section>

      <Dialog open={reportOpen} onOpenChange={setReportOpen}>
        <DialogContent className="h-[92vh] w-[min(96vw,1100px)] max-w-none grid-rows-[auto_minmax(0,1fr)] gap-3 overflow-hidden p-5 sm:p-6">
          <DialogHeader>
            <DialogTitle>{t.scope.title}</DialogTitle>
          </DialogHeader>
          <iframe
            className="h-full min-h-0 w-full rounded-md border-0"
            src="/GyytiRaportointi.pdf"
            title={t.scope.report}
          />
        </DialogContent>
      </Dialog>

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
          <div><BrandMark /><p className="footer-description mt-5 max-w-sm text-sm leading-6 text-muted-foreground">{t.footer.text}</p></div>
          <div><h3>{t.download}</h3><button onClick={openStore}>App Store</button><button onClick={openStore}>Google Play</button></div>
          <div><h3>{t.footer.contact}</h3><a href="#contact">{t.footer.form}</a><span className="footer-email"><Mail size={14} /> hello@gyyti.fi</span></div>
          <div>
            <h3>{t.footer.follow}</h3>
            <a href="https://www.instagram.com/gyytiapp/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.tiktok.com/@gyytiapp?lang=en" target="_blank" rel="noreferrer">TikTok</a>
          </div>
        </div>
        <div className="footer-base"><span>© 2026 Gyyti</span><span>{t.footer.made}</span></div>
      </footer>

    </main>
  );
}
