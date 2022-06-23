import React from "react";
// O import do React é feito para 
import ReactDOM from "react-dom/client";
// ReactDOM é utilizado para manipular a DOM
import App from './App';
// Importando o elemento App

import './index.css';
// Importando CSS

const root = ReactDOM.createRoot(document.getElementById("root"));
// Selecionando a div do html e criando a raiz da aplicação
root.render(<App />);
// Renderizando o componente App na raiz da aplicação