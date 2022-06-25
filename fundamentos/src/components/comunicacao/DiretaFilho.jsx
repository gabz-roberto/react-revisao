import React from "react";

const DiretaFilho = ({ texto, numero, bool }) => {
    // Os parâmetros do componente pai são recebidos através do objeto props, que pode ser desestruturado
  return (
    <div>
      <span>{texto} </span>
      <span><b>{numero}</b> </span>
      <span>{bool ? "Verdadeiro" : "Falso"}</span>
    </div>
  );
};

export default DiretaFilho;
