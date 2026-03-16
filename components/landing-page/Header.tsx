"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useModalStore } from "@/zustand/modalStore";

const Header = () => {
  const toggleLoginModal = useModalStore((state) => state.toggleLoginModal);

  return (
    <header className="landing-header">
      <div className="row landing-header__row">
        <div className="landing-header__widget">
          <span className="landing-header__widget__title">Meet HollywoodAI</span>
          <span className="landing-header__widget__emoji"> ⏺ </span>
          <span className="landing-header__widget__description">
            Unleash the Power of AI
          </span>
        </div>
        <h1 className="landing-header__title">
          Ultimate AI <br />
          Summariser{" "}
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src="/assets/bolt.svg"
            alt="lightning bolt"
            className="landing-header__title__icon"
          />
        </h1>
        <p className="landing-header__paragraph">
          All-in-one platform to watch your favourite movies in minutes using
          AI.
        </p>
        <button
          type="button"
          className="landing-header__button"
          onClick={toggleLoginModal}
        >
          <div className="landing-header__button__iconWrapper">
            <Play fill="currentColor" className="landing-header__button__icon" />
          </div>
          <span className="landing-header__button__text">See how it works &nbsp;</span>
        </button>
      </div>
      <svg
        className="landing-header__svg"
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
