import { saveGameData } from "../db/db";

export const productsList = [
  { name: "Games", image: "videos/feature-1.mp4", Link: "/games" },
  { name: "Consoles", image: "videos/Nintendo.mp4", Link: "/consoles" },
  { name: "Cards", image: "videos/feature-3.mp4", Link: "/cards" },
  { name: "Nft", image: "videos/feature-4.mp4", Link: "" },
];

const gamingData = [
  {
    id: "1",
    name: "God of War",
    price: 49.99,
    category: "Action",
    stock: 10,
    image: "/img/games/god-of-war.jpg",
    description:
      "A massively multiplayer online role-playing game (MMORPG) that combines elements of fantasy, adventure, and strategy.",
    isComingSoon: false,
    isFeatured: true,
    devices: ["PC", "Xbox", "Playstation"],
  },
  {
    id: "2",
    name: "The Last of Us",
    price: 59.99,
    category: "Adventure",
    stock: 15,
    image: "/img/games/last-of-us.jpg",
    description:
      "Experience the emotional storytelling and unforgettable characters in The Last of Us, winner of over 200 Game of the Year awards.",
    devices: ["PC", "PlayStation 4", "Xbox One", "Google Stadia"],
  },
  {
    id: "3",
    name: "Halo Infinite",
    price: 69.99,
    category: "Shooter",
    stock: 20,
    image: "/img/games/halo-infinite.jpg",
    description:
      "When all hope is lost and humanity’s fate hangs in the balance, the Master Chief is ready to confront the most ruthless foe he’s ever faced. Step inside the armor of humanity’s greatest hero to experience an epic open-world adventure and explore the massive scale of the Halo ring.",
    devices: ["PC", "Xbox One", "Xbox Series X|S"],
  },
  {
    id: "4",
    name: "Elden Ring",
    price: 59.99,
    category: "RPG",
    stock: 25,
    image: "/img//games/elden-ring.jpg",
    description:
      "The Elden Ring is a massively multiplayer online role-playing game (MMORPG) that combines elements of fantasy, adventure, and strategy.",
    devices: [
      "PC",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X|S",
    ],
  },
  {
    id: "5",
    name: "FIFA 24",
    price: 39.99,
    category: "Sports",
    stock: 30,
    image: "/img//games/fifa-24.jpg",
    description:
      "FIFA 24 is a sports video game published by Electronic Arts. It is the 24th installment in the FIFA video game series and the successor to FIFA 23.",
    devices: [
      "PC",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X|S",
      "Nintendo Switch",
    ],
  },
  {
    id: "6",
    name: "Cyberpunk 2077",
    price: 29.99,
    category: "RPG",
    stock: 8,
    image: "/img//games/cyberpunk-2077.jpg",
    description:
      "Cyberpunk 2077 is an open-world action role-playing video game developed by CD Projekt RED and published by CD Projekt.",
    devices: [
      "PC",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X|S",
      "Google Stadia",
    ],
  },
  {
    id: "7",
    name: "Red Dead Redemption 2",
    price: 49.99,
    category: "Adventure",
    stock: 12,
    image: "/img//games/red-dead-2.jpg",
    description:
      "Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. It is the second installment in the Red Dead series.",
    devices: [
      "PC",
      "PlayStation 4",
      "PlayStation 5 (via backward compatibility)",
      "Xbox One",
      "Xbox Series X|S (via backward compatibility)",
    ],
  },
  {
    id: "8",
    name: "Forza Horizon 5",
    price: 69.99,
    category: "Racing",
    stock: 18,
    image: "/img//games/forza-5.jpg",
    description:
      "Forza Horizon 5 is a racing video game developed by Playground Games and published by Microsoft Studios. It is the fifth installment in the Forza Horizon series.",
    devices: ["PC", "Xbox One", "Xbox Series X|S"],
  },
  {
    id: "9",
    name: "Call of Duty: Modern Warfare 2",
    price: 59.99,
    category: "Shooter",
    stock: 22,
    image: "/img//games/cod-mw2.jpg",
    description:
      "Call of Duty: Modern Warfare 2 is a first-person shooter video game developed by Infinity Ward and published by Activision. It is the second installment in the Call of Duty series.",
    devices: [
      "PC",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X|S",
    ],
  },
  {
    id: "10",
    name: "Minecraft",
    price: 19.99,
    category: "Sandbox",
    stock: 50,
    image: "/img//games/minecraft.jpg",
    description:
      "Are you ready to explore a new biome, uncover an unsettling hostile mob, build with new blocks, and more? Step into the pale garden now.",
    devices: [
      "PC",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X|S",
      "Nintendo Switch",
      "Mobile (iOS & Android)",
      "Other legacy platforms",
    ],
  },
];

const seedGamingData = async () => {
  for (const game of gamingData) {
    await saveGameData(game);
  }
  console.log("Gaming data seeded!");
};

seedGamingData();
