import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import dataContext, { data } from "../data/dataContext";
// Importando o contexto e os dados a serem usados

import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";

import "./App.css";

const App = (props) => {
  const [state, setState] = useState(data);
  // Recebendo os dados do contexto e atribuindo a um estado

  return (
    <div className="App">
      <dataContext.Provider value={data}>
        <Router>
          <Menu />
          <Content />
        </Router>
      </dataContext.Provider>
    </div>
  );
};
// A aplicação é toda envolvida dentro do contexto
export default App;
