import GroupSingle from "../../../components/groupSingle";
import hero from "../../../assets/images/strings.webp";
import julie from "../../../assets/images/julie.JPEG";
const Strings = () => {
  return (
    <GroupSingle
      src={hero}
      HeroEyebrow="The Strings"
      HeroH1="Kaleidoscope"
      HeroH1b="String"
      HeroH1c="Ensemble"
      HeroP="The string ensemble is conducted by Julie Moore, who has been with us for 18 years."
      HeroP1="During that time both the
              string ensemble and the orchestra have not only grown in size but
              also become much more skilled and confident due to Julie’s patient
              and inspiring leadership."
      HeroButton1Link="/join-us"
      HeroButton1Text="Join Us"
      HeroButton2Link="/events"
      HeroButton2Text="View Events"

      ContentImage={julie}
      ContentEyebrow="Meet the Conductor"
      ContentH2="Julie Moore"
      ContentHeadingAccent="Conductor"
      ContentP="Julie studied music at the Colchester Institute for Music and School
          of Art, gaining a BA Hons and a violin diploma LTCL followed by a
          PGCE teaching qualification in Birmingham, where she started her
          music teaching career. Moving to Kent she became Head of Music in
          a Music Specialist school. Throughout her career she has always performed in orchestras,
          including working with the BBC and the London Sinfonietta. One of the highlights was
          performing with her music students at the opening ceremony (live relay) of the Bejing
          Paralympics in 2008."
      ContentP1="During 'Covid' she learned to play the flute, subsequently joining the HTCB to play flute and
          now is joint conductor.
          As Julie says 'Music is to be enjoyed: we are all very lucky to have opportunities to grow and
          develop our music making skills. Making the most of our talents together’."
      ContentButtonText="Join Us"
      ContentButtonLink="/join-us"

      MoreInfoH2="Rehearsals"
      time="The string ensemble rehearses from 7.15pm until 8.00pm"
      days="Every Monday evening during term time."
      MoreInfoP="We have a full
        ensemble with players of varying standards from grade 3-8. Each term we have new music
        ranging from different periods of history and different styles."
      MoreInfoP1="The group is very hard working
        and friendly with the aim of enjoying playing the music and bringing the pieces up to a good
        standard ready for performances in the community. Pieces range from: Suites by Bach,,
        Palladio (Jenkins), Ave Verum (Mozart), The Sound of Music medley (Rogers). Braveheart
        (Horner)."
    />
  );
};

export default Strings;
