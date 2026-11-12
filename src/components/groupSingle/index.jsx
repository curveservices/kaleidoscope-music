import HomeHero from "../homeHero";
import useScrollState from "../scrollState";
import TextImage from "../textImage";
import Testimonials from "../testimonials";
import flutes from "../../assets/images/flutes.jpg";
import "./index.scss";
import Button from "../button";
import FeatureCard from "../featureCards";
import { faClock, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const GroupSingle = (props) => {
  const FadeInSection = ({ children }) => {
    useScrollState();
    return <div className="fade-in-on-scroll">{children}</div>;
  };
  const features = [
    {
      id: 1,
      number: "01",
      icon: faClock,
      title: "Rehearsals Times",
      description: `${props.time}`,
      color: "var(--pink)",
      display: "none",
    },
    {
      id: 2,
      number: "02",
      icon: faCalendarDays,
      title: "Rehearsals Days",
      description: `${props.days}`,
      color: "var(--teal)",
      display: "none",
    },
  ];
  return (
    <div className="group-page">
      <HomeHero
        src={props.src}
        eyebrow={props.HeroEyebrow}
        h1a={props.HeroH1a}
        h1b={props.HeroH1b}
        h1c={props.HeroH1c}
        h1={props.HeroH1}
        p={props.HeroP}
        p1={props.HeroP1}
        button1Link={props.HeroButton1Link}
        button1Text={props.HeroButton1Text}
        button2Link={props.HeroButton2Link}
        button2Text={props.HeroButton2Text}
      />
      <FadeInSection>
        <div className="group-page__content">
          <TextImage
            src={props.ContentImage}
            eyebrow={props.ContentEyebrow}
            h2={props.ContentH2}
            headingAccent={props.ContentHeadingAccent}
            color="var(--yellow)"
            p1={props.ContentP}
            p2={props.ContentP1}
            buttonText="Join Us"
            buttonLink="/join-us"
            buttonColor="var(--pink)"
          />
        </div>
      </FadeInSection>
      <FadeInSection>
        <section className="group-page__more-info">
          <div className="group-page__more-info__container">
            <div className="header">
              <div className="eyebrow">{props.MoreInfoEyebrow}</div>
              <h2>Rehersals</h2>
              <p>{props.MoreInfoP}</p>
              <p>{props.MoreInfoP1}</p>
              <p>{props.MoreInfoP2}</p>
              <Button
                text="Back to Groups"
                link="/groups"
                background="var(--pink)"
              />
            </div>
            <div className="group-page__more-info__container-cards">
              {features.map((feature) => (
                <FeatureCard key={feature.id} {...feature} />
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>
      <FadeInSection>
        <Testimonials />
      </FadeInSection>
    </div>
  );
};

export default GroupSingle;
