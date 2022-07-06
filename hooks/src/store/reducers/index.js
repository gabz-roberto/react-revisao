// state = estado atual | action = como proceder para alterar o estado
export const reducer = (state, action) => {
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
  