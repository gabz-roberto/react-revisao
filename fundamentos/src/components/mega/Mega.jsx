import React, { useState } from "react";

import "./Mega.css";

const Mega = (props) => {
  function gerarNumeroUnico(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;

    return array.includes(aleatorio)
      ? gerarNumeroUnico(min, max, array)
      : aleatorio;
      // Irá verificar se o array inclue o número sorteado, caso inclua, irá chamar a função novamente para sortear outro
  }

  function gerarNumeros(qtde) {
    const numeros = Array(qtde)
      .fill(qtde)
      .fill(0)
      .reduce((total) => {
        const novoNumero = gerarNumeroUnico(1, 60, total);
        return [...total, novoNumero];
      }, [])
      .sort((n1, n2) => n1 - n2);
    // Exibindo os números em ordem crescente

    return numeros;
  }

  const [qtde, setQtde] = useState(props.qtde || 6);
  const numerosIniciais = gerarNumeros(qtde);
  const [numeros, setNumeros] = useState(numerosIniciais);

  return (
    <div className="mega">
      <h2>Mega</h2>
      <p>{numeros.join(" ")}</p>

      <div>
        <label>Quantidade de Números: </label>
        <input
          min="6"
          max="15"
          type="number"
          value={qtde}
          onChange={(event) => setQtde(Number(event.target.value))}
        />
      </div>

      <button onClick={(event) => setNumeros(gerarNumeros(qtde))}>
        Gerar Números
      </button>
    </div>
  );
};

export default Mega;
