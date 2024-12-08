import { create } from "zustand";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const useUserStore = create((set) => ({
  user: null,
  setUser: (user: any) => set({ user }),
}));
const useAudioStore = create((set) => ({
  audio: false,
  setAudio: (audio: boolean) => set({ audio }),
}));

export { useUserStore, useAudioStore };

export const useAuthStoreSync = () => {
  const { user, isAuthenticated } = useAuth0();
  const setUser = useUserStore((state: any) => state.setUser);

  React.useEffect(() => {
    if (isAuthenticated && user) {
      setUser(user);
    }
  }, [isAuthenticated, user, setUser]);
};
