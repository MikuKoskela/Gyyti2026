export type Lang = "fi" | "en";

export const translations = {
  fi: {
    nav: { service: "Palvelu", tech: "Teknologia", useCases: "Käyttökohteet", community: "Yhteisö" },
    download: "Lataa Gyyti",
    menuOpen: "Avaa valikko",
    menuClose: "Sulje valikko",
    langLabel: "Kieli",
    hero: {
      eyebrow: "Kyydinjakopalvelu",
      title1: "Sama suunta.",
      title2: "Älykkäämpi kyyti.",
      text: "Yhdistämme ihmiset, matkat ja yhteisöt yhdeksi optimoiduksi liikenneverkoksi.",
      cta: "Lataa Gyyti",
      toggleOn: "Kohti kutsuohjattua autonomista liikennettä",
      toggleOff: "Takaisin kyydinjakoon",
      country: "Suomi"
    },
    hero2: {
      eyebrow: "Kutsuohjaus",
      title1: "Kohti kutsuohjattua autonomista",
      title2: "liikennettä.",
      text: "Gyyti laajentaa alustaansa mahdollistamaan autonomiset taksipalvelut yrityksille ja taksiyhtiöille.",
      fill: "täyttöaste",
    },
    partners: { title: "Voisiko tässä olla sinun markkinapaikkasi?", slot: "Logosi tähän" },
    features: {
      eyebrow: "Gyyti App",
      title: "Kaikki matkassa tarvittava.",
      text: "Helppo, luotettava ja yhteisöllinen tapa sopia ja jakaa kyytejä.",
      items: [
        ["Helppo käyttää", "Selkeä matkan luonti ilman turhia vaiheita."],
        ["Älykäs reittien yhdistely", "Optimointimoottori yhdistää sopivat matkat."],
        ["Sovelluksen sisäiset viestit", "Sovi yksityiskohdat turvallisesti sovelluksessa."],
        ["Hyväksy tai hylkää matka", "Pidä päätösvalta aina itselläsi."],
        ["Yhteisö", "Liiku luotettujen ryhmien ja yhteisöjen kanssa."],
        ["Ajallaan", "Reaaliaikainen tilanne pitää matkasi aikataulussa."],
        ["Luottamus ja arvostelu", "Arvostelut rakentavat turvallista matkaverkostoa."],
        ["Säästä matkakuluissa", "Jaa kustannukset ja vähennä päästöjä samalla."],
      ],
    },
    optim: {
      visual: "Reittien optimointimoottori",
      eyebrow: "Data muuttuu paremmiksi matkoiksi",
      title: "Kyytien optimointi tekee jokaisesta kilometristä hyödyllisemmän.",
      text: "Moottori yhdistää lähtöpaikat, määränpäät ja aikataulut reaaliaikaisesti. Kutsuohjaus reagoi kysyntään ja rakentaa tehokkaimman mahdollisen reitin.",
      m1: "Reaaliaikainen yhdistely",
      m2: "Dynaaminen kutsuohjaus",
    },
    useCases: {
      eyebrow: "Käyttökohteet",
      title: "Rakennettu liikkumisen todellisiin tilanteisiin.",
      items: ["Tapahtumille", "Työmatkat", "Treenimatkat", "Korkeakoulut", "Taloyhtiöt"],
    },
    scope: {
      title: "Työmatkaraportointi, jonka voi näyttää toteen.",
      text: "Näe työmatkojen kustannukset, käyttöaste ja päästövaikutukset samassa näkymässä. Raportointi tukee organisaatiosi vastuullisuustyötä.",
      cta: "Pyydä esittely",
      visual: "Scope 1–3 raportointinäkymä",
    },
    community: {
      eyebrow: "Aktiivinen tuotekehitys",
      title: "Rakenna tulevaisuuden liikkumista kanssamme.",
      text: "Yhteisössä testaamme uusia toimintoja, jaamme kokemuksia ja päätämme yhdessä, mitä Gyytiin rakennetaan seuraavaksi.",
      cta: "Liity WhatsApp-yhteisöön",
    },
    footer: {
      text: "Älykäs kyydinjakopalvelu yhteisöille, yrityksille ja arjen matkoille.",
      contact: "Yhteys",
      form: "Yhteydenottolomake",
      follow: "Seuraa",
      navigation: "Navigointi",
      made: "Suunniteltu Suomessa",
    },
    placeholder: "kuvapaikka",
  },
  en: {
    nav: { service: "Service", tech: "Technology", useCases: "Use cases", community: "Community" },
    download: "Download Gyyti",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    langLabel: "Language",
    hero: {
      eyebrow: "Ride-sharing service",
      title1: "Same direction.",
      title2: "Smarter ride.",
      text: "We connect people, trips and communities into one optimised mobility network.",
      cta: "Open Gyyti",
      toggleOn: "Towards on-demand autonomous mobility",
      toggleOff: "Back to ride-sharing",
      country: "Finland"
    },
    hero2: {
      eyebrow: "demand-responsive control",
      title1: "Towards on-demand autonomous",
      title2: "mobility.",
      text: "Gyyti is expanding its platform to support autonomous taxi services for businesses and taxi companies.",
      fill: "occupancy",
    },
    partners: { title: "Could this become your marketplace?", slot: "Your logo here" },
    features: {
      eyebrow: "Gyyti App",
      title: "Everything you need for the trip.",
      text: "An easy, reliable and community-driven way to arrange and share rides.",
      items: [
        ["Easy to use", "Clear trip creation without extra steps."],
        ["Smart route matching", "The optimisation engine combines matching trips."],
        ["In-app messaging", "Agree on details safely inside the app."],
        ["Accept or decline a ride", "You always stay in control."],
        ["Community", "Travel with trusted groups and communities."],
        ["On time", "Real-time status keeps your trip on schedule."],
        ["Trust and reviews", "Reviews build a safe travel network."],
        ["Save on travel costs", "Share costs and cut emissions at the same time."],
      ],
    },
    optim: {
      visual: "Route optimisation engine",
      eyebrow: "Data becomes better trips",
      title: "Ride optimisation makes every kilometre count.",
      text: "The engine combines origins, destinations and schedules in real time. On-demand dispatch reacts to demand and builds the most efficient route.",
      m1: "Real-time matching",
      m2: "Dynamic on-demand dispatch",
    },
    useCases: {
      eyebrow: "Use cases",
      title: "Built for real-world mobility.",
      items: ["Events", "Commuting", "Workout trips", "Universities", "Housing companies"],
    },
    scope: {
      title: "Commute reporting you can verify.",
      text: "See commuting costs, utilisation and emissions impact in one view. Reporting supports your organisation's sustainability work.",
      cta: "Request a demo",
      visual: "Scope 1–3 reporting view",
    },
    community: {
      eyebrow: "Active product development",
      title: "Build the future of mobility with us.",
      text: "In the community we test new features, share experiences and decide together what gets built into Gyyti next.",
      cta: "Join the WhatsApp community",
    },
    footer: {
      text: "Smart ride-sharing for communities, companies and everyday trips.",
      contact: "Contact",
      form: "Contact form",
      follow: "Follow",
      navigation: "Navigation",
      made: "Designed in Finland",
    },
    placeholder: "image placeholder",
  },
} as const;

export function detectLang(): Lang {
  try {
    const saved = localStorage.getItem("gyyti-lang");
    if (saved === "fi" || saved === "en") return saved;
  } catch {}
  const langs = navigator.languages?.length ? navigator.languages : [navigator.language];
  return langs.some((l) => l?.toLowerCase().startsWith("fi")) ? "fi" : "en";
}

const APP_STORE = "https://apps.apple.com/search?term=Gyyti";
const PLAY_STORE = "https://play.google.com/store/search?q=Gyyti&c=apps";

export function storeUrl(): string {
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) return PLAY_STORE;
  const isIOS = /iphone|ipad|ipod/i.test(ua) || (/macintosh/i.test(ua) && navigator.maxTouchPoints > 1);
  return isIOS ? APP_STORE : PLAY_STORE;
}
