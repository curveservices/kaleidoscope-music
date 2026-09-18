import { faMusic, faGuitar, faWind } from "@fortawesome/free-solid-svg-icons";
import home from "./assets/images/home.jpg";

export const groups = [
  {
    id: "full-orchestra",
    title: "Full Orchestra",
    description:
      "Bring your instrument and make music as part of our full community orchestra.",
    icon: faMusic,
    colour: "var(--violet)",
    image: home,
    href: "/groups/full-orchestra",
  },
  {
    id: "string-orchestra",
    title: "String Orchestra",
    description:
      "Play alongside other string musicians and develop your ensemble playing.",
    icon: faMusic,
    colour: "var(--pink)",
    image: "/images/groups/strings.jpg",
    href: "/groups/string-orchestra",
  },
  {
    id: "flute-choir",
    title: "Flute Choir",
    description:
      "Explore the sound of multiple flutes playing together in harmony.",
    icon: faWind,
    colour: "var(--teal)",
    image: "/images/groups/flutes.jpg",
    href: "/groups/flute-choir",
  },
  {
    id: "clarinet-choir",
    title: "Clarinet Choir",
    description:
      "Enjoy ensemble playing with fellow clarinettists in a friendly setting.",
    icon: faWind,
    colour: "var(--yellow)",
    image: "/images/groups/clarinets.jpg",
    href: "/groups/clarinet-choir",
  },
  {
    id: "saxophone-choir",
    title: "Saxophone Choir",
    description: "Make a big sound together with our saxophone ensemble.",
    icon: faMusic,
    colour: "var(--blue)",
    image: "/images/groups/saxophones.jpg",
    href: "/groups/saxophone-choir",
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
    icon: faMusic,
    colour: "var(--pink)",
    image: "/images/groups/mixed.jpg",
    href: "/groups/mixed-ensembles",
  },
];
