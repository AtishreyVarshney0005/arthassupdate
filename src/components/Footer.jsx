import Icon from "./Icon";
import Logo from "./Logo";
import { footer, site } from "../data/content";

export default function Footer() {
  const socialLinks = ["facebook", "instagram", "linkedin", "youtube"].filter(
    (name) => site.social[name] && site.social[name] !== "#",
  );

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div data-reveal="up">
          <Logo />
          <p className="foot-tag">{site.tagline}<br />{site.footerLine}</p>
        </div>
        <div data-reveal="up" data-reveal-order="1">
          <h4>Quick Links</h4>
          <ul>{footer.quickLinks.map((l) => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}</ul>
        </div>
        <div data-reveal="up" data-reveal-order="2">
          <h4>Our Services</h4>
          <ul>{footer.services.map((s) => <li key={s}><a href="#services">{s}</a></li>)}</ul>
        </div>
        <div data-reveal="up" data-reveal-order="3">
          <h4>Start a conversation</h4>
          <p className="footer-invite">Tell us what you want your marketing to achieve. We'll help you find a sensible next step.</p>
          <a className="footer-contact-link" href="#contact">
            Talk to our team <Icon name="arrow" size={15} />
          </a>
          {socialLinks.length > 0 && (
            <div className="socials" aria-label="Social media">
              {socialLinks.map((name) => (
                <a key={name} href={site.social[name]} className={`soc ${name}`} aria-label={name} target="_blank" rel="noreferrer">
                  <img src={`/${name}.png`} alt="" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
      <section className="container footer-education" aria-labelledby="footer-education-heading">
        <div>
          <span className="footer-education-eyebrow">{footer.education.eyebrow}</span>
          <h3 id="footer-education-heading">{footer.education.heading}</h3>
          <p>{footer.education.text}</p>
        </div>
        <ul className="footer-education-links">
          {footer.education.links.map((item) => (
            <li key={item}><a href="#contact">{item}</a></li>
          ))}
        </ul>
        <a className="footer-education-cta" href="#contact">
          {footer.education.cta} <Icon name="arrow" size={15} />
        </a>
      </section>
      <div className="footer-bottom">
        <div className="container fb-inner">
          <span>© {new Date().getFullYear()} {site.name}. All Rights Reserved.</span>
          <span className="legal">
            {footer.legal.filter((l) => l.href && l.href !== "#").map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}
          </span>
        </div>
      </div>
    </footer>
  );
}
