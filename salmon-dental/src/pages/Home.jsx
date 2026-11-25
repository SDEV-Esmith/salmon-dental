import { Link } from "react-router";
import MarqueeModule from "react-fast-marquee";
import { MdArrowOutward } from "react-icons/md";
import HeroImage from "../assets/images/hero-image.png";
import Card from "../components/Card";
import ReviewCard from "../components/ReviewCard";
import Banner from "../components/Banner";

const Marquee = MarqueeModule.default;

export default function Home() {
  return (
    <div className="app">
      <section className="image-hero-section home-hero">
        <div className="section-container">
          <div className="hero-container">
            <div className="hero-text">
              <span className="type-label heading-label">
                A HEALTHIER SMILE. A HAPPIER YOU.
              </span>
              <h1 className="hero-heading">
                Good people.
                <br />
                Gentle care.
                <br />
                Confident smiles.
              </h1>
              <p className="type-small hero-subtext">
                Modern dentistry with a hometown heart. Feel right at home at
                Salmon Dental in Sylacauga.
              </p>
              <div className="heading-cta-container">
                <Link
                  href="/book-appointment"
                  className="large-green-button click-effect"
                >
                  Request Appointment
                  <MdArrowOutward />
                </Link>
                <Link
                  href="/book-appointment"
                  className="large-white-button click-effect"
                >
                  Explore our care
                  <MdArrowOutward />
                </Link>
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
          <div className="welcome-grid">
            <div className="welcome-text">
              <span className="type-label heading-label">
                WELCOME TO SALMON DENTAL
              </span>
              <h2 className="type-heading-2">
                A familiar face.
                <br />A fresh approach to care.
              </h2>
              <p className="type-small hero-subtext">
                We believe great dentistry starts with listening. Here, you’ll
                find thoughtful treatment, clear conversations, and a team that
                puts your comfort first.
              </p>
              <Link
                href="/book-appointment"
                className="large-white-button click-effect"
              >
                Get to know us
                <MdArrowOutward />
              </Link>
            </div>
            <div className="step-text">
              <div className="row">
                <p
                  className="type-body"
                  style={{ color: `var(--color-muted)` }}
                >
                  01
                </p>
                <h3 className="type-heading-3">Care at your pace</h3>
              </div>
              <div className="divider-border" />
              <div className="row">
                <p
                  className="type-body"
                  style={{ color: `var(--color-muted)` }}
                >
                  02
                </p>
                <h3 className="type-heading-3">
                  Modern tools. A gentle touch.
                </h3>
              </div>
              <div className="divider-border" />
              <div className="row">
                <p
                  className="type-body"
                  style={{ color: `var(--color-muted)` }}
                >
                  03
                </p>
                <h3 className="type-heading-3">Rooted in our community</h3>
              </div>
              <div className="divider-border" />
            </div>
          </div>
        </div>
      </section>
      <section className="care-section">
        <div className="section-container">
          <span className="type-label heading-label">
            CARE FOR EVERY KIND OF SMILE
          </span>
          <h2 className="type-heading-2">Your smile, in good hands.</h2>
          <div className="card-grid">
            <Card
              title="General dentistry"
              subtitle="01 / PREVENT & PROTECT"
              description="Healthy habits start here. Exams, cleanings, and preventive care for your whole family."
            />
            <Card
              title="Cosmetic dentistry"
              subtitle="02 / BRIGHTEN & REFINE"
              description="Feel more like yourself with personalized whitening, veneers, and smile enhancements."
            />
            <Card
              title="Restorative dentistry"
              subtitle="03 / REPAIR & RENEW"
              description="Comfort, strength, and confidence restored with thoughtfully planned treatment."
            />
          </div>
        </div>
      </section>
      <section className="reviews-section">
        <div className="section-container">
          <span className="type-label heading-label">
            KIND WORDS, CONFIDENT SMILES
          </span>
          <h2 className="type-heading-2">Reviews</h2>
          <Marquee speed={50} style={{ paddingTop: "1rem" }}>
            <ReviewCard description="“From the moment you walk in, you feel at home. Friendly people and a truly comfortable experience.”" />
            <ReviewCard description="“They take time to listen and explain everything. I never feel rushed, and I always feel cared for.”" />
            <ReviewCard description="“A welcoming team that makes every visit feel easy. I finally look forward to taking care of my smile.”" />
          </Marquee>
        </div>
      </section>
      <Banner />
    </div>
  );
}
