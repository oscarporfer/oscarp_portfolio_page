import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
        <div className="header__links">
          <Link>Home</Link>
          <Link>About Me</Link>
          <Link>Projects</Link>
          <Link>Resume</Link>
        </div>
    </nav>
  );
};

export default Header;
