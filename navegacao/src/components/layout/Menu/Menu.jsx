import React from "react";
import { Link } from "react-router-dom";

import "./Menu.css";

const Menu = () => {
  return (
    <aside className="menu">
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/param/123">Parâmetros #01</Link>
          </li>
          <li>
            <Link to="/param/helloworld">Parâmetros #02</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
// O Link substitui o 'a' indicando o url a ser acessado

export default Menu;
