import { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import { personal } from "../data/content";
import SocialLinks from "./SocialLinks";
import FadeIn from "./FadeIn";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null); // null | "success" | "error"

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = form;

    if (!name || !email || !subject || !message) {
      setStatus("error");
      return;
    }

    // Open the user's email client with pre-filled fields
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, "_blank");
    setStatus("success");
    setForm(initialForm);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <FadeIn as="h2" className="section-title">
          Get In Touch
        </FadeIn>
        <FadeIn as="p" className="section-subtitle">
          Open to AI/ML engineering roles — let's talk
        </FadeIn>
        <div className="contact-content">
          <FadeIn type="fade-right" className="contact-info">
            <div className="contact-list">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>{personal.location}</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p><a href={`mailto:${personal.email}`} style={{ color: "inherit", textDecoration: "none" }}>{personal.email}</a></p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhoneAlt />
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p><a href={`tel:${personal.phone}`} style={{ color: "inherit", textDecoration: "none" }}>{personal.phone}</a></p>
                </div>
              </div>
            </div>
            <SocialLinks />
          </FadeIn>

          <FadeIn type="fade-left" className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message <FaPaperPlane />
              </button>
              {status === "success" && (
                <p style={{ color: "var(--primary)", marginTop: "1rem" }}>
                  Thanks for reaching out! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p style={{ color: "var(--accent)", marginTop: "1rem" }}>
                  Please fill in all fields.
                </p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
