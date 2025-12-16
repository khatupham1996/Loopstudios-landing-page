import { useState } from "react";
import logo from "../images/logo.svg";
import menuIcon from "../images/icon-hamburger.svg";
import closeIcon from "../images/icon-close.svg";
function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-16 lg:px-28 py-8 md:py-12 lg:py-16">
      <Logo />
      <Nav />
    </header>
  );
}
function Logo() {
  return (
    <div>
      <img src={logo} alt="loopstudios logo" className="h-6 md:h-8" />
    </div>
  );
}

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["About", "Careers", "Events", "Products", "Support"];

  return (
    <>
      <button
        className="block lg:hidden relative z-50"
        aria-label="Toggle menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={isOpen ? closeIcon : menuIcon}
          alt={isOpen ? "Close menu" : "Open menu"}
          className="w-6 h-6"
        />
      </button>
      <nav className="hidden lg:block">
        <ul className="flex gap-6 md:gap-8">
          {navItems.map((item) => (
            <li
              key={item}
              className="text-white text-sm md:text-base cursor-pointer hover:opacity-80 transition-opacity"
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black lg:hidden">
          <nav className="flex h-full items-center justify-center">
            <ul className="flex flex-col gap-8 text-center">
              {navItems.map((item) => (
                <li
                  key={item}
                  className="text-white text-2xl uppercase font-light cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default Header;
