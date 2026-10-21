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
    partners: {
      title: "Voisiko tässä olla sinun markkinapaikkasi?",
      carouselLabel: "Esimerkkejä mainospaikoista",
      slot: "Brändisi tähän",
    },
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
      intro: "Gyyti yhdistää samalla suunnalla kulkevat ihmiset ja auttaa sopimaan yhteisistä kyydeistä helposti – arjen matkoista tapahtumiin.",
      open: "Lue lisää",
      close: "Sulje",
      sharedRide: "Yhteinen kyyti, helpompi matka",
      photoCredit: "Kuva: Unsplash",
      items: [
        {
          title: "Tapahtumat",
          lead: "Tee matkasta osa tapahtumaelämystä.",
          description: "Festivaaleille, otteluihin ja muihin tapahtumiin kuljetaan usein samoilta alueilta. Gyyti auttaa osallistujia löytämään samaan suuntaan kulkevat, tarjoamaan vapaita paikkoja ja sopimaan yhteisestä kyydistä – myös paluumatkalle.",
          imageAlt: "Yleisö saapuu suureen ulkoilmakonserttiin.",
        },
        {
          title: "Työmatkat",
          lead: "Tee tutusta työmatkasta yhteinen.",
          description: "Moni kulkee töihin samoilta alueilta ja samoihin aikoihin. Gyyti auttaa työkavereita löytämään sopivan kyydin, jakamaan vapaat paikat ja sopimaan aikatauluista yhdessä – näin jokaista reittiä ei tarvitse ajaa yksin.",
          imageAlt: "Ihmisiä kulkee yhdessä kaupungin keskustan vilkkaalla kadulla.",
        },
        {
          title: "Treenimatkat",
          lead: "Joukkuematkat sujuvat paremmin yhdessä.",
          description: "Harjoituksiin ja peleihin suuntaa usein useampi samalta suunnalta. Gyyti helpottaa joukkuekavereiden ja harrastajien yhteydenpitoa, kyytien jakamista ja matkajärjestelyistä sopimista.",
          imageAlt: "Juoksuryhmä harjoittelee yhdessä rantaviivalla.",
        },
        {
          title: "Korkeakoulut",
          lead: "Yhdistä kampukselle kulkevat opiskelijat.",
          description: "Opiskelijat ja henkilökunta saapuvat kampukselle monesta suunnasta. Gyyti auttaa löytämään samalla suunnalla kulkevia, tarjoamaan vapaita paikkoja ja sopimaan kampuskyydeistä helposti.",
          imageAlt: "Opiskelijat keskustelevat luentosalissa.",
        },
        {
          title: "Taloyhtiöt",
          lead: "Lähde naapurin kanssa samaan suuntaan.",
          description: "Naapurit käyvät samoissa kaupoissa, harrastuksissa ja tapahtumissa. Gyyti tarjoaa taloyhtiölle helpon tavan löytää yhteensopivia matkoja, sopia kyydeistä ja tutustua samalla oman alueen ihmisiin.",
          imageAlt: "Ystävät viettävät aikaa yhdessä viihtyisässä kodissa.",
        },
      ],
    },
    scope: {
      title: "Työmatka-raportointi, jonka voi tarkistaa.",
      text: "Näe työmatkojen kustannukset, käyttöaste ja päästövaikutukset samassa näkymässä. Raportointi tukee organisaatiosi vastuullisuustyötä.",
      cta: "Pyydä esittely",
      report: "Avaa raportti",
      illustrationTitle: "Työmatkojen päästölähteet",
      items: [
        {
          name: "Scope 1",
          category: "Suorat päästöt",
          description: "Yrityksen omassa toiminnassa tai sen hallinnoimista lähteistä syntyvät päästöt.",
          influence: "Vaikutusmahdollisuus: korkea",
        },
        {
          name: "Scope 2",
          category: "Ostoenergian epäsuorat päästöt",
          description: "Ostetun sähkön, lämmön tai jäähdytyksen tuotannossa syntyvät päästöt, jotka luetaan energiaa käyttävän yrityksen vastuulle.",
          influence: "Vaikutusmahdollisuus: keskitaso",
        },
        {
          name: "Scope 3",
          category: "Arvoketjun epäsuorat päästöt",
          description: "Kaikki arvoketjun epäsuorat päästöt Scope 1- ja Scope 2 -luokkien ulkopuolelta. GHG-protokollan 15 kategoriaa kattavat toimittajien suuntaan kulkevan hankintaketjun (upstream) ja asiakkaiden suuntaan kulkevan toimitusketjun (downstream). Niihin vaikuttaminen on haastavampaa, mutta vähennyspotentiaali voi olla suuri.",
          influence: "Vaikutusmahdollisuus: rajallinen",
        },
      ],
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
      form: "Ota yhteyttä",
      formTitle: "Täytä yhteydenottolomake",
      formDescription: "Kerro lyhyesti, miten voimme auttaa. Viestisi avautuu sähköpostiohjelmassasi lähetettäväksi.",
      emailSubject: "Yhteydenotto verkkosivuilta",
      name: "Nimi",
      email: "Sähköposti",
      message: "Viesti",
      send: "Jatka sähköpostiin",
      emailRequired: "Lisää sähköpostiosoitteesi, jotta voimme vastata.",
      follow: "Seuraa",
      navigation: "Navigointi",
      made: "Suunniteltu Suomessa",
    },
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
    partners: {
      title: "Could this become your marketplace?",
      carouselLabel: "Advertising space examples",
      slot: "Your brand here",
    },
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
      intro: "Gyyti connects people heading in the same direction and makes it easy to arrange shared rides—from everyday commutes to special events.",
      open: "Explore",
      close: "Close",
      sharedRide: "A shared ride, made simple",
      photoCredit: "Photo: Unsplash",
      items: [
        {
          title: "Events",
          lead: "Make the ride part of the event.",
          description: "People often travel to concerts, games and local events from the same areas. Gyyti helps attendees find others going their way, offer spare seats and coordinate a ride—there and back.",
          imageAlt: "A crowd gathers for a large outdoor concert.",
        },
        {
          title: "Commuting",
          lead: "Turn the daily commute into a shared trip.",
          description: "Colleagues often travel along the same routes at the same time. Gyyti makes it easy to find a suitable ride, share available seats and coordinate schedules, so fewer people need to make the same journey alone.",
          imageAlt: "People walk together along a busy city street.",
        },
        {
          title: "Workout trips",
          lead: "Get the team there together.",
          description: "Practice sessions and games bring teammates and club members to the same place. Gyyti helps people connect, share available seats and coordinate the trip without a tangle of separate arrangements.",
          imageAlt: "A group of runners trains together along the shore.",
        },
        {
          title: "Universities",
          lead: "Connect people travelling to campus.",
          description: "Students and staff head to campus from across the region. Gyyti helps them find people going the same way, offer spare seats and arrange a convenient ride to campus.",
          imageAlt: "Students talk together in a lecture hall.",
        },
        {
          title: "Housing companies",
          lead: "Make it easy for neighbours to go together.",
          description: "Neighbours often share destinations like shops, activities and local events. Gyyti gives a housing community an easy way to find matching trips, arrange shared rides and get to know people nearby.",
          imageAlt: "Friends spend time together in a welcoming home.",
        },
      ],
    },
    scope: {
      title: "Commute reporting you can verify.",
      text: "See commuting costs, utilisation and emissions impact in one view. Reporting supports your organisation's sustainability work.",
      cta: "Request a demo",
      report: "View report",
      illustrationTitle: "Commuting emissions sources",
      items: [
        {
          name: "Scope 1",
          category: "Direct emissions",
          description: "Emissions from the company's own operations or sources it controls.",
          influence: "Influence: high",
        },
        {
          name: "Scope 2",
          category: "Indirect emissions from purchased energy",
          description: "Emissions from producing purchased electricity, heat or cooling, attributed to the company using that energy.",
          influence: "Influence: medium",
        },
        {
          name: "Scope 3",
          category: "Indirect value-chain emissions",
          description: "All indirect value-chain emissions outside Scopes 1 and 2. The GHG Protocol's 15 categories cover the upstream supplier/procurement side and downstream customer side. They are harder to influence, but can offer significant reduction potential.",
          influence: "Influence: limited",
        },
      ],
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
      form: "Contact us",
      formTitle: "Fill in the contact form",
      formDescription: "Tell us briefly how we can help. Your message will open in your email app, ready to send.",
      emailSubject: "Website contact request",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Continue to email",
      emailRequired: "Please enter your email address so we can reply.",
      follow: "Follow",
      navigation: "Navigation",
      made: "Designed in Finland",
    },
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

const APP_STORE = "https://apps.apple.com/fi/app/gyyti/id6788876899";
const PLAY_STORE = "https://play.google.com/store/search?q=Gyyti&c=apps";

export function storeUrl(): string {
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) return PLAY_STORE;
  const isIOS = /iphone|ipad|ipod/i.test(ua) || (/macintosh/i.test(ua) && navigator.maxTouchPoints > 1);
  return isIOS ? APP_STORE : PLAY_STORE;
}
