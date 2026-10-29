import { useMemo, useState, type FormEvent } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CarFront,
  Clock3,
  MapPin,
  RefreshCw,
  Search,
  Users,
} from "lucide-react";
import { FinlandRoadMap } from "@/components/FinlandRoadMap";
import type { Lang } from "@/lib/i18n";

interface RideStop {
  name: string;
  time?: string;
  order?: number;
}

interface DriverRide {
  id: string;
  price: number;
  capacity: number;
  route: { stops: RideStop[] };
}

const API_URL = (import.meta.env["VITE_GYYTI_API_URL"] || "https://api.gyyti.com/api").replace(
  /\/+$/,
  "",
);

const copy = {
  fi: {
    eyebrow: "Gyyti verkossa",
    title: "Samaan suuntaan,",
    accent: "yhdessä.",
    intro:
      "Löydä kimppakyyti Suomen kaupunkien välillä – tai tutustu lähteviin kyyteihin suoraan kartalta.",
    cta: "Etsi kyyti",
    previewLabel: "Esimerkki kyydistä",
    previewFrom: "Helsinki",
    previewTo: "Tampere",
    previewTime: "Huomenna · 9.30",
    previewSeats: "2 paikkaa vapaana",
    back: "Takaisin",
    live: "Avoimet kyydit",
    liveLabel: "Suomen reitit",
    from: "Mistä",
    to: "Minne",
    fromPlaceholder: "Kaupunki tai paikkakunta",
    toPlaceholder: "Kaupunki tai paikkakunta",
    search: "Suodata kyytejä",
    loading: "Ladataan kyytejä…",
    refresh: "Päivitä",
    noRides: "Näillä hakuehdoilla ei löytynyt kyytejä.",
    noData: "Avoimia kyytejä ei juuri nyt löytynyt.",
    loadError: "Kyytejä ei voitu ladata. Tarkista yhteys ja yritä uudelleen.",
    seats: "paikkaa",
    price: "€/hlö",
    departure: "Lähtö",
    untimed: "Aika ei tiedossa",
    count: (count: number) => `${count} avointa kyytiä`,
    retry: "Yritä uudelleen",
    startLabel: "Matkasi alkaa tästä",
    nextLabel: "Katso avoimet kyydit",
    mapLabel: "Kyytejä ympäri Suomen",
  },
  en: {
    eyebrow: "Gyyti on the web",
    title: "Going the same way,",
    accent: "together.",
    intro: "Find a shared ride between Finnish cities, or explore upcoming trips right here.",
    cta: "Find a ride",
    previewLabel: "A ride example",
    previewFrom: "Helsinki",
    previewTo: "Tampere",
    previewTime: "Tomorrow · 9:30",
    previewSeats: "2 seats available",
    back: "Back",
    live: "Open rides",
    liveLabel: "Routes across Finland",
    from: "From",
    to: "To",
    fromPlaceholder: "City or town",
    toPlaceholder: "City or town",
    search: "Filter rides",
    loading: "Loading rides…",
    refresh: "Refresh",
    noRides: "No rides match these filters.",
    noData: "There are no open rides right now.",
    loadError: "Couldn't load rides. Check your connection and try again.",
    seats: "seats",
    price: "€/person",
    departure: "Departure",
    untimed: "Time not available",
    count: (count: number) => `${count} open ${count === 1 ? "ride" : "rides"}`,
    retry: "Try again",
    startLabel: "Your next trip starts here",
    nextLabel: "Browse open rides",
    mapLabel: "Rides across Finland",
  },
} satisfies Record<Lang, object>;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isRideStop(value: unknown): value is RideStop {
  return (
    isRecord(value) &&
    typeof value["name"] === "string" &&
    (value["time"] === undefined || typeof value["time"] === "string") &&
    (value["order"] === undefined || typeof value["order"] === "number")
  );
}

function isDriverRide(value: unknown): value is DriverRide {
  if (!isRecord(value) || !isRecord(value["route"])) return false;
  const stops = value["route"]["stops"];
  return (
    typeof value["id"] === "string" &&
    typeof value["price"] === "number" &&
    typeof value["capacity"] === "number" &&
    Array.isArray(stops) &&
    stops.length >= 2 &&
    stops.every(isRideStop)
  );
}

