import { createContext, useReducer } from "react";

const Context = createContext();

const MenuDespegable = ({ children }) => {
  const initialState = {
    isActive: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "toggleMenu":
        return {
          ...state,
          isActive: !state.isActive,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, MenuDespegable };