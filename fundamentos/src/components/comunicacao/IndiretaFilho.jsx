import React from "react";

const IndiretaFilho = (props) => {
    const foo = props.handleClick
    // Recebendo a função como param

    const gerarIdade = () => {
        const idade = parseInt(Math.random() * (30 - 10) + 10)
        return idade
    }
    // A cada chamada, será gerada uma idade aleatória

  return (
    <div>
      <div>Componente Filho</div>
      <button onClick={(event) => { foo('Gabriel', gerarIdade) }}>Fornecer Informações</button>
      {/* O onclick irá monitorar o evento de quando for acionado irá chamar a função recebida e passar os params */}
    </div>
  );
};

export default IndiretaFilho;
