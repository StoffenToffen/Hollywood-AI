"use client";

import { Modal } from "@mui/material";
import type { FirebaseError } from "firebase/app";
import { sendPasswordResetEmail } from "firebase/auth";
import { X } from "lucide-react";
import { useState } from "react";
import { auth } from "@/firebase";
import { mapAuthCodeToMessage } from "@/firebaseErrors";
import { useModalStore } from "@/zustand/modalStore";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const error = useModalStore((state) => state.error);
  const setError = useModalStore((state) => state.setError);
  const isOpen = useModalStore((state) => state.isPasswordModalOpen);
  const togglePasswordModal = useModalStore(
    (state) => state.togglePasswordModal,
  );

  const resetPassword = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      alert(`An email with instructions have been sent to ${email}`);
      togglePasswordModal();
    } catch (err) {
      setError(mapAuthCodeToMessage((err as FirebaseError).code));
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={togglePasswordModal}
      aria-label="forgot password dialog"
      className="modal"
    >
      <div className="modal__wrapper">
        <button
          type="button"
          aria-label="close dialog"
          onClick={togglePasswordModal}
        >
          <X className="modal__close" />
        </button>

        <h2 className="modal__title">Forgot Password</h2>

        <span className="modal__error">{error}</span>

        <form className="modal__form" onSubmit={resetPassword}>
          <label htmlFor="email" className="modal__form__label">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="modal__form__input"
          />

          <button type="submit" className="modal__form__submit">
            Send Instructions
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default ForgotPassword;
