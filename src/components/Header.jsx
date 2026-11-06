import { useState } from "react";
import Logo from "./Logo";
import Icon from "./Icon";
import { nav, site } from "../data/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="scroll-progress" aria-hidden="true"><span /></div>
      <div className="header-inner">
        <Logo />
        <nav id="primary-navigation" className={`nav ${open ? "is-open" : ""}`} aria-label="Primary">
          {nav.map((n) => (
            <a key={n.label} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
          ))}
          <a className="btn btn-primary nav-cta-mobile" href={site.primaryCta.href}>
            {site.primaryCta.label} <Icon name="arrow" size={16} />
          </a>
        </nav>
        <a className="btn btn-primary nav-cta" href={site.primaryCta.href}>
          {site.primaryCta.label} <Icon name="arrow" size={16} />
        </a>
        <button
          type="button"
          className="menu-btn"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-controls="primary-navigation"
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} size={24} />
        </button>
      </div>
    </header>
  );
}
