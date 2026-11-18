"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Photo réelle avec fondu, et dégradé si l'image ne charge pas
export function Photo({ src, alt = "", className = "" }) {
  const [state, setState] = useState("loading");
  if (!src || state === "error") return <div className={`ph ${className}`} aria-hidden />;
  return (
    <div className={`ph ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={state === "ok" ? "on" : ""}
        onLoad={() => setState("ok")}
        onError={() => setState("error")}
      />
    </div>
  );
}

// Coches gardées sur l'appareil
export function useChecks() {
  const [checks, setChecks] = useState({});
  useEffect(() => {
    try {
      setChecks(JSON.parse(localStorage.getItem("bkk-checks") || "{}"));
    } catch {}
  }, []);
  const toggle = (id) =>
    setChecks((c) => {
      const next = { ...c, [id]: !c[id] };
      try {
        localStorage.setItem("bkk-checks", JSON.stringify(next));
      } catch {}
      return next;
    });
  return [checks, toggle];
}

// En-tête photo des pages secondaires
export function PageHead({ photo, title, lead }) {
  return (
    <header className="cover head">
      <Photo src={photo} alt={title} className="kb" />
      <div className="cover-txt">
        <h1>{title}</h1>
        <p>{lead}</p>
      </div>
    </header>
  );
}

const TABS = [
  ["/", "Programme", "🗓"],
  ["/restos", "Restos", "🍜"],
  ["/transport", "Transport", "🚆"],
  ["/nuit", "Nuit", "🌙"],
  ["/infos", "Infos", "✨"],
];

export function TabBar() {
  const path = usePathname();
  return (
    <nav className="tabbar">
      {TABS.map(([href, label, ico]) => (
        <Link key={href} href={href} aria-current={path === href ? "page" : undefined}>
          <i>{ico}</i>
          {label}
        </Link>
      ))}
    </nav>
  );
}
