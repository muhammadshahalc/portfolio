import {
  FaBrain,
  FaRobot,
  FaServer,
  FaDatabase,
  FaSlidersH,
  FaCogs,
  FaCode,
} from "react-icons/fa";
import { services, sectionTags } from "../data/content";
import FadeIn from "./FadeIn";

// Explicit icon map keeps the bundle small — avoids importing the entire
// react-icons/fa set with `import * as Icons`.
const iconMap = { FaBrain, FaRobot, FaServer, FaDatabase, FaSlidersH, FaCogs };

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <FadeIn type="fade-up">
          <span className="section-tag">{sectionTags.services}</span>
          <h2 className="section-title">What I Do</h2>
        </FadeIn>
        <FadeIn as="p" className="section-subtitle">
          Specialized AI/ML engineering services, from prototype to production
        </FadeIn>
        <div className="services-grid">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || FaCode;
            return (
              <FadeIn type="fade-up" className="service-card" key={service.title}>
                <div className="service-icon">
                  <Icon />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
