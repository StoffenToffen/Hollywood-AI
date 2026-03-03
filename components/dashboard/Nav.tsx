"use client";

import {
  Bookmark,
  CircleQuestionMark,
  LayoutDashboard,
  LogIn,
  Search,
  Settings,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  const closeNav = () => {
    document.body.classList.remove("nav-open");
  };

  return (
    <>
      <nav className="side-nav">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          src="/assets/logo-dark.png"
          alt="logo"
          className="side-nav__logo"
        />

        <ul className="side-nav__links">
          <h4 className="side-nav__links__title">Links</h4>

          <li>
            <Link href="#" className="side-nav__link" onClick={closeNav}>
              <LayoutDashboard className="side-nav__link__icon" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="#" className="side-nav__link" onClick={closeNav}>
              <Bookmark className="side-nav__link__icon" />
              Favorites
            </Link>
          </li>
          <li>
            <Link href="#" className="side-nav__link" onClick={closeNav}>
              <Search className="side-nav__link__icon" />
              Search
            </Link>
          </li>
          <li>
            <Link href="#" className="side-nav__link" onClick={closeNav}>
              <TrendingUp className="side-nav__link__icon" />
              Trending
            </Link>
          </li>

          <h4 className="side-nav__links__title">Extras</h4>

          <li>
            <Link href="#" className="side-nav__link" onClick={closeNav}>
              <CircleQuestionMark className="side-nav__link__icon" />
              Help & Support
            </Link>
          </li>
          <li>
            <Link href="#" className="side-nav__link" onClick={closeNav}>
              <Settings className="side-nav__link__icon" />
              Settings
            </Link>
          </li>
          <li>
            <button type="button" className="side-nav__link" onClick={closeNav}>
              <LogIn className="side-nav__link__icon" />
              Log in
            </button>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        aria-label="close navigation menu"
        className="side-nav__overlay"
        onClick={closeNav}
      />
    </>
  );
};

export default Nav;
