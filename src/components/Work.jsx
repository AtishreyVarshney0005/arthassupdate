import Icon from "./Icon";
import TypewriterHeading from "./TypewriterHeading";
import { industries } from "../data/content";

function IndustryArtwork({ scene }) {
  if (scene === "education") {
    return (
      <svg className="work-artwork" viewBox="0 0 480 240" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="education-sky" x1="51" y1="15" x2="423" y2="225" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E9C989" />
              <stop offset="1" stopColor="#B77D37" />
            </linearGradient>
            <linearGradient id="education-building" x1="121" y1="90" x2="353" y2="216" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFF6E5" />
              <stop offset="1" stopColor="#D8B984" />
            </linearGradient>
          </defs>
          <path fill="url(#education-sky)" d="M0 0h480v240H0z" />
          <circle cx="382" cy="54" r="27" fill="#FFF1C9" fillOpacity=".82" />
          <path d="M0 157c53-27 88-28 143-11 45 15 88 17 143-2 75-26 126-14 194 12v84H0z" fill="#826447" fillOpacity=".28" />
          <path d="M91 106h298v115H91z" fill="url(#education-building)" />
          <path d="m75 108 165-63 165 63H75Z" fill="#7B5738" />
          <path d="M213 65h54v-19h-54z" fill="#F7EBD4" />
          <path d="M226 46h28v-9h-28z" fill="#795534" />
          <path d="M115 123h43v98h-43zM177 123h43v98h-43zM260 123h43v98h-43zM322 123h43v98h-43z" fill="#A5794C" />
          <path d="M123 131h27v38h-27zM185 131h27v38h-27zM268 131h27v38h-27zM330 131h27v38h-27z" fill="#D9E4D6" />
          <path d="M228 145h24v76h-24z" fill="#76533A" />
          <path d="M0 218h480v22H0z" fill="#554A34" />
          <path d="M27 215c8-31 14-43 24-43s17 12 25 43H27ZM398 215c8-31 14-43 24-43s17 12 25 43h-49Z" fill="#536B4E" />
          <path d="M52 202v18M423 202v18" stroke="#76583A" strokeWidth="5" />
          <path d="M194 221h92" stroke="#FFF5E2" strokeOpacity=".7" strokeWidth="2" strokeDasharray="5 7" />
        </svg>
    );
  }

  if (scene === "hospitality") {
    return (
      <svg className="work-artwork" viewBox="0 0 480 240" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="hospitality-sky" x1="43" y1="22" x2="419" y2="224" gradientUnits="userSpaceOnUse">
            <stop stopColor="#BBD0B3" />
            <stop offset="1" stopColor="#59745B" />
          </linearGradient>
          <linearGradient id="hospitality-light" x1="241" y1="68" x2="241" y2="217" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F8E7BE" />
            <stop offset="1" stopColor="#C39A62" />
          </linearGradient>
        </defs>
        <path fill="url(#hospitality-sky)" d="M0 0h480v240H0z" />
        <circle cx="361" cy="45" r="24" fill="#F9E5AE" fillOpacity=".8" />
        <path d="M0 142c66-30 112-24 169-4 63 22 106 19 172-5 53-19 94-18 139 2v105H0z" fill="#354E41" fillOpacity=".54" />
        <path d="M87 81h306v139H87z" fill="#EEE4D0" />
        <path d="M71 82h338v16H71z" fill="#6A513A" />
        <path d="M112 103h256v88H112z" fill="url(#hospitality-light)" />
        <path d="M112 103h256v12H112zM112 179h256v12H112z" fill="#F7EDDA" />
        <path d="M128 115v64M179 115v64M230 115v64M281 115v64M332 115v64" stroke="#74583D" strokeOpacity=".52" strokeWidth="5" />
        <path d="M104 220h272" stroke="#6E5238" strokeWidth="8" />
        <path d="M20 221c8-42 15-59 28-59s20 17 28 59H20ZM399 221c8-42 15-59 28-59s20 17 28 59h-56Z" fill="#355644" />
        <path d="M48 198v24M427 198v24" stroke="#806141" strokeWidth="5" />
        <path d="M190 204h100" stroke="#F9F2DF" strokeOpacity=".74" strokeWidth="2" strokeDasharray="4 8" />
        <path d="M220 67c0-11 9-20 20-20s20 9 20 20" stroke="#F8E7BE" strokeWidth="3" strokeOpacity=".8" />
      </svg>
    );
  }

  if (scene === "real-estate") {
    return (
      <svg className="work-artwork" viewBox="0 0 480 240" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="property-sky" x1="48" y1="10" x2="414" y2="226" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EBC3A2" />
          <stop offset="1" stopColor="#A75D4A" />
        </linearGradient>
        <linearGradient id="property-tower" x1="161" y1="47" x2="318" y2="219" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF0DD" />
          <stop offset="1" stopColor="#D8A98A" />
        </linearGradient>
      </defs>
      <path fill="url(#property-sky)" d="M0 0h480v240H0z" />
      <circle cx="378" cy="52" r="26" fill="#FFE9C5" fillOpacity=".8" />
      <path d="M0 200h480v40H0z" fill="#63463B" />
      <path d="M76 132h74v68H76z" fill="#D5AE91" />
      <path d="M65 132h96l-48-29-48 29Z" fill="#754F41" />
      <path d="M297 112h92v88h-92z" fill="#E2C3A5" />
      <path d="m285 113 58-34 59 34h-117Z" fill="#8C5D4A" />
      <path d="M170 52h140v148H170z" fill="url(#property-tower)" />
      <path d="M154 54h172v12H154z" fill="#795749" />
      <path d="M184 80h24v34h-24zM230 80h24v34h-24zM276 80h18v34h-18zM184 129h24v34h-24zM230 129h24v34h-24zM276 129h18v34h-18z" fill="#9D7260" />
      <path d="M178 197h126" stroke="#725245" strokeWidth="7" />
      <path d="M19 201c7-31 12-44 22-44s15 13 22 44H19ZM414 201c7-31 12-44 22-44s15 13 22 44h-44Z" fill="#526249" />
      <path d="M41 185v17M436 185v17" stroke="#755440" strokeWidth="5" />
      <path d="M0 222h480" stroke="#F2D3B4" strokeOpacity=".62" strokeWidth="2" strokeDasharray="7 8" />
      </svg>
    );
  }

  return null;
}

