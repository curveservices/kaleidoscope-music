import hero from "../../../assets/images/mosaic.webp";
import GroupSingle from "../../../components/groupSingle";

const Mosaic = () => {
  return (
    <GroupSingle
      title="Mosaic Sounds | Kaleidoscope Music Groups"
      description="Mosaic Sounds are a small group of instrumentalists. The group is led by highly experienced Bassoon player Karen."
      url="https://www.kaleidoscopemusic.org.uk/mosaic-sounds"
      src={hero}
      HeroEyebrow="Mosaic Sounds"
      HeroH1="Kaleidoscope"
      HeroH1b="Mosaic"
      HeroH1c="Sounds"
      HeroP="Mosaic Sounds are a small group of instrumentalists. "
      HeroP1="The group is led by highly experienced Bassoon player Karen."
      HeroButton1Link="/join-us"
      HeroButton1Text="Join Us"
      HeroButton2Link="/events"
      HeroButton2Text="View Events"

      ContentImage={null}
      ContentEyebrow="Meet the Conductor"
      ContentH2="Karen"
      ContentHeadingAccent="Conductor"
      ContentP="Karen is a highly experienced bassoon player and has played with many orchestras and ensembles. She has a passion for teaching and enjoys sharing her knowledge and experience with others."
      ContentP1=" She has been a member of Kaleidoscope for many years and is excited to lead Mosaic Sounds, bringing together musicians from different backgrounds to create beautiful music."

      time="The Mosaic Sounds group rehearses from 7:15pm until 8:00pm."
      days="Every Monday evening during term time."
      MoreInfoP="Mosaic Sounds play a range of
        music from many genres: baroque, classical, modern and folk. We welcome anyone who
        enjoys exploring different styles and harmonies: woodwind, strings, brass, etc."
    />
  );
};

export default Mosaic;
