import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";

const initialState = {
  user: null,
  cart: [],
  products: [],
  other: "...",
  // foco...
  number: 0,
};
// criando um estado inicial como um objeto

// state = estado atual | action = como proceder para alterar o estado
const reducer = (state, action) => {
  // Irá dispatchutar ações de acordo com o tipo
  switch (action.type) {
    case "numberAdd2":
      return { ...state, number: state.number + 2 };
      // A função irá apenas alterar o atributo number
    case "login":
      return { ...state, user: { name: action.payload } };
      // Altera apenas o atributo user
      // Recebendo um dado como parâmetro através do action
    case "numberX7":
      return { ...state, number: state.number * 7 };
    case "divideBy25":
      return { ...state, number: state.number / 25 };
    case "toInt":
      return { ...state, number: parseInt(state.number) };
    case "numberAddN":
      return { ...state, number: state.number + action.payload };
      // Adicionando um número através do payload
    default:
      return state;
  }
};

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
          <button className="btn" onClick={() => dispatch({ type: "login", payload: 'Gabriel Roberto' })}>Logar</button>
          {/* Como segundo param do dispatch é enviado um atributo que será recebido no action */}
          <button className="btn" onClick={() => dispatch({ type: "numberAdd2" })}>+2</button>
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
