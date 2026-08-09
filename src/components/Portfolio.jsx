import { useState } from "react";
import {
  FaComments,
  FaSearch,
  FaLayerGroup,
  FaSlidersH,
  FaCode,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";
import { projects, filters, personal } from "../data/content";
import FadeIn from "./FadeIn";

// Explicit icon map keeps the bundle small — avoids importing the entire
// react-icons/fa set with `import * as Icons`.
const iconMap = { FaComments, FaSearch, FaLayerGroup, FaSlidersH };

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleProjects = projects.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <FadeIn as="h2" className="section-title">
          My Work
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
            const isLLMGridCard = project.name.includes("LLM Grid Tariff");

            return (
              <div key={project.id} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <FadeIn type="fade-up" className={`portfolio-item ${bgClass}`}>
                  <div className="portfolio-content">
                    <Icon className="portfolio-icon" />
                    <h3 className="portfolio-name">{project.name}</h3>
                    <p className="portfolio-tech">{project.tech}</p>
                  </div>
                  <div className="portfolio-overlay">
                    <h3 className="portfolio-title">{project.name}</h3>
                    <p className="portfolio-category">{project.description}</p>
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

                {isLLMGridCard && (
                  <FadeIn type="fade-up">
                    <a
                      href={personal.resumeUrl}
                      download="Muhammad_Shahal_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ width: "100%", justifyContent: "center", boxSizing: "border-box" }}
                    >
                      Download Resume <FaDownload />
                    </a>
                  </FadeIn>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
