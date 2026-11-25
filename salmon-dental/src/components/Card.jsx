import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import { MdArrowOutward } from "react-icons/md";

export default function Card({ title, subtitle, description, service }) {
  return (
    <div
      className="card-container"
      style={{
        backgroundColor: "#fff",
      }}
    >
      <div className="card-content">
        <h4 className="card-subtitle type-label">{subtitle}</h4>
        <h3 className="card-title type-heading-3">{title}</h3>
        <p className="card-description type-body">{description}</p>
        <p
          className="card-description type-small-semibold"
          style={{ color: "var(--color-dark)" }}
        >
          {service}
        </p>
        <Link
          to={`/contact?service=${encodeURIComponent(service)}`}
          className="large-white-button"
          style={{ color: `var(--color-green)` }}
        >
          Explore service <MdArrowOutward />
        </Link>
      </div>
    </div>
  );
}
