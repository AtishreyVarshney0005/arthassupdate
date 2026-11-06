import { useState } from "react";
import Icon from "./Icon";
import TypewriterHeading from "./TypewriterHeading";
import { faqs } from "../data/content";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section section-tight" id="faqs">
      <div className="container narrow">
        <div className="title-block" data-reveal="up">
          <span className="bar" />
          <TypewriterHeading className="section-title">{faqs.heading}</TypewriterHeading>
        </div>
        <div className="faq">
          {faqs.items.map((f, i) => (
            <div key={f.q} className={`faq-item ${open === i ? "open" : ""}`} data-reveal="up" data-reveal-order={i}>
              <button
                id={`faq-trigger-${i}`}
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span>{f.q}</span>
                <Icon name="plus" size={18} />
              </button>
              <p
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-trigger-${i}`}
                hidden={open !== i}
              >
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
