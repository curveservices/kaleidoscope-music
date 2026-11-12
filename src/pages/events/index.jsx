import SmallHero from "../../components/heroSmall";
import hero from "../../assets/images/people.webp";
import { events } from "../../eventsData";
import MainEventCard from "../../components/eventCardMain";
import "./index.scss";

const Events = () => {
  return (
    <div className="events-page">
      <SmallHero
        src={hero}
        eyebrow="Our events"
        h1="A Showcase"
        h1a="From"
        h1b="Our"
        h1c="Groups"
        p="From our termly concerts to community performances, Find out what's coming up at Kaleidoscope Music."
        button1Text="Join Us"
        button1Link="/contact-us/#join-us"
        button2Text="Our Groups"
        button2Link="/groups"
      />
      <section className="events">
        <div className="events__intro-container">
          <div className="header">
            <div className="eyebrow">Upcoming events</div>
            <h2>
              Concerts, Performances
              <span className="header-accent">And More...</span>
            </h2>
          </div>
          <hr />
          <p>
            Join us for our upcoming concerts and events. There's something for
            everyone, whether you're playing, listening, or just supporting our
            community.
          </p>
        </div>
        <div className="events__card-grid">
          {events.map((event) => (
            <MainEventCard key={event.id} {...event} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
