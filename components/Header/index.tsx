import React, { useState, useEffect } from "react";
import { Navlinks } from "../../data";
import Button from "../Button";
import headerStyles from "./Header.module.scss";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(
        `.${headerStyles.header}`
      ) as HTMLElement;
      if (window.scrollY >= 100) {
        if (header) {
          header.style.borderBottom = "1px solid #dadadb";
        }
      } else {
        if (header) {
          header.style.borderBottom = "none";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className={headerStyles.header}>
      <div className={headerStyles.logo}>
        <img
          src="/icons/brinte-icon.svg"
          alt="logo"
          width={22.06}
          height={18.88}
        />
        <img
          src="/icons/brinte-logo.svg"
          alt="logo"
          width={61.29}
          height={16.56}
        />
        <div className={headerStyles.status}>BETA</div>
      </div>
      <div className={headerStyles.navigationLinks}>
        {Navlinks.map((link) => (
          <a href={link.to} key={link.name} className={headerStyles.link}>
            {link.name}
          </a>
        ))}
      </div>
      <div className={headerStyles.headerCTA}>
        <Button variant="tertiary">Login</Button>
        <Button variant="secondary">Join waitlist</Button>
      </div>
      <div
        className={`${headerStyles.hamburger} ${
          isMenuOpen ? headerStyles.open : ""
        }`}
        onClick={handleMenuToggle}
      >
        <div className={headerStyles.bar}></div>
        <div className={headerStyles.bar}></div>
        <div className={headerStyles.bar}></div>
      </div>
      <div
        className={`${headerStyles.mobileMenu} ${
          isMenuOpen ? headerStyles.open : ""
        }`}
      >
        <div className={headerStyles.navigationLinksMobile}>
          {Navlinks.map((link) => (
            <a href={link.to} key={link.name} className={headerStyles.link}>
              {link.name}
            </a>
          ))}
        </div>
        <div className={headerStyles.headerCTAMobile}>
          <Button variant="tertiary">Login</Button>
          <Button variant="secondary">Join waitlist</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
