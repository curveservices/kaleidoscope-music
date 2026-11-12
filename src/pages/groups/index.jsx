import SmallHero from "../../components/heroSmall";
import sax1 from "../../assets/images/sax2.jpeg";
import useScrollState from "../../components/scrollState";

import CTA from "../../components/cta";
import GroupsGrid from "../../components/groupsGrids";
import { groups } from "../../groupsData";
import "./index.scss";

const Groups = () => {
  const FadeInSection = ({ children }) => {
    useScrollState();
    return <div className="fade-in-on-scroll">{children}</div>;
  };
  return (
    <div className="groups-page">
      <SmallHero
        eyebrow="Our Groups"
        h1="Different Instraments."
        h1b="One"
        h1c="Community"
        p="We have a range of ensembles and group, so there's a place for everyone - no auditions, 
        just a shared love of music."
        button1Link="/contact-us/#join-us"
        button1Text="Join us"
        button2Link="/events"
        button2Text="Live events"
        src={sax1}
      />
      <FadeInSection>
        <GroupsGrid groups={groups} />
      </FadeInSection>
      <FadeInSection>
        <CTA />
      </FadeInSection>
    </div>
  );
};

export default Groups;
