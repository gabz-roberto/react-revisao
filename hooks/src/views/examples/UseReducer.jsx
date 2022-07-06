import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";

import { initialState, reducer } from '../../store';
// importando do index.js

import { numberAdd2, login } from '../../store/actions'

const UseReducer = (props) => {
  // useReducer(funcaoQueIraAlterarOEstado, estadoInicial)
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle title="Hook UseReducer" subtitle="Uma outra forma de ter estado em componentes funcionais!"/>

      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem Usuário</span>
        )}
        {/* Se o atributo user.name estiver setado irá retornar um span com o valor */}
        <span className="text">{state.number}</span>
        <div>
          <button className="btn" onClick={() => login(dispatch, 'Gabriel' )}>Logar</button>
          {/* Como segundo param do dispatch é enviado um atributo que será recebido no action */}
          <button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button>
          {/* No momento que o botão for acionado, irá chamar uma ação do tipo informado */}
          <button className="btn" onClick={() => dispatch({ type: "numberX7" })}>x7</button>

          <button className="btn" onClick={() => dispatch({ type: "divideBy25" })}>/25</button>

          <button className="btn" onClick={() => dispatch({ type: "toInt" })}>Inteiro</button>

          <button className="btn" onClick={() => dispatch({ type: "numberAddN", payload: 10 })}>Adicionar</button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
