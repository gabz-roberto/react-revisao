import React, { useContext } from "react";
import PageTitle from "../../components/layout/PageTitle";

import dataContext from "../../data/dataContext";

const UseContext = (props) => {
  const context = useContext(dataContext);
  // Recebendo o objeto de contexto e atribuíndo a uma var, o contexto está vindo dentro de um state
  console.log(context);

  const addNumber = (delta) => {
    context.setState({
      ...context.state, // Clonando os atributos do objeto
      idade: context.state.idade + delta, // Alterando apenas o atribudo number
    });
  };
// Devido ao fato do contexto ser compartilhado em toda a aplicação, os dados na página não alteram

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor ATUAL do contexto!"
      />

      <div className="center">
        <span className="text">{context.state.nome}</span>
        <span className="text">{context.state.idade}</span>
        {/* Os atributos do contexto podem ser usados */}

        <div>
            <button className="btn" onClick={ () => addNumber(-1) }>-1</button>
            <button className="btn" onClick={ () => addNumber(+1) }>+1</button>
        </div>
      </div>
    </div>
  );
};

export default UseContext;
