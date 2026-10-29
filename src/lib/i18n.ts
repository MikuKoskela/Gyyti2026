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
      eyebrow: "Tulevaisuuden yritysliikkuminen",
      title1: "Uusia mahdollisuuksia",
      title2: "autonomiseen liikenteeseen.",
      text: "Bliq kehittää kuljettajattomia autoja ja tilauspohjaisia liikkumispalveluja, jotka avaavat uusia mahdollisuuksia yritysten liikkuvuuteen. Bliqin ajoneuvoissa yhdistyvät autonominen teknologia ja lisensoitujen etäoperaattoreiden tuki.",
      discussionLabel: "Mahdollinen yhteistyö",
      discussion: "Keskustelemme Bliqin kanssa mahdollisesta yhteistyöstä, joka voisi yhdistää autonomisen liikkumisen ja Gyytiin kyydinjakopalvelun. Tavoitteena on tutkia uusia liikkumisen ratkaisuja yrityksille ja yhteisöille Suomessa.",
      businessTitle: "Bliq yrityksille",
      businessText: "Bliqin ratkaisuilla yritykset voivat tutkia uusia mahdollisuuksia liikennepalveluihin, henkilöstöliikkumiseen ja asiakaskuljetuksiin.",
      cta: "Keskustele kanssamme",
      learnMore: "Tutustu Bliqin yrityspalveluihin",
      carImageAlt: "Bliqin esittelemä kuljettajaton auto",
      detailImageAlt: "Lähikuva Bliqin ajoneuvon ovesta",
      imageCredit: "Tuotekuvat: Bliq",
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
      visual: "Reaaliaikainen reittisuunnittelu",
      eyebrow: "Älykäs kyytien yhdistely",
      title: "Määränpäät ja aikataulut yhteen reaaliajassa.",
      text: "Algoritmi sovittaa matkustajien määränpäät ja aikataulut yhteen reaaliajassa. Kuljettaja voi yhdistää matkustajien noudot optimoiduksi reitiksi ja mukauttaa sitä matkan aikana.",
      m1: "Määränpäät ja aikataulut",
      m2: "Kuljettajan optimoima noutoreitti",
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
      eyebrow: "The future of business mobility",
      title1: "New possibilities",
      title2: "for autonomous mobility.",
      text: "Bliq is developing driverless cars and subscription-based mobility services that open up new possibilities for business travel. Its vehicles combine autonomous technology with support from licensed remote operators.",
      discussionLabel: "Potential collaboration",
      discussion: "We are in discussions with Bliq about a potential collaboration bringing autonomous mobility and Gyyti's ride-sharing platform together. We are exploring new mobility solutions for businesses and communities in Finland.",
      businessTitle: "Bliq for business",
      businessText: "Bliq's solutions give businesses new possibilities to explore mobility services, employee travel and customer transport.",
      cta: "Discuss with us",
      learnMore: "Explore Bliq for business",
      carImageAlt: "A driverless car presented by Bliq",
      detailImageAlt: "Close-up of a Bliq vehicle door",
      imageCredit: "Product images: Bliq",
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
      visual: "Real-time route planning",
      eyebrow: "Smarter ride matching",
      title: "Destinations and schedules, matched in real time.",
      text: "Our algorithm matches passenger destinations and schedules in real time. Drivers can combine pickups into an optimized route and adjust it as conditions change.",
      m1: "Destinations and schedules",
      m2: "Driver-optimized pickup route",
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
