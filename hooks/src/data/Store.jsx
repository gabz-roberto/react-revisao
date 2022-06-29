import React, { useState } from "react";

const initialState = {
  nome: "Gabriel",
  idade: 25,
};
// Criação dos dados para o contexto

export const AppContext = React.createContext(initialState);
// Criando um contexto e passando o conteúdo dos dados

const Store = (props) => {
  const [state, setState] = useState(initialState);

  const updateState = (key, newValue) => {
    setState({
      ...state,
      [key]: newValue,
    });
  };
  // Clonando os atributos do contexto
  // Recebendo uma função que irá alterar apenas o dado específico através da chave e do valor passado
  // Passando funções específicas para alterar apenas o dado, a partir da chave e do valor

  return (
    <AppContext.Provider
      value={{
        nome: state.nome,
        idade: state.idade,
        setNome: (n) => updateState("nome", n),
        setIdade: (i) => updateState("idade", i),
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
// AppContext.Provider irá disponibilizar o contexto para toda a aplicação
// A prop value é usada para passar os valores que será usados no contexto

export default Store;
