import { groups } from "../../groupsData.js";
import Hero from "../../components/homeHero/index.jsx";
import home from "../../assets/images/home.jpg";
import useScrollState from "../../components/scrollState/index.jsx";
import IntroSection from "../../components/intro";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";
import GroupsGrid from "../../components/groupsGrids";
import TargetCustomer from "../../components/whoItsFor/index.jsx";
import EventsPreview from "../../components/eventsPreview/index.jsx";
import CTA from "../../components/cta/index.jsx";
import {
  faRedo,
  faStarHalfStroke,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Testimonial from "../../components/testimonials/index.jsx";
import Helmet from "../../components/helmet";
import "./index.scss";

const Home = () => {
  const FadeInSection = ({ children }) => {
    useScrollState();
    return <div className={`fade-in-on-scroll`}>{children}</div>;
  };
  const introFeatures = [
    {
      id: 1,
      number: "01",
      icon: faMusic,
      title: "Play",
      description:
        "Make music with other people in a friendly and supportive environment.",
      color: "var(--pink)",
      display: "none",
    },
    {
      id: 2,
      number: "02",
      icon: faPeopleGroup,
      title: "Connect",
      description:
        "Meet people who share your love of music and become part of a community.",
      color: "var(--teal)",
      display: "none",
    },
    {
      id: 3,
      number: "03",
      icon: faArrowUpRightDots,
      title: "Grow",
      description:
        "Build confidence, develop your playing and discover new musical challenges.",
      color: "var(--yellow)",
      display: "none",
    },
  ];
  const homeTargets = [
    {
      id: 1,
      icon: faUser,
      title: "New to Playing?",
      p: "Start your musical journey with us.",
      color: "var(--pink)",
    },
    {
      id: 2,
      icon: faRedo,
      title: "Getting back into it?",
      p: "Rediscover the joy of playing",
      color: "var(--teal)",
    },
    {
      id: 3,
      icon: faStarHalfStroke,
      title: "Already experienced?",
      p: "Find a group to challenge you",
      color: "var(--violet)",
    },
  ];
  return (
    <>
      <Helmet
        title="Kaleidoscope Music | Music Groups in Kent"
        description="Kaleidoscope is a friendly community of musicians in Rochester, Kent - from returning players to inexperienced and experienced musicians."
        keywords="learn music, music, Kent, music groups, Rochester Kent, Kaleidoscope music groups"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "MusicGroup",
          name: "Kaleidoscope Music",
          description:
            "Kaleidoscope is a friendly community of musicians in Rochester, Kent - from returning players to inexperienced and experienced musicians.",
          url: "https://www.kaleidoscopemusic.org.uk/",
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
      <div className="home-page">
        <Hero
          src={home}
          h1="Make Music."
          h1a="Make"
          h1b="New"
          h1c="Friends."
          p="Join a friendly community of musicians in Rochester, Kent - from returning players to inexperienced and experienced musicians."
          p1="A range of groups to choose from, including the Kaleidoscope Community Orchestra."
          eyebrow="Kaleidoscope music groups"
          button1Text="Find your group"
          button1Link="/groups"
          button2Text="Join Us"
          button2Link="/contact-us/#join-us"
        />
        <FadeInSection>
          <IntroSection
            eyebrow="MORE THAN MUSIC"
            h2="Music brings"
            headingAccent="us together"
            p1="Kaleidoscope music groups brings musicians together to play, learn, improve and enjoy music as part of a community."
            p2="Whether you're picking up your instrument for the first time, returning after years away or looking for a more challenging ensemble, there's a place for you here. "
            features={introFeatures}
          />
        </FadeInSection>
        <FadeInSection>
          <GroupsGrid
            p1="From full orchestras and string ensembles to smaller groups, there's plenty of ways to make music together."
            groups={groups}
          />
        </FadeInSection>
        <FadeInSection>
          <TargetCustomer
            eyebrow="all abilities welcome"
            heading="Not played for a while?"
            headingAccent="That's OK."
            p="You don't have to be an expert to join Kaleidoscope.
            We welcome returning musicians, inexperienced and experienced players alike, with a range of groups offering
            different levels of challenges"
            targets={homeTargets}
          />
        </FadeInSection>
        <FadeInSection>
          <EventsPreview />
        </FadeInSection>
        <FadeInSection>
          <Testimonial />
        </FadeInSection>
        <FadeInSection>
          <CTA />
        </FadeInSection>
      </div>
    </>
  );
};

export default Home;
