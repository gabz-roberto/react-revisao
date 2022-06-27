import React from "react";
import { useParams } from "react-router-dom";

const Param = () => {
  const { id } = useParams();
  // Recebendo o valor dos params de acordo com o nome indicado na URL

  return (
    <div>
      <h1>Parâmetros</h1>
      <p>Valor: {id}</p>
    </div>
  );
};

export default Param;
