import {
  faGuitar,
  faGopuram,
  faWandSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { faItunesNote, faShoelace } from "@fortawesome/free-brands-svg-icons";
import mosaic from "./assets/images/mosaic.webp";
import sax from "./assets/images/sax.webp";
import home from "./assets/images/home.jpg";
import strings from "./assets/images/strings.webp";
import flutes from "./assets/images/flutes.jpg";
import clarinet from "./assets/images/clarinets.webp";

export const groups = [
  {
    id: "community-orchestra",
    title: "Community Orchestra",
    description:
      "Bring your instrument and make music as part of our full community orchestra.",
    icon: faGopuram,
    colour: "var(--violet)",
    image: home,
    href: "/community-orchestra",
  },
  {
    id: "string-orchestra",
    title: "String Orchestra",
    description:
      "Play alongside other string musicians and develop your ensemble playing.",
    icon: faShoelace,
    colour: "var(--pink)",
    image: strings,
    href: "/string-orchestra",
  },
  {
    id: "flute-choir",
    title: "Flute Choir",
    description:
      "Explore the sound of multiple flutes playing together in harmony.",
    icon: faItunesNote,
    colour: "var(--teal)",
    image: flutes,
    href: "/flute-choir",
  },
  {
    id: "clarinet-choir",
    title: "Clarinet Choir",
    description:
      "Enjoy ensemble playing with fellow clarinettists in a friendly setting.",
    icon: faWandSparkles,
    colour: "var(--yellow)",
    image: clarinet,
    href: "/clarinet-choir",
  },
  {
    id: "saxophone-choir",
    title: "Saxophone Choir",
    description: "Make a big sound together with our saxophone choir.",
    icon: faWandSparkles,
    colour: "var(--blue)",
    image: sax,
    href: "/saxophone-choir",
  },
  {
    id: "mosaic-sounds",
    title: "Mosaic Sounds",
    description:
      "Play, learn and develop your guitar skills alongside other musicians.",
    icon: faGuitar,
    colour: "var(--violet)",
    image: mosaic,
    href: "/mosaic-sounds",
  },
];
