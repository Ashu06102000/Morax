import { openDB } from "idb";
import { ConsoleData, GamingData } from "../interface/interface";

const initDB = async () => {
  return openDB("userDB", 1, {
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
  const store = tx.store;

  const existingData = await store.get(userId);
  console.log(existingData, "exit");
  if (existingData) {
    const updatedData = {
      ...existingData,
      totalPurchase:
        (parseFloat(existingData.totalPurchase) || 0) +
        (parseFloat(existingData.totalPurchase + data.totalPurchase) || 0),
      purchaseHistory: [
        ...(existingData.purchaseHistory || []),
        ...(data.items || []),
      ],
    };
    await store.put({ userId, ...updatedData });
  } else {
    const newData = {
      userId,
      totalPurchase: parseFloat(data.totalPurchase) || 0,
      purchaseHistory: data.items || [],
    };
    await store.put(newData);
  }

  await tx.done;
};

export const fetchUserData = async (userId: string) => {
  const db = await initDB();
  const user = await db.get("users", userId);
  console.log(user);
  return user;
};

export const saveGameData = async (game: any) => {
  const db = await initDB();
  const tx = db.transaction("games", "readwrite");
  await tx.store.put(game);
  await tx.done;
};
export const saveConsolesData = async (console: any) => {
  const db = await initDB();
  const tx = db.transaction("consoles", "readwrite");
  await tx.store.put(console);
  await tx.done;
};

export const fetchAllGames = async () => {
  const db = await initDB();
  const games = await db.getAll("games");

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

export const fetchAllConsoles = async () => {
  const db = await initDB();
  const consoles = await db.getAll("consoles");
  return consoles as ConsoleData[];
};
