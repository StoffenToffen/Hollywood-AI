import Image from "next/image";
import Link from "next/link";

const Nav = () => {
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
        <Link href="#" className="nav__link">
          About
        </Link>
        <Link href="#" className="nav__link">
          Features
        </Link>
        <Link href="#" className="nav__link">
          How it works
        </Link>
        <Link href="#" className="nav__link">
          Privacy policy
        </Link>
      </div>
      <button type="button" className="nav__button">
        Sign In
      </button>
    </nav>
  );
};

export default Nav;
