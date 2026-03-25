import type { User } from "firebase/auth";
import { create } from "zustand";

interface UserStore {
  email: string;
  uid: string;
  isSubscribed: boolean;
  signInUser: (user: User) => void;
  signOutUser: () => void;
  setIsSubscribed: (boolean: boolean) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  email: "",
  uid: "",
  isSubscribed: false,
  signInUser: (user) => set(() => ({ email: user.email ?? "", uid: user.uid })),
  signOutUser: () => set(() => ({ email: "", uid: "" })),
  setIsSubscribed: (boolean) => set(() => ({ isSubscribed: boolean })),
}));
