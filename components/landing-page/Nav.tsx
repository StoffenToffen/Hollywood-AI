"use client";

import Image from "next/image";
import Link from "next/link";
import { useModalStore } from "@/zustand/modalStore";

const Nav = () => {
  const toggleLoginModal = useModalStore((state) => state.toggleLoginModal);

  return (
    <nav className="landing-nav">
      <Link href="#">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          src="/assets/logo-dark.png"
          alt="logo"
          className="landing-nav__logo"
        />
      </Link>
      <div className="landing-nav__links">
        <Link href="#summary" className="landing-nav__link">
          About
        </Link>
        <Link href="#features" className="landing-nav__link">
          Features
        </Link>
        <Link href="#steps" className="landing-nav__link">
          How it works
        </Link>
        <Link href="#testimonials" className="landing-nav__link">
          Testimonials
        </Link>
      </div>
      <button type="button" className="landing-nav__button" onClick={toggleLoginModal}>
        Sign In
      </button>
    </nav>
  );
};

export default Nav;
