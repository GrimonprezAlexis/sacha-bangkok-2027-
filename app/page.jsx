"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import TripMap from "@/components/TripMap";
import { Gallery, Photo } from "@/components/Photo";
import { TRIP, DAYS, RESTOS } from "@/lib/data";
import { ADVICE, INFOS, DEADLINES, NIGHT } from "@/lib/extra";

const TZ = "+07:00";

function stopDate(day, stop) {
  const [h, m] = stop.time.split(":");
  const d = new Date(`${day.date}T${h.padStart(2, "0")}:${m}:00${TZ}`);
  if (stop.nextDay) d.setDate(d.getDate() + 1);
  return d;
}

const mapsPlace = (s) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${s.name} Bangkok`)}${s.placeId ? `&query_place_id=${s.placeId}` : ""}`;
const mapsGo = (s, mode = "transit") =>
  `https://www.google.com/maps/dir/?api=1&destination=${s.lat},${s.lng}${s.placeId ? `&destination_place_id=${s.placeId}` : ""}&travelmode=${mode}`;
const mapsEmbed = (s) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(`${s.name}, ${s.address || ""}, Bangkok`)}&z=16&output=embed`;
const dayRoute = (day) => {
  const pts = day.stops.filter((s) => s.lat);
  if (pts.length < 2) return null;
  const ll = (p) => `${p.lat},${p.lng}`;
  const w = pts.slice(1, -1).map(ll).join("|");
  return `https://www.google.com/maps/dir/?api=1&origin=${ll(pts[0])}&destination=${ll(pts[pts.length - 1])}${w ? `&waypoints=${encodeURIComponent(w)}` : ""}&travelmode=transit`;
};

const MODE = {
  walk: { icon: "🚶‍♀️" },
  taxi: { icon: "🚕" },
  metro: { icon: "🚇" },
  boat: { icon: "⛴️" },
  hotel: { icon: "🛏️" },
};

function store(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
}
function save(key, v) {
  try {
    localStorage.setItem(key, JSON.stringify(v));
  } catch {}
}

const NUMBERED = DAYS.map((d) => {
  let n = 0;
  return {
    ...d,
    stops: d.stops.map((s) => {
      if (s.options) return { ...s, options: s.options.map((o, k) => ({ ...o, n: s.icon || String.fromCharCode(65 + k), time: s.time, parent: s })) };
      return s.lat ? { ...s, n: ++n } : s;
    }),
  };
});
const optionStops = (d) => d.stops.flatMap((s) => s.options || []);
const ALL_STOPS = NUMBERED.flatMap((d) =>
  d.stops.flatMap((s) => (s.options ? s.options : s.lat ? [s] : [])).map((s) => ({ ...s, day: d }))
);

const EXTRA_STOPS = [
  ...RESTOS.map((r) => ({ ...r, time: r.cat, day: { label: "Restos", color: "var(--rose)" } })),
  ...[...NIGHT.zones, ...NIGHT.instead].map((z) => ({ ...z, time: "le soir", day: { label: "Nuit", color: "var(--rose)" } })),
];

function useNow(ms = 30000) {
  const [now, setNow] = useState(null);
  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), ms);
    return () => clearInterval(t);
  }, [ms]);
  return now;
}

export default function Home() {
  const [tab, setTab] = useState("programme");
  const [dayId, setDayId] = useState("j1");
  const [sheet, setSheet] = useState(null);
  const now = useNow();

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    const d = DAYS.find((x) => x.date === today);
    setDayId(d ? d.id : store("bk-day", "j1"));
  }, []);

  const pickDay = (id) => {
    setDayId(id);
    save("bk-day", id);
  };

  const openStop = useCallback((id) => setSheet(id), []);
  const sheetStop = sheet ? [...ALL_STOPS, ...EXTRA_STOPS].find((s) => s.id === sheet) : null;

  useEffect(() => {
    document.body.style.overflow = sheetStop ? "hidden" : "";
  }, [sheetStop]);

  const goTab = (t) => {
    setTab(t);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="app">
      {tab === "programme" && (
        <>
          <Hero now={now} onGo={() => { const el = document.getElementById("days"); if (el) el.scrollIntoView({ behavior: "smooth" }); }} />
          <NowCard now={now} onOpen={openStop} onDay={pickDay} />
          <Programme dayId={dayId} onDay={pickDay} onOpen={openStop} />
        </>
      )}
      {tab === "carte" && <MapView onOpen={openStop} />}
      {tab === "restos" && <RestosView onOpen={openStop} />}
      {tab === "nuit" && <NuitView onOpen={openStop} />}
      {tab === "infos" && <InfosView />}

      <BottomNav tab={tab} setTab={goTab} />
      <Sheet stop={sheetStop} onClose={() => setSheet(null)} />
    </div>
  );
}

