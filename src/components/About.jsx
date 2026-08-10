import { FaLaptopCode, FaPaperPlane } from "react-icons/fa";
import { about } from "../data/content";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <FadeIn type="fade-up" className="about-header-wrapper">
          <div className="about-header-left">
            <span className="about-tag">{about.tag}</span>
            <h2 className="about-title">{about.title}</h2>
            <div className="about-title-line"></div>
          </div>
          <div className="about-header-graphic">
            <div className="about-img-container compact">
              <div className="code-pattern about-img">
                <div className="code-overlay"></div>
                <div className="code-content">
                  <FaLaptopCode />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="about-grid">
          <FadeIn type="fade-right" className="about-text">
            {about.paragraphs.map((p, i) => (
              <p className="about-description" key={i}>
                {p}
              </p>
            ))}
            <div className="about-cta">
              <a href="#contact" className="btn btn-primary">
                Let's Talk <FaPaperPlane />
              </a>
            </div>
          </FadeIn>

          <FadeIn type="fade-left" className="about-info-card">
            <div className="info-block">
              <span className="info-label">LOCATION</span>
              <p className="info-value">{about.location}</p>
            </div>

            <div className="info-block">
              <span className="info-label">FOCUS</span>
              <p className="info-value">{about.focus}</p>
            </div>

            <div className="info-block">
              <span className="info-label">STATUS</span>
              <p className="info-value">{about.status}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

