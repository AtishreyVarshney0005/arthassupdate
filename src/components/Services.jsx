import Icon from "./Icon";
import TypewriterHeading from "./TypewriterHeading";
import { services } from "../data/content";

export default function Services() {
  return (
    <section className="section section-tight" id="services">
      <div className="container">
        <div className="title-block" data-reveal="up">
          <span className="bar" />
          <TypewriterHeading className="section-title">{services.heading}</TypewriterHeading>
          <p className="sub">{services.sub}</p>
        </div>
        <div className="grid grid-4">
          {services.items.map((s, index) => (
            <a key={s.title} href={s.href} className={`card service tone-${s.tone}`} data-reveal="up" data-reveal-order={index}>
              <span className={`icon-box ${s.tone}`}><Icon name={s.icon} size={20} /></span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className={`go ${s.tone}`}><Icon name="arrow" size={16} /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
