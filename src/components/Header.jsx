import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImg from "../assets/logo.png"
import {
  Briefcase,
  ContactRound,
  Ellipsis,
  EllipsisVertical,
  Folder,
  House,
  Wrench,
} from "lucide-react";

const navItems = [
  { path: "/", icon: House, label: "Home" },
  { path: "/projects", icon: Folder, label: "Projects" },
  { path: "/experience", icon: Briefcase, label: "Experience" },
  { path: "/languages", icon: Wrench, label: "Languages" },
  { path: "/contactme", icon: ContactRound, label: "Contact Me" },
];

// Reusable Nav Item
const NavItem = ({ path, Icon, label, onClick }) => (
  <NavLink
    to={path}
    onClick={onClick}
    className={({ isActive }) =>
      `relative transition-colors duration-200 ${
        isActive ? "text-[#07e1c1]" : "text-white hover:text-[#07e1c1]"
      }`
    }
    aria-label={label}
  >
    <Icon size={20} />
  </NavLink>
);

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-10 flex w-full items-center lg:top-5 lg:left-30 lg:w-fit">
      {/* Logo */}
      <Link to={"/"} className="flex w-full items-center bg-[#151312] px-3 py-2 text-2xl font-bold lg:px-0 lg:py-0">
        <img src={logoImg} className="w-[21px] mb-[1.7px]" alt="logo" />
        umit<span className="text-[#818181]"></span>
      </Link>

      {/* Desktop Nav */}
      <nav
        className="hidden items-center gap-12 ml-100 rounded-2xl bg-[#1C1A19] px-8 py-4 lg:flex"
        aria-label="Main navigation"
      >
        {navItems.map(({ path, icon: Icon, label }) => (
          <NavItem key={path} path={path} Icon={Icon} label={label} />
        ))}
      </nav>

      {/* Mobile Nav */}
      {open && (
        <nav
          className="lg:hidden flex items-center gap-4 bg-[#151312] py-[14px] px-4"
          aria-label="Mobile navigation"
        >
          {navItems.map(({ path, icon: Icon, label }) => (
            <NavItem
              key={path}
              path={path}
              Icon={Icon}
              label={label}
              onClick={() => setOpen(false)}
            />
          ))}
        </nav>
      )}

      {/* Mobile Toggle */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="lg:hidden bg-[#151312] px-3 py-[14px] mr-3 focus:outline-none"
        aria-label="Toggle navigation menu"
      >
        {open ? <Ellipsis size={20} /> : <EllipsisVertical size={20} />}
      </button>
    </header>
  );
}

export default Header;
