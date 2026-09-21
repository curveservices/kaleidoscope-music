import { events } from "../../eventsData";
import EventsCard from "../eventsCard";
import "./index.scss";

const EventsPreview = () => {
  const upcomingEvents = events.slice(0, 3);

  return (
    <section className="events-preview">
      <div className="header">
        <span className="eyebrow">Upcoming events</span>
        <h2>
          Hear us <span>Play Togther</span>
        </h2>
        <p>
          There are always new opportunities to see us perform. Come along and
          support ourmusicians
        </p>
      </div>
      <div className="events-preview__card-container">
        {upcomingEvents.map((event) => (
          <EventsCard key={event.id} {...event} />
        ))}
      </div>
    </section>
  );
};

export default EventsPreview;
