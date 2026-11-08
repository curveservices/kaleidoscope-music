import hero from "../../assets/images/sax.webp";;
import Beverley from "../../assets/images/bev.jpg";
import GroupSingle from '../../components/groupSingle'
const Saxophones = () => {
  return (
    <GroupSingle
      src={hero}
      HeroEyebrow="The Saxophone Choir"
      HeroH1="Kaleidoscope"
      HeroH1b="Saxophone"
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

      time="The Saxophone Choir rehearses from 8:15pm until 9:00pm."
      days="Every Monday evening during term time."
      MoreInfoP="Our sax group features alto, tenor and baritone, but we would very much like to have
        a soprano sax in the group, if there’s someone out there!! The sax group generally
        plays jazz pieces with the occasional modern classic piece."
    />
  );
};

export default Saxophones;
