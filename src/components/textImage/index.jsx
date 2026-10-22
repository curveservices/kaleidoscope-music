import Button from "../button";
import "./index.scss";

const TextImage = ({
    eyebrow,
    h2,
    headingAccent,
    color,
    p1,
    p2,
    src,
    buttonText,
    buttonLink
}) => {
  return (
    <section className="text-image">
      <div className="text-image__container">
        <div className="text-image__image">
          <img src={src} alt="" aria-hidden="true" loading="lazy" />
        </div>
        <div className="text-image__background" aria-hidden="true">
          <span className="shape shape--pink" />
          <span className="shape shape--teal" />
          <span className="shape shape--yellow" />
          <span className="shape shape--violet" />
          <span className="shape shape--blue" />
        </div>
        <div className="header">
          <div className="eyebrow">{eyebrow}</div>
          <h2>
            {h2} <span style={{ color: color }}>{headingAccent}</span>
          </h2>
          <p>{p1}</p>
          <p>{p2}</p>
          <Button text={buttonText} link={buttonLink} display />
        </div>
      </div>
    </section>
  );
}

export default TextImage;
