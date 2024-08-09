import React, { useEffect } from "react";
import { Navlinks } from "../../data";
import Button from "../Button";
import headerStyles from "./Header.module.scss";

const Header: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        const header = document.querySelector(
          `.${headerStyles.header}`
        ) as HTMLElement;
        if (header) {
          header.style.borderBottom = "1px solid #dadadb";
        }
      } else {
        const header = document.querySelector(
          `.${headerStyles.header}`
        ) as HTMLElement;
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
            {link.name}{" "}
          </a>
        ))}
      </div>
      <div className={headerStyles.headerCTA}>
        <Button variant="tertiary">Login </Button>
        <Button variant="secondary">Join waitlist</Button>
      </div>
    </div>
  );
};

export default Header;
