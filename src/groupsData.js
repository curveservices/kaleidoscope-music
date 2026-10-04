import {
  faGuitar,
  faGopuram,
  faWandSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { faItunesNote, faShoelace } from "@fortawesome/free-brands-svg-icons";
import mosaic from "./assets/images/event5.jpg";
import sax from "./assets/images/sax.png";
import home from "./assets/images/home.jpg";
import strings from "./assets/images/event3.jpg";
import flutes from "./assets/images/flutes.jpg";
import clarinet from "./assets/images/clarinet.jpg";

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
    id: "flute-choir",
    title: "Flute Choir",
    description:
      "Explore the sound of multiple flutes playing together in harmony.",
    icon: faItunesNote,
    colour: "var(--teal)",
    image: flutes,
    href: "/groups/flute-choir",
  },
  {
    id: "clarinet-choir",
    title: "Clarinet Choir",
    description:
      "Enjoy ensemble playing with fellow clarinettists in a friendly setting.",
    icon: faWandSparkles,
    colour: "var(--yellow)",
    image: clarinet,
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
    id: "mosaic-sounds",
    title: "Mosaic Sounds",
    description:
      "Play, learn and develop your guitar skills alongside other musicians.",
    icon: faGuitar,
    colour: "var(--violet)",
    image: mosaic,
    href: "/groups/guitar",
  },
];
