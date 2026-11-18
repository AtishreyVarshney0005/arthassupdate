export default function TypewriterHeading({ children, className = "", ...props }) {
  const text = String(children);

  return (
    <h2
      className={`typewriter-heading ${className}`.trim()}
      aria-label={text}
      {...props}
    >
      {text}
    </h2>
  );
}
