import { Link } from "react-router";
import { MdArrowOutward } from "react-icons/md";
import Team from "../assets/images/team.png";
import Portait from "../assets/images/portrait.png";
import Banner from "../components/Banner";
export default function About() {
  return (
    <div className="app">
      <section
        className="hero-section"
        style={{ backgroundColor: "var(--color-light-bg)" }}
      >
        <div className="section-container">
          <div className="hero-container">
            <div className="hero-text">
              <div>
                <span className="type-label heading-label">
                  ABOUT SALMON DENTAL
                </span>
                <h1 className="hero-heading">
                  Good dentistry.
                  <br />
                  Even better people.
                </h1>
              </div>
            </div>
            <p className="type-small hero-subtext">
              We’re here for the smiles, the conversations, and the community
              we’re proud to call home.
            </p>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="section-container">
          <div className="image-with-text-grid">
            <div className="row align-center">
              <div className="portrait-image">
                <img src={Portait} style={{ borderRadius: "9999px" }} />
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                <div className="text-container">
                  <span
                    className="type-label heading-label"
                    style={{ color: `var(--color-green)` }}
                  >
                    MEET YOUR DENTIST
                  </span>
                  <h2 className="type-heading-2">
                    A familiar face in your corner.
                  </h2>
                  <p
                    className="type-small-semibold"
                    style={{ color: `var(--color-green)`, fontSize: "1rem" }}
                  >
                    Your Salmon Dental dentist
                  </p>
                </div>
                <p
                  className="type-body"
                  style={{ color: `var(--color-muted)`, padding: ".5rem 0" }}
                >
                  Great care is a conversation. We take the time to understand
                  your goals, explain your options, and help you feel confident
                  about what comes next.
                </p>
                <p
                  className="type-body"
                  style={{ color: `var(--color-muted)` }}
                >
                  Here, your questions are always welcome—and your comfort
                  always comes first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="about-section"
        style={{ background: "var(--color-subtle-bg)" }}
      >
        <div className="section-container">
          <div className="">
            <span
              className="type-label heading-label"
              style={{ color: `var(--color-green)` }}
            >
              WHAT MATTERS TO US
            </span>
            <h2 className="type-heading-2">
              Thoughtful care, every step of the way.
            </h2>
            <div className="step-grid">
              <div className="step-grid-text">
                <p
                  className="type-label"
                  style={{ color: `var(--color-green)` }}
                >
                  01
                </p>
                <div>
                  <h3 className="type-heading-3">People before procedures</h3>
                  <p
                    className="type-body"
                    style={{ color: `var(--color-muted)`, padding: ".5rem 0" }}
                  >
                    We listen first and plan your care around what matters to
                    you.
                  </p>
                </div>
              </div>
              <div className="step-grid-text">
                <p
                  className="type-label"
                  style={{ color: `var(--color-green)` }}
                >
                  02
                </p>
                <div>
                  <h3 className="type-heading-3">Clarity, not complexity</h3>
                  <p
                    className="type-body"
                    style={{ color: `var(--color-muted)`, padding: ".5rem 0" }}
                  >
                    Straightforward conversations and treatment options you can
                    understand.
                  </p>
                </div>
              </div>
              <div className="step-grid-text">
                <p
                  className="type-label"
                  style={{ color: `var(--color-green)` }}
                >
                  03
                </p>
                <div>
                  <h3 className="type-heading-3">Comfort comes naturally</h3>
                  <p
                    className="type-body"
                    style={{ color: `var(--color-muted)`, padding: ".5rem 0" }}
                  >
                    A calm environment and a gentle approach, from hello to see
                    you soon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="section-container">
          <div className="image-with-text-grid">
            <div className="row align-center">
              <div className="image-container">
                <img src={Team} />
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                <div
                  className="text-container"
                  style={{ paddingBottom: "1rem" }}
                >
                  <span
                    className="type-label heading-label"
                    style={{ color: `var(--color-green)` }}
                  >
                    FRIENDLY FACES. FAMILIAR SMILES.
                  </span>
                  <h2 className="type-heading-2">Meet your smile team.</h2>
                </div>
                <div>
                  <h3 className="type-heading-3">Your care team</h3>
                  <p
                    className="type-body"
                    style={{ color: `var(--color-muted)`, padding: ".5rem 0" }}
                  >
                    Knowledgeable, approachable, and here for you.
                  </p>
                </div>
                <div>
                  <h3 className="type-heading-3">Dental hygiene</h3>
                  <p
                    className="type-body"
                    style={{ color: `var(--color-muted)` }}
                  >
                    Gentle preventive care and everyday guidance.
                  </p>
                </div>
                <div>
                  <h3 className="type-heading-3">Patient experience</h3>
                  <p
                    className="type-body"
                    style={{ color: `var(--color-muted)` }}
                  >
                    A warm welcome and help with all the details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Banner />
    </div>
  );
}