/* ————— Accueil ————— */

function Hero({ now, onGo }) {
  const diff = now ? new Date(TRIP.start) - now : null;
  const days = diff != null ? Math.ceil(diff / 86400000) : null;
  return (
    <header className="hero">
      <div className="hero-img">
        <Photo srcs={[TRIP.hero]} alt="Bangkok vue d'en haut" priority sizes="(max-width: 640px) 100vw, 640px" />
      </div>
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="eyebrow rise" style={{ "--d": "80ms" }}>4 → 7 janvier 2027</p>
        <h1 className="rise" style={{ "--d": "160ms" }}>
          Bangkok<br /><em>Watthana</em>
        </h1>
        <p className="hero-sub rise" style={{ "--d": "240ms" }}>Temples, street food, rooftops et nuits de Thong Lo.</p>
        <div className="hero-row rise" style={{ "--d": "320ms" }}>
          {days != null && days > 0 && (
            <span className="pill glass">
              <b>J-{days}</b> avant le départ
            </span>
          )}
          <span className="pill glass">☀️ ≈ 32 °C</span>
        </div>
        <button className="hero-cta rise" style={{ "--d": "400ms" }} onClick={onGo}>
          Voir le programme <span aria-hidden>↓</span>
        </button>
      </div>
    </header>
  );
}

function NowCard({ now, onOpen, onDay }) {
  if (!now) return null;
  const start = new Date(TRIP.start);
  const end = new Date(TRIP.end);
  if (now < start || now > end) {
    if (!TRIP.flights.length) return null;
    return (
      <section className="now-card flights rise" style={{ "--d": "100ms" }}>
        {TRIP.flights.map((f) => (
          <div className="flight" key={f.label}>
            <span className="flight-label">{f.label} · {f.date} · {f.company}</span>
            <div className="flight-line">
              <b>{f.dep}</b>
              <span className="flight-code">{f.from}</span>
              <span className="flight-track"><i>✈</i></span>
              <span className="flight-code">{f.to}</span>
              <b>{f.arr}</b>
            </div>
          </div>
        ))}
      </section>
    );
  }
  const timeline = NUMBERED.flatMap((d) => d.stops.map((s) => ({ s, d, at: stopDate(d, s) })));
  let cur = null;
  let next = null;
  timeline.forEach((t) => {
    if (t.at <= now) cur = t;
    else if (!next) next = t;
  });
  const t = next || cur;
  if (!t) return null;
  const mins = next ? Math.round((next.at - now) / 60000) : 0;
  const label = cur && next ? `Ensuite · dans ${mins >= 60 ? `${Math.floor(mins / 60)} h ${mins % 60}` : `${mins} min`}` : "Maintenant";
  return (
    <section className="now-card live rise" onClick={() => { onDay(t.d.id); if (t.s.lat) onOpen(t.s.id); }}>
      <span className="live-dot" />
      <div>
        <span className="eyebrow">{label}</span>
        <h3>{t.s.name}</h3>
        <p>{t.s.time} · {t.s.kind || t.s.desc}</p>
      </div>
      <span className="chev">›</span>
    </section>
  );
}

/* ————— Programme ————— */

