import { site } from "../data/content";

export default function Logo() {
  return (
    <a className="logo" href="#home" aria-label={`${site.name} home`}>
      <img className="logo-image" src="/logo.jpeg" alt={`${site.name} — Digital Growth & Creative`} />
    </a>
  );
}
