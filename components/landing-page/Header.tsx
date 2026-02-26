"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useModalStore } from "@/zustand/modalStore";

const Header = () => {
  const toggleLoginModal = useModalStore((state) => state.toggleLoginModal);

  return (
    <header>
      <div className="row header__row">
        <div className="header__widget">
          <span className="header__widget__title">Meet HollywoodAI</span>
          <span className="header__widget__emoji"> ⏺ </span>
          <span className="header__widget__description">
            Unleash the Power of AI
          </span>
        </div>
        <h1 className="header__title">
          Ultimate AI <br />
          Summariser{" "}
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src="/assets/bolt.svg"
            alt="lightning bolt"
            className="header__title__icon"
          />
        </h1>
        <p className="header__paragraph">
          All-in-one platform to watch your favourite movies in minutes using
          AI.
        </p>
        <button
          type="button"
          className="header__button"
          onClick={toggleLoginModal}
        >
          <div className="header__button__iconWrapper">
            <Play fill="currentColor" className="header__button__icon" />
          </div>
          <span className="header__button__text">See how it works &nbsp;</span>
        </button>
      </div>
      <svg
        className="header__svg"
        width="1440"
        height="105"
        viewBox="0 0 1440 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <title>background</title>
        <path d="M0 0C240 68.7147 480 103.072 720 103.072C960 103.072 1200 68.7147 1440 0V104.113H0V0Z"></path>
      </svg>
    </header>
  );
};

export default Header;
