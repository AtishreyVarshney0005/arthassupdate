import { useEffect, useState } from "react";
import Icon from "./Icon";
import { hero } from "../data/content";

export default function Hero() {
  const [typedBody, setTypedBody] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTypedBody(hero.body);
      return undefined;
    }

    let characterIndex = 0;
    const intervalId = window.setInterval(() => {
      characterIndex += 1;
      setTypedBody(hero.body.slice(0, characterIndex));
      if (characterIndex >= hero.body.length) window.clearInterval(intervalId);
    }, 50);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="pill">{hero.eyebrow}</span>
          <h1>
            {hero.titleLead}
            <br />
            {hero.titleLine2} <span className="grad-text">{hero.titleAccent}</span>
          </h1>
          <p className="hero-typewriter" aria-label={hero.body}>
            <span aria-hidden="true">{typedBody}</span>
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary btn-lg" href="#contact">
              {hero.primaryCta} <Icon name="arrow" size={16} />
            </a>
            <a className="btn btn-ghost btn-lg" href="#work">
              <span className="play-dot"><Icon name="play" size={12} fill="currentColor" /></span>
              {hero.secondaryCta}
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="visual-glow" aria-hidden="true" />
          <div className="visual-card">
            <div className="visual-heading">
              <span className="visual-mark"><img src="/logo.jpeg" alt="" /></span>
              <span className="visual-caption">GROWTH, CONNECTED</span>
              <span className="visual-live"><i /> IN SYNC</span>
            </div>
            <div className="growth-map">
              <svg className="growth-lines" viewBox="0 0 420 250" fill="none" aria-hidden="true">
                <path d="M210 124 98 65M210 124 322 65M210 124v88" />
                <circle cx="210" cy="124" r="86" />
              </svg>
              <div className="growth-center"><Icon name="trend" size={30} /><span>Growth<br />with purpose</span></div>
              <div className="growth-node node-strategy"><Icon name="lightbulb" size={19} /><span>Strategy</span></div>
              <div className="growth-node node-production"><Icon name="play" size={19} /><span>Production</span></div>
              <div className="growth-node node-performance"><Icon name="chart" size={19} /><span>Performance</span></div>
            </div>
            <div className="visual-foot"><span>Clear direction</span><span>Thoughtful creative</span><span>Measured progress</span></div>
          </div>

          <br/><br/>
          <div className="visual-note"><span className="note-spark">✦</span> Built around your goals.</div>
        </div>
      </div>
      <div className="hero-corner" aria-hidden="true" />
    </section>
  );
}
