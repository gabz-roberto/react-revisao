import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header className="header-full">
      <nav className="header-content">
        <Link to="/">
          <h1>NihonGo-Quiz</h1>
        </Link>
        <Link to="/about">Sobre</Link>
      </nav>
    </header>
  );
};

export default Header;
