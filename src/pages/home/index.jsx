import { groups } from "../../groupsData.js";
import Hero from "../../components/hero";
import home from "../../assets/images/home.jpg";
import useScrollState from "../../components/scrollState copy/index.jsx";
import IntroSection from "../../components/intro";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import GroupsGrid from "../../components/groupsGrids";
import TargetCustomer from "../../components/whoItsFor/index.jsx";

const Home = () => {
  const FadeInSection = ({ children }) => {
    useScrollState();
    return <div className={`fade-in-on-scroll`}>{children}</div>;
  };
  const introFeatures = [
    {
      id: "play",
      number: "01",
      icon: faMusic,
      title: "Play",
      description:
        "Make music with other people in a friendly and supportive environment.",
      color: "var(--pink)",
    },
    {
      id: "connect",
      number: "02",
      icon: faPeopleGroup,
      title: "Connect",
      description:
        "Meet people who share your love of music and become part of a community.",
      color: "var(--teal)",
    },
    {
      id: "grow",
      number: "03",
      icon: faArrowUpRightDots,
      title: "Grow",
      description:
        "Build confidence, develop your playing and discover new musical challenges.",
      color: "var(--yellow)",
    },
  ];
  return (
    <div className="home-page">
      <Hero
        src={home}
        h1="Make Music."
        h1a="find"
        h1b="your"
        h1c="people."
        p="Join a friendly community of musicians in Rochester, Kent - from beginers and returning players to experienced musicians"
        eyebrow="Kaleidoscope music groups"
        button1Text="Find you group"
        button1Link=""
        button2Text="Come & Play"
        button2Link=""
      />
      <FadeInSection>
        <IntroSection
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
            We welcome beginners, returning musicians and experienced players alike, with different groups offering
            amerent leveis or challende"
        />
      </FadeInSection>
    </div>
  );
};

export default Home;
