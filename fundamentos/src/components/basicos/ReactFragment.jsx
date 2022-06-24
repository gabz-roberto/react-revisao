import React from "react";

const ReactFragment = () => {
  const fragment = "<React.Fragment>... conteúdo ...</React.Fragment>";
  const fragment2 = "<>...conteúdo...</>";
  return (
    <React.Fragment>
      <h3>ReactFragment</h3>
      <p>O conteúdo de um componente deve sempre estar dentro de um elemento</p>
      <p>
        Caso não queira usar um elemento, pode-se usar o conteúdo dentro do
        ReactFragment
      </p>
      <p>
        <b>{fragment}</b>
      </p>
      <p>
        ou entre <b>{fragment2}</b>
      </p>
    </React.Fragment>
  );
};

export default ReactFragment;
