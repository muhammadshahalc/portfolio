import { FaBriefcase, FaGraduationCap, FaCertificate } from "react-icons/fa";
import { experiences, education, sectionTags } from "../data/content";
import FadeIn from "./FadeIn";

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <FadeIn type="fade-up">
          <span className="section-tag">{sectionTags.journey}</span>
          <h2 className="section-title">Experience & Education</h2>
        </FadeIn>
        <FadeIn as="p" className="section-subtitle">
          My professional timeline as an AI/ML Engineer and academic background
        </FadeIn>

        <div className="experience-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem", marginTop: "2rem" }}>
          {/* Work Experience */}
          <div className="timeline-column">
            <h3 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--accent)" }}>
              <FaBriefcase /> Work Experience
            </h3>
            <div className="timeline" style={{ borderLeft: "2px solid var(--border)", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
              {experiences.map((exp, idx) => (
                <FadeIn key={idx} type="fade-up" className="timeline-item">
                  <div style={{ background: "var(--bg-secondary)", padding: "1.5rem", borderRadius: "12px", border: "1px solid var(--border)", position: "relative" }}>
                    <span style={{ fontSize: "0.85rem", color: "var(--accent)", fontWeight: "600", textTransform: "uppercase", tracking: "1px" }}>
                      {exp.period}
                    </span>
                    <h4 style={{ fontSize: "1.2rem", margin: "0.3rem 0 0.1rem 0" }}>{exp.role}</h4>
                    <h5 style={{ fontSize: "0.95rem", color: "var(--text-muted)", marginBottom: "0.75rem" }}>
                      {exp.company} • {exp.location}
                    </h5>
                    <ul style={{ paddingLeft: "1.2rem", fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                      {exp.description.map((item, i) => (
                        <li key={i} style={{ marginBottom: "0.5rem" }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="timeline-column">
            <h3 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--accent)" }}>
              <FaGraduationCap /> Education & Certifications
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <FadeIn type="fade-up">
                <div style={{ background: "var(--bg-secondary)", padding: "1.5rem", borderRadius: "12px", border: "1px solid var(--border)" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--accent)", fontWeight: "600" }}>
                    {education.period}
                  </span>
                  <h4 style={{ fontSize: "1.2rem", margin: "0.3rem 0 0.1rem 0" }}>{education.degree}</h4>
                  <h5 style={{ fontSize: "0.95rem", color: "var(--text-muted)" }}>{education.institution}</h5>
                </div>
              </FadeIn>

              <FadeIn type="fade-up">
                <div style={{ background: "var(--bg-secondary)", padding: "1.5rem", borderRadius: "12px", border: "1px solid var(--border)" }}>
                  <h4 style={{ fontSize: "1.2rem", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text)" }}>
                    <FaCertificate style={{ color: "var(--accent)" }} /> Certifications
                  </h4>
                  <ul style={{ paddingLeft: "1.2rem", fontSize: "0.95rem", color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {education.certifications.map((cert, idx) => (
                      <li key={idx}>{cert}</li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
