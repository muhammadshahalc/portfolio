import { useEffect, useRef, useState } from "react";

/**
 * Wraps children and adds the "active" class once the element scrolls
 * into view — mirrors the original template's fade-up / fade-left /
 * fade-right / fade-in / scale-up classes, but driven by
 * IntersectionObserver instead of a global scroll listener.
 *
 * Usage: <FadeIn type="fade-up"><h2>Heading</h2></FadeIn>
 */
export default function FadeIn({ type = "fade-up", className = "", children, as: Tag = "div" }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`${type} ${active ? "active" : ""} ${className}`}>
      {children}
    </Tag>
  );
}
