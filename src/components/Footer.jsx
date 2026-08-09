import { personal, footer } from "../data/content";
import SocialLinks from "./SocialLinks";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <a href="#home" className="footer-logo">
              {personal.logoFirst}
              <span>{personal.logoSecond}</span>
            </a>
            <p className="footer-text">{footer.tagline}</p>
            <SocialLinks className="footer-social" />
          </div>
          <div className="footer-links-container">
            <h3 className="footer-links-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {footer.copyrightName}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
