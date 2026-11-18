import { PageHead } from "@/components/Ui";
import { PHOTOS, NIGHT, maps } from "@/lib/data";

export default function Nuit() {
  return (
    <>
      <PageHead photo={PHOTOS.thonglo} title="Bangkok la nuit" lead="Quartiers chauds, ping pong show : ce qu'il faut savoir. Réservé aux adultes." />

      <h2 className="h">Les 3 quartiers</h2>
      <ul className="list">
        {NIGHT.zones.map((z, i) => (
          <li key={z.name} className="row" style={{ "--i": i, "--c": "#b8336a" }}>
            <div className="row-body">
              <span className="time">{z.where}</span>
              <h3>{z.name}</h3>
              <p>{z.desc}</p>
              <div className="tags">{z.tags.map((t) => <span key={t}>{t}</span>)}</div>
              <div className="actions">
                <a href={maps(z.name)} target="_blank" rel="noopener">📍 Maps</a>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <h2 className="h">Ping pong show</h2>
      <div className="row verdict">
        <div className="row-body">
          <span className="time">Mon avis</span>
          <h3>{NIGHT.pingpong.verdict}</h3>
          <p>{NIGHT.pingpong.why}</p>
        </div>
      </div>
      <ul className="list">
        {NIGHT.pingpong.rules.map(([ico, txt], i) => (
          <li key={txt} className="row line" style={{ "--i": i }}>
            <span className="ico">{ico}</span>
            <p>{txt}</p>
          </li>
        ))}
      </ul>

      <h2 className="h">Plutôt ça</h2>
      <ul className="list">
        {NIGHT.instead.map((a, i) => (
          <li key={a.name} className="row line" style={{ "--i": i }}>
            <span className="ico">{a.icon}</span>
            <div className="row-body">
              <h3>{a.name}</h3>
              <p>{a.desc}</p>
            </div>
            <span className="price">{a.price}</span>
          </li>
        ))}
      </ul>

      <h2 className="h">Règles du jeu</h2>
      <ul className="list">
        {NIGHT.rules.map(([ico, txt], i) => (
          <li key={txt} className="row line" style={{ "--i": i }}>
            <span className="ico">{ico}</span>
            <p>{txt}</p>
          </li>
        ))}
      </ul>
      <p className="note">Prix indicatifs. Les adresses changent vite, vérifie les avis récents.</p>
    </>
  );
}
