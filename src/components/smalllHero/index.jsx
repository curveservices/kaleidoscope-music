import "./index.scss";
import { Suspense } from "react";
import LoadingSpinner from "../loadingSpinner";
import kaleidoscope from "../../assets/images/kaleidoscope.png";
import Button from "../button";

const SmallHero = ({
  src,
  eyebrow,
  h1,
  h1a,
  h1b,
  h1c,
  p,
  p1,
  button1Link,
  button1Text,
  button2Link,
  button2Text,
}) => {
  return (
    <section className="small-hero">
      <Suspense fallback={<LoadingSpinner />}>
        <div className="small-hero__image">
          <img
            src={src}
            loading="lazy"
            alt="Kaleidoscope music groups in Kent"
          />
        </div>
        <div className="small-hero__background" aria-hidden="true">
          <span className="shape shape--pink" />
          <span className="shape shape--teal" />
          <span className="shape shape--yellow" />
          <span className="shape shape--violet" />
          <span className="shape shape--blue" />
        </div>
      </Suspense>
      <div className="small-hero__image-overlay" />
      {/* Kaleidoscope image */}

      <div className="small-hero__content">
        <div className="small-hero__inner">
          <div className="header">
            <span className="eyebrow">{eyebrow}</span>
            <h1>{h1}</h1>
            <div className="h1-color">
              <h1 style={{ color: "var(--pink)" }}>{h1a}</h1>
              <h1 style={{ color: "var(--teal)" }}>{h1b}</h1>
              <h1 style={{ color: "var(--yellow)" }}>{h1c}</h1>
            </div>
            <div className="small-hero__paragraph-content">
              <p>{p}</p>
              <p>{p1}</p>
            </div>

            <div className="small-hero__btn-container">
              <Button
                text={button1Text}
                link={button1Link}
                background="var(--pink)"
              />
              <Button
                text={button2Text}
                link={button2Link}
                background="rgba(255, 255, 255, 0.05)"
              />
            </div>
            <ul>
              <li>No auditions</li>
              <li>No pressure</li>
              <li>Just music</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallHero;
