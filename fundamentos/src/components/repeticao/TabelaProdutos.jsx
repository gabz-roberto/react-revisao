import React from "react";
import produtos from "../data/produtos.js";

import './TabelaProdutos.css'

const TabelaProdutos = () => {
  const tabelaProdutos = produtos.map((produto, index) => (
    <tr key={produto.id} className={index % 2 === 0 ? "par" : 'impar'}>
      <td>{produto.id}</td>
      <td>{produto.nome}</td>
      <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
    </tr>
  ));

  return (
    <div className="tabela">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
            {tabelaProdutos}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaProdutos;
