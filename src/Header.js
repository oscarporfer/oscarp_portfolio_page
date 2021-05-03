import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
        <div className="header__links">
          <Link>Oscar Portes</Link>
          <Link>Projects</Link>
          <Link>Services</Link>
          <Link>About</Link>
          <Link>Resume</Link>
          <Link>Contact</Link>
        </div>
    </nav>
  );
};

export default Header;
