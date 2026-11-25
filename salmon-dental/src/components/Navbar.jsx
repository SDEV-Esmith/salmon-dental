import { useState } from "react";
import { NavLink, Link } from "react-router";
import { Sling as Hamburger } from "hamburger-react";
import TopBanner from "./TopBanner";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 100,
        }}
      >
        <TopBanner />
        <div className="navbar">
          <Link to="/" className="navbar-logo-container">
            <span className="logo-text">salmon</span>
            <span className="logo-bottom-text">DENTAL</span>
          </Link>
          <div className="nav-link-desktop">
            <div className="nav-links">
              <NavLink
                to="/"
                end
                className="nav-link click-effect"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/services"
                className="nav-link click-effect"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </NavLink>

              <NavLink
                to="/new-patients"
                className="nav-link click-effect"
                onClick={() => setMenuOpen(false)}
              >
                New Patients
              </NavLink>
              <NavLink
                to="/about"
                className="nav-link click-effect"
                onClick={() => setMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link click-effect"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link-button click-effect"
                onClick={() => setMenuOpen(false)}
              >
                Book Appointment
              </NavLink>
            </div>
          </div>
          <div className="nav-link-mobile">
            <div className="hamburger-container">
              <Hamburger
                color="#18272e"
                toggled={menuOpen}
                toggle={setMenuOpen}
              />
            </div>
            {menuOpen && (
              <div
                className="menu-overlay"
                onClick={() => setMenuOpen(false)}
              />
            )}
            <div className={`off-screen-container ${menuOpen ? "open" : ""}`}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  padding: "15px 15px",
                }}
              >
                <div className="nav-links">
                  <NavLink
                    to="/"
                    end
                    className="nav-link click-effect"
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/services"
                    className="nav-link click-effect"
                    onClick={() => setMenuOpen(false)}
                  >
                    Services
                  </NavLink>

                  <NavLink
                    to="/new-patients"
                    className="nav-link click-effect"
                    onClick={() => setMenuOpen(false)}
                  >
                    New Patients
                  </NavLink>
                  <NavLink
                    to="/about"
                    className="nav-link click-effect"
                    onClick={() => setMenuOpen(false)}
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className="nav-link click-effect"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact
                  </NavLink>
                </div>
                <NavLink
                  to="/contact"
                  className="nav-link-button click-effect"
                  onClick={() => setMenuOpen(false)}
                >
                  Request Appointment
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
