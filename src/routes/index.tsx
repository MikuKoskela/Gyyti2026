import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Building2,
  BusFront,
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
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gyyti — Kyydinjakopalvelu" },
      {
        name: "description",
        content:
          "Gyyti yhdistää matkat älykkäällä reittioptimoinnilla ja kutsuohjatulla liikenteellä.",
      },
      { property: "og:title", content: "Gyyti — Kyydinjakopalvelu" },
      {
        property: "og:description",
        content:
          "Älykkäämpi tapa yhdistää työmatkat, tapahtumat ja yhteisöt.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const useCases = [
  { icon: CalendarDays, label: "Tapahtumille" },
  { icon: Building2, label: "Työmatkat" },
  { icon: Dumbbell, label: "Treenimatkat" },
  { icon: GraduationCap, label: "Korkeakoulut" },
  { icon: Users, label: "Taloyhtiöt" },
];

const features = [
  [Sparkles, "Helppo käyttää", "Selkeä matkan luonti ilman turhia vaiheita."],
  [RouteIcon, "Älykäs reittien yhdistely", "Optimointimoottori yhdistää sopivat matkat."],
  [MessageCircle, "Sovelluksen sisäiset viestit", "Sovi yksityiskohdat turvallisesti sovelluksessa."],
  [Check, "Hyväksy tai hylkää matka", "Pidä päätösvalta aina itselläsi."],
  [Users, "Yhteisö", "Liiku luotettujen ryhmien ja yhteisöjen kanssa."],
  [Clock3, "Ajallaan", "Reaaliaikainen tilanne pitää matkasi aikataulussa."],
  [ShieldCheck, "Luottamus ja arvostelu", "Arvostelut rakentavat turvallista matkaverkostoa."],
  [Leaf, "Säästä matkakuluissa", "Jaa kustannukset ja vähennä päästöjä samalla."],
];

