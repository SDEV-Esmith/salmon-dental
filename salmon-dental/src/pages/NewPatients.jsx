import { Link } from "react-router";
import MarqueeModule from "react-fast-marquee";
import { MdArrowOutward } from "react-icons/md";
import HeroImage from "../assets/images/hero-image.png";
import Card from "../components/Card";
import ReviewCard from "../components/ReviewCard";
import { useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import DownloadCard from "../components/DownloadCard";
import Banner from "../components/Banner";
import StepCard from "../components/StepCard";
const Marquee = MarqueeModule.default;

export default function NewPatients() {
  const faqs = [
    {
      question: "What should I bring to my first appointment?",
      answer:
        "Please bring your insurance information, a valid ID, and any relevant dental records.",
    },
    {
      question: "What if I feel nervous about dental visits?",
      answer:
        "Our team is committed to making your visit as comfortable and stress-free as possible.",
    },
    {
      question: "How do I request an appointment?",
      answer:
        "You can request an appointment through our online booking form or by calling our office.",
    },
  ];

  function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="faq-item">
        <button
          className="row align-center faq-question"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <h3 className="type-heading-3">{question}</h3>

          {isOpen ? <MdRemove /> : <MdAdd />}
        </button>

        {isOpen && (
          <div className="faq-answer">
            <p className="type-small">{answer}</p>
          </div>
        )}

        <div className="divider-border" />
      </div>
    );
  }
  return (
    <div className="app">
      <section className="image-hero-section new-patients-hero">
        <div className="section-container">
          <div className="hero-container">
            <div className="hero-text">
              <span className="type-label heading-label">NEW PATIENTS</span>
              <h1 className="hero-heading">
                Your first visit.
                <br />A fresh start.
              </h1>
              <p className="type-small hero-subtext">
                A new dental home should feel like a good fit. Here’s everything
                you need to feel ready.
              </p>
              <div className="heading-cta-container">
                <div className="row">
                  <Link
                    to="/contact"
                    className="large-green-button click-effect"
                  >
                    Request Appointment
                    <MdArrowOutward />
                  </Link>
                </div>
              </div>
            </div>
            <div className="hero-image-container">
              <img
                src={HeroImage}
                alt="Smiling dental patient"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="welcome-section">
        <div className="section-container">
          <div className="welcome-text">
            <span className="type-label heading-label">WHAT TO EXPECT</span>
            <h2 className="type-heading-2">Let’s get to know your smile.</h2>
            <div className="card-grid">
              <StepCard
                step="01"
                title="A friendly hello"
                description="We’ll get you settled, review your health history, and learn what brings you in."
              />
              <StepCard
                step="02"
                title="A closer look"
                description="A thoughtful exam and any recommended imaging help us understand your smile."
              />
              <StepCard
                step="03"
                title="A plan, together"
                description="We’ll talk through what we see, answer your questions, and explain your next steps."
              />
            </div>
          </div>
          <div className="mini-banner">
            <span className="type-label" style={{ color: "var(--color-green" }}>
              A FEW THINGS TO BRING
            </span>
            <span
              className="type-small-semibold"
              style={{ color: "var(--color-dark)" }}
            >
              Photo ID / Insurance details / Medication list / Patient forms
            </span>
          </div>
        </div>
      </section>

      <section
        className="contact-section"
        style={{ background: "var(--color-dark-bg)" }}
      >
        <div className="section-container">
          <div className="welcome-grid">
            <div className="welcome-text">
              <span
                className="type-label heading-label"
                style={{ color: "var(--color-subtle)" }}
              >
                INSURANCE & PAYMENT
              </span>
              <h2 className="type-heading-2" style={{ color: "#fff" }}>
                Less guesswork.
                <br />
                More peace of mind.
              </h2>
              <p
                className="type-small hero-subtext"
                style={{ color: "var(--color-light-muted)" }}
              >
                Our team can help you understand your benefits and explore
                payment options before treatment begins.
              </p>
            </div>
            <div
              className="card-container"
              style={{
                backgroundColor: "#fff",
              }}
            >
              <div className="card-content">
                <h3 className="card-title type-heading-3">
                  Let’s talk coverage.
                </h3>
                <p className="card-description type-small">
                  Have your insurance card handy? Reach out before your visit so
                  we can help with the details.
                </p>
                <p className="card-description type-small">
                  Questions about payment?
                  <br />
                  We’ll walk you through your options.
                </p>
                <Link
                  to={`/contact?service=${encodeURIComponent("payment")}`}
                  className="large-white-button"
                  style={{ color: `var(--color-green)` }}
                >
                  Contact our team <MdArrowOutward />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="about-section"
        style={{ background: "var(--color-light-bg" }}
      >
        <div className="section-container">
          <div className="welcome-text">
            <span className="type-label heading-label">
              A LITTLE PREP. AN EASIER VISIT.
            </span>
            <h2 className="type-heading-2">Your paperwork, simplified.</h2>
            <p className="type-small hero-subtext">
              Get a head start with the forms below, or complete them when you
              arrive.
            </p>
          </div>
          <div className="card-grid">
            <DownloadCard
              title="New patient information"
              subtitle="PDF / PATIENT RESOURCES"
            />
            <DownloadCard
              title="Health history"
              subtitle="PDF / PATIENT RESOURCES"
            />
            <DownloadCard
              title="Privacy acknowledgment"
              subtitle="PDF / PATIENT RESOURCES"
            />
          </div>
        </div>
      </section>
      <section className="faq-section" style={{ backgroundColor: "#fff" }}>
        <div className="section-container">
          <div className="faq-dropdown-container">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </section>
      <Banner />
    </div>
  );
}
