"use client";

import { Modal } from "@mui/material";
import type { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInAnonymously,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { UserIcon, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { auth, provider } from "@/firebase";
import { mapAuthCodeToMessage } from "@/firebaseErrors";
import { useModalStore } from "@/zustand/modalStore";

import "./modals.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const error = useModalStore((state) => state.error);
  const setError = useModalStore((state) => state.setError);
  const isOpen = useModalStore((state) => state.isLoginModalOpen);
  const toggleLoginModal = useModalStore((state) => state.toggleLoginModal);
  const togglePasswordModal = useModalStore(
    (state) => state.togglePasswordModal,
  );

  const router = useRouter();

  const signup: React.SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      login(e);
    } catch (err) {
      setError(mapAuthCodeToMessage((err as FirebaseError).code));
    }
  };

  const login: React.SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      if (user) {
        router.push("/dashboard");
      }
    } catch (err) {
      setError(mapAuthCodeToMessage((err as FirebaseError).code));
    }
  };

  const guestLogin = async () => {
    try {
      const { user } = await signInAnonymously(auth);

      if (user) {
        router.push("/dashboard");
      }
    } catch (err) {
      setError(mapAuthCodeToMessage((err as FirebaseError).code));
    }
  };

  const googleLogin = async () => {
    try {
      const { user } = await signInWithPopup(auth, provider);

      if (user) {
        router.push("/dashboard");
      }
    } catch (err) {
      setError(mapAuthCodeToMessage((err as FirebaseError).code));
    }
  };

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

        <span className="modal__error">{error}</span>

        <button
          type="button"
          className="modal__login-option"
          onClick={googleLogin}
        >
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

        <button
          type="button"
          className="modal__login-option"
          onClick={guestLogin}
        >
          <UserIcon fill="currentColor" className="modal__login-option__icon" />

          <span>Login as Guest</span>
        </button>

        <div className="modal__break">
          <div className="modal__break__line" />

          <span>or</span>

          <div className="modal__break__line" />
        </div>

        <form
          className="modal__form"
          onSubmit={(e) => {
            isLogin ? login(e) : signup(e);
          }}
        >
          <label htmlFor="email" className="modal__form__label">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            id="email"
            placeholder="your@email.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

          <button type="submit" className="modal__form__submit">
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>

        <span className="modal__txt">
          {isLogin ? "Don't have an account yet?" : "Already have an account?"}
          <button
            type="button"
            className="modal__txt__btn"
            onClick={() => {
              setIsLogin(!isLogin);
              setError("");
            }}
          >
            {isLogin ? "Sign Up" : "Log In"}
          </button>
        </span>
      </div>
    </Modal>
  );
};

export default Login;
