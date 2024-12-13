import { saveConsolesData, saveGameData } from "../db/db";

export const productsList = [
  { name: "Games", image: "videos/feature-1.mp4", Link: "/games" },
  { name: "Consoles", image: "videos/Nintendo.mp4", Link: "/consoles" },
  { name: "Cards", image: "videos/feature-3.mp4", Link: "" },
  { name: "Nft", image: "videos/feature-4.mp4", Link: "" },
];

const gamingData = [
  {
    id: "1",
    name: "God of War",
    price: 4999.99,
    category: ["Action", "Adventure", "RPG", "3D"],
    stock: 10,
    image: "/img/games/god-of-war.jpg",
    description:
      "A massively multiplayer online role-playing game (MMORPG) that combines elements of fantasy, adventure, and strategy.",
    isComingSoon: false,
    isFeatured: true,
    devices: ["PC", "Xbox", "Playstation"],
    sale: 10,
    requirements: {
      minimum: {
        requires: "64-bit processor and operating system",
        OS: "Windows 10 64-bit",
        processor: "Intel i5-4670k or AMD Ryzen 3 1200",
        memory: "8 GB RAM",
        graphics:
          "NVIDIA GTX 1060 (6GB) or AMD RX 5500 XT (8GB) or Intel Arc A750",
        DirectX: "Version 12",
        storage: "190 GB available space",
        additional_notes:
          "Windows version 2004 2020-05-27 19041. 6GB GPU is required",
      },
      recommended: {
        requires: "64-bit processor and operating system",
        OS: "Windows 10 64-bit",
        processor: "Intel i5-8600 or AMD Ryzen 5 3600",
        memory: "16 GB RAM",
        graphics: "NVIDIA RTX 2060 Super or AMD RX 5700 or Intel Arc A770",
        DirectX: "Version 12",
        storage: "190 GB available space",
        additional_notes:
          "Windows version 2004 2020-05-27 19041. 6GB GPU is required",
      },
    },
  },
  {
    id: "2",
    name: "The Last of Us",
    price: 5999.99,
    category: ["Adventure", "Story", "Horror"],
    stock: 15,
    image: "/img/games/last-of-us.jpg",
    description:
      "Experience the emotional storytelling and unforgettable characters in The Last of Us, winner of over 200 Game of the Year awards.",
    devices: ["PC", "PlayStation 4", "Xbox One", "Google Stadia"],
    sale: 5,
    requirements: {
      minimum: {
        requires: "64-bit processor and operating system",
        OS: "Windows 10 (Version 1909 or Newer)",
        processor: "AMD Ryzen 5 1500X, Intel Core i7-4770K",
        memory: "16 GB RAM",
        graphics:
          "AMD Radeon RX 470 (4 GB), AMD Radeon RX 6500 XT (4 GB), NVIDIA GeForce GTX 970 (4 GB), NVIDIA GeForce GTX 1050 Ti (4 GB)",
        storage: "100 GB available space",
        additional_notes: "SSD Recommended",
      },
      recommended: {
        requires: "64-bit processor and operating system",
        OS: "Windows 10 (Version 1909 or Newer)",
        processor: "AMD Ryzen 5 3600X, Intel Core i7-8700",
        memory: "16 GB RAM",
        graphics:
          "AMD Radeon RX 5700 XT (8 GB), AMD Radeon RX 6600 XT (8 GB), NVIDIA GeForce RTX 2070 SUPER (8 GB), NVIDIA GeForce RTX 3060 (8 GB)",
        storage: "100 GB available space",
        additional_notes: "SSD Recommended",
      },
    },
  },
  {
    id: "3",
    name: "Halo Infinite",
    price: 6999.99,
    category: ["Shooter", "Free to play", "Multiplayer", "Singleplayer"],
    stock: 20,
    image: "/img/games/halo-infinite.jpg",
    description:
      "When all hope is lost and humanity’s fate hangs in the balance, the Master Chief is ready to confront the most ruthless foe he’s ever faced. Step inside the armor of humanity’s greatest hero to experience an epic open-world adventure and explore the massive scale of the Halo ring.",
    devices: ["PC", "Xbox One", "Xbox Series X|S"],
    sale: 2,
    requirements: {
      minimum: {
        processor: "AMD Ryzen 5 1600 or Intel i5-4440",
        os: "Windows 10 RS5 x64",
        memory: "8 GB RAM",
        graphics: "AMD RX 570 or Nvidia GTX 1050 Ti",
        directx: "Version 12",
        storage: "50 GB available space",
      },
      recommended: {
        processor: "AMD Ryzen 7 3700X or Intel i7-9700K",
        os: "Windows 10 19H2 x64",
        memory: "16 GB RAM",
        graphics: "Radeon RX 5700 XT or Nvidia RTX 2070",
        directx: "Version 12",
        storage: "50 GB available space",
      },
    },
  },
  {
    id: "4",
    name: "Elden Ring",
    price: 5999.99,
    category: ["RPG", "Open world", "3D", "Dark fantasy"],
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
    sale: 8,
    requirements: {
      minimum: {
        processor: "Intel Core i5-8400 or AMD Ryzen 3 3300X",
        os: "Windows 10",
        memory: "12 GB RAM",
        graphics: "NVIDIA GeForce GTX 1060 3 GB or AMD Radeon RX 580 4 GB",
        directx: "Version 12",
        storage: "60 GB available space",
        sound_card: "Windows Compatible Audio Device",
      },
      recommended: {
        processor: "Intel Core i7-8700K or AMD Ryzen 5 3600X",
        os: "Windows 10/11",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce GTX 1070 8 GB or AMD Radeon RX Vega 56 8 GB",
        directx: "Version 12",
        storage: "60 GB available space",
        sound_card: "Windows Compatible Audio Device",
      },
    },
  },
  {
    id: "5",
    name: "FIFA 24",
    price: 3999.99,
    category: ["Sports", "Simulator", "Controller"],
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
    sale: 12,
    requirements: {
      minimum: {
        processor: "AMD Ryzen 5 1600 or Intel Core i5 6600k",
        os: "Windows 10 - 64-Bit (Latest Update)",
        memory: "8 GB RAM",
        graphics: "AMD RX 570 or Nvidia GTX 1050 Ti",
        directx: "Version 12",
        network: "Broadband Internet connection",
        storage: "100 GB available space",
        sound_card:
          "DirectX: 12 Compatible video card or equivalent (feature level 12_0)",
      },
      recommended: {
        processor: "AMD Ryzen 7 2700X or Intel Core i7 6700",
        os: "Windows 10 - 64-Bit (Latest Update)",
        memory: "12 GB RAM",
        graphics: "AMD RX 5600 XT or Nvidia GTX 1660",
        directx: "Version 12",
        network: "Broadband Internet connection",
        storage: "100 GB available space",
        sound_card:
          "DirectX: 12 Compatible video card or equivalent (feature level 12_0)",
      },
    },
  },
  {
    id: "6",
    name: "Cyberpunk 2077",
    price: 2999.99,
    category: ["RPG", "Open world", "Sci-Fi", "Nudity"],
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
    sale: 10,
    requirements: {
      minimum: {
        processor: "Core i7-6700 or Ryzen 5 1600",
        os: "64-bit Windows 10",
        memory: "12 GB RAM",
        graphics: "GeForce GTX 1060 6GB or Radeon RX 580 8GB or Arc A380",
        directx: "Version 12",
        storage: "70 GB available space",
        additional_notes:
          "SSD required. Attention: In this game, you may encounter visual effects that could trigger seizures or loss of consciousness in a minority of players. Stop playing and seek medical attention immediately if symptoms occur.",
      },
      recommended: {
        processor: "Core i7-12700 or Ryzen 7 7800X3D",
        os: "64-bit Windows 10",
        memory: "16 GB RAM",
        graphics: "GeForce RTX 2060 SUPER or Radeon RX 5700 XT or Arc A770",
        directx: "Version 12",
        storage: "70 GB available space",
        additional_notes: "SSD required.",
      },
    },
  },
  {
    id: "7",
    name: "Red Dead Redemption 2",
    price: 4999.99,
    category: ["Adventure", "Action", "Comedyo Open world", "Story"],
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
    sale: 14,
    requirements: {
      minimum: {
        processor: "Intel® Core™ i5-2500K / AMD FX-6300",
        os: "Windows 10 - 64-bit",
        memory: "8 GB RAM",
        graphics: "Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB",
        network: "Broadband Internet connection",
        storage: "150 GB available space",
        sound_card: "Direct X Compatible",
      },
      recommended: {
        processor: "Intel® Core™ i7-4770K / AMD Ryzen 5 1500X",
        os: "Windows 10 - 64-bit",
        memory: "12 GB RAM",
        graphics: "Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB",
        network: "Broadband Internet connection",
        storage: "150 GB available space",
        sound_card: "Direct X Compatible",
      },
    },
  },
  {
    id: "8",
    name: "Forza Horizon 5",
    price: 6999.99,
    category: ["Racing", "Open world", "Driving", "Multiplayer", "Co-op"],
    stock: 18,
    image: "/img//games/forza-5.jpg",
    description:
      "Forza Horizon 5 is a racing video game developed by Playground Games and published by Microsoft Studios. It is the fifth installment in the Forza Horizon series.",
    devices: ["PC", "Xbox One", "Xbox Series X|S"],
    sale: 6,
    requirements: {
      minimum: {
        processor: "Intel i5-4460 or AMD Ryzen 3 1200",
        os: "Windows 10 version 18362.0 or higher",
        memory: "8 GB RAM",
        graphics: "NVidia GTX 970, AMD RX 470, OR Intel Arc A380",
        directx: "Version 12",
        network: "Broadband Internet connection",
        storage: "110 GB available space",
      },
      recommended: {
        processor: "Intel i5-8400 or AMD Ryzen 5 1500X",
        os: "Windows 10 version 18362.0 or higher",
        memory: "16 GB RAM",
        graphics: "NVidia GTX 1070, AMD RX 590, OR Intel Arc A750",
        directx: "Version 12",
        network: "Broadband Internet connection",
        storage: "110 GB available space",
      },
    },
  },
  {
    id: "9",
    name: "Call of Duty: Modern Warfare 2",
    price: 5999.99,
    category: ["Shooter", "Action", "Multplayer", "FPS"],
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
    sale: 18,
    requirements: {
      minimum: {
        processor: "Intel Core i3-6100 / Core i5-2500K or AMD Ryzen 3 1200",
        os: "Windows 10 64 Bit (latest update)",
        memory: "8 GB RAM",
        graphics:
          "NVIDIA GeForce GTX 960 or AMD Radeon RX 470 - DirectX 12.0 compatible system",
        directx: "Version 12",
        network: "Broadband Internet connection",
        storage: "125 GB available space",
      },
      recommended: {
        processor: "Intel Core i5-6600K / Core i7-4770 or AMD Ryzen 5 1400",
        os: "Windows 10 64 Bit (latest update) or Windows 11 64 Bit (latest update)",
        memory: "8 GB RAM",
        graphics:
          "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580 - DirectX 12.0 compatible system or Intel Arc A770",
        directx: "Version 12",
        network: "Broadband Internet connection",
        storage: "125 GB available space",
      },
    },
  },
  {
    id: "10",
    name: "Minecraft",
    price: 1999.99,
    category: ["Sandbox", "Multiplayer", "Action", "Strategy"],
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
    sale: 12,
    requirements: {
      minimum: {
        processor: "Core i5 2.8GHz or equivalent",
        os: "Windows 10 (May 2020 Update or higher) or Windows 11",
        memory: "8 GB RAM",
        graphics:
          "NVIDIA GeForce GTX 780 or AMD Radeon 285 or Intel HD 520 or equivalent DX12 GPU",
        directx: "Version 12",
        storage: "24 GB available space",
        additional_notes:
          "Performance increases with higher-end systems. Not supported on Windows 10S.",
      },
      recommended: {
        processor: "Core i5 3.4GHz or equivalent",
        os: "Windows 10 (May 2020 Update or higher) or Windows 11",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 1060 or AMD Radeon 580",
        directx: "Version 12",
        network: "Broadband Internet connection",
        storage: "24 GB available space",
        additional_notes:
          "Performance increases with higher-end systems. Not supported on Windows 10S.",
      },
    },
  },
];

