"use client";

import { useState } from "react";
import { Photo, PageHead } from "@/components/Ui";
import { PHOTOS, RESTOS, maps } from "@/lib/data";

export default function Restos() {
  const cats = ["Tout", ...new Set(RESTOS.map((r) => r.cat))];
  const [cat, setCat] = useState("Tout");
  const list = RESTOS.filter((r) => cat === "Tout" || r.cat === cat);
  return (
    <>
      <PageHead photo={PHOTOS.khaosoi} title="Les bons restos" lead="Presque tout est à Watthana, à pied ou à une station." />
      <div className="chips">
        {cats.map((c) => (
          <button key={c} className="chip flat" aria-selected={c === cat} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      <ul className="list" key={cat}>
        {list.map((r, i) => (
          <li key={r.name} className="row" style={{ "--i": i }}>
            {r.photo && <Photo src={r.photo} alt={r.name} className="row-ph" />}
            <div className="row-body">
              <span className="time">{r.cat}</span>
              <h3>{r.name}</h3>
              <p>{r.desc}</p>
              <div className="actions">
                <span className="price">{r.price}</span>
                <a href={maps(r.name)} target="_blank" rel="noopener">📍 Maps</a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
