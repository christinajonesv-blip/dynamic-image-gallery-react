import kyoto from "../assets/images/kyoto.jpg";
import mountFuji from "../assets/images/mount-fuji.jpg";
import santorini from "../assets/images/santorini.jpg";
import swissAlps from "../assets/images/swiss-alps.jpg";
import paris from "../assets/images/paris.jpg";
import bali from "../assets/images/bali.jpg";
import cappadocia from "../assets/images/cappadocia.jpg";
import newYork from "../assets/images/new-york.jpg";
import machuPicchu from "../assets/images/machu-picchu.jpg";
import amalfiCoast from "../assets/images/amalfi-coast.jpg";

const places = [
  {
    id: 1,
    name: "Kyoto",
    country: "Japan",
    category: "Cherry Blossom",
    season: "Mar — Apr",
    image: kyoto,
    description:
      "Walk beneath clouds of pink sakura, explore ancient temples and experience the timeless beauty of Kyoto.",
    bestTime: "March — April",
    experiences: ["Temples", "Culture", "Photography", "Scenic Views"],
  },

  {
    id: 2,
    name: "Mount Fuji",
    country: "Japan",
    category: "Mountains",
    season: "Spring — Autumn",
    image: mountFuji,
    description:
      "See Japan's iconic mountain rising above peaceful lakes, forests and traditional villages.",
    bestTime: "Spring — Autumn",
    experiences: ["Nature", "Hiking", "Photography", "Scenic Views"],
  },

  {
    id: 3,
    name: "Santorini",
    country: "Greece",
    category: "Coastal",
    season: "May — Oct",
    image: santorini,
    description:
      "Whitewashed villages, blue domes and spectacular sunsets overlooking the Aegean Sea.",
    bestTime: "May — October",
    experiences: ["Beaches", "Sunsets", "Culture", "Photography"],
  },

  {
    id: 4,
    name: "Swiss Alps",
    country: "Switzerland",
    category: "Mountains",
    season: "All Year",
    image: swissAlps,
    description:
      "A world of snow-covered peaks, peaceful valleys and breathtaking alpine landscapes.",
    bestTime: "All Year",
    experiences: ["Mountains", "Skiing", "Nature", "Hiking"],
  },

  {
    id: 5,
    name: "Paris",
    country: "France",
    category: "City",
    season: "Apr — Jun",
    image: paris,
    description:
      "Experience timeless architecture, beautiful streets and the unmistakable atmosphere of Paris.",
    bestTime: "April — June",
    experiences: ["Culture", "Food", "Architecture", "Photography"],
  },

  {
    id: 6,
    name: "Bali",
    country: "Indonesia",
    category: "Tropical",
    season: "Apr — Oct",
    image: bali,
    description:
      "Tropical forests, rice terraces, beaches and peaceful temples make Bali unforgettable.",
    bestTime: "April — October",
    experiences: ["Beaches", "Temples", "Nature", "Relaxation"],
  },

  {
    id: 7,
    name: "Cappadocia",
    country: "Türkiye",
    category: "Adventure",
    season: "Apr — Jun",
    image: cappadocia,
    description:
      "Watch hundreds of hot-air balloons rise above a surreal landscape of valleys and rock formations.",
    bestTime: "April — June",
    experiences: ["Adventure", "Balloons", "Photography", "Nature"],
  },

  {
    id: 8,
    name: "New York",
    country: "USA",
    category: "City",
    season: "All Year",
    image: newYork,
    description:
      "From skyline views to endless streets, New York is a city that never seems to stop moving.",
    bestTime: "All Year",
    experiences: ["City", "Food", "Culture", "Shopping"],
  },

  {
    id: 9,
    name: "Machu Picchu",
    country: "Peru",
    category: "Heritage",
    season: "May — Sep",
    image: machuPicchu,
    description:
      "Discover the extraordinary ancient citadel surrounded by the mountains of Peru.",
    bestTime: "May — September",
    experiences: ["History", "Hiking", "Culture", "Photography"],
  },

  {
    id: 10,
    name: "Amalfi Coast",
    country: "Italy",
    category: "Coastal",
    season: "May — Sep",
    image: amalfiCoast,
    description:
      "Cliffside villages, turquoise water and winding coastal roads create an unforgettable Italian escape.",
    bestTime: "May — September",
    experiences: ["Coastal", "Food", "Photography", "Relaxation"],
  },
];

export default places;