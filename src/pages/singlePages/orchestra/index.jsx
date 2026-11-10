import GroupSingle from "../../../components/groupSingle";
import hero from "../../../assets/images/home.jpg";
import julie from "../../../assets/images/julie.JPEG";

const Orchestra = () => {
  return (
    <GroupSingle
      src={hero}
      HeroEyebrow="The Orchestra"
      HeroH1="Kaleidoscope"
      HeroH1b="Community"
      HeroH1c="Orchestra"
      HeroP="The orchestra and string ensemble are conducted by Julie Moore, who has been with us for 18 years."
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

      MoreInfoH2="Rehearsals"
      time="The Orchestra rehearses from 8.15pm until 9.30pm."
      days="Every Monday evening during term time."
      MoreInfoP="  All
        of the string players stay for this (you don't have to) and we are joined by woodwind and brass
        players. Unusually, we cater for recorder players who find they enjoy our repertoire. We
        welcome all players and Julie is happy to arrange parts to accommodate players' needs."
      MoreInfoP1="The orchestra is a healthy size and, like the ethos we have in the String Ensemble, everyone is
        valued and we aim to make good progress, as well as have fun, during the sessions. Some of
        the pieces we have played recently include 'El Dia Que Me Quiras' (Gardel), Creatures of
        Prometheus (Beethoven), Hungarian Dance (Brahms) and Entry of the Gladiators (Fucik).
        At our 2025 Christmas concert we played the world premiere of ‘Midwinter Merriment' specially
        composed for the orchestra by R.Hubbert."
      MoreInfoP2="Much of the choice of music comes from suggestions from the players as well as Julie’s own
        choices. She is always happy to do arrangements if she cannot source a set of particular parts.
        Recently we have taken part in Community events; raising money for various charities through
        concerts in Church and we have played in festivals. Everyone works hard to produce excellent
        performances."
    />
  );
};

export default Orchestra;
