import React from "react";

const ComParametro = (props) => {
  console.log(props);
  // Props recebe os parãmetros do componente pai através de um objeto

  const sobrenome = props.sobrenome;
  const maiorIdade = props.idade >= 18 ? "Maior de Idade" : 'Menor de Idade';
  return (
    <div>
      <h3>Componente Com Parâmetro</h3>
      <p>
        Autor: <strong>{props.nome} {sobrenome}</strong>
        {/* Acessando um parametro recebido */}
      </p>
      <p>
        {maiorIdade}
        {/* É possível passar lógica Js */}
      </p>
    </div>
  );
};

export default ComParametro;
