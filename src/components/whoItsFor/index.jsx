import Button from "../button";
import target from "../../assets/images/target.jpg";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TargetCustomer = ({ eyebrow, heading, headingAccent, p, targets }) => {

  return (
    <section className="target-section">
      <div className="target-section__image">
        <img src={target} alt="Kaleidoscope music groups in Kent" />
      </div>
      <div className="target-section__header">
        <div className="header">
          <span className="eyebrow">{eyebrow}</span>
          <h2>
            {heading} <span>{headingAccent}</span>
          </h2>
          <p>{p}</p>
        </div>

        <div className="target-section__cards-container">
          {targets.map((target) => (
            <article className="target-section__card" key={target.id}>
              <FontAwesomeIcon
                className="target-section__icon"
                icon={target.icon}
                style={{ color: target.color }}
              />
              <h3>{target.title}</h3>
              <p>{target.p}</p>
              <span
                className="target-section__shape"
                style={{ background: target.color }}
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
        <div className="target-section__btn-container">
          <Button
            text="Find out where you fit"
            link="/groups"
            background="var(--pink)"
          />
        </div>
      </div>
    </section>
  );
};

export default TargetCustomer;