// Pass approved real projects via the `projects` prop later:
// [{ title, tags, image, tone }]
export default function Work({ projects = industries.items }) {
  return (
    <section className="section section-tight" id="work">
      <div className="container">
        <div className="title-block" data-reveal="up">
          <span className="bar" />
          <TypewriterHeading className="section-title">{industries.heading}</TypewriterHeading>
          <p className="sub">{industries.sub}</p>
        </div>
        <div className="work-row">
          <div className="work-grid">
            {projects.map((p, index) => (
              <article key={p.title} className="work-card" data-reveal="up" data-reveal-order={index}>
                <div
                  className={`work-img tone-bg-${p.tone || "violet"}${p.image ? " has-image" : ""}`}
                  style={p.image ? { backgroundImage: `url(${p.image})` } : undefined}
                  role="img"
                  aria-label={`${p.title} industry illustration`}
                >
                  {!p.image && <IndustryArtwork scene={p.scene} />}
                  <span className="work-image-index">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="work-meta">
                  <div className="work-meta-heading">
                    <h3>{p.title}</h3>
                    <span className="work-card-arrow" aria-hidden="true"><Icon name="arrow" size={18} /></span>
                  </div>
                  <ul className="work-tags" aria-label="Capabilities">
                    {p.tags.split("|").map((tag) => (
                      <li key={tag.trim()}>{tag.trim()}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="work-cta" data-reveal="up">
          <p>Have a goal in mind? Let's find the right way to support your organisation.</p>
          <a className="btn btn-outline" href="#contact">
            {industries.cta} <Icon name="arrow" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
