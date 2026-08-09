import { useEffect, useRef } from "react";

// Ports the original template's custom cursor (dot + trailing ring).
// Skips itself on touch devices since a mouse cursor effect makes no sense there.
export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return; // touch device, skip

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMove = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      follower.style.left = `${e.clientX}px`;
      follower.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-follower" ref={followerRef}></div>
    </>
  );
}
