import {
  faGuitar,
  faGopuram,
  faDrumSteelpan,
  faWandSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { faItunesNote, faShoelace } from "@fortawesome/free-brands-svg-icons";
import steel from "./assets/images/steel.png";
import sax from "./assets/images/sax.png";
import home from "./assets/images/home.jpg";
import strings from "./assets/images/event3.jpg";

export const groups = [
  {
    id: "kirby-orchestra",
    title: "Kirby Orchestra",
    description:
      "Bring your instrument and make music as part of our full community orchestra.",
    icon: faGopuram,
    colour: "var(--violet)",
    image: home,
    href: "/groups/kirby-orchestra",
  },
  {
    id: "string-orchestra",
    title: "String Orchestra",
    description:
      "Play alongside other string musicians and develop your ensemble playing.",
    icon: faShoelace,
    colour: "var(--pink)",
    image: strings,
    href: "/groups/string-orchestra",
  },
  {
    id: "steel-band",
    title: "Steel Band",
    description:
      "Explore the sound of multiple flutes playing together in harmony.",
    icon: faDrumSteelpan,
    colour: "var(--teal)",
    image: steel,
    href: "/groups/flute-choir",
  },
  {
    id: "clarinet-ensemble",
    title: "Clarinet Ensemble",
    description:
      "Enjoy ensemble playing with fellow clarinettists in a friendly setting.",
    icon: faWandSparkles,
    colour: "var(--yellow)",
    image: "/images/groups/clarinets.jpg",
    href: "/groups/clarinet-ensemble",
  },
  {
    id: "saxophone-ensemble",
    title: "Saxophone Ensemble",
    description: "Make a big sound together with our saxophone ensemble.",
    icon: faWandSparkles,
    colour: "var(--blue)",
    image: sax,
    href: "/groups/saxophone-ensemble",
  },
  {
    id: "guitar",
    title: "Guitar Groups",
    description:
      "Play, learn and develop your guitar skills alongside other musicians.",
    icon: faGuitar,
    colour: "var(--violet)",
    image: "/images/groups/guitar.jpg",
    href: "/groups/guitar",
  },
  {
    id: "ukulele",
    title: "Ukulele",
    description:
      "Pick up your ukulele and enjoy relaxed group playing with other musicians.",
    icon: faGuitar,
    colour: "var(--yellow)",
    image: "/images/groups/ukulele.jpg",
    href: "/groups/ukulele",
  },
  {
    id: "mixed-ensembles",
    title: "Mixed Ensembles",
    description:
      "Explore smaller combinations of instruments and discover something new.",
    icon: faItunesNote,
    colour: "var(--pink)",
    image: "/images/groups/mixed.jpg",
    href: "/groups/mixed-ensembles",
  },
];
