import GroupCard from "../groupCard";
import scope from "../../assets/images/small-kaleidoscope.png";

import "./index.scss";

const GroupsGrid = ({
  eyebrow = "FIND YOUR SOUND",
  heading = "Something for",
  headingAccent = "every musician.",
  p1,
  groups = [],
}) => {
  return (
    <section className="groups-grid" id="groups">
      <div className="groups-grid__header">
        <div className="header">
          <span className="eyebrow">{eyebrow}</span>

          <h2>
            {heading} <span>{headingAccent}</span>
          </h2>
          {p1 && <p>{p1}</p>}
        </div>
      </div>

      <div className="groups-grid__grid">
        {groups.map((group) => (
          <GroupCard key={group.id} {...group} />
        ))}
      </div>
      <div className="groups-grid__image">
        <img src={scope} alt="" aria-hidden="true" />
      </div>
    </section>
  );
};

export default GroupsGrid;
