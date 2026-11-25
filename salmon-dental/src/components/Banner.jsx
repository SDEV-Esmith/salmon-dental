import { Link } from "react-router";
import { MdArrowOutward } from "react-icons/md";
export default function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-text">
        <span
          className="type-label"
          style={{ color: "var(--color-muted)", paddingBottom: ".5rem" }}
        >
          YOUR NEXT CHAPTER STARTS WITH A SMILE
        </span>
        <h2 className="type-heading-2">Let’s make you feel at home.</h2>
        <p
          className="type-small banner-subtext"
          style={{ color: "var(--color-muted)" }}
        >
          Thoughtful dental care. A team that knows you.
        </p>
      </div>
      <Link to="/contact" className="large-green-button click-effect">
        Request Appointment
        <MdArrowOutward />
      </Link>
    </div>
  );
}
