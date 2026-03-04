import { create } from "zustand";

interface ModalStore {
  error: string;
  isLoginModalOpen: boolean;
  isPasswordModalOpen: boolean;
  setError: (err: string) => void;
  toggleLoginModal: () => void;
  togglePasswordModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  error: "",
  isLoginModalOpen: false,
  isPasswordModalOpen: false,
  setError: (err) => set(() => ({ error: err })),
  toggleLoginModal: () =>
    set((state) => ({ isLoginModalOpen: !state.isLoginModalOpen, error: "" })),
  togglePasswordModal: () =>
    set((state) => ({
      isPasswordModalOpen: !state.isPasswordModalOpen,
      error: "",
    })),
}));
