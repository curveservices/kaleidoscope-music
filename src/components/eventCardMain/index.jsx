import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import { Link } from "react-router-dom";

const MainEventCard = ({
  day,
  month,
  date,
  color,
  img,
  title,
  time,
  location,
  content,
  type,
  id,
}) => {
  return (
    <article className="main-card" id={id}>
      <div className="main-card__date" style={{ background: `${color}` }}>
        <span className="main-card__month">{day}</span>
        <strong className="main-card__day">{date}</strong>
        <span className="main-card__month">{month}</span>
        <hr />
        <span className="main-card__time">{time}</span>
      </div>
      <div className="main-card__details">
        <div className="main-card__diamond main-card__diamond--pink" />
        <div className="main-card__diamond main-card__diamond--teal" />
        <div className="main-card__diamond main-card__diamond--yellow" />
        <div className="main-card__diamond main-card__diamond--violet" />
        <div className="main-card__diamond main-card__diamond--blue" />
        <div className="header">
          <div className="eyebrow">{type}</div>
          <h2>{title}</h2>
          <h3>{location}</h3>
        </div>
        <p>{content}</p>
      </div>
      <img
        className="main-card__image"
        src={img}
        alt="Kaleidoscope music groups Rochester, Kent"
      />
    </article>
  );
};

export default MainEventCard;
