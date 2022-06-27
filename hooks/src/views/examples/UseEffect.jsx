import React, { useState, useEffect } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const calcFatorial = (n) => {
  const num = Number(n);
  if (num < 0) return -1;
  if (num === 0) return 1;
  return calcFatorial(num - 1) * num;
  // Usando recursividade
};

const parOuImpar = (num) => {
   return num % 2 === 0 ? "Par" : "Ímpar"
};

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  const [status, setStatus] = useState("Ímpar");

  useEffect(() => {
    setFatorial(calcFatorial(number));
  }, [number]);
  // useEffect recebe dois parâmetros, o primeiro é uma callback que será executada quando um valor da lista de deps alterar
  // O segundo parâemtro é um array de deps que será monitorado

  useEffect(() => {
    if (fatorial > 1000000) {
      document.title = "Rapaz!";
    }
  }, [fatorial]);

  useEffect((num) => {
      setStatus(parOuImpar(number));
    }, [number]);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais! Gerando alterações em outros estados"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">
            {fatorial === -1 ? "Sem fatorial" : fatorial}
          </span>
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>

      <SectionTitle title="Exercício #02" />
      <div className="center">
        <div>
            <span className="text">Status: </span>
            <span className="text red">{status}</span>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
