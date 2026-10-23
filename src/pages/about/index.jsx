import "./index.scss";
import about from "../../assets/images/flutes.webp";
import people from "../../assets/images/people.webp";
import SmallHero from "../../components/heroSmall";
import useScrollState from "../../components/scrollState";
import scope from "../../assets/images/small-kaleidoscope.png";
import {
  faPeopleGroup,
  faMusic,
  faStar,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import FeatureCard from "../../components/featureCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import TextImage from "../../components/textImage";
import Testimonials from "../../components/testimonials";

const About = () => {
  const FadeInSection = ({ children }) => {
    useScrollState();
    return <div className={`fade-in-on-scroll`}>{children}</div>;
  };
  const features = [
    {
      id: 1,
      number: "01",
      icon: faPeopleGroup,
      title: "Rehearsals",
      description:
        "We rehearse on Monday evenings during term time at Rochester Girls Grammar School. Rehearsals are between 6.30pm and 9.30pm depending on which group(s) you play in. At 8.00pm we have a 15 minute tea break which allows us to socialise with members of the various groups.",
          color: "var(--pink)",
      display: "none"
    },
    {
      id: 2,
      number: "02",
      icon: faMusic,
      title: "Our Groups",
      description:
        "As well as the Kaleidoscope Community Orchestra there is a string ensemble, Clarinet, Flute and Saxophone choirs, a mixed instrument group called Mosaic Sounds and a folk group. Full details of each group can be found here.",
      color: "var(--teal)",
    },
    {
      id: 3,
      number: "03",
      icon: faStar,
      title: "All are Welcome",
      description:
        "There are no auditions and we are always ready to welcome new players. So if you are looking to join an ensemble or orchestra, can read music and play to a reasonable standard then why not come along and give us a try. You will be made very welcome.",
      color: "var(--violet)",
    display: "none"
    },
    {
      id: 4,
      number: "04",
      icon: faCalendar,
      title: "Concerts & events",
      description: "We have a concert at the end of each term when friends and family are invited along to hear what we have been rehearsing. We also play at outside events in support of the local community. but there is no pressure to play at any of our concerts if you prefer not to.",
      color: "var(--yellow)",
      display: "none"
    },
  ];

  return (
    <div className="about-page">
      <SmallHero
        src={about}
        h1="About Us."
        h1a="More"
        h1b="Than"
        h1c="Music."
        p="We are a community music organisation based in Rochester, Kent. We run a range of music groups for people of all ages and abilities, bringing people together through the power of music."
        eyebrow="about Kaleidoscope"
        button1Text="Find your group"
        button1Link="/groups"
        button2Text="Contact us"
        button2Link="/contact"
      />
      <FadeInSection>
        <section className="about-page__intro">
          <div className="about-page__intro-container">
            <div className="about-page__intro-image">
              <img src={scope} alt="" aria-hidden="true" />
            </div>
            <div className="header">
              <div className="eyebrow">our story</div>
              <h2>
                From A Simple Idea to a
                <span style={{ color: "var(--teal)" }}>Thriving Community</span>
              </h2>
              <p>
                Kaleidoscope was set up by our founder, Patricia Norton, over 35
                years ago. Following Pat's retirement in 2025 Kaleidoscope
                Music, has been run by a small committee elected by its members.
              </p>
              <p>
                We have a concert at the end of each term when friends and
                family are invited along to hear what we have been rehearsing.
                We also play at outside events in support of the local
                community, but there is no pressure to play at any of our
                concerts if you prefer not to.
              </p>
            </div>

            <div className="about-page__socials">
              <Link
                to="https://www.facebook.com/KaleidoscopeCreativeArts/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="about-page__socials-icon">
                  <FontAwesomeIcon icon={faFacebook} />
                </div>

                <div className="about-page__socials-content">
                  <p>Follow us on Facebook</p>
                  <p>For the latest news and updates.</p>
                </div>
              </Link>
            </div>

            <div className="about-page__intro-features">
              {features.map((feature) => (
                <FeatureCard key={feature.id} {...feature} />
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>
      <FadeInSection>
        <TextImage
          eyebrow="our people"
          h2="More than"
          headingAccent="Just Music"
          color="var(--pink)"
          p1="Kaleidoscope music groups brings musicians together to play, learn, improve and enjoy music as part of a community."
          buttonLink="/groups"
          buttonText="Find Your group"
          src={people}
        />
      </FadeInSection>
      <FadeInSection>
        <Testimonials/>
      </FadeInSection>
    </div>
  );
};

export default About;
