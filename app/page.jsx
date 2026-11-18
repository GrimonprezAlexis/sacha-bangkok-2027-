"use client";

import { useEffect, useState } from "react";
import { Photo, useChecks } from "@/components/Ui";
import { TRIP, PHOTOS, DAYS, maps } from "@/lib/data";

function Countdown() {
  const [days, setDays] = useState(null);
  useEffect(() => {
    setDays(Math.ceil((new Date(TRIP.start) - Date.now()) / 86400000));
  }, []);
  if (days === null) return null;
  return <span className="pill">{days > 0 ? `J − ${days}` : days > -4 ? "C'est maintenant" : "Souvenirs"}</span>;
}

export default function Page() {
  const [d, setD] = useState(0);
  const [checks, toggle] = useChecks();
  const day = DAYS[d];
  const done = day.stops.filter((s) => checks[`${day.id}-${s.id}`]).length;
  return (
    <>
      <header className="hero">
        <Photo src={PHOTOS.hero} alt="Bangkok" className="kb" />
        <div className="hero-txt">
          <Countdown />
          <h1>
            <span>{TRIP.title}</span>
            <span>{TRIP.area}</span>
          </h1>
          <p>{TRIP.dates}</p>
        </div>
      </header>
      <div className="facts">{TRIP.facts.map((f) => <span key={f}>{f}</span>)}</div>

      <div className="chips" role="tablist">
        {DAYS.map((x, i) => (
          <button key={x.id} role="tab" aria-selected={i === d} className="chip" style={{ "--c": x.color }} onClick={() => setD(i)}>
            <b>J{i + 1}</b>
            <small>{x.short}</small>
          </button>
        ))}
      </div>

      <section key={day.id} style={{ "--c": day.color }}>
        <div className="cover">
          <Photo src={day.cover} alt={day.title} className="kb" />
          <div className="cover-txt">
            <h2>{day.title}</h2>
            <p>{day.mood}</p>
          </div>
          <div className="bar"><i style={{ width: `${(done / day.stops.length) * 100}%` }} /></div>
        </div>
        <ol className="list">
          {day.stops.map((s, i) => {
            const id = `${day.id}-${s.id}`;
            return (
              <li key={s.id} className={`row ${checks[id] ? "done" : ""}`} style={{ "--i": i }}>
                {s.photo && <Photo src={s.photo} alt={s.name} className="row-ph" />}
                <div className="row-body">
                  <span className="time">{s.time}</span>
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                  {s.tags && <div className="tags">{s.tags.map((t) => <span key={t}>{t}</span>)}</div>}
                  <div className="actions">
                    <button className={`check ${checks[id] ? "on" : ""}`} onClick={() => toggle(id)}>
                      {checks[id] ? "✓ Fait" : "Fait ?"}
                    </button>
                    {s.q && <a href={maps(s.q)} target="_blank" rel="noopener">📍 Maps</a>}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
}
