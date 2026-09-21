import Button from "../button";
import scope from "../../assets/images/small-kaleidoscope.png";
import music from "../../assets/images/music.jpg";
import "./index.scss";

const CTA = () => {
    return (
      <section className="cta">
        <div className="cta__scope-image">
          <img src={scope} loading="lazy" alt="" aria-hidden="true" />
        </div>
        <div className="cta__image">
          <img src={music} alt="" />
        </div>
        <div className="cta__image-overlay" />
        <div className="header">
          <div className="eyebrow">Ready to make some music?</div>
          <h2>
            Whether you're picking up an instrument for the first time or
            getting back into playing, we'd love to hear from you.
          </h2>
        </div>
        <div className="cta__btn-container">
          <Button
            text="Get in Touch"
            link="/contact-us"
            background="var(--pink)"
          />
          <Button text="Find your group" link="/groups" />
        </div>
      </section>
    );
};

export default CTA;