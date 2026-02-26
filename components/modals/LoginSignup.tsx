"use client";

import { Modal } from "@mui/material";
import { User, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useModalStore } from "@/zustand/modalStore";

import "./modals.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const isOpen = useModalStore((state) => state.isLoginModalOpen);
  const toggleLoginModal = useModalStore((state) => state.toggleLoginModal);
  const togglePasswordModal = useModalStore(
    (state) => state.togglePasswordModal,
  );

  return (
    <Modal
      open={isOpen}
      onClose={toggleLoginModal}
      aria-label="login dialog"
      className="modal"
    >
      <div className="modal__wrapper">
        <button
          type="button"
          aria-label="close dialog"
          className="modal__close"
          onClick={toggleLoginModal}
        >
          <X />
        </button>

        <h2 className="modal__title">{isLogin ? "Log In" : "Sign Up"}</h2>

        <button type="button" className="modal__login-option">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src="/assets/google-icon.svg"
            alt="google"
            className="modal__login-option__icon"
          />

          <span>Login with Google</span>
        </button>

        <button type="button" className="modal__login-option">
          <User fill="currentColor" className="modal__login-option__icon" />

          <span>Login as Guest</span>
        </button>

        <div className="modal__break">
          <div className="modal__break__line" />

          <span>or</span>

          <div className="modal__break__line" />
        </div>

        <form className="modal__form">
          <label htmlFor="email" className="modal__form__label">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            id="email"
            placeholder="your@email.com"
            className="modal__form__input"
          />

          <label htmlFor="password" className="modal__form__label">
            Password
          </label>

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Your password"
            className="modal__form__input"
          />

          {isLogin && (
            <button
              type="button"
              className="modal__form__btn"
              onClick={() => {
                toggleLoginModal();
                togglePasswordModal();
              }}
            >
              Forgot Password?
            </button>
          )}

          <button type="button" className="modal__form__submit">
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>

        <span className="modal__txt">
          {isLogin ? "Don't have an account yet?" : "Already have an account?"}
          <button
            type="button"
            className="modal__txt__btn"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Log In"}
          </button>
        </span>
      </div>
    </Modal>
  );
};

export default Login;
