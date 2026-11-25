import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import { MdArrowOutward } from "react-icons/md";
import { MdArrowDownward } from "react-icons/md";
export default function DownloadCard({ title, subtitle }) {
  return (
    <div
      className="card-container"
      style={{
        backgroundColor: "#fff",
      }}
    >
      <div className="card-content" style={{ gap: "1rem" }}>
        <h4 className="card-subtitle type-label">{subtitle}</h4>
        <h3 className="card-title type-heading-3">{title}</h3>

        <Link
          className="large-white-button"
          style={{ color: `var(--color-green)` }}
        >
          Download form <MdArrowDownward />
        </Link>
      </div>
    </div>
  );
}
