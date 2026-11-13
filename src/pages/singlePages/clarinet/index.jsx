import hero from "../../../assets/images/clarinets.webp";
import Beverley from "../../../assets/images/bev.jpg";
import GroupSingle from "../../../components/groupSingle";

const Clarinets = () => {
  return (
    <GroupSingle
      title="Clarinet Choir | Kaleidoscope Music Groups"
      description="Our Woodwind groups are led by Beverley Prankard. The woodwind groups have all thrived under Beverley’s inspired leadership and offer an enjoyable way of making music with like minded people."
      url="https://www.kaleidoscopemusic.org.uk/clarinet-choir"
      src={hero}
      HeroEyebrow="The Clarinet Choir"
      HeroH1="Kaleidoscope"
      HeroH1b="Clarinet"
      HeroH1c="Choir"
      HeroP="Our Woodwind groups are led by Beverley Prankard."
      HeroP1="The woodwind groups have all thrived under Beverley’s inspired
        leadership and offer an enjoyable way of making music with like
        minded people."
      HeroButton1Link="/join-us"
      HeroButton1Text="Join Us"
      HeroButton2Link="/events"
      HeroButton2Text="View Events"

      ContentImage={Beverley}
      ContentEyebrow="Meet the Conductor"
      ContentH2="Beverley Prankard"
      ContentHeadingAccent="Conductor"
      ContentP="Beverley
        started playing the flute at 11 and quickly progressed doing all of
        her grade exams and joined the London Schools Symphony
        Orchestra whilst still at school. Moving to Kent she continued
        playing and joined the Gravesend Borough Band, where she is
        principal flute. She has been a member there for over 40 years!"
      ContentP1="She became an instrumental teacher once her children were all at
        school, and now visit twelve schools a week teaching flute, clarinet,
        saxophone and some brass. About 20 years ago she set up her own
        Glen Miller style big band and a sax quintet. She regularly play out
        with the various groups which is her passion."

      time="The Clarinet Choir rehearses from 7.15pm until 8.00pm."
      days="Every Monday evening during term time."
      MoreInfoP="A traditional clarinet choir with both Bb and bass clarinet parts. The music tends to be
        on the classical side but we sometimes jazz our pieces up !!"
    />
  );
};

export default Clarinets;
