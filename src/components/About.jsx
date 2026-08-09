import { FaLaptopCode, FaPaperPlane } from "react-icons/fa";
import { about } from "../data/content";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <FadeIn as="h2" className="section-title">
          About Me
        </FadeIn>
        <FadeIn as="p" className="section-subtitle">
          Discover my journey, skills, and what drives me to build exceptional AI systems
        </FadeIn>
        <div className="about-content">
          <FadeIn type="fade-right" className="about-image">
            <div className="about-img-container">
              <div className="code-pattern about-img">
                <div className="code-overlay"></div>
                <div className="code-content">
                  <FaLaptopCode />
                </div>
              </div>
              <div className="experience-badge">
                <span className="experience-number">{about.yearsLabel}</span>
                <span className="experience-text">{about.yearsSubLabel}</span>
              </div>
            </div>
          </FadeIn>
          <FadeIn type="fade-left" className="about-text">
            {about.paragraphs.map((p, i) => (
              <p className="about-description" key={i}>
                {p}
              </p>
            ))}
            <a href="#contact" className="btn btn-primary">
              Let's Talk <FaPaperPlane />
            </a>
            <h3 className="mt-4 mb-2 gradient-text">My Skills</h3>
            <div className="skills">
              {about.skills.map((skill) => (
                <span className="skill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
