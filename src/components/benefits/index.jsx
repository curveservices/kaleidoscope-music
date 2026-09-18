import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
const FeatureCard = ({ icon, title, description, color }) => {
  return (
    <article className={`feature-card feature-card--${color}`}>
      <div className="feature-card__top">
        {icon && (
          <div className="feature-card__icon" style={{ background: color }}>
            <FontAwesomeIcon icon={icon} />
          </div>
        )}
      </div>

      <div className="feature-card__content">
        <h3>{title}</h3>

        <p>{description}</p>
      </div>

      <span
        className="feature-card__shape"
        style={{ background: color }}
        aria-hidden="true"
      />
    </article>
  );
};

export default FeatureCard;
