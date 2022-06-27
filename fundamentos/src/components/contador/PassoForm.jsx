import React from "react";

const PassoForm = (props) => {
  return (
    <div>
      <input
        type="number"
        value={props.passo}
        onChange={e => props.setPasso(+e.target.value)}
        placeholder="Passo"
      />
    </div>
  );
};
// Será monitorado o evento de mudança, quando alterar, o valor da alteração será enviado para o valor do estado
export default PassoForm;
