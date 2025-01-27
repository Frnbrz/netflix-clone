"use client"

import { BellRing, Search } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/Shared/Logo/Logo";
import { itemsNavbar } from "@/data/itemsNavbar";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export default function NavbarDesktop() {
  const scrollPosition = useScrollPosition()

  console.log(scrollPosition)
  return (
    <nav className={(scrollPosition ? 'navbar__desktop--bottom' : 'navbar__desktop--top') + " navbar__desktop"}>
      <div className="navbar__desktop__left">
        <Logo />
        <ul className="navbar__desktop__menu">
          {itemsNavbar.map(item => (
            <li key={item.name} className="navbar__desktop__item">
              <Link href={item.link} className="link">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar__desktop__right">
        <div className="navbar__desktop__icons">
          <Search className="icon" aria-label="Search" />
          <BellRing className="icon" aria-label="Notifications" />
        </div>
        <div className="navbar__desktop__profile">
          <span>User</span>
        </div>
      </div>
    </nav>
  )
}
