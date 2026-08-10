import {
  FaCode,
  FaBrain,
  FaMicrochip,
  FaServer,
  FaDatabase,
  FaTools,
} from "react-icons/fa";
import { skillsData } from "../data/content";
import FadeIn from "./FadeIn";

const iconMap = {
  FaCode,
  FaBrain,
  FaMicrochip,
  FaServer,
  FaDatabase,
  FaTools,
};

export default function Skills() {
  return (
    <section className="skills-section section" id="skills">
      <div className="container">
        <FadeIn type="fade-up">
          <span className="skills-tag">{skillsData.tag}</span>
          <h2 className="skills-title">{skillsData.title}</h2>
          <div className="skills-title-line"></div>
        </FadeIn>

        <div className="skills-grid">
          {skillsData.categories.map((cat, index) => {
            const Icon = iconMap[cat.icon] || FaCode;
            return (
              <FadeIn
                type="fade-up"
                className="skills-card"
                key={cat.title || index}
              >
                <div className="skills-card-header">
                  <div className="skills-icon-box">
                    <Icon />
                  </div>
                  <h3 className="skills-card-title">{cat.title}</h3>
                </div>
                <div className="skills-pills">
                  {cat.skills.map((skill) => (
                    <span className="skill-pill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
