import { create } from "zustand";

interface ModalStore {
  isLoginModalOpen: boolean;
  toggleLoginModal: () => void;
  isPasswordModalOpen: boolean;
  togglePasswordModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isLoginModalOpen: false,
  toggleLoginModal: () =>
    set((state) => ({ isLoginModalOpen: !state.isLoginModalOpen })),
  isPasswordModalOpen: false,
  togglePasswordModal: () =>
    set((state) => ({ isPasswordModalOpen: !state.isPasswordModalOpen })),
}));
