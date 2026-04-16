import type { User } from "firebase/auth";
import { create } from "zustand";

interface UserStore {
  email: string;
  uid: string;
  isSubscribed: boolean;
  userFetched: boolean;
  subscribedFetched: boolean;
  signInUser: (user: Partial<User>) => void;
  signOutUser: () => void;
  setIsSubscribed: (boolean: boolean) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  email: "",
  uid: "",
  isSubscribed: false,
  userFetched: false,
  subscribedFetched: false,
  signInUser: (user) =>
    set(() => ({
      email: user.email ?? "",
      uid: user.uid ?? "",
      userFetched: true,
    })),
  signOutUser: () =>
    set(() => ({
      email: "",
      uid: "",
      isSubscribed: false,
      userFetched: true,
      subscribedFetched: false,
    })),
  setIsSubscribed: (boolean) =>
    set(() => ({ isSubscribed: boolean, subscribedFetched: true })),
}));
