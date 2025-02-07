"use client"
import { useState } from 'react';

import { Logo } from "../../Logo/Logo";
import { BellRing, Menu, Search, X } from 'lucide-react';
import { itemsNavbar } from '@/src/data/itemsNavbar';
import Link from 'next/link';

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar__mobile">
      <Logo />
      <Menu className="button icon" onClick={toggleSidebar} />
      {isOpen && (
        <div className="navbar__mobile__sidebar">
          <header className="navbar__mobile__close">
            <X className="button icon" onClick={toggleSidebar} />
          </header>
          <div className="navbar__mobile__left">
            <ul className="navbar__mobile__list">
              {itemsNavbar.map(item => (
                <li key={item.name} className="navbar__mobile__item">
                  < Link href={item.link} className="link" >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <footer className="navbar__mobile__footer">
            <Search className="button icon" aria-label="Search" />
            <BellRing className="button icon" aria-label="Notifications" />
            <span>User</span>
          </footer>
        </div >
      )
      }
    </nav >
  )
}
