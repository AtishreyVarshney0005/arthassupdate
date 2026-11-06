import { useEffect, useRef, useState } from "react";
import TypewriterHeading from "./TypewriterHeading";

import clientLogo1 from "../../Logo/1.jpeg";
import clientLogo2 from "../../Logo/2.jpg";
import clientLogo3 from "../../Logo/3.png";
import clientLogo4 from "../../Logo/4.webp";
import clientLogo5 from "../../Logo/5.webp";
import clientLogo6 from "../../Logo/6.webp";
import clientLogo7 from "../../Logo/7.webp";
import clientLogo10 from "../../Logo/10.webp";
import clientLogo11 from "../../Logo/11.webp";
import clientLogo12 from "../../Logo/12.webp";
import clientLogo21 from "../../Logo/21.jpg";
import clientLogo22 from "../../Logo/22.jpg";
import clientLogo23 from "../../Logo/23.jpg";
import clientLogo24 from "../../Logo/24.jpg";
import clientLogo25 from "../../Logo/25.jpg";
import clientLogo51 from "../../Logo/51.webp";
import clientLogo52 from "../../Logo/52.webp";
import clientLogo53 from "../../Logo/53.webp";

const clientLogos = [
  clientLogo1,
  clientLogo2,
  clientLogo3,
  clientLogo4,
  clientLogo5,
  clientLogo6,
  clientLogo7,
  clientLogo10,
  clientLogo11,
  clientLogo12,
  clientLogo21,
  clientLogo22,
  clientLogo23,
  clientLogo24,
  clientLogo25,
  clientLogo51,
  clientLogo52,
  clientLogo53,
];

const metrics = [
  { count: 3, suffix: "+", label: "Years of Experience" },
  { count: 30, suffix: "+", label: "Websites Delivered" },
  { value: "24/7", label: "Support" },
  { value: "98%", label: "Client Satisfaction" },
];

function CountUp({ target, suffix }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const element = countRef.current;
    if (!element) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches
      || !("IntersectionObserver" in window)) {
      setCount(target);
      return undefined;
    }

    let intervalId;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();

      let currentCount = 0;
      intervalId = window.setInterval(() => {
        currentCount += 1;
        setCount(currentCount);
        if (currentCount >= target) window.clearInterval(intervalId);
      }, 500);
    }, { threshold: 0.5 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      window.clearInterval(intervalId);
    };
  }, [target]);

  return <strong ref={countRef} aria-label={`${target}${suffix}`}>{count}{suffix}</strong>;
}

export default function ClientTrust() {
  return (
    <section className="client-trust" id="clients">
      <div className="container">
        <div className="client-heading" data-reveal="up">
          <p className="eyebrow">Trusted partnerships</p>
          <TypewriterHeading className="section-title">Our Diverse Clientele</TypewriterHeading>
        </div>
        <ul className="client-logo-grid" aria-label="Client logos">
          {clientLogos.map((logo, index) => (
            <li className="client-logo" key={logo}>
              <img src={logo} alt={`Client ${index + 1}`} loading="lazy" />
            </li>
          ))}
        </ul>
        <ul className="client-metrics" aria-label="Our experience and service">
          {metrics.map((metric) => (
            <li className="client-metric" key={metric.label}>
              {metric.count
                ? <CountUp target={metric.count} suffix={metric.suffix} />
                : <strong>{metric.value}</strong>}
              <span>{metric.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
