import "./index.scss";
import FeatureCard from "../benefits";
import scope from "../../assets/images/small-kaleidoscope.png";

const IntroSection = ({
  eyebrow = "MORE THAN MUSIC",
  h2,
  headingAccent,
  p1,
  p2,
  features = [],
}) => {
  return (
    <section className="intro-section">
      <div className="intro-section__container">
        <div className="header">
          <span className="eyebrow">{eyebrow}</span>
          <h2>
            {h2} <span>{headingAccent}</span>
          </h2>
          <p className="intro-section__lead">{p1}</p>
          <p>{p2}</p>
        </div>
        <div className="intro-section__content"></div>
      </div>
      <div className="intro-section__features">
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
      <div className="intro-section__image">
        <img src={scope} alt="" aria-hidden="true" />
      </div>
    </section>
  );
};

export default IntroSection;
