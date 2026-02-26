"use client";

import Image from "next/image";
import Link from "next/link";
import { useModalStore } from "@/zustand/modalStore";

const Nav = () => {
  const toggleLoginModal = useModalStore((state) => state.toggleLoginModal);

  return (
    <nav>
      <Link href="#">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          src="/assets/logo-dark.png"
          alt="logo"
          className="nav__logo"
        />
      </Link>
      <div className="nav__links">
        <Link href="#summary" className="nav__link">
          About
        </Link>
        <Link href="#features" className="nav__link">
          Features
        </Link>
        <Link href="#steps" className="nav__link">
          How it works
        </Link>
        <Link href="#testimonials" className="nav__link">
          Testimonials
        </Link>
      </div>
      <button type="button" className="nav__button" onClick={toggleLoginModal}>
        Sign In
      </button>
    </nav>
  );
};

export default Nav;
