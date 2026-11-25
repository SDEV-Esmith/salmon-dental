import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function ReviewCard({
  review = 5,
  title,
  subtitle,
  description,
  footerText,
}) {
  return (
    <div className="review-container">
      <div className="review-stars">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            style={{
              color: i < review ? "var(--color-green)" : "var(--color-gray)",
            }}
          />
        ))}
      </div>

      <p className="card-description type-body">{description}</p>
      <div className="card-link">
        <p className="type-body">{footerText}</p>
      </div>
    </div>
  );
}
