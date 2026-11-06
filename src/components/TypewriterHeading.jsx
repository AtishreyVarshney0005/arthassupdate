import { useEffect, useRef, useState } from "react";

export default function TypewriterHeading({ children, className = "", ...props }) {
  const [typedText, setTypedText] = useState("");
  const [isTyped, setIsTyped] = useState(false);
  const headingRef = useRef(null);
  const text = String(children);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return undefined;

    setTypedText("");
    setIsTyped(false);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches
      || !("IntersectionObserver" in window)) {
      setTypedText(text);
      setIsTyped(true);
      return undefined;
    }

    let intervalId;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();

      let characterIndex = 0;
      intervalId = window.setInterval(() => {
        characterIndex += 1;
        setTypedText(text.slice(0, characterIndex));
        if (characterIndex >= text.length) {
          window.clearInterval(intervalId);
          setIsTyped(true);
        }
      }, 50);
    }, { threshold: 0.25 });

    observer.observe(heading);
    return () => {
      observer.disconnect();
      window.clearInterval(intervalId);
    };
  }, [text]);

  return (
    <h2
      ref={headingRef}
      className={`typewriter-heading${isTyped ? " is-typed" : ""} ${className}`.trim()}
      aria-label={text}
      {...props}
    >
      <span aria-hidden="true">{typedText}</span>
    </h2>
  );
}
