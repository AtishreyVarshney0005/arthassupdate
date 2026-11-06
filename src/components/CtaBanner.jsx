import Icon from "./Icon";
import { cta } from "../data/content";

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-inner" data-reveal="up">
        <div>
          <h2>{cta.heading}</h2>
          <p>{cta.body}</p>
        </div>
        <a className="btn btn-primary btn-lg" href="#contact">
          {cta.button} <Icon name="arrow" size={16} />
        </a>
        <svg className="cta-chart" viewBox="0 0 200 120" aria-hidden="true">
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#a66b20" />
              <stop offset="1" stopColor="#e0bd7c" />
            </linearGradient>
          </defs>
          <rect x="10" y="95" width="26" height="15" rx="3" fill="url(#g1)" />
          <rect x="52" y="75" width="26" height="35" rx="3" fill="url(#g1)" />
          <rect x="94" y="58" width="26" height="52" rx="3" fill="url(#g1)" />
          <rect x="136" y="35" width="26" height="75" rx="3" fill="url(#g1)" />
          <path d="M8 70 L60 48 L100 56 L172 8" fill="none" stroke="url(#g1)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M150 6 L174 6 L174 30" fill="none" stroke="url(#g1)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
