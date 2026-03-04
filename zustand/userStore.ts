import type { User } from "firebase/auth";
import { create } from "zustand";

interface UserStore {
  email: string;
  uid: string;
  signInUser: (user: User) => void;
  signOutUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  email: "",
  uid: "",
  signInUser: (user) => set(() => ({ email: user.email ?? "", uid: user.uid })),
  signOutUser: () => set(() => ({ email: "", uid: "" })),
}));