function BrandMark() {
  return (
    <div className="flex items-center gap-3" aria-label="Gyyti">
      <span className="brand-mark"><MapPin size={18} strokeWidth={2.4} /></span>
      <span className="font-display text-lg font-semibold uppercase tracking-[0.18em] text-foreground">
        Gyyti
      </span>
    </div>
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

function VisualPlaceholder({ label }: { label: string }) {
  return (
    <div className="visual-placeholder" role="img" aria-label={`${label} — kuvapaikka`}>
      <RoadNetwork dense />
      <div className="visual-grid" />
      <div className="relative z-10 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
        <span className="status-dot" /> {label}
      </div>
    </div>
  );
}

function Index() {
  const [showPlatform, setShowPlatform] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const logAction = (action: string) => console.log(`[Gyyti] ${action}`);
  const enterPlatform = () => {
    logAction("Avaa palvelunäkymä");
    setShowPlatform(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="glass-nav">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <BrandMark />
          <nav className="hidden items-center gap-8 md:flex" aria-label="Päänavigaatio">
            {showPlatform ? (
              <>
                <a href="#ominaisuudet">Palvelu</a>
                <a href="#optimointi">Teknologia</a>
                <a href="#kayttokohteet">Käyttökohteet</a>
                <a href="#yhteiso">Yhteisö</a>
              </>
            ) : (
              <>
                <button type="button" onClick={() => logAction("Gyyti App")}>Gyyti App</button>
                <button type="button" onClick={() => logAction("Keskeistä")}>Keskeistä</button>
                <button type="button" onClick={() => logAction("Yritykset ja yhteisöt")}>Yritykset & yhteisöt</button>
                <button type="button" onClick={() => logAction("Missio")}>Missio</button>
              </>
            )}
          </nav>
          <div className="hidden md:block">
            <Button onClick={() => logAction("Lataa Gyyti")}>Lataa Gyyti <ArrowRight size={16} /></Button>
          </div>
          <Button
            variant="ghost"
            className="size-11 px-0 md:hidden"
            aria-label={menuOpen ? "Sulje valikko" : "Avaa valikko"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="mobile-menu" aria-label="Mobiilinavigaatio">
            <a href="#optimointi" onClick={() => setMenuOpen(false)}>Teknologia</a>
            <a href="#kayttokohteet" onClick={() => setMenuOpen(false)}>Käyttökohteet</a>
            <a href="#yhteiso" onClick={() => setMenuOpen(false)}>Yhteisö</a>
          </nav>
        )}
      </header>

      {!showPlatform ? (
        <section className="hero-stage animate-stage-in">
          <RoadNetwork dense />
          <div className="map-grid" />
          <div className="hero-vignette" />
          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-5 text-center">
            <div className="hero-logo mb-8"><MapPin size={34} /><span>G</span></div>
            <p className="eyebrow">Kyydinjakopalvelu</p>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.95] sm:text-7xl lg:text-8xl">
              Sama suunta.<br /><span className="text-accent">Älykkäämpi kyyti.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Yhdistämme ihmiset, matkat ja yhteisöt yhdeksi optimoiduksi liikenneverkoksi.
            </p>
            <Button className="mt-10" onClick={enterPlatform}>
              Avaa Gyyti <ArrowDown size={16} />
            </Button>
          </div>
          <div className="hero-status" aria-hidden="true">
            <span>60.1699° N</span><span>LIVE ROUTING</span><span>24.9384° E</span>
          </div>
        </section>
      ) : (
        <div className="animate-stage-in">
          <section className="platform-hero">
            <RoadNetwork dense />
            <div className="map-grid" />
            <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-16 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
              <div>
                <p className="eyebrow">Optimointimoottori / kutsuohjaus</p>
                <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[0.98] sm:text-7xl">
                  Kohti kutsuohjattua autonomista <span className="text-accent">liikennettä.</span>
                </h1>
                <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">
                  Gyyti optimoi kyydit kysynnän, suunnan ja ajan mukaan. Vähemmän tyhjiä kilometrejä, enemmän yhteisiä matkoja.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Button onClick={() => { logAction("Tutustu optimointiin"); document.querySelector("#optimointi")?.scrollIntoView({ behavior: "smooth" }); }}>
                    Tutustu optimointiin <ArrowDown size={16} />
                  </Button>
                  <Button variant="outline" onClick={() => logAction("Varaa esittely")}>Varaa esittely</Button>
                </div>
              </div>
              <div className="route-console" aria-label="Reittioptimoinnin visualisointi">
                <div className="console-head"><span>GYYTI / OPTIMIZATION ENGINE</span><span className="console-live">LIVE</span></div>
                <div className="console-map"><RoadNetwork dense /><div className="console-target"><span>12</span><small>YHDISTETTYÄ<br />MATKAA</small></div></div>
                <div className="console-metrics"><span><b>94%</b> täyttöaste</span><span><b>-31%</b> km</span><span><b>08:42</b> ETA</span></div>
              </div>
            </div>
          </section>

          <section className="partner-strip" aria-label="Yrityskumppanit">
            <p>Voisiko tässä olla sinun markkinapaikkasi?</p>
            <div className="partner-logos">
              {["YRITYS 01", "KUMPPANI", "KAUPUNKI", "YHTEISÖ"].map((logo) => <span key={logo}>{logo}</span>)}
            </div>
          </section>

          <section id="ominaisuudet" className="content-section border-y border-border">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <div className="section-heading">
                <div><p className="eyebrow">Gyyti App</p><h2>Kaikki matkassa tarvittava.</h2></div>
                <p>Helppo, luotettava ja yhteisöllinen tapa sopia ja jakaa kyytejä.</p>
              </div>
              <div className="feature-grid">
                {features.map(([Icon, title, text], index) => (
                  <article className="feature-item" key={title as string}>
                    <span className="feature-index">{String(index + 1).padStart(2, "0")}</span>
                    <Icon size={22} />
                    <h3>{title as string}</h3>
                    <p>{text as string}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="optimointi" className="content-section bg-secondary">
            <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
              <VisualPlaceholder label="Reittien optimointimoottori" />
              <div>
                <p className="eyebrow">Data muuttuu paremmiksi matkoiksi</p>
                <h2>Kyytien optimointi tekee jokaisesta kilometristä hyödyllisemmän.</h2>
                <p className="section-copy">Moottori yhdistää lähtöpaikat, määränpäät ja aikataulut reaaliaikaisesti. Kutsuohjaus reagoi kysyntään ja rakentaa tehokkaimman mahdollisen reitin.</p>
                <div className="metric-row"><span><b>01</b> Reaaliaikainen yhdistely</span><span><b>02</b> Dynaaminen kutsuohjaus</span></div>
              </div>
            </div>
          </section>

          <section id="kayttokohteet" className="content-section">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <div className="section-heading"><div><p className="eyebrow">Use cases</p><h2>Rakennettu liikkumisen todellisiin tilanteisiin.</h2></div></div>
              <div className="use-case-list">
                {useCases.map(({ icon: Icon, label }, index) => (
                  <button type="button" key={label} onClick={() => logAction(label)}>
                    <span>{String(index + 1).padStart(2, "0")}</span><Icon size={24} /><strong>{label}</strong><ChevronRight size={20} />
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="content-section border-y border-border bg-secondary">
            <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="eyebrow">Scope 1–3</p>
                <h2>Työmatkaraportointi, jonka voi näyttää toteen.</h2>
                <p className="section-copy">Näe työmatkojen kustannukset, käyttöaste ja päästövaikutukset samassa näkymässä. Raportointi tukee organisaatiosi vastuullisuustyötä.</p>
                <Button variant="outline" className="mt-8" onClick={() => logAction("Pyydä raportoinnin esittely")}>Pyydä esittely <ArrowRight size={16} /></Button>
              </div>
              <VisualPlaceholder label="Scope 1–3 raportointinäkymä" />
            </div>
          </section>

          <section id="yhteiso" className="community-section">
            <RoadNetwork />
            <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
              <p className="eyebrow text-primary-foreground/70">Aktiivinen tuotekehitys</p>
              <h2>Rakenna tulevaisuuden liikkumista kanssamme.</h2>
              <p>Yhteisössä testaamme uusia toimintoja, jaamme kokemuksia ja päätämme yhdessä, mitä Gyytiin rakennetaan seuraavaksi.</p>
              <a className="community-link" href="https://chat.whatsapp.com/LW6NozXnVJZ65P5m5cbIGP" target="_blank" rel="noreferrer" onClick={() => logAction("Liity WhatsApp-yhteisöön")}>
                <MessageCircle size={19} /> Liity WhatsApp-yhteisöön <ArrowRight size={17} />
              </a>
            </div>
          </section>

          <footer className="site-footer">
            <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.6fr_repeat(3,1fr)]">
              <div><BrandMark /><p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">Älykäs kyydinjakopalvelu yhteisöille, yrityksille ja arjen matkoille.</p></div>
              <div><h3>Lataa Gyyti</h3><button onClick={() => logAction("App Store")}>App Store</button><button onClick={() => logAction("Google Play")}>Google Play</button></div>
              <div><h3>Yhteys</h3><button onClick={() => logAction("Yhteydenottolomake")}>Yhteydenottolomake</button><a href="mailto:hello@gyyti.fi"><Mail size={14} /> hello@gyyti.fi</a></div>
              <div><h3>Seuraa</h3><button onClick={() => logAction("LinkedIn")}>LinkedIn</button><button onClick={() => logAction("Instagram")}>Instagram</button><button onClick={() => logAction("Navigointi")}>Navigointi</button></div>
            </div>
            <div className="footer-base"><span>© 2026 Gyyti</span><span>Suunniteltu Suomessa</span></div>
          </footer>
        </div>
      )}
    </main>
  );
}
