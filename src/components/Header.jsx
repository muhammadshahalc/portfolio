import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { personal } from "../data/content";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPos = window.scrollY + 100;
      for (const item of navItems) {
        const section = document.querySelector(item.href);
        if (
          section &&
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActiveHref(item.href);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <a href="#home" className="logo">
          {personal.logoFirst}
          <span>{personal.logoSecond}</span>
        </a>
        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li className="nav-item" key={item.href}>
                <a
                  href={item.href}
                  className={`nav-link ${activeHref === item.href ? "active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
