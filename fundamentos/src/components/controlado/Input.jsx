import React from "react";
import { useState } from "react";

import "./Input.css";

const Input = () => {
  const [valor, setValor] = useState("");

  const handleInput = (event) => setValor(event.target.value);

  return (
    <div className="input">
      <input type="text" value={valor} onChange={handleInput} placeholder="Componente Controlado"/>
      {/* Para alterar um valor controlado é necessário passar uma função que recebe o evento e altera o valor do estado */}
      <input type="text" value={valor} readOnly placeholder="Componente Não Controlado"/>
      {/* Para componentes somente leitura é indicado utilizar o parâmetro readOnly */}
      <input type="text" value={undefined} />
      {/* Outra opção para componente não controlado é utilizar undefined como valor */}
      <h4>{valor}</h4>
    </div>
  );
};

export default Input;