function getStops(ride: DriverRide) {
  return [...ride.route.stops].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

function formatDeparture(value: string | undefined, lang: Lang) {
  if (!value) return copy[lang].untimed;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return copy[lang].untimed;
  return new Intl.DateTimeFormat(lang === "fi" ? "fi-FI" : "en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export function RideWebApp({ lang }: { lang: Lang }) {
  const text = copy[lang];
  const [productOpen, setProductOpen] = useState(false);
  const [rides, setRides] = useState<DriverRide[]>([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const loadRides = async () => {
    setLoading(true);
    setError(false);
    try {
      const departure = encodeURIComponent(new Date().toISOString());
      const response = await fetch(`${API_URL}/booking/driver/search?originMinDate=${departure}`);
      if (!response.ok) throw new Error(`Ride search failed (${response.status})`);
      const payload: unknown = await response.json();
      if (!Array.isArray(payload) || !payload.every(isDriverRide)) {
        throw new Error("Ride search returned an unexpected response");
      }
      setRides(payload);
    } catch (requestError) {
      console.error("[Gyyti] Ride search failed", requestError);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const openProduct = () => {
    setProductOpen(true);
    void loadRides();
  };

  const visibleRides = useMemo(() => {
    const originQuery = from.trim().toLocaleLowerCase(lang);
    const destinationQuery = to.trim().toLocaleLowerCase(lang);
    return rides.filter((ride) => {
      const stops = getStops(ride);
      const origin = stops[0]?.name.toLocaleLowerCase(lang) ?? "";
      const destination = stops[stops.length - 1]?.name.toLocaleLowerCase(lang) ?? "";
      return origin.includes(originQuery) && destination.includes(destinationQuery);
    });
  }, [from, lang, rides, to]);

  const submitFilters = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className={`ride-web-section${productOpen ? " is-product-open" : ""}`}>
      {!productOpen ? (
        <div className="ride-web-intro animate-stage-in">
          <div className="ride-web-intro-copy">
            <p className="eyebrow">{text.eyebrow}</p>
            <h1 className="font-display">
              {text.title} <span>{text.accent}</span>
            </h1>
            <p className="ride-web-intro-text">{text.intro}</p>
            <button type="button" className="ride-web-primary" onClick={openProduct}>
              {text.cta} <ArrowRight size={17} />
            </button>
            <div className="ride-web-trust">
              <span>
                <MapPin size={15} />
                {text.liveLabel}
              </span>
              <span>
                <Users size={15} />
                {text.previewSeats}
              </span>
            </div>
          </div>
          <div className="ride-web-preview" aria-label={text.mapLabel}>
            <div className="ride-web-preview-map">
              <FinlandRoadMap />
            </div>
            <div className="ride-web-preview-card">
              <p>{text.previewLabel}</p>
              <div className="ride-web-preview-route">
                <span>{text.previewFrom}</span>
                <ArrowRight size={14} />
                <span>{text.previewTo}</span>
              </div>
              <div className="ride-web-preview-meta">
                <span>
                  <CalendarDays size={14} />
                  {text.previewTime}
                </span>
                <span>
                  <Users size={14} />
                  {text.previewSeats}
                </span>
              </div>
            </div>
            <span className="ride-web-map-badge">
              <span />
              {text.mapLabel}
            </span>
          </div>
        </div>
      ) : (
        <div className="ride-web-product animate-stage-in">
          <div className="ride-web-product-heading">
            <div>
              <p className="eyebrow">{text.startLabel}</p>
              <h2 className="font-display">{text.live}</h2>
            </div>
            <div className="ride-web-product-actions">
              <button
                type="button"
                className="ride-web-secondary"
                onClick={() => setProductOpen(false)}
              >
                <ArrowLeft size={16} /> {text.back}
              </button>
              <button
                type="button"
                className="ride-web-secondary ride-web-refresh"
                onClick={() => void loadRides()}
                disabled={loading}
              >
                <RefreshCw size={15} className={loading ? "ride-web-spinning" : ""} />
                {text.refresh}
              </button>
            </div>
          </div>

          <div className="ride-web-layout">
            <div className="ride-web-results-panel">
              <form className="ride-web-search" onSubmit={submitFilters}>
                <label>
                  <span>{text.from}</span>
                  <span className="ride-web-input-wrap">
                    <MapPin size={17} />
                    <input
                      value={from}
                      onChange={(event) => setFrom(event.target.value)}
                      placeholder={text.fromPlaceholder}
                    />
                  </span>
                </label>
                <label>
                  <span>{text.to}</span>
                  <span className="ride-web-input-wrap">
                    <MapPin size={17} />
                    <input
                      value={to}
                      onChange={(event) => setTo(event.target.value)}
                      placeholder={text.toPlaceholder}
                    />
                  </span>
                </label>
                <button type="submit" className="ride-web-search-button">
                  <Search size={16} /> {text.search}
                </button>
              </form>

              <div className="ride-web-results-heading">
                <span>{text.count(visibleRides.length)}</span>
                <span className="ride-web-live-status">
                  <i />
                  {text.liveLabel}
                </span>
              </div>

              {loading ? (
                <div className="ride-web-feedback" role="status">
                  {text.loading}
                </div>
              ) : error ? (
                <div className="ride-web-feedback ride-web-error" role="alert">
                  <p>{text.loadError}</p>
                  <button type="button" onClick={() => void loadRides()}>
                    {text.retry}
                  </button>
                </div>
              ) : visibleRides.length === 0 ? (
                <div className="ride-web-feedback">
                  {rides.length === 0 ? text.noData : text.noRides}
                </div>
              ) : (
                <div className="ride-web-ride-list">
                  {visibleRides.map((ride) => {
                    const stops = getStops(ride);
                    const origin = stops[0];
                    const destination = stops[stops.length - 1];
                    return (
                      <article className="ride-web-ride-card" key={ride.id}>
                        <div className="ride-web-ride-topline">
                          <span>
                            <Clock3 size={14} />
                            {text.departure}
                          </span>
                          <strong>{formatDeparture(origin?.time, lang)}</strong>
                        </div>
                        <div className="ride-web-ride-route">
                          <span className="ride-web-route-dots" aria-hidden="true">
                            <i />
                            <i />
                          </span>
                          <div>
                            <strong>{origin?.name}</strong>
                            <strong>{destination?.name}</strong>
                          </div>
                          <ArrowRight size={17} aria-hidden="true" />
                        </div>
                        <div className="ride-web-ride-bottomline">
                          <span>
                            <Users size={15} />
                            {ride.capacity} {text.seats}
                          </span>
                          <strong>
                            {ride.price} <small>{text.price}</small>
                          </strong>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="ride-web-map-panel">
              <div className="ride-web-map-surface">
                <FinlandRoadMap />
                <div className="ride-web-map-caption">
                  <span className="ride-web-map-pin">
                    <CarFront size={17} />
                  </span>
                  <div>
                    <strong>{text.nextLabel}</strong>
                    <span>{text.mapLabel}</span>
                  </div>
                </div>
                <span className="ride-web-map-count">{visibleRides.length}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
