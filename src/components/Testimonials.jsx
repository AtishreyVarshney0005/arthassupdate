import { useState } from "react";
import Icon from "./Icon";
import { testimonials } from "../data/content";

// Renders nothing until approved testimonials are added to data/content.js
export default function Testimonials({ items = testimonials }) {
  const [i, setI] = useState(0);
  if (!items.length) return null;
  const t = items[i];
  const go = (d) => setI((i + d + items.length) % items.length);

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <p className="eyebrow light">Testimonials</p>
        <h2 className="section-title light">What Our Clients Say</h2>
        <div className="t-row">
          <button className="circle-btn" onClick={() => go(-1)} aria-label="Previous testimonial"><Icon name="prev" /></button>
          <figure className="t-card">
            {t.photo && <img src={t.photo} alt={t.name} />}
            <figcaption>
              <strong>{t.name}</strong>
              <span>{t.role}</span>
            </figcaption>
            <blockquote>“{t.quote}”</blockquote>
          </figure>
          <button className="circle-btn" onClick={() => go(1)} aria-label="Next testimonial"><Icon name="next" /></button>
        </div>
        <div className="dots">
          {items.map((_, k) => (
            <button key={k} className={k === i ? "on" : ""} onClick={() => setI(k)} aria-label={`Testimonial ${k + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
