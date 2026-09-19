import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import { Link } from "react-router-dom";

const EventCard = ({
  month,
  date,
  img,
  title,
  timeIcon,
  time,
  locIcon,
  location,
  id,
}) => {
  return (
    <article className="event-card">
      <div className="event-card__image">
        <img src={img} alt="Kaleidoscope music groups Rochester, Kent" />
        <div className="event-card__date">
          <span className="event-card__month">{month}</span>
          <strong className="event-card__day">{date}</strong>
        </div>
      </div>

      <div className="event-card__content">
        <h3>{title}</h3>

        <div className="event-card__details">
          <p>
            <FontAwesomeIcon icon={timeIcon} style={{ color: "var(--pink)" }} />
            <strong> {time}</strong>
          </p>
          <p>
            <FontAwesomeIcon icon={locIcon} style={{ color: "var(--pink)" }} />
            <i> {location}</i>
          </p>
        </div>
        <Link to={`/events/${id}`} className="event-card__link link">
          Discover the group
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
};

export default EventCard;
