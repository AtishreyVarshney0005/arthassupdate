import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const header = document.querySelector(".header");
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = "IntersectionObserver" in window
      ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
      )
      : null;

    if (observer) {
      elements.forEach((element) => observer.observe(element));
      root.classList.add("has-scroll-reveal");
    }

    let frame = 0;
    const updateScrollState = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const maxScroll = root.scrollHeight - window.innerHeight;
        const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
        root.style.setProperty("--scroll-progress", String(Math.min(1, Math.max(0, progress))));
        root.style.setProperty("--hero-drift", `${Math.min(window.scrollY * 0.12, 96)}px`);
        header?.classList.toggle("is-scrolled", window.scrollY > 16);
      });
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      observer?.disconnect();
      elements.forEach((element) => element.classList.remove("is-visible"));
      root.classList.remove("has-scroll-reveal");
      header?.classList.remove("is-scrolled");
      root.style.removeProperty("--scroll-progress");
      root.style.removeProperty("--hero-drift");
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return null;
}
