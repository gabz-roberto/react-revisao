import React from "react";

export const data = {
  nome: "Gabriel Roberto",
  idade: 25,
};

const dataContext = React.createContext(data);
// Criando um contexto e atribuido os dados para ele

export default dataContext;
