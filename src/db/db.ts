import { openDB } from "idb";
import { GamingData } from "../interface/interface";

const initDB = async () => {
  return openDB("userDB", 4, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("users")) {
        db.createObjectStore("users", {
          keyPath: "userId",
        });
      }
      if (!db.objectStoreNames.contains("games")) {
        db.createObjectStore("games", {
          keyPath: "id",
        });
      }
      if (!db.objectStoreNames.contains("consoles")) {
        db.createObjectStore("consoles", {
          keyPath: "id",
        });
      }
    },
  });
};

export const saveUserData = async (userId: string, data: any) => {
  const db = await initDB();
  const tx = db.transaction("users", "readwrite");
  await tx.store.put({ userId, ...data });
  await tx.done;
  console.log("Data saved to IndexedDB");
};

export const fetchUserData = async (userId: string) => {
  const db = await initDB();
  const user = await db.get("users", userId);
  return user;
};

export const saveGameData = async (game: any) => {
  const db = await initDB();
  const tx = db.transaction("games", "readwrite");
  await tx.store.put(game);
  await tx.done;
  console.log("Game data saved to IndexedDB");
};
export const saveConsolesData = async (console: any) => {
  const db = await initDB();
  const tx = db.transaction("consoles", "readwrite");
  await tx.store.put(console);
  await tx.done;
  console.log("Console data saved to IndexedDB");
};

export const fetchAllGames = async () => {
  const db = await initDB();
  const games = await db.getAll("games");
  console.log(games);
  return games as GamingData[];
};

export const fetchConsoleById = async (id: string) => {
  const db = await initDB();
  const console = await db.get("consoles", id);
  return console;
};

export const fetchGameById = async (id: string) => {
  const db = await initDB();
  const game = await db.get("games", id);
  return game;
};

export const fetchConsoonsById = async (id: string) => {
  const db = await initDB();
  const console = await db.get("consoles", id);
  return console;
};
