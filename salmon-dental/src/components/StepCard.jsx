import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import { MdArrowOutward } from "react-icons/md";

export default function StepCard({ step, title, description }) {
  return (
    <div
      className="card-container"
      style={{
        backgroundColor: "var(--color-light-bg)",
      }}
    >
      <div className="card-content">
        <h4
          className="card-subtitle type-small"
          style={{
            color: "var(--color-green)",
          }}
        >
          {step}
        </h4>
        <h3 className="card-title type-heading-3">{title}</h3>
        <p className="card-description type-body">{description}</p>
      </div>
    </div>
  );
}
