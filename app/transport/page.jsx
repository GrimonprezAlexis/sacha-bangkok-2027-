import { PageHead } from "@/components/Ui";
import { PHOTOS, TRANSPORT } from "@/lib/data";

export default function Transport() {
  return (
    <>
      <PageHead photo={PHOTOS.bts} title="Se déplacer" lead="Rail en journée, Bolt ou Grab le soir." />
      <ul className="list">
        {TRANSPORT.map((t, i) => (
          <li key={t.name} className="row line" style={{ "--i": i }}>
            <span className="ico">{t.icon}</span>
            <div className="row-body">
              <h3>{t.name}</h3>
              <p>{t.desc}</p>
            </div>
            <span className="price">{t.price}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
