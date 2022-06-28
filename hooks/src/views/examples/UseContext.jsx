import React, { useContext } from "react";
import PageTitle from "../../components/layout/PageTitle";

import dataContext from "../../data/dataContext";

const UseContext = (props) => {
    const context = useContext(dataContext)
    // Recebendo o objeto de contexto e atribuíndo a uma var
  return (
    <div className="UseContext">
      <PageTitle title="Hook UseContext" subtitle="Aceita um objeto de contexto e retorna o valor ATUAL do contexto!" />

        <div className="center">
            <span className="text">{context.nome}</span>
            <span className="text">{context.idade}</span>
            {/* Os atributos do contexto podem ser usados */}
        </div>
    </div>
  );
};

export default UseContext;
