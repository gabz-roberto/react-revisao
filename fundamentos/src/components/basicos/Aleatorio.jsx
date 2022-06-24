import React from "react";

const Aleatorio = ({ min, max }) => {
  // Utilizando o destructuring para receber os valores de props diretamente

  const getRandom = (min, max) => {
    const num = parseInt(Math.random() * (max - min) + min);
    return num;
  };
  // Gerando um valor aleatório entre os dois valores informados

  return (
    <div>
      <h3>Gerando um valor aleatório</h3>
      <p><strong>Valor mínimo:</strong> {min}</p>
      <p><strong>Valor máximo:</strong> {max}</p>
      <p><strong>Valor gerado:</strong> {getRandom(min, max)}</p>
    </div>
  );
};

export default Aleatorio;
