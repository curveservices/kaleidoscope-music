import SmallHero from "../../components/heroSmall";
import hero from "../../assets/images/people.webp";
import { events } from "../../eventsData";
import MainEventCard from "../../components/eventCardMain";
import Helmet from "../../components/helmet";
import useScrollState from "../../components/scrollState";
import "./index.scss";
import CTA from "../../components/cta";

const Events = () => {
  const FadeInSection = ({ children }) => {
    useScrollState();
    return <div className="fade-in-on-scroll">{children}</div>;
  };
  return (
    <>
      <Helmet
        title="Our Events | Music Groups in Kent"
        description="From our termly concerts to community performances, Find out what's coming up at Kaleidoscope Music."
        keywords="learn music, music, Kent, music groups, Rochester Kent, Kaleidoscope music groups"
        link="https://www.kaleidoscopemusic.org.uk/events"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "MusicGroup",
          name: "Kaleidoscope Music",
          description:
            "From our termly concerts to community performances, Find out what's coming up at Kaleidoscope Music.",
          url: "https://www.kaleidoscopemusic.org.uk/events",
          sameAs: [
            "https://www.facebook.com/KaleidoscopeCreativeArts/",
            "https://www.instagram.com/hdproductionsltd/",
          ],
          image: [
            "https://www.kaleidoscopemusic.org.uk/assets/images/home.jpg",
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kent",
            addressRegion: "South East England",
            addressCountry: "United Kingdom",
          },
          telephone: "+44 1795 522 738",
          email: "brian@quercusgraphics.co.uk",
        }}
      />
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
        <FadeInSection>
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
                Join us for our upcoming concerts and events. There's something
                for everyone, whether you're playing, listening, or just
                supporting our community.
              </p>
            </div>
            <div className="events__card-grid">
              {events.map((event) => (
                <MainEventCard key={event.id} {...event} />
              ))}
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <CTA />
        </FadeInSection>
      </div>
    </>
  );
};

export default Events;
