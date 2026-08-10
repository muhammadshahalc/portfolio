import { useState } from "react";
import {
  FaComments,
  FaSearch,
  FaLayerGroup,
  FaSlidersH,
  FaChartLine,
  FaFilm,
  FaCode,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";
import { projects, filters, personal, sectionTags } from "../data/content";
import FadeIn from "./FadeIn";

// Explicit icon map keeps the bundle small — avoids importing the entire
// react-icons/fa set with `import * as Icons`.
const iconMap = {
  FaComments,
  FaSearch,
  FaLayerGroup,
  FaSlidersH,
  FaChartLine,
  FaFilm,
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleProjects = projects.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <FadeIn type="fade-up">
          <span className="section-tag">{sectionTags.projects}</span>
          <h2 className="section-title">My Work</h2>
        </FadeIn>
        <FadeIn as="p" className="section-subtitle">
          A selection of AI/ML projects — RAG pipelines, agent systems, and full-stack LLM apps
        </FadeIn>

        <FadeIn type="fade-up" className="portfolio-filter">
          {filters.map((f) => (
            <button
              key={f.value}
              className={`filter-btn ${activeFilter === f.value ? "active" : ""}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </FadeIn>

        <div className="portfolio-grid">
          {visibleProjects.map((project, index) => {
            const Icon = iconMap[project.icon] || FaCode;
            const bgClass = `portfolio-item-${(index % 6) + 1}`;

            return (
              <FadeIn key={project.id} type="fade-up" className={`portfolio-item ${bgClass}`}>
                <div className="portfolio-content">
                  <Icon className="portfolio-icon" />
                  <h3 className="portfolio-name">{project.name}</h3>
                  <div className="portfolio-tags">
                    {project.tech.split(",").map((techItem, i) => (
                      <span key={i} className="tag-pill">
                        {techItem.trim()}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="portfolio-overlay">
                  <h3 className="portfolio-title">{project.name}</h3>
                  <p className="portfolio-category">{project.description}</p>
                  <div className="portfolio-tags">
                    {project.tech.split(",").map((techItem, i) => (
                      <span key={i} className="tag-pill">
                        {techItem.trim()}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-link"
                  >
                    View Project <FaArrowRight />
                  </a>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn type="fade-up" className="portfolio-cta">
          <a
            href={personal.resumeUrl}
            download="Muhammad_Shahal_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: "0.85rem 2rem", fontSize: "1rem" }}
          >
            Download Resume <FaDownload />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
