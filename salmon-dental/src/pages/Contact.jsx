import { MdArrowOutward } from "react-icons/md";

export default function Contact() {
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
                <span className="type-label heading-label">CONTACT US</span>
                <h1 className="hero-heading">Let’s talk smiles.</h1>
              </div>
            </div>
            <p className="type-small hero-subtext">
              A question, a first visit, or your next appointment. We’re happy
              to help.
            </p>
          </div>
        </div>
      </section>
      <section className="contact-section" style={{ backgroundColor: "#fff" }}>
        <div className="section-container">
          <div className="contact-container">
            <div className="contact-info-container">
              <div className="contact-heading-container">
                <span className="type-label">WE’RE HERE FOR YOU</span>
                <h2 className="type-heading-2">Come say hello.</h2>
              </div>
              <div className="contact-text-container">
                <span className="type-label">CALL US</span>
                <h3 className="type-heading-3">(256) 555-0148</h3>
              </div>
              <div className="contact-text-container">
                <span className="type-label">EMAIL US</span>
                <p className="type-small">info@salmondental.com</p>
              </div>
              <div className="contact-text-container">
                <span className="type-label">FIND US</span>
                <p className="type-small">
                  123 Example Street
                  <br />
                  Sylacauga, Alabama
                </p>
              </div>
              <div className="contact-hours-container">
                <h3 className="type-heading-3">Office hours</h3>
                <div className="hours-grid">
                  <div className="hours-text-container">
                    <p className="type-small">Monday - Thursday</p>
                    <p className="type-small">Friday</p>
                    <p className="type-small">Saturday - Sunday</p>
                  </div>
                  <div className="hours-text-container">
                    <p className="type-small">8:00 am – 5:00 pm</p>
                    <p className="type-small">8:00 am - 12:00 pm</p>
                    <p className="type-small">Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="appointment-container">
              <h2 className="type-heading-2">Request an appointment</h2>
              <p className="type-small" style={{ margin: "1rem 0" }}>
                We’ll be in touch to help with the next step.
              </p>
              <form className="form-grid">
                <div className="form-text-container">
                  <label>Full name *</label>
                  <input name="name" placeholder="Your name"></input>
                </div>
                <div className="form-text-container">
                  <label>Email address *</label>
                  <input name="email" placeholder="you@example.com"></input>
                </div>
                <div className="form-text-container">
                  <label>Phone number *</label>
                  <input name="number" placeholder="(256) 555-0000"></input>
                </div>
                <div className="form-text-container">
                  <label>Service *</label>
                  <select name="service" placeholder="Choose service">
                    <option>General Dentistry</option>
                    <option>Cosmetic Dentistry</option>
                    <option>Restorative Dentistry</option>
                    <option>Implant Dentistry</option>
                    <option>Advanced Dentistry</option>
                    <option>Other/Not Sure</option>
                  </select>
                </div>
                <div className="form-textarea-container">
                  <label>Your message *</label>
                  <textarea placeholder="How can we make you smile?"></textarea>
                </div>
                <div className="agree-checkbox">
                  <label>
                    <input type="checkbox" />
                  </label>
                  <p
                    className="type-small"
                    style={{ marginBottom: "6.5px", color: "#fff" }}
                  >
                    I agree to be contacted about my request.
                  </p>
                </div>
                <button className="large-green-button">
                  Submit request <MdArrowOutward />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
