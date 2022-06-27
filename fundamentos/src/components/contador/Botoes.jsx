import React from "react";

const Botoes = ({ setDec, setInc }) => {
  return (
    <div>
      <button onClick={setDec}>-</button>
      <button onClick={setInc}>+</button>
    </div>
  );
};

export default Botoes;
