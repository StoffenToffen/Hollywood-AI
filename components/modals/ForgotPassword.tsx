"use client";

import { Modal } from "@mui/material";
import { X } from "lucide-react";
import { useModalStore } from "@/zustand/modalStore";

const ForgotPassword = () => {
  const isOpen = useModalStore((state) => state.isPasswordModalOpen);
  const togglePasswordModal = useModalStore(
    (state) => state.togglePasswordModal,
  );

  return (
    <Modal
      open={isOpen}
      onClose={togglePasswordModal}
      aria-labelledby="modal-Login"
      className="modal"
    >
      <div className="modal__wrapper">
        <button type="button">
          <X className="modal__close" onClick={togglePasswordModal} />
        </button>

        <h2 className="modal__title">Forgot Password</h2>

        <form className="modal__form">
          <label htmlFor="email" className="modal__form__label">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            className="modal__form__input"
          />

          <button type="button" className="modal__form__submit">
            Send Instructions
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default ForgotPassword;
