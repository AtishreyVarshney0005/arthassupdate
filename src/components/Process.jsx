import Icon from "./Icon";
import TypewriterHeading from "./TypewriterHeading";
import { process } from "../data/content";

export default function Process() {
  return (
    <section className="section section-tight" id="process">
      <div className="container">
        <div className="title-block" data-reveal="up">
          <span className="bar" />
          <TypewriterHeading className="section-title">{process.heading}</TypewriterHeading>
          <p className="sub">{process.sub}</p>
        </div>
        <ol className="process-steps">
          {process.steps.map((s, i) => (
            <li key={s.title} className="process-card" data-reveal="up" data-reveal-order={i}>
              <div className="process-card-top">
                <span className="process-number">{String(i + 1).padStart(2, "0")}</span>
                <span className="process-icon"><Icon name={s.icon} size={20} /></span>
              </div>
              <h3>{s.title}<span className="process-arrow" aria-hidden="true">↗</span></h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="work-cta" data-reveal="up">
          <p>Ready to plan your next step? Let's talk about your goals.</p>
          <a className="btn btn-outline" href="#contact">
            Discuss your project <Icon name="arrow" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
