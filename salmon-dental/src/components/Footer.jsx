import { Link } from "react-router";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-section">
          <h4 className="footer-heading footer-heading type-heading-3">
            Salmon Dental
          </h4>
          <p className="footer-text type-body">Sylacauga, Alabama.</p>
          <p className="footer-text type-body">Email: info@salmondental.com</p>
          <p to="/about" className="footer-text type-body">
            (256) 249-2211
          </p>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading type-heading-3">Explore</h4>
          <Link to="/about" className="footer-text type-body">
            About us
          </Link>
          <Link to="/services" className="footer-text type-body">
            Our services
          </Link>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading footer-heading type-heading-3">
            Your visit
          </h4>
          <Link to="/services" className="footer-text type-body">
            New patients
          </Link>
          <Link to="/about" className="footer-text type-body">
            Patient forms
          </Link>
          <Link to="/contact" className="footer-text type-body">
            Request an appointment
          </Link>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading footer-heading type-heading-3">
            Come say hello
          </h4>
          <p to="/services" className="footer-text type-body">
            495 W 3rd St, Sylacauga, AL 35150
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "10px",
            whiteSpace: "nowrap",
          }}
        >
          <p to="/contact" className="footer-text type-body">
            MON-THU
          </p>
          <p to="/contact" className="footer-text type-body">
            8 AM - 5 PM
          </p>
          <p to="/contact" className="footer-text type-body">
            FRI
          </p>
          <p to="/contact" className="footer-text type-body">
            8 AM - 12 PM
          </p>
          <p to="/contact" className="footer-text type-body">
            SAT - SUN
          </p>
          <p to="/contact" className="footer-text type-body">
            CLOSED
          </p>
        </div>
      </div>
      <p className="type-small footer-text">
        © 2026 Salmon Dental. All rights reserved.
      </p>
    </footer>
  );
}
