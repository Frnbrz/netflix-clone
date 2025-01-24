import { BellRing, Search } from "lucide-react";
import Link from "next/link";

export default function NavbarDesktop() {
  return (
    <nav className="navbar__desktop">
      <div className="navbar__desktop__left">
        <Link href="/" className="logo">
          Logo
        </Link>
        <ul className="navbar__desktop__menu">
          <li className="navbar__desktop__item">
            <Link href='#' className="navbar__desktop__link">
              Home
            </Link>
          </li>
          <li className="navbar__desktop__item">
            <Link href='#' className="navbar__desktop__link">
              Movies
            </Link>
          </li>
          <li className="navbar__desktop__item">
            <Link href='#' className="navbar__desktop__link">
              Series
            </Link>
          </li>
          <li className="navbar__desktop__item">
            <Link href='#' className="navbar__desktop__link">
              Profile
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar__desktop__right">
        <div className="navbar__desktop__icons">
          <Search className="icon" />
          <BellRing className="icon" />
        </div>
        <div className="navbar__desktop__profile">
          <span>User</span>
        </div>
      </div>
    </nav>
  )
}
