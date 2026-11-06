import { useState } from "react";
import TypewriterHeading from "./TypewriterHeading";
import { contactForm, site } from "../data/content";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  function onSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const email = site.contact.email.trim();

    if (!email) {
      setStatus("error");
      return;
    }

    const subject = `Website enquiry from ${String(data.name).trim()}`;
    const body = Object.entries(data)
      .map(([key, value]) => `${key.replaceAll("_", " ")}: ${String(value).trim()}`)
      .join("\n");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("draft");
  }

  return (
    <section className="section" id="contact">
      <div className="container contact">
        <div data-reveal="left">
          <div className="title-block left">
            <span className="bar" />
            <TypewriterHeading className="section-title">{contactForm.heading}</TypewriterHeading>
          </div>
          <p className="sub left">{contactForm.intro}</p>
          <ul className="contact-list">
            <li><strong>Service area:</strong> {site.contact.serviceArea}</li>
            {site.contact.phone && (
              <li>
                <strong>Phone:</strong>{" "}
                <a href={`tel:${site.contact.phone.replace(/[^\d+]/g, "")}`}>{site.contact.phone}</a>
              </li>
            )}
            {site.contact.email && (
              <li>
                <strong>Email:</strong> <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              </li>
            )}
            {site.contact.hours && <li><strong>Hours:</strong> {site.contact.hours}</li>}
          </ul>
        </div>

        <form className="form" onSubmit={onSubmit} data-reveal="right">
          <label>Full name *<input name="name" required /></label>
          <label>Work email or phone number *<input name="email_or_phone" required /></label>
          <label>Organisation / institution name *<input name="organisation" required /></label>
          <div className="two">
            <label>Your role<input name="role" /></label>
            <label>Sector
              <select name="sector" defaultValue={contactForm.sectors[0]}>
                {contactForm.sectors.map((s) => <option key={s}>{s}</option>)}
              </select>
            </label>
          </div>
          <label>City / location *<input name="city" required /></label>
          <label>Tell us briefly about your objective *<textarea name="objective" rows="4" required /></label>
          <label>Website URL<input name="website" type="url" placeholder="https://" /></label>
          <p className="privacy">{contactForm.privacy}</p>
          <button className="btn btn-primary btn-lg">{contactForm.submit}</button>
          {status === "draft" && <p className="msg info" role="status">{contactForm.draft}</p>}
          {status === "error" && (
            <p className="msg err" role="alert">
              {contactForm.error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
