import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaCode, FaChevronDown } from "react-icons/fa";
import { personal } from "../data/content";
import SocialLinks from "./SocialLinks";
import FadeIn from "./FadeIn";

// Ports the original vanilla-JS "typed text" effect into a React hook.
function useTypedText(words, { typingSpeed = 100, deletingSpeed = 50, pause = 1000 } = {}) {
  const [text, setText] = useState("");
  const wordIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    let timeoutId;

    const tick = () => {
      const current = words[wordIndex.current];

      if (deleting.current) {
        charIndex.current -= 1;
      } else {
        charIndex.current += 1;
      }

      setText(current.substring(0, charIndex.current));

      let delay = deleting.current ? deletingSpeed : typingSpeed;

      if (!deleting.current && charIndex.current === current.length) {
        deleting.current = true;
        delay = pause;
      } else if (deleting.current && charIndex.current === 0) {
        deleting.current = false;
        wordIndex.current = (wordIndex.current + 1) % words.length;
        delay = 500;
      }

      timeoutId = setTimeout(tick, delay);
    };

    timeoutId = setTimeout(tick, 1000);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return text;
}

export default function Hero() {
  const typedText = useTypedText(personal.roles);

  return (
    <section className="hero section" id="home">
      <div className="container hero-content">
        <div className="hero-text">
          <div className="status-badge fade-up active">
            <span className="status-dot"></span>
            <span className="status-text">AVAILABLE FOR OPPORTUNITIES</span>
          </div>
          <h1 className="hero-title fade-up active">
            <span>Hi, I'm</span> <br />
            <span className="typed-text">{typedText}</span>
          </h1>
          <p className="hero-subtitle fade-up active">{personal.heroSubtitle}</p>
          <div className="hero-cta fade-up active">
            <a href="#portfolio" className="btn btn-primary">
              View My Work <FaArrowRight />
            </a>
            <a
              href={personal.resumeUrl}
              download="Muhammad_Shahal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Download Resume
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
          <div className="fade-up active">
            <SocialLinks />
          </div>
        </div>
        <FadeIn type="fade-left" className="hero-image">
          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <div className="dev-image">
                <FaCode />
              </div>
            </div>
          </div>
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </FadeIn>
      </div>
      <a href="#about" className="scroll-indicator">
        <span className="scroll-indicator-text">Scroll Down</span>
        <FaChevronDown className="scroll-indicator-icon" />
      </a>
    </section>
  );
}