const gamingConsoles = [
  {
    id: "11",
    name: "PlayStation 5",
    price: 49999,
    category: ["Console"],
    stock: 50,
    image: "/img/console/ps5.webp",
    description:
      "Experience lightning-fast loading with an ultra-high-speed SSD and deeper immersion with haptic feedback and adaptive triggers.",
    isComingSoon: false,
    isFeatured: false,
    devices: ["PlayStation Network", "Blu-ray"],
    sale: 1,
    requirements: {
      minimum: {
        requires: "4K TV or Monitor (optional for optimal experience)",
        storage: "825 GB built-in SSD",
        connectivity: "HDMI 2.1, Wi-Fi 6, Ethernet",
        additional_notes: "Supports backward compatibility for PS4 games.",
      },
    },
  },
  {
    id: "12",
    name: "Xbox Series X",
    price: 54999,
    category: ["Console"],
    stock: 40,
    image: "/img/console/xboxseiesx.png",
    description:
      "The most powerful Xbox ever with true 4K gaming, up to 120 FPS, and 1TB of custom SSD for faster load times.",
    isComingSoon: false,
    isFeatured: true,
    devices: ["false Game Pass", "Blu-ray"],
    sale: 1,
    requirements: {
      minimum: {
        requires: "4K TV or Monitor (optional for optimal experience)",
        storage: "1TB built-in SSD",
        connectivity: "HDMI 2.1, Wi-Fi 6, Ethernet",
        additional_notes:
          "Supports backward compatibility for Xbox One and 360 games.",
      },
    },
  },
  {
    id: "13",
    name: "Nintendo Switch OLED",
    price: 35449,
    category: ["Console"],
    stock: 30,
    image: "/img/console/nintendoswitcholed.avif",
    description:
      "A hybrid console with a stunning 7-inch OLED display, improved audio, and enhanced handheld mode.",
    isComingSoon: false,
    isFeatured: true,
    devices: ["Nintendo eShop", "Cartridges"],
    sale: 3,
    requirements: {
      minimum: {
        requires: "Internet for updates and eShop access",
        storage: "64GB built-in (expandable via microSD)",
        connectivity: "Wi-Fi, Bluetooth, USB-C",
        additional_notes: "Compatible with all Switch accessories and games.",
      },
    },
  },
  {
    id: "14",
    name: "Steam Deck",
    price: 45399,
    category: ["Handheld"],
    stock: 25,
    image: "/img/console/steamoled.png",
    description:
      "A powerful handheld PC that brings Steam games to your fingertips with AMD Zen 2 and RDNA 2 technology.",
    isComingSoon: false,
    isFeatured: false,
    devices: ["SteamOS", "PC"],
    sale: 2,
    requirements: {
      minimum: {
        requires: "Steam account",
        storage: "64GB, 256GB, or 512GB SSD options",
        connectivity: "Wi-Fi, Bluetooth, USB-C",
        additional_notes: "Supports dual-booting and external displays.",
      },
    },
  },
  {
    id: "15",
    name: "PlayStation 4 Pro",
    price: 32399,
    category: ["Console"],
    stock: 20,
    image: "/img/console/ps4pro.webp",
    description:
      "Enhanced performance with 4K gaming and HDR compatibility for an immersive experience.",
    isComingSoon: false,
    isFeatured: false,
    devices: ["PlayStation Network", "Blu-ray"],
    sale: 2,
    requirements: {
      minimum: {
        requires: "4K TV for optimal experience",
        storage: "1TB built-in HDD",
        connectivity: "HDMI 2.0, Wi-Fi 5, Ethernet",
        additional_notes: "Compatible with PS4 games.",
      },
    },
  },
  {
    id: "16",
    name: "Xbox Series S",
    price: 52299,
    category: ["Console"],
    stock: 35,
    image: "/img/console/xboxseiess.png",
    description:
      "Next-gen gaming with a compact design, 1440p resolution, and up to 120 FPS performance.",
    isComingSoon: false,
    isFeatured: false,
    devices: ["Xbox Game Pass", "Digital-only"],
    sale: 1,
    requirements: {
      minimum: {
        requires: "HD TV or Monitor",
        storage: "512GB built-in SSD",
        connectivity: "HDMI 2.1, Wi-Fi 6, Ethernet",
        additional_notes: "Digital-only console with no disc drive.",
      },
    },
  },
  {
    id: "17",
    name: "Nintendo Switch Lite",
    price: 49199,
    category: ["Handheld"],
    stock: 30,
    image: "/img/console/nentendilite.avif",
    description:
      "A compact, lightweight handheld console perfect for gaming on the go.",
    isComingSoon: false,
    isFeatured: false,
    devices: ["Nintendo eShop", "Cartridges"],
    sale: 1,
    requirements: {
      minimum: {
        requires: "Internet for updates and eShop access",
        storage: "32GB built-in (expandable via microSD)",
        connectivity: "Wi-Fi",
        additional_notes: "Designed exclusively for handheld mode.",
      },
    },
  },
  {
    id: "18",
    name: "Meta Quest 2",
    price: 53299.99,
    category: ["VR"],
    stock: 15,
    image: "/img/console/metaquest2.webp",
    description:
      "An all-in-one VR headset with no PC required, offering immersive gaming and social experiences.",
    isComingSoon: false,
    isFeatured: false,
    devices: ["Oculus Store"],
    sale: 2,
    requirements: {
      minimum: {
        requires: "Oculus account",
        storage: "128GB or 256GB options",
        connectivity: "Wi-Fi, Bluetooth",
        additional_notes: "Optional PC link for enhanced performance.",
      },
    },
  },
  {
    id: "19",
    name: "Valve Index",
    price: 35499,
    category: ["VR"],
    stock: 10,
    image: "/img/console/valueindex.png",
    description:
      "High-fidelity VR with superior tracking, display, and comfort.",
    isComingSoon: false,
    isFeatured: false,
    devices: ["SteamVR"],
    sale: 3,
    requirements: {
      minimum: {
        requires: "High-end PC",
        storage: "50GB for SteamVR",
        connectivity: "DisplayPort, USB 3.0",
        additional_notes: "Requires external base stations.",
      },
    },
  },
  {
    id: "20",
    name: "PlayStation VR2",
    price: 54999,
    category: ["VR"],
    stock: 10,
    image: "/img/console/psvr2.webp",
    description:
      "Next-gen VR experience with stunning visuals and adaptive triggers.",
    isComingSoon: false,
    isFeatured: false,
    devices: ["PlayStation Network"],
    sale: 2,
    requirements: {
      minimum: {
        requires: "PlayStation 5",
        storage: "50GB for VR games",
        connectivity: "USB-C, HDMI",
        additional_notes: "Compatible only with PS5.",
      },
    },
  },
];

const seedGamingData = async () => {
  for (const game of gamingData) {
    await saveGameData(game);
  }
};

seedGamingData();

const seedConsoleData = async () => {
  for (const console of gamingConsoles) {
    await saveConsolesData(console);
  }
};
seedConsoleData();
