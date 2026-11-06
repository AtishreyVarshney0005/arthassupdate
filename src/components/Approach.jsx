import Icon from "./Icon";
import TypewriterHeading from "./TypewriterHeading";
import { approach } from "../data/content";

export default function Approach() {
  return (
    <section className="section" id="approach">
      <div className="container">
        <p className="eyebrow" data-reveal="up">{approach.eyebrow}</p>
        <TypewriterHeading className="section-title big">{approach.heading}</TypewriterHeading>
        <div className="grid grid-3">
          {approach.items.map((it, index) => (
            <article key={it.title} className={`card card-lg tone-${it.tone}`} data-reveal="up" data-reveal-order={index}>
              <span className={`icon-box lg ${it.tone}`}><Icon name={it.icon} size={26} /></span>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
