import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { personal } from "../data/content";

export default function SocialLinks({ className = "hero-social" }) {
  const { github, linkedin, twitter } = personal.social;

  return (
    <div className={className}>
      {github && (
        <a href={github} className="social-icon" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
      )}
      {linkedin && (
        <a href={linkedin} className="social-icon" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
      )}
      {twitter && (
        <a href={twitter} className="social-icon" target="_blank" rel="noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
      )}
    </div>
  );
}
