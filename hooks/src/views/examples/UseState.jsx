import React, { useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseState = (props) => {
  const [count, setCount] = useState(0);
  // o useState retorna dois valores, um valor inicial e uma função para alterar esse valor
  const [name, setName] = useState('')

  return (
    <div className="UseState">
      <PageTitle title="Hook UseState" subtitle="Estado em componentes funcionais!" />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button className="btn" onClick={(e) => setCount(count - 1)}>-</button>
          <button className="btn" onClick={(e) => setCount(count + 1)}>+</button>
          <button className="btn" onClick={() => setCount(value => value + 100)}>+100</button>
          {/* Passando uma função dentro do setState é possível ter acesso ao valor do estado atual */}
        </div>
      </div>
      
      <SectionTitle title="Exercício #02" />
      <input type="text" className="input" value={name} onChange={e => setName(e.target.value)}/>
      <span className="text">{name}</span>
    </div>
  );
};

export default UseState;
