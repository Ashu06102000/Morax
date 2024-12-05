import { openDB } from "idb";

const initDB = async () => {
  return openDB("userDB", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("users")) {
        db.createObjectStore("users", {
          keyPath: "userId",
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
