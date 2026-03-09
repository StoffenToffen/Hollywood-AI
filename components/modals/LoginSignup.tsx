"use client";

import { Modal } from "@mui/material";
import type { FirebaseError } from "firebase/app";
import type { UserCredential } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInAnonymously,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { doc, runTransaction } from "firebase/firestore";
import { UserIcon, X } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth, db, provider } from "@/firebase";
import { mapAuthCodeToMessage } from "@/firebaseErrors";
import { useModalStore } from "@/zustand/modalStore";
import { useUserStore } from "@/zustand/userStore";

import "./modals.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const router = useRouter();
  const pathname = usePathname();

  const isOpen = useModalStore((state) => state.isLoginModalOpen);
  const error = useModalStore((state) => state.error);
  const setError = useModalStore((state) => state.setError);
  const toggleLoginModal = useModalStore((state) => state.toggleLoginModal);
  const togglePasswordModal = useModalStore(
    (state) => state.togglePasswordModal,
  );
  const signInUser = useUserStore((state) => state.signInUser);

  const handleLogin = async (
    e: React.SubmitEvent | React.MouseEvent,
    method?: string,
  ) => {
    e.preventDefault();
    let userCredentials: UserCredential;
    try {
      switch (method) {
        case "guest":
          userCredentials = await signInAnonymously(auth);
          break;
        case "google":
          userCredentials = await signInWithPopup(auth, provider);
          break;
        case "newUser":
          userCredentials = await createUserWithEmailAndPassword(
            auth,
            email,
            password,
          );
          break;
        default:
          userCredentials = await signInWithEmailAndPassword(
            auth,
            email,
            password,
          );
      }
      if (userCredentials) {
        const newUser = {
          favourites: [],
          isSubscribed: false,
        };
        const userRef = doc(db, "users", userCredentials.user.uid);

        await runTransaction(db, async (transaction) => {
          const userSnapshot = await transaction.get(userRef);

          if (!userSnapshot.exists()) {
            transaction.set(userRef, newUser);
          }
        });

        signInUser(userCredentials.user);
        toggleLoginModal();

        if (pathname === "/") router.push("/dashboard");
      }
    } catch (err) {
      setError(mapAuthCodeToMessage((err as FirebaseError).code));
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return;

      signInUser(currentUser);
    });

    return unsubscribe;
  }, [signInUser]);

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
          onClick={(e) => handleLogin(e, "google")}
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
          onClick={(e) => handleLogin(e, "guest")}
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
            isLogin ? handleLogin(e) : handleLogin(e, "newUser");
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
