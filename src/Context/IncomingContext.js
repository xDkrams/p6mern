import { createContext, useReducer } from "react";

export const IncomingContext = createContext();

export const incomingReducer = (state, action) => {
  switch (action.type) {
    case "SET_INCOMING":
      return {
        incoming: action.payload,
      };
    case "SET_NEW_INCOMING":
      return {
        incoming: [action.payload, ...state.incoming],
      };
    case "DELETE_INCOMING":
      return {
        incoming: state.incoming.filter(
          (inc) => inc._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export const IncomingContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(incomingReducer, { incoming: null });

  return (
    <IncomingContext.Provider value={{ ...state, dispatch }}>
      {children}
    </IncomingContext.Provider>
  );
};
