import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header className="header-full">
      <Link to="/">
        <h2 className="header-title"><span className="title-red">N</span>ihonGo-<span className="title-red">Q</span>uiz</h2>
      </Link>
      <nav className="header-menu">
        <Link to="/hiragana">Hiragana</Link>
        <Link to="/katakana">Katakana</Link>
      </nav>
    </header>
  );
};

export default Header;
