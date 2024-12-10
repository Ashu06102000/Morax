import { create } from "zustand";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

import { persist, createJSONStorage, PersistOptions } from "zustand/middleware";
import { CartItem, CartState } from "../interface/interface";
const useUserStore = create((set) => ({
  user: null,
  setUser: (user: any) => set({ user }),
}));
const useAudioStore = create((set) => ({
  audio: false,
  setAudio: (audio: boolean) => set({ audio }),
}));

const useCart = create<
  CartState,
  [["zustand/persist", PersistOptions<string>]]
>(
  persist(
    (set, get) => ({
      cart: [],
      setCart: (cart: CartItem[]) => set({ cart }),
      addToCart: (item: CartItem) =>
        set((state) => {
          const alreadyInCart = state.cart.some(
            (cartItem) => cartItem.id === item.id
          );
          if (!alreadyInCart) {
            return { cart: [...state.cart, item] };
          }
          return state;
        }),
      removeCartItem: (item: CartItem) =>
        set((state) => ({
          cart: state.cart.filter((cartItem) => cartItem.id !== item.id),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export { useUserStore, useAudioStore, useCart };

export const useAuthStoreSync = () => {
  const { user, isAuthenticated } = useAuth0();
  const setUser = useUserStore((state: any) => state.setUser);

  React.useEffect(() => {
    if (isAuthenticated && user) {
      setUser(user);
    }
  }, [isAuthenticated, user, setUser]);
};
