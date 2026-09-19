import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import { Link } from "react-router-dom";

const GroupCard = ({ title, description, icon, colour, image, href }) => {
  return (
    <article className={`group-card group-card--${colour}`}>
      <div className="group-card__image">
        <img src={image} alt="" loading="lazy" />

        <div className="group-card__icon" style={{ background: colour }}>
          <FontAwesomeIcon icon={icon} />
        </div>
      </div>

      <div className="group-card__content">
        <h3>{title}</h3>

        <p>{description}</p>

        <Link to={href} className="group-card__link link">
          Discover the group
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
};

export default GroupCard;
