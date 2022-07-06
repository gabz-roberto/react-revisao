import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

const UseRef = (props) => {
  const [count, inc, dec] = useCounter();

  const URL = "http://files.cod3r.com.br/curso-react/estados.json";
  // O hook irá fazer uma requisição em cima da url

  const response = useFetch(URL);

  const showStates = (states) => {
    return states?.map((state, i) => (
      <li key={state.sigla + i}>
        {state.nome} - {state.sigla}
      </li>
    ));
  };

  return (
    <div className="UseCustom">
      <PageTitle
        title="Seu Hook"
        subtitle="Vamos aprender como criar o nosso próprio Hook!"
      />

      <SectionTitle title="Exercício #01"></SectionTitle>
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button className="btn" onClick={() => dec()}>
            -1
          </button>
          <button className="btn" onClick={() => inc()}>
            +1
          </button>
        </div>
      </div>

      <SectionTitle title="Exercício #02"></SectionTitle>
      <div className="center">
        <ul>
            {response.data ? showStates(response.data) : false}
        </ul>
      </div>
    </div>
  );
};

export default UseRef;
