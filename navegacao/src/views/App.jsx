import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Menu from "../components/layout/Menu/Menu";
import Content from "../components/layout/Content/Content";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Menu />
        <Content />
      </Router>
      {/* O menu e o conteudo precisam estar dentro do BrowserRouter */}
    </div>
  );
};

export default App;
