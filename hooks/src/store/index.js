import { reducer } from "./reducers";

const initialState = {
  user: null,
  cart: [],
  products: [],
  other: "...",
  // foco...
  number: 0,
};
// criando um estado inicial como um objeto

export { initialState, reducer };
