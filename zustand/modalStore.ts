import { create } from "zustand";

interface ModalStore {
  error: string;
  setError: (err: string) => void;
  isLoginModalOpen: boolean;
  toggleLoginModal: () => void;
  isPasswordModalOpen: boolean;
  togglePasswordModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  error: "",
  setError: (err: string) => set(() => ({ error: err })),
  isLoginModalOpen: false,
  toggleLoginModal: () =>
    set((state) => ({ isLoginModalOpen: !state.isLoginModalOpen })),
  isPasswordModalOpen: false,
  togglePasswordModal: () =>
    set((state) => ({
      isPasswordModalOpen: !state.isPasswordModalOpen,
      error: "",
    })),
}));
