import React from "react";

import alunos from "../data/alunos.js";

const ListaAlunos = () => {
  const list = alunos.map((aluno) => (
    <li key={aluno.id}>
      {aluno.id} - {aluno.nome} : {aluno.nota}
    </li>
  ));
  // Criando uma lista a partir do array recebido

  return (
    <div>
      <ul>{list}</ul>
    </div>
  );
};

export default ListaAlunos;
