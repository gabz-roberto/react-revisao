import React from "react";

const ParOuImpar = ({ numero }) => {
  const isPar = numero % 2 === 0;

  return (
    <div>
        <h3>Número: {numero}</h3>
        {
            isPar ? <h3>Par</h3> : <h3>Ímpar</h3>
            // Irá renderizar de acordo com o número passado como param
        }
    </div>
  );
};

export default ParOuImpar;
