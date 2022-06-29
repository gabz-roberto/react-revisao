import React, { useContext, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

import dataContext from "../../data/dataContext";
import { AppContext } from "../../data/Store";
// Importando o contexto

const UseContext = (props) => {
  //EX01

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

  // EX02
  const { nome, idade, setIdade, setNome } = useContext(AppContext);

  useEffect(() => {
    if(idade < 18) setNome('Gabrielzinho')
  }, [idade])

  return (
    <div className="UseContext">
      <PageTitle title="Hook UseContext" subtitle="Aceita um objeto de contexto e retorna o valor ATUAL do contexto!"/>

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{context.state.nome}</span>
        <span className="text">{context.state.idade}</span>
        {/* Os atributos do contexto podem ser usados */}

        <div>
          <button className="btn" onClick={() => addNumber(-1)}>-1</button>
          <button className="btn" onClick={() => addNumber(+1)}>+1</button>
        </div>
      </div>

      <SectionTitle title="Exercício #02" />
      <div className="center">
        <span className="text">{nome}</span>
        <span className="text">{idade}</span>
        <div>
          <button className="btn" onClick={() => setIdade(idade - 1)}>-</button>
          <button className="btn" onClick={() => setIdade(idade + 1)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default UseContext;
