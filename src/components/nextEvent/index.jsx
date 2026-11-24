import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faChevronDown,
  faChevronUp,
  faXmark,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import { events } from "../../eventsData"; // Adjust this path to your events data
import "./index.scss";

const NextEvent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Get today's date in local time as YYYY-MM-DD
  const today = new Date();
  const todayISO = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  // Find the next upcoming event
  const nextEvent = events
    .filter((event) => event.dateISO && event.dateISO >= todayISO)
    .sort((a, b) => a.dateISO.localeCompare(b.dateISO))[0];

  // Don't display anything if there are no upcoming events
  if (!nextEvent) return null;

  // Parse the ISO date using local time to avoid timezone issues
  const [year, month, day] = nextEvent.dateISO.split("-").map(Number);
  const eventDate = new Date(year, month - 1, day);

  const formattedDate = eventDate.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <aside
      className={`next-event ${isExpanded ? "next-event--expanded" : ""}`}
      style={{ "--event-colour": nextEvent.color || "var(--pink)" }}
      aria-label="Upcoming event"
    >
      {!isExpanded ? (
        <button
          className="next-event__mini"
          onClick={() => setIsExpanded(true)}
          aria-expanded="false"
          aria-label={`Expand upcoming event: ${nextEvent.title}`}
        >
          <span className="next-event__mini-icon">
            <FontAwesomeIcon icon={faCalendarDays} />
          </span>

          <span className="next-event__mini-content">
            <span className="next-event__eyebrow">Coming up next</span>
            <span className="next-event__mini-title">{nextEvent.title}</span>
            <span className="next-event__mini-date">
              {eventDate.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
              })}
            </span>
          </span>

          <span className="next-event__mini-arrow">
            <FontAwesomeIcon icon={faChevronUp} />
          </span>
        </button>
      ) : (
        <div className="next-event__panel">
          <div className="next-event__header">
            <span className="next-event__header-label">
              <FontAwesomeIcon icon={faCalendarDays} />
              Upcoming event
            </span>

            <button
              className="next-event__close"
              onClick={() => setIsExpanded(false)}
              aria-label="Close event details"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          <div className="next-event__body">
            <span className="next-event__type">{nextEvent.type}</span>

            <h3>{nextEvent.title}</h3>

            <p className="next-event__date">{formattedDate}</p>

            <div className="next-event__details">
              <p>
                <FontAwesomeIcon icon={nextEvent.timeIcon} />
                <span>{nextEvent.time}</span>
              </p>

              <p>
                <FontAwesomeIcon icon={nextEvent.locIcon} />
                <span>{nextEvent.location}</span>
              </p>
            </div>

            <p className="next-event__description">{nextEvent.content}</p>

            <Link to="/events" className="next-event__link">
              View all events
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

          <button
            className="next-event__collapse"
            onClick={() => setIsExpanded(false)}
            aria-expanded="true"
          >
            Show less
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      )}
    </aside>
  );
};

export default NextEvent;
