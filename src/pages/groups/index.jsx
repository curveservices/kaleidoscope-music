import SmallHero from "../../components/heroSmall";
import sax1 from "../../assets/images/sax2.jpeg";
import useScrollState from "../../components/scrollState";
import Helmet from "../../components/helmet";
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
    <>
      <Helmet
        title="Our Groups | Kaleidoscope Music Groups in Kent"
        description="We have a range of ensembles and group, so there's a place for everyone - no auditions, just a shared love of music."
        keywords="learn music, music, Kent, music groups, Rochester Kent, Kaleidoscope music groups"
        link="https://www.kaleidoscopemusic.org.uk/groups"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "MusicGroup",
          name: "Kaleidoscope Music",
          description:
            "We have a range of ensembles and group, so there's a place for everyone - no auditions, just a shared love of music.",
          url: "https://www.kaleidoscopemusic.org.uk/groups",
          sameAs: [
            "https://www.facebook.com/KaleidoscopeCreativeArts/",
            "https://www.instagram.com/hdproductionsltd/",
          ],
          image: [
            "https://www.kaleidoscopemusic.org.uk/assets/images/home.jpg",
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kent",
            addressRegion: "South East England",
            addressCountry: "United Kingdom",
          },
          telephone: "+44 1795 522 738",
          email: "brian@quercusgraphics.co.uk",
        }}
      />
      <div className="groups-page">
        <SmallHero
          eyebrow="Our Groups"
          h1="Different Instruments."
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
    </>
  );
};

export default Groups;
