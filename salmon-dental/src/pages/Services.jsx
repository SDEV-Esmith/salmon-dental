import { Link } from "react-router";
import { MdArrowOutward } from "react-icons/md";
import Team from "../assets/images/team.png";
import Portait from "../assets/images/portrait.png";
import Banner from "../components/Banner";
import Card from "../components/Card";
import ClinicSuite from "../assets/images/ClinicalSuite.png";
export default function Services() {
  return (
    <div className="app">
      <section className="image-hero-section services-hero">
        <div className="section-container">
          <div className="hero-container">
            <div className="hero-text">
              <span className="type-label heading-label">OUR SERVICES</span>
              <h1 className="hero-heading">
                Care for every chapter
                <br />
                of your smile.
              </h1>
              <p className="type-small hero-subtext">
                From everyday essentials to a fresh start, discover thoughtful
                dentistry tailored to you.
              </p>
            </div>
            <div className="hero-image-container">
              <img
                src={ClinicSuite}
                alt="Smiling dental patient"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="section-container">
          <div className="text-container">
            <span className="type-label heading-label">
              COMPREHENSIVE CARE, CLOSE TO HOME
            </span>
            <h2 className="type-heading-2">What can we help you with?</h2>
            <div className="card-grid">
              <Card
                title="General dentistry"
                subtitle="01 / PREVENT & PROTECT"
                description="A strong foundation for lifelong oral health."
                service="Exams & cleanings · Fillings ·
          Gum health · Preventive care"
              />
              <Card
                title="Cosmetic dentistry"
                subtitle="02 / BRIGHTEN & REFINE"
                description="Thoughtful details. A naturally confident smile."
                service="Teeth whitening · Veneers ·
          Smile enhancements"
              />
              <Card
                title="Restorative dentistry"
                subtitle="03 / REPAIR & RENEW"
                description="Get back to smiling, eating, and feeling like you."
                service="Crowns & bridges · Dentures ·
          Tooth-colored restorations"
              />
              <Card
                title="Implant dentistry"
                subtitle="04 / REBUILD CONFIDENCE"
                description="Explore lasting options for missing teeth."
                service="Implant consultations ·
          Single-tooth & full-smile options"
              />
              <Card
                title="Advanced dentistry"
                subtitle="05 / SPECIALIZED SUPPORT"
                description="Personalized guidance for more complex needs."
                service="Root canal care · Extractions ·
          Individual treatment planning"
              />
              <div
                className="card-container"
                style={{
                  background: "var(--color-subtle-bg)",
                }}
              >
                <div className="card-content">
                  <h4 className="card-subtitle type-label">
                    LET’S START WITH A CONVERSATION
                  </h4>
                  <h3 className="card-title type-heading-3">
                    Not sure where
                    <br />
                    to start?
                  </h3>
                  <p className="card-description type-body">
                    We’ll listen, answer your questions, and help you find the
                    right next step.
                  </p>
                  <Link
                    to={`/contact?service=${encodeURIComponent("not-sure")}`}
                    className="large-white-button"
                    style={{ color: `var(--color-green)` }}
                  >
                    Explore service <MdArrowOutward />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="about-section"
        style={{ background: "var(--color-light-bg)" }}
      >
        <div className="section-container">
          <div className="welcome-grid">
            <div className="welcome-text">
              <span className="type-label heading-label">
                YOUR CARE, YOUR CHOICE
              </span>
              <h2 className="type-heading-2">
                A clear plan.
                <br />A comfortable pace.
              </h2>
              <p className="type-small hero-subtext">
                We’ll walk through your options together—so you can make a
                decision that feels right for your health, your goals, and your
                life.
              </p>
            </div>
            <div className="step-text">
              <div className="row">
                <p
                  className="type-body"
                  style={{ color: `var(--color-muted)` }}
                >
                  01
                </p>
                <div className="column">
                  <h3 className="type-heading-3">We listen</h3>
                  <p
                    className="type-body"
                    style={{ color: "var(--color-muted)" }}
                  >
                    Tell us what matters most to you.
                  </p>
                </div>
              </div>
              <div className="divider-border" />
              <div className="row">
                <p
                  className="type-body"
                  style={{ color: `var(--color-muted)` }}
                >
                  02
                </p>
                <div className="column">
                  <h3 className="type-heading-3">
                    Modern tools. A gentle touch.
                  </h3>
                  <p
                    className="type-body"
                    style={{ color: "var(--color-muted)" }}
                  >
                    Tell us what matters most to you.
                  </p>
                </div>
              </div>
              <div className="divider-border" />
              <div className="row">
                <p
                  className="type-body"
                  style={{ color: `var(--color-muted)` }}
                >
                  03
                </p>
                <div className="column">
                  <h3 className="type-heading-3">We plan together</h3>
                  <p
                    className="type-body"
                    style={{ color: "var(--color-muted)" }}
                  >
                    Take the next step with confidence.
                  </p>
                </div>
              </div>
              <div className="divider-border" />
            </div>
          </div>
        </div>
      </section>

      <Banner />
    </div>
  );
}
