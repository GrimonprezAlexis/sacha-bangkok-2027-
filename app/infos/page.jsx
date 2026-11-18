"use client";

import { PageHead, useChecks } from "@/components/Ui";
import { PHOTOS, TIPS, TODO } from "@/lib/data";

export default function Infos() {
  const [checks, toggle] = useChecks();
  return (
    <>
      <PageHead photo={PHOTOS.palace} title="Bons plans" lead="Ce qui fait gagner du temps et de l'argent." />
      <ul className="list">
        {TIPS.map(([ico, txt], i) => (
          <li key={txt} className="row line" style={{ "--i": i }}>
            <span className="ico">{ico}</span>
            <p>{txt}</p>
          </li>
        ))}
      </ul>
      <h2 className="h">Avant de partir</h2>
      <ul className="list">
        {TODO.map((t, i) => (
          <li key={t} className="row line" style={{ "--i": i }}>
            <button className={`box ${checks[`todo-${i}`] ? "on" : ""}`} onClick={() => toggle(`todo-${i}`)} aria-label={t}>✓</button>
            <p className={checks[`todo-${i}`] ? "strike" : ""}>{t}</p>
          </li>
        ))}
      </ul>
      <p className="note">Prix et horaires indicatifs, à vérifier. Photos : Wikimedia Commons.</p>
    </>
  );
}
