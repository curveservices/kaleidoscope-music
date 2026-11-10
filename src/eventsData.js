import {
  faClock,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";
import e1 from "./assets/images/christmas.jpg";
import e2 from "./assets/images/christmas.jpg";
import e3 from "./assets/images/people.webp";
import e4 from "./assets/images/event5.jpg";
export const events = [
  {
    id: "autumn-conert",
    type: "Concert",
    day: "MON",
    month: "DEC",
    date: "07",
    img: e1,
    title: "End of Autumn Concert",
    timeIcon: faClock,
    time: "7:00pm",
    locIcon: faMapLocation,
    location: "Rochester Grammar School",
    color: "var(--pink)",
    content: "We end our autumn term with a Christmassy concert, and of course Xmas jumpers and hats are a must! Lots of Xmas favourites will be performed."
  },
  {
    id: "winter-concert",
    type: "Concert",
    day: "MON",
    month: "DEC",
    date: 21,
    img: e2,
    title: "Winter Concert",
    timeIcon: faClock,
    time: "7:30pm",
    locIcon: faMapLocation,
    location: "St Augustine's",
    color: "var(--teal)",
    content: "Playing Carol's at St Augustine's Christmas 🎄 Festival, followed by tea and cake."
  },
  {
    id: "spring-conert",
    type: "Concert",
    day: "MON",
    month: "MAR",
    date: 22,
    img: e3,
    title: "End of Spring Concert",
    timeIcon: faClock,
    time: "7:15pm",
    locIcon: faMapLocation,
    location: "Rochester Grammar School",
    color:"var(--yellow)",
    content: "As we come to the end of our Spring term, we are looking forward to our end of term concert. The concert starts at 7:15 please come along to hear our various groups."
  },
    {
    id: 6,
    month: "JUL",
    type: "Festival",
    day: "SAT" ,
    date: 28,
    img: e4,
    title: "Summer Music Festival",
    timeIcon: faClock,
    time: "2:00pm",
    locIcon: faMapLocation,
    location: "Balmoral Gardens, Gillingham",
    color: "var(--pink)",
    content: "Join us for a busy weekend with the Orchestra playing at the Music festival in Balmoral Gardens, Gillingham"
  },
  {
    id: 4,
    month: "JUL",
    type: "Concert",
    date: 5,
    img: e4,
    title: "End of Summer Concert",
    timeIcon: faClock,
    time: "7:00pm",
    locIcon: faMapLocation,
    location: "Rochester Grammar School",
    color: "var(--teal)",
    content: "Celebrate with us for the end of term summer concert.  Come along to listen to some lovely music on a summers evening. Everyone welcome. "
  },
];
