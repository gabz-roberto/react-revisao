import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

const IndiretaPai = () => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  // Recebendo os dados do componente filho

  function fornecerInformacoes(nome, idade) {
    setNome(nome);
    setIdade(idade);
  }
  // Função para renderizar os dados dentros dos states

  return (
    <div>
      <div>Componente Pai</div>
      <div>
        <p>
          {nome} - {idade}
        </p>
      </div>
      <IndiretaFilho handleClick={fornecerInformacoes} />
    </div>
  );
};
// Para o componente pai obter dados do componente filho, é nessário pasar uma função via props
export default IndiretaPai;