function Programme({ dayId, onDay, onOpen }) {
  const day = NUMBERED.find((d) => d.id === dayId) || NUMBERED[0];
  const groups = useMemo(
    () => [
      { color: day.color, stops: day.stops, route: true },
      { color: day.color, stops: optionStops(day), route: false },
    ],
    [day]
  );
  const route = dayRoute(day);
  return (
    <section className="programme" id="days">
      <DayPicker dayId={day.id} onDay={onDay} />
      <div className="day" key={day.id} style={{ "--day": day.color }}>
        <div className="day-head rise">
          <p className="eyebrow">{day.label}</p>
          <h2>{day.title}</h2>
          <p className="muted">{day.mood}</p>
        </div>

        {ADVICE[day.id] && (
          <div className="advice rise" style={{ "--d": "60ms" }}>
            <span className="advice-icon">💡</span>
            <div>
              <b>Conseil du jour</b>
              <p>{ADVICE[day.id]}</p>
            </div>
          </div>
        )}

        {day.stops.some((s) => s.lat || s.options) && (
          <div className="day-map rise" style={{ "--d": "100ms" }}>
            <TripMap groups={groups} onSelect={onOpen} height={200} />
            {route && (
              <a className="map-fab" href={route} target="_blank" rel="noopener">
                Itinéraire du jour ↗
              </a>
            )}
          </div>
        )}

        <ol className="timeline">
          {day.stops.map((s, i) => (
            <StopItem key={s.id} s={s} i={i} onOpen={onOpen} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function DayPicker({ dayId, onDay }) {
  const refs = useRef({});
  const [ind, setInd] = useState({ x: 0, w: 0 });
  useEffect(() => {
    const el = refs.current[dayId];
    if (el) {
      setInd({ x: el.offsetLeft, w: el.offsetWidth });
      const track = el.parentElement;
      if (track) track.scrollTo({ left: el.offsetLeft - track.clientWidth / 2 + el.offsetWidth / 2, behavior: "smooth" });
    }
  }, [dayId]);
  return (
    <nav className="daypicker" role="tablist">
      <div className="daypicker-track">
        <span className="daypicker-ind" style={{ transform: `translateX(${ind.x}px)`, width: ind.w }} />
        {DAYS.map((d) => (
          <button
            key={d.id}
            ref={(n) => { refs.current[d.id] = n; }}
            role="tab"
            aria-selected={d.id === dayId}
            className={`daybtn ${d.id === dayId ? "on" : ""}`}
            onClick={() => onDay(d.id)}
          >
            <span>{d.short}</span>
            <small>{d.title}</small>
          </button>
        ))}
      </div>
    </nav>
  );
}

function Leg({ leg }) {
  if (!leg) return null;
  const m = MODE[leg.mode] || MODE.walk;
  return (
    <div className={`leg leg-${leg.mode}`}>
      <span className="leg-icon">{m.icon}</span>
      <span>{leg.text}</span>
    </div>
  );
}

function useReveal() {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen];
}

function StopItem({ s, i, onOpen }) {
  const [ref, seen] = useReveal();
  if (s.options) {
    return (
      <li ref={ref} className={`stop reveal ${seen ? "in" : ""}`} style={{ "--i": i }}>
        <span className="stop-dot">{s.icon}</span>
        <Leg leg={s.before} />
        <div className="choice">
          <div className="choice-head">
            <span className="time-chip">{s.time}</span>
            <h3>{s.name}</h3>
            <p className="kind">{s.kind}</p>
            <p className="choice-desc">{s.desc}</p>
          </div>
          <ul className="choice-list">
            {s.options.map((o) => (
              <li key={o.id} className="choice-opt" onClick={() => onOpen(o.id)}>
                <div className="choice-img">
                  <Photo srcs={o.photos} alt={o.name} sizes="72px" />
                </div>
                <div className="choice-txt">
                  <span className="choice-tag">{o.tag}</span>
                  <b>{o.name}</b>
                  <span>{o.kind}</span>
                  <small>{o.price}{o.rating ? ` · ★ ${o.rating.toFixed(1)}` : ""}</small>
                </div>
                <span className="chev">›</span>
              </li>
            ))}
          </ul>
        </div>
        <Leg leg={s.next} />
      </li>
    );
  }
  if (!s.lat) {
    return (
      <li ref={ref} className={`stop info reveal ${seen ? "in" : ""}`}>
        <span className="stop-dot small" />
        <div className="info-card">
          <span className="time">{s.time}</span>
          <h3>{s.name}</h3>
          <p>{s.desc}</p>
        </div>
        <Leg leg={s.next} />
      </li>
    );
  }
  return (
    <li ref={ref} className={`stop reveal ${seen ? "in" : ""}`} style={{ "--i": i }}>
      <span className="stop-dot">{s.n}</span>
      <Leg leg={s.before} />
      <article className="card" onClick={() => onOpen(s.id)}>
        <div className="card-thumb">
          <Gallery photos={s.photos} alt={s.name} sizes="140px" />
        </div>
        <div className="card-body">
          <div className="card-top">
            <span className="time-chip">{s.time}</span>
            {s.rating && <span className="rating">★ {s.rating.toFixed(1)}</span>}
          </div>
          <h3>{s.name}</h3>
          <p className="kind">{s.kind}</p>
          <p className="desc">{s.desc}</p>
          <div className="card-foot">
            <span className="price">{s.price}</span>
            {s.book && <span className="badge">À réserver</span>}
          </div>
        </div>
      </article>
      <Leg leg={s.next} />
    </li>
  );
}

/* ————— Fiche lieu ————— */

function Sheet({ stop, onClose }) {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(null);
  const drag = useRef({ x0: 0, y0: 0, dy: 0, active: false });
  const panel = useRef(null);

  useEffect(() => {
    if (stop) {
      setShown(stop);
      requestAnimationFrame(() => requestAnimationFrame(() => setOpen(true)));
      return undefined;
    }
    setOpen(false);
    const t = setTimeout(() => setShown(null), 380);
    return () => clearTimeout(t);
  }, [stop]);

  if (!shown) return null;
  const s = shown;

  // glisser vers le bas pour fermer (sauf sur la galerie, réservée au swipe photo)
  const onStart = (e) => {
    const inGallery = e.target.closest && e.target.closest(".gallery");
    drag.current = { x0: e.touches[0].clientX, y0: e.touches[0].clientY, dy: 0, active: !inGallery };
  };
  const onMove = (e) => {
    const d = drag.current;
    if (!d.active || !panel.current || panel.current.scrollTop > 0) return;
    const dx = e.touches[0].clientX - d.x0;
    const dy = e.touches[0].clientY - d.y0;
    if (Math.abs(dx) > Math.abs(dy)) return;
    d.dy = Math.max(0, dy);
    panel.current.style.transform = `translateY(${d.dy}px)`;
  };
  const onEnd = () => {
    if (panel.current) panel.current.style.transform = "";
    if (drag.current.active && drag.current.dy > 110) onClose();
    drag.current.dy = 0;
  };

  return (
    <div className={`sheet-root ${open ? "open" : ""}`} role="dialog" aria-modal="true" aria-label={s.name}>
      <div className="sheet-backdrop" onClick={onClose} />
      <div className="sheet" ref={panel} onTouchStart={onStart} onTouchMove={onMove} onTouchEnd={onEnd}>
        <div className="sheet-grab" />
        <button className="sheet-close" onClick={onClose} aria-label="Fermer">×</button>
        <div className="sheet-media">
          <Gallery key={s.id} photos={s.photos} alt={s.name} sizes="(max-width: 640px) 100vw, 640px" priority arrows />
        </div>
        <div className="sheet-body">
          <p className="kind" style={{ color: s.day ? s.day.color : undefined }}>
            {s.day ? s.day.label : ""} · {s.time}{s.parent ? ` · ${s.parent.name}` : ""}
          </p>
          <h2>{s.name}</h2>
          <div className="sheet-meta">
            {s.rating && <span className="chip">★ {s.rating.toFixed(1)} Google</span>}
            {s.price && <span className="chip">{s.price}</span>}
            {s.book && <span className="chip rose">À réserver</span>}
          </div>
          <p className="sheet-desc">{s.desc}</p>
          {s.tip && <p className="tip">{s.tip}</p>}
          {s.address && <p className="addr">📍 {s.address}</p>}

          <div className="actions">
            <a className="btn primary" href={mapsGo(s)} target="_blank" rel="noopener">
              <span>🧭</span> Y aller
            </a>
            {s.book && (
              <a className="btn" href={s.book} target="_blank" rel="noopener">
                <span>📅</span> Réserver
              </a>
            )}
            {s.phone && (
              <a className="btn" href={`tel:${s.phone}`}>
                <span>📞</span> Appeler
              </a>
            )}
          </div>

          <div className="gmap">
            <iframe
              key={s.id}
              title={`Google Maps · ${s.name}`}
              src={mapsEmbed(s)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a className="link" href={mapsPlace(s)} target="_blank" rel="noopener">
            Ouvrir dans Google Maps (avis, horaires, photos) ↗
          </a>
        </div>
      </div>
    </div>
  );
}

/* ————— Carte ————— */

function MapView({ onOpen }) {
  const [filter, setFilter] = useState("all");
  const groups = useMemo(
    () =>
      NUMBERED.filter((d) => filter === "all" || d.id === filter).flatMap((d) => [
        { color: d.color, stops: d.stops, route: filter !== "all" },
        { color: d.color, stops: optionStops(d), route: false },
      ]),
    [filter]
  );
  const list = ALL_STOPS.filter((s) => filter === "all" || s.day.id === filter);
  return (
    <section className="page mapview">
      <div className="page-head rise">
        <p className="eyebrow">La carte</p>
        <h2>Tous les lieux</h2>
      </div>
      <div className="chips rise" style={{ "--d": "60ms" }}>
        <button className={`fchip ${filter === "all" ? "on" : ""}`} onClick={() => setFilter("all")}>Tout</button>
        {NUMBERED.filter((d) => d.stops.some((s) => s.lat || s.options)).map((d) => (
          <button key={d.id} className={`fchip ${filter === d.id ? "on" : ""}`} onClick={() => setFilter(d.id)}>
            <i style={{ background: d.color }} /> {d.short}
          </button>
        ))}
      </div>
      <div className="bigmap rise" style={{ "--d": "120ms" }}>
        <TripMap groups={groups} onSelect={onOpen} height="56vh" />
      </div>
      <ul className="mini-list">
        {list.map((s, i) => (
          <li key={s.id} className="mini rise" style={{ "--d": `${120 + i * 30}ms` }} onClick={() => onOpen(s.id)}>
            <span className="mini-n" style={{ background: s.day.color }}>{s.n}</span>
            <div className="mini-img">
              <Photo srcs={s.photos} alt={s.name} sizes="64px" />
            </div>
            <div className="mini-txt">
              <b>{s.name}</b>
              <span>{s.day.short} · {s.time}</span>
            </div>
            <span className="chev">›</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ————— Restos ————— */

function PlaceRow({ s, i, onOpen, meta }) {
  return (
    <li className="mini rise" style={{ "--d": `${80 + i * 30}ms` }} onClick={() => onOpen(s.id)}>
      <div className="mini-img">
        <Photo srcs={s.photos} alt={s.name} sizes="64px" />
      </div>
      <div className="mini-txt">
        <b>{s.name}</b>
        <span>{meta}</span>
      </div>
      <span className="chev">›</span>
    </li>
  );
}

function RestosView({ onOpen }) {
  const cats = useMemo(() => ["Tout", ...new Set(RESTOS.map((r) => r.cat))], []);
  const [cat, setCat] = useState("Tout");
  const list = RESTOS.filter((r) => cat === "Tout" || r.cat === cat);
  return (
    <section className="page">
      <div className="page-head rise">
        <p className="eyebrow">Restos & bars</p>
        <h2>Où manger</h2>
      </div>
      <div className="chips rise" style={{ "--d": "60ms" }}>
        {cats.map((c) => (
          <button key={c} className={`fchip ${cat === c ? "on" : ""}`} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      <ul className="mini-list" key={cat}>
        {list.map((r, i) => (
          <PlaceRow key={r.id} s={r} i={i} onOpen={onOpen} meta={`${r.kind} · ${r.price}`} />
        ))}
      </ul>
    </section>
  );
}

/* ————— Nuit ————— */

function Notes({ items }) {
  return (
    <ul className="deadlines">
      {items.map((d, i) => (
        <li key={d.title} className="deadline rise" style={{ "--d": `${40 + i * 40}ms` }}>
          <span className="deadline-icon">{d.icon}</span>
          <div>
            <b>{d.title}</b>
            <p>{d.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function NuitView({ onOpen }) {
  return (
    <section className="page">
      <div className="page-head rise">
        <p className="eyebrow">Réservé aux adultes</p>
        <h2>Bangkok la nuit</h2>
      </div>

      <h3 className="sub-title first rise">Les 3 quartiers</h3>
      <ul className="mini-list">
        {NIGHT.zones.map((z, i) => (
          <PlaceRow key={z.id} s={z} i={i} onOpen={onOpen} meta={z.kind} />
        ))}
      </ul>

      <h3 className="sub-title rise">Ping pong show</h3>
      <div className="advice rise">
        <span className="advice-icon">⚠️</span>
        <div>
          <b>Mon avis</b>
          <p><strong>{NIGHT.pingpong.verdict}</strong> {NIGHT.pingpong.why}</p>
        </div>
      </div>
      <Notes items={NIGHT.pingpong.rules} />

      <h3 className="sub-title rise">Plutôt ça</h3>
      <ul className="mini-list">
        {NIGHT.instead.map((z, i) => (
          <PlaceRow key={z.id} s={z} i={i} onOpen={onOpen} meta={`${z.kind} · ${z.price}`} />
        ))}
      </ul>

      <h3 className="sub-title rise">Règles du jeu</h3>
      <Notes items={NIGHT.rules} />
    </section>
  );
}

/* ————— Infos & conseils ————— */

function InfosView() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="page">
      <div className="page-head rise">
        <p className="eyebrow">Infos</p>
        <h2>Bon à savoir</h2>
      </div>

      <h3 className="sub-title first rise">À faire</h3>
      <ul className="deadlines">
        {DEADLINES.map((d, i) => (
          <li key={d.title} className="deadline rise" style={{ "--d": `${40 + i * 40}ms` }}>
            <span className="deadline-icon">{d.icon}</span>
            <div>
              <b>{d.title}</b>
              <p>{d.text}</p>
            </div>
          </li>
        ))}
      </ul>

      <h3 className="sub-title rise" style={{ "--d": "160ms" }}>Pratique</h3>
      <ul className="acc">
        {INFOS.sections.map((sec, i) => (
          <li key={sec.title} className={`acc-item rise ${openIdx === i ? "open" : ""}`} style={{ "--d": `${180 + i * 30}ms` }}>
            <button className="acc-head" onClick={() => setOpenIdx(openIdx === i ? -1 : i)} aria-expanded={openIdx === i}>
              <span className="acc-icon">{sec.icon}</span>
              <b>{sec.title}</b>
              <span className="acc-chev">⌄</span>
            </button>
            <div className="acc-body">
              <ul>
                {sec.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ul>

      <h3 className="sub-title rise">Thaï de survie</h3>
      <ul className="phrases">
        {INFOS.phrases.map((p, i) => (
          <li key={p.th} className="phrase rise" style={{ "--d": `${i * 30}ms` }}>
            <span>{p.fr}</span>
            <b>{p.th}</b>
          </li>
        ))}
      </ul>

      <h3 className="sub-title rise">Urgences</h3>

      <div className="sos rise" style={{ "--d": "60ms" }}>
        <a className="sos-main" href={`tel:${INFOS.emergency[0].num}`}>
          <span className="sos-num">{INFOS.emergency[0].num}</span>
          <span>
            <b>{INFOS.emergency[0].label}</b>
            <small>{INFOS.emergency[0].note}</small>
          </span>
          <span className="sos-call">Appeler</span>
        </a>
        <ul className="sos-list">
          {INFOS.emergency.slice(1).map((e) => (
            <li key={e.label}>
              <a href={`tel:${e.num}`}>
                <span>
                  <b>{e.label}</b>
                  {e.note && <small>{e.note}</small>}
                </span>
                <span className="sos-tel">{e.display || e.num}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
}

/* ————— Navigation ————— */

const TABS = [
  { id: "programme", label: "Programme", d: "M7 3v3M17 3v3M4 9h16M5 6h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z" },
  { id: "carte", label: "Carte", d: "M12 21s-6-5.3-6-10a6 6 0 0 1 12 0c0 4.7-6 10-6 10zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
  { id: "restos", label: "Restos", d: "M7 3v8a2 2 0 0 0 2 2v8M5 3v5M9 3v5M17 3c-2 2-2 6 0 9v9" },
  { id: "nuit", label: "Nuit", d: "M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" },
  { id: "infos", label: "Infos", d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01" },
];

function BottomNav({ tab, setTab }) {
  const idx = TABS.findIndex((t) => t.id === tab);
  return (
    <nav className="bottomnav" aria-label="Navigation">
      <span className="bn-ind" style={{ transform: `translateX(${idx * 100}%)` }} />
      {TABS.map((t) => (
        <button key={t.id} className={`bn ${tab === t.id ? "on" : ""}`} onClick={() => setTab(t.id)}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d={t.d} /></svg>
          <span>{t.label}</span>
        </button>
      ))}
    </nav>
  );
}
