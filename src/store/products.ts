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
  },
  {
    id: "2",
    name: "The Last of Us",
    price: 59.99,
    category: "Adventure",
    stock: 15,
    image: "/img/games/last-of-us.jpg",
  },
  {
    id: "3",
    name: "Halo Infinite",
    price: 69.99,
    category: "Shooter",
    stock: 20,
    image: "/img/games/halo-infinite.jpg",
  },
  {
    id: "4",
    name: "Elden Ring",
    price: 59.99,
    category: "RPG",
    stock: 25,
    image: "/img//games/elden-ring.jpg",
  },
  {
    id: "5",
    name: "FIFA 24",
    price: 39.99,
    category: "Sports",
    stock: 30,
    image: "/img//games/fifa-24.jpg",
  },
  {
    id: "6",
    name: "Cyberpunk 2077",
    price: 29.99,
    category: "RPG",
    stock: 8,
    image: "/img//games/cyberpunk-2077.jpg",
  },
  {
    id: "7",
    name: "Red Dead Redemption 2",
    price: 49.99,
    category: "Adventure",
    stock: 12,
    image: "/img//games/red-dead-2.jpg",
  },
  {
    id: "8",
    name: "Forza Horizon 5",
    price: 69.99,
    category: "Racing",
    stock: 18,
    image: "/img//games/forza-5.jpg",
  },
  {
    id: "9",
    name: "Call of Duty: Modern Warfare 2",
    price: 59.99,
    category: "Shooter",
    stock: 22,
    image: "/img//games/cod-mw2.jpg",
  },
  {
    id: "10",
    name: "Minecraft",
    price: 19.99,
    category: "Sandbox",
    stock: 50,
    image: "/img//games/minecraft.jpg",
  },
];

const seedGamingData = async () => {
  for (const game of gamingData) {
    await saveGameData(game);
  }
  console.log("Gaming data seeded!");
};

seedGamingData();
